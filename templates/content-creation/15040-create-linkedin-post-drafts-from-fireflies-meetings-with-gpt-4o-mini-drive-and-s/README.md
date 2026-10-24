# 🎬 Create LinkedIn post drafts from Fireflies meetings with GPT-4o-mini, Drive and Slack

> ⚡ **146 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### Description

Connect Fireflies to this workflow once and every meeting you record becomes a LinkedIn post draft automatically. The moment Fireflies finishes transcribing a call, it fires a signal to the workflow — which fetches the full transcript, extracts real insights, and uses GPT-4o-mini to write a 180–280 word scroll-stopping post with a hook, key learnings, and hashtags. The finished draft is saved to Google Drive and previewed in Slack so you can review and publish when ready. Built for founders, consultants, and sales leaders who want a consistent LinkedIn presence without spending time writing from scratch after every call.

---

## What This Workflow Does

- **Triggers automatically when a call ends** — Fireflies sends a signal the moment transcription completes, so no manual input is ever needed
- **Validates every incoming signal** — Checks that the signal contains a valid meeting ID and silently discards invalid or test pings
- **Extracts real meeting insights** — Pulls speaker dialogue, Fireflies-detected pricing and question sentences, keywords, overview, and sentiment from the full transcript
- **Writes a structured LinkedIn post** — GPT-4o-mini produces a hook, a specific insight paragraph, 3–5 emoji learnings, a closing question, and hashtags — all grounded in your actual meeting content
- **Saves a complete Google Doc** — Stores the post alongside meeting reference details, participants, keywords, action items, and a link back to the Fireflies transcript
- **Previews the post in Slack** — Posts the first 350 characters of the draft to your Slack channel so your team can review before the post goes live
- **Exits cleanly for incomplete transcripts** — If Fireflies hasn't finished processing yet, the workflow stops silently without errors

---

## Setup Requirements

### Tools Needed
- n8n instance (self-hosted or cloud)
- Fireflies.ai account with webhook access
- OpenAI account with GPT-4o-mini API access
- Google Drive (one folder where posts will be saved)
- Slack workspace with OAuth2 app configured

### Credentials Required
- Fireflies API key (pasted directly into **5. Set — Config Values**)
- OpenAI API key
- Google Drive OAuth2
- Slack OAuth2

**Estimated Setup Time: 15–20 minutes**

---

## Step-by-Step Setup

1. **Import the workflow** — Open n8n → Workflows → Import from JSON → paste the workflow JSON → click Import

2. **Activate the workflow and copy the webhook URL** — Toggle the workflow to Active → click on node **1. Webhook — Fireflies Transcript Done** → copy the webhook URL shown

3. **Register the webhook in Fireflies** — Log in to fireflies.ai → go to Settings → Developer Settings → Webhooks → paste the webhook URL → save

4. **Get your Fireflies API key** — In Fireflies, go to Settings → Integrations → copy your API key

5. **Fill in Config Values** — Open node **5. Set — Config Values** → replace all placeholders:

| Field | What to enter |
|---|---|
| `YOUR_FIREFLIES_API_KEY` | Your Fireflies API key from step 4 |
| `YOUR_GOOGLE_DRIVE_FOLDER_ID` | The folder ID from your Google Drive URL (the string after `/folders/` in the URL when you open the folder) |
| `#content-team` | Your Slack channel name including the `#` |
| `YOUR FULL NAME` | The author's full name (used in the post sign-off) |
| `YOUR JOB TITLE` | The author's job title (e.g. CEO, SEO Consultant) |
| `YOUR COMPANY NAME` | Your company name (used in the AI prompt) |

6. **Connect OpenAI** — Open node **11. OpenAI — GPT-4o-mini Model** → click the credential dropdown → add your OpenAI API key → test the connection

7. **Connect Google Drive** — Open node **13. Google Drive — Save LinkedIn Post** → click the credential dropdown → add Google Drive OAuth2 → sign in with your Google account → authorize access

8. **Connect Slack** — Open node **14. Slack — Send Post Preview** → click the credential dropdown → connect your Slack workspace via OAuth2 → invite the n8n bot to your channel in Slack (`/invite @n8n`)

