# Idea: Fieldnote

Fieldnote is a voice-first note-taking app for people who work with their hands and can't stop to type — electricians, HVAC techs, contractors, home inspectors. You talk through what you're seeing on a job (a diagnosis, a part number, a measurement, a photo with a spoken caption), and Fieldnote turns it into a structured, searchable job log automatically — organized by client, by site, by date — without you touching a keyboard on-site.

**The problem:** Field techs currently either write nothing down and rely on memory, or they stop what they're doing to type notes into a generic notes app or a clunky field-service CRM that wasn't built for hands-full, gloves-on work. Both cost time and cause billing disputes later when there's no record of what was actually found or done.

**Target user:** Independent tradespeople and small trade businesses (2-15 techs) — not enterprise field-service software buyers. We're deliberately not going after the HVAC franchise chains first; they already have (bad) software and long sales cycles. We're going after the solo operator and small crew who currently uses nothing.

**Business model:** $19/month per technician, no free tier beyond a 14-day trial. We considered freemium but decided against it — this user doesn't churn on price sensitivity, they churn on the product not fitting into a truck cab and a work glove. Free tiers would mostly attract people who never really adopt it daily.

**Team:** Two co-founders. One spent six years as a licensed electrician before moving into software, which is where the idea came from directly, not from market research. The other is the engineer, previously built voice/audio pipelines at a mid-size startup. No funding yet — bootstrapped off savings and a small consulting contract that pays the bills.

**Where we actually are:** Not a live product yet. We have a working prototype that does voice-to-structured-note reasonably well for electrical and HVAC terminology specifically (we fine-tuned recognition on trade vocabulary, since generic transcription tools mangle terms like "megger" or "plenum"). We ran it with 12 techs from the founder's old trade network for three weeks. Eight kept using it daily past week one; four stopped, mostly because they wanted photo-attachment to work better than it currently does. That's a real signal, not proof — 12 people is not a market.

**What we're honestly unsure about:** Whether this stays a standalone app or needs to eventually integrate with the invoicing/CRM tools these techs already use (Jobber, Housecall Pro) rather than compete with them. We lean toward integrating, not replacing, but haven't built that yet.

**Data handled:** Audio recordings during job visits (which may capture client conversations, not just the tech narrating), site photos, client names and addresses, and job/billing notes. No payment processing in the product yet — that stays in the tools they already use.

**Competitive landscape:** Jobber and Housecall Pro dominate field-service management but require manual typed entry. Otter.ai and generic voice-to-text tools transcribe but don't structure trade-specific data into a job log. Nobody we've found combines trade-specific voice recognition with automatic structuring into a searchable job history. That's a real gap, not a guarantee it's a big enough wedge to build a company on — we're still testing that.