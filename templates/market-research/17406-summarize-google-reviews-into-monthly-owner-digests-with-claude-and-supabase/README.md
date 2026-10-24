# 📊 Summarize Google Reviews into monthly owner digests with Claude and Supabase

> ⚡ **44 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
Pulls Google Business Profile reviews, classifies each one with Claude, stores them in Supabase, and emails the owner a monthly plain-English digest via Outlook. Every count, disagreement and trend is computed in code, never by the model, so the report cannot invent findings.

## How it works
1. Runs manually (test set, live reviews, or location lookup) or on a monthly schedule to start a reporting cycle.
2. Fetches Google Business Profile reviews for the configured location (or loads built-in test reviews) and normalizes them into a consistent structure.
3. Reads previously stored classifications from Supabase and keeps only reviews that have not been classified before.
4. Sends each new review to Anthropic Claude for theme and sentiment classification, validates the JSON and quotes against the original text, and upserts the classifications into Supabase.
5. Combines stored and newly classified reviews, then computes theme counts, severity, “real split” disagreements, staleness, and a 24‑month rating trend entirely in code.
6. Pulls the last saved report from Supabase to determine whether this run is a full, delta, or quiet report and builds a digest prompt (or generates a quiet-month digest without AI).
7. Produces a final digest, renders it into branded HTML, sends it via Microsoft Outlook, and saves the report snapshot back to Supabase for next month’s comparison.

## Setup
1. Create the Supabase tables (review_classifications and review_reports) and add a Supabase API credential, then replace YOUR_PROJECT_REF in the Supabase REST URLs.
2. Add Google Business Profile OAuth2 credentials and set YOUR_GBP_ACCOUNT_ID and YOUR_GBP_LOCATION_ID in the Google Business Profile requests.
3. Add an Anthropic credential for the Claude model used to classify reviews and write the digest.
4. Add Microsoft Outlook credentials and update the To/CC/BCC recipients used for the digest email.
5. Update the business_name and location_id in the run configuration to match the location you want to report on, then enable the Monthly Run trigger when you are ready.

## Additional info
Why the AI never counts

Most AI review summarizers hand the whole pile of reviews to a language model and ask it to summarize. That is how you get invented findings, softened complaints, and quotes no customer ever wrote. This template works the other way around. The model classifies one review at a time and writes the final prose, but every count, every disagreement and every trend is calculated in code from stored rows. The model turns finished facts into sentences. It is never the source of a fact.

Three decisions worth knowing before you adapt it:

Each review is classified once and stored. Language models are not reproducible even at temperature 0, so re-asking gives you slightly different counts each run. Classify once, save, then count rows forever after. Re-runs are deterministic and cost almost nothing.

Every quote is checked against the source in code. A model will reorder the clauses of a real review and hand it back as a verbatim quote. Quotes that do not match the original text are dropped; the theme and sentiment they carried are kept.

A disagreement needs proportional balance, not just counts. Thirty-two positive mentions against four negative is a consensus with outliers, not a split. Publishing that under "where customers disagree" misleads the owner.

Full guide, including why most months should stay silent:
https://docs.google.com/document/d/1o3DhkJV9yXyKwop6O7GZJyn6u7b4nvY1cjuDokPJo_4/edit

Questions or help getting it running: support@priscgroup.com

Built by PRISC Group. Automate. Relentlessly. Ruthlessly.

## 🔗 Nodes Used

HTTP Request, Microsoft Outlook, Schedule Trigger, Google Business Profile, Anthropic

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