&gt; ⚠️ **The workflow must be Active before registering the webhook in Fireflies.** An inactive workflow will not receive signals from Fireflies. Activate first, then paste the URL.

---

## How It Works (Step by Step)

**Step 1 — Webhook: Fireflies Transcript Done**
This step listens for a signal from Fireflies. Every time Fireflies finishes transcribing a meeting, it sends a POST request to this webhook URL containing the meeting ID. No manual trigger is needed — it fires automatically after every recorded call.

**Step 2 — Code: Extract Meeting ID**
The meeting ID is extracted from the incoming signal. Fireflies can send the payload in several different formats, so this step checks all possible locations and pulls the ID safely. If no meeting ID is found at all, a flag is set to mark the signal as invalid.

**Step 3 — IF: Valid Meeting ID?**
This is the first gate check. If a valid meeting ID was found (YES path), the workflow continues to fetch the transcript. If the signal was invalid or contained no meeting ID (NO path), the workflow routes to **4. Set — Invalid Webhook Skip** and stops cleanly.

**Step 4 — Set: Invalid Webhook Skip**
This step handles the invalid signal case. It sets a brief message confirming the webhook was skipped and the workflow ends here for that trigger.

**Step 5 — Set: Config Values**
Your Fireflies API key, Google Drive folder ID, Slack channel, author name, author title, and company name are stored here. The validated meeting ID from step 2 is also carried forward so the transcript fetch can use it directly.

**Step 6 — HTTP: Fetch Transcript**
A request is sent to the Fireflies API using your API key and the meeting ID. It retrieves the complete transcript including all sentences with speaker labels, AI-detected pricing and task sentences, keyword summary, overview, gist, bullet points, and sentiment percentages.

**Step 7 — Code: Process Transcript Data**
The raw transcript is processed into clean, usable fields. All sentences are combined into a readable text block (limited to 5,000 characters for GPT efficiency). Fireflies-flagged pricing sentences, question sentences, and task sentences are extracted separately. Sentiment percentages, keywords, action items, and overview are all pulled out. A formatted document title is generated automatically using the meeting name and date. If the transcript is empty or not yet available, a flag is set for the next gate check.

**Step 8 — IF: Transcript Ready?**
This is the second gate check. If transcript data is available (YES path), the workflow moves to AI post writing. If Fireflies hasn't finished processing the transcript yet (NO path), the workflow routes to **9. Set — Transcript Not Ready Skip** and stops cleanly without errors.

**Step 9 — Set: Transcript Not Ready Skip**
This step handles the not-ready case. It logs the meeting ID and a message confirming the transcript was skipped. The workflow ends here for that run.

**Step 10 — AI Agent: Write LinkedIn Post**
GPT-4o-mini receives the author details, meeting context, Fireflies summary, bullet points, keywords, action items, questions raised in the call, and the transcript excerpt. It writes a 180–280 word LinkedIn post following a fixed structure: a scroll-stopping hook (not starting with "I" or "We"), a specific insight paragraph in first person, 3–5 emoji key learnings pulled from real transcript content, a closing question or call to action, and 4–5 hashtags. A sign-off with the author's name and title is added at the end.

**Step 11 — OpenAI: GPT-4o-mini Model**
This is the language model powering the writing step. It runs at temperature 0.8 for creative, varied output and is capped at 700 tokens to keep the post within the target word count.

**Step 12 — Code: Build Doc and Slack Message**
The AI-generated post is assembled into a complete Google Doc with the post text at the top, followed by meeting reference details: title, date, duration, participants, Fireflies transcript link, keywords, and action items. A Slack preview is also built here — the first 350 characters of the post plus meeting details and a link back to the Fireflies transcript.

**Step 13 — Google Drive: Save LinkedIn Post**
The complete document is saved to your specified Google Drive folder. The file is named automatically using the meeting title and date (e.g. "LinkedIn Post — Client Strategy Call — 14 Apr 2025").

**Step 14 — Slack: Send Post Preview**
The preview message is posted to your Slack channel at the same time the Google Doc is being saved. Your team sees the post hook and first paragraph instantly, with the full document link available in Drive for review before publishing.

---

## Key Features

