// Vercel serverless function: proxies board requests to OpenAI.
// Set OPENAI_API_KEY in the Vercel project env (never committed).

export const config = { runtime: 'edge' };

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'content-type': 'application/json' },
    });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: 'OPENAI_API_KEY is not set in the Vercel environment.' }),
      { status: 500, headers: { 'content-type': 'application/json' } }
    );
  }

  let body: { messages?: { role: string; content: string }[]; max_tokens?: number };
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), {
      status: 400,
      headers: { 'content-type': 'application/json' },
    });
  }

  const messages = body.messages ?? [];
  const maxTokens = body.max_tokens ?? 800;

  const upstream = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
      messages,
      max_tokens: maxTokens,
    }),
  });

  if (!upstream.ok) {
    const errText = await upstream.text();
    return new Response(
      JSON.stringify({ error: `OpenAI error (${upstream.status}): ${errText}` }),
      { status: 502, headers: { 'content-type': 'application/json' } }
    );
  }

  const data = await upstream.json();
  const text = data?.choices?.[0]?.message?.content ?? '';

  // Match the shape the frontend already expects: { content: [{ text }] }
  return new Response(JSON.stringify({ content: [{ text }] }), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  });
}