✅ **Fully automatic — zero manual trigger** — Fireflies fires the workflow the moment any call transcript is ready, no human action needed
✅ **Two validation gates** — Invalid webhook signals and unready transcripts both exit cleanly without causing errors or empty posts
✅ **Grounded in real content** — The AI prompt feeds actual transcript sentences, keywords, bullet points, and action items so posts are specific, not generic
✅ **Fixed post structure every time** — Hook, insight paragraph, emoji learnings, closing CTA, hashtags, and sign-off are enforced on every run
✅ **Auto-named Google Docs** — Files are named by meeting title and date automatically so your Drive folder stays organized without any manual renaming
✅ **Slack preview before publishing** — Your team sees the draft before it goes live — one review step, no surprises
✅ **Handles all Fireflies payload formats** — The extraction step checks every possible payload structure so the webhook never silently fails due to a format change
✅ **Temperature tuned for creative writing** — GPT runs at 0.8 so each post has a natural, human tone rather than a repetitive AI pattern

---

## Customisation Options

**Change the post length target** — In node **10. AI Agent — Write LinkedIn Post**, edit the instruction from "180 to 280 words" to a different range. Also adjust `maxTokens` in node **11. OpenAI — GPT-4o-mini Model** accordingly (e.g. set to 900 for longer posts).

**Add a second post format** — After node **10. AI Agent — Write LinkedIn Post**, add a second AI Agent step with a different prompt structure (e.g. a short 3-sentence insight post or a carousel-style numbered list) to generate two post options per call instead of one.

**Route posts by meeting type** — In node **5. Set — Config Values**, add a `postCategory` field. Then add an IF check after step 7 that reads the meeting title — if it contains "demo" or "sales", use a sales-focused prompt; if it contains "team" or "internal", use a thought leadership prompt.

**Save to a dated subfolder in Drive** — In node **12. Code — Build Doc and Slack Message**, generate a folder path string using the meeting date (e.g. `2025/April`) and use the Google Drive step to create or find that subfolder before saving, keeping your Drive organized by month automatically.

**Add a Notion database entry** — After node **13. Google Drive — Save LinkedIn Post**, add a Notion API HTTP request to create a new row in a content calendar database with the post title, meeting date, status (Draft), and Google Drive link for content planning visibility.

---

## Troubleshooting

**Workflow not triggering when a call ends:**
- Confirm the workflow is Active before expecting Fireflies to fire it — inactive workflows do not receive webhooks
- Log in to Fireflies → Settings → Developer Settings → Webhooks → confirm the webhook URL is saved correctly and matches the URL from node **1. Webhook — Fireflies Transcript Done**
- Check that your Fireflies plan includes webhook support — some plans restrict this feature

**Fireflies API key error or empty transcript:**
- Confirm `YOUR_FIREFLIES_API_KEY` in node **5. Set — Config Values** is replaced with your actual key — not the placeholder text
- Get your key from fireflies.ai → Settings → Integrations → API Key
- If the transcript returns empty, the call may not have been processed yet by Fireflies — the workflow exits cleanly via **9. Set — Transcript Not Ready Skip** in this case

**OpenAI not generating the post:**
- Confirm the API key is connected in node **11. OpenAI — GPT-4o-mini Model** and your account has available credits
- Check the execution log of node **10. AI Agent — Write LinkedIn Post** for the raw error message
- If the post is under 50 characters, node **12. Code — Build Doc and Slack Message** catches this and outputs a failure message instead of a broken doc

**Google Drive not saving the file:**
- Confirm the Google Drive OAuth2 credential in node **13. Google Drive — Save LinkedIn Post** is connected and not expired — re-authorize if needed
- Check that `YOUR_GOOGLE_DRIVE_FOLDER_ID` in node **5. Set — Config Values** is the folder ID from your Drive URL, not the full URL — copy only the string after `/folders/`
- Make sure the Google account you authorized has write access to the target folder

**Slack preview not arriving:**
- Confirm the Slack OAuth2 credential in node **14. Slack — Send Post Preview** is connected and authorized
- Check that the channel name in node **5. Set — Config Values** includes the `#` prefix and matches your Slack channel exactly
- Type `/invite @n8n` in the target Slack channel to ensure the bot has permission to post

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email: [info@incrementors.com](info@incrementors.com)
🌐 Website: [https://www.incrementors.com/](https://www.incrementors.com/)

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Google Drive, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
