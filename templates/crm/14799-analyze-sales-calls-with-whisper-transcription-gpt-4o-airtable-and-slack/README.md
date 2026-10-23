# 🤝 Analyze sales calls with Whisper transcription, GPT-4o, Airtable and Slack

> ⚡ **129 views** · 🤝 [CRM & Sales Operations](../)

## Description

Submit a call recording and get a full AI-powered analysis delivered automatically. Your recording is transcribed with OpenAI Whisper, then GPT-4o breaks down sentiment, objections, buying signals, deal risk, next steps, and a ready-to-send follow-up email. Results are saved to Airtable, posted to your Slack channel, and shown to the rep as a rich summary page the moment the form is submitted. This workflow is built for sales teams, revenue operations managers, and sales coaches who want consistent call intelligence without manual review.

---

## What This Workflow Does

- **Automatic transcription** — downloads your audio file and converts it to text using OpenAI Whisper, handling mp3, wav, and m4a formats
- **Deep AI analysis** — GPT-4o reads the full transcript and identifies sentiment, deal risk, momentum, objections with direct quotes, and buying signals
- **Deal stage recommendation** — suggests whether the deal should advance, stay, or retreat based on what actually happened on the call
- **Coaching feedback** — generates one specific, actionable coaching tip for the rep based on their talk ratio and call behaviour
- **CRM-ready note** — writes a professional 2–3 sentence note you can paste directly into any CRM
- **Follow-up email draft** — generates a warm, personalised follow-up email referencing something the prospect actually said
- **Multi-channel delivery** — saves the full analysis to Airtable, sends a summary to Slack, and shows the rep an HTML results page instantly

---

## Setup Requirements

### Tools you'll need

- Active n8n instance (self-hosted or n8n Cloud)
- OpenAI account with API access (Whisper + GPT-4o)
- Airtable account with a base and table ready
- Slack workspace with an incoming webhook configured

**Estimated Setup Time: 15–20 minutes**

---

## Step-by-Step Setup

1. **Get your OpenAI API key**
   Go to https://platform.openai.com/api-keys and create a new secret key.
   In n8n, open the **4. OpenAI — Transcribe with Whisper1** node → find the Authorization header → replace `YOUR_OPENAI_API_KEY` with your key.
   &gt; ⚠️ This key appears in 1 node (Whisper). The AI Agent uses a separate n8n credential — see step 2.

2. **Connect your OpenAI credential for the AI Agent**
   In n8n: go to Credentials → Add credential → OpenAI API → paste your API key.
   Open the **7. OpenAI — Chat Model (GPT-4o)** node → select your new credential from the dropdown.

3. **Connect your Airtable credential**
   In n8n: go to Credentials → Add credential → Airtable Personal Access Token → paste your token (get it at https://airtable.com/create/tokens).
   Open the **9. Airtable — Save Full Analysis** node → select your credential, then choose your base and table from the dropdowns.
   Your Airtable table should have columns matching these names exactly: `Submission ID`, `Rep Name`, `Rep Email`, `Company`, `Contact Name`, `Contact Email`, `Deal Stage (Before)`, `Deal Stage (AI Recommended)`, `Deal Value`, `Call Duration (min)`, `Word Count`, `Sentiment`, `Sentiment Score`, `Primary Intent`, `Deal Risk`, `Deal Momentum`, `Objection Count`, `Buying Signal Count`, `Competitors Mentioned`, `Summary`, `CRM Note`, `Coaching Tip`, `Rep Talk Ratio`, `Follow-up Email Draft`, `Submitted At`, `Processed At`.

4. **Connect your Slack webhook**
   In Slack, go to https://api.slack.com/apps → create an app → enable Incoming Webhooks → copy the webhook URL.
   In n8n, go to Credentials → Add credential → Slack → Webhook → paste the URL.
   Open the **10. Slack — Post Analysis to Channel** node → select your Slack credential.

5. **Activate the workflow**
   Click the toggle at the top of the workflow editor to set it to Active. Copy the form URL from the **1. Form — Sales Rep Submits Call1** node and share it with your sales team.

---

## How It Works (Step by Step)

**Step 1 — Form (n8n Form Trigger)**
The sales rep fills out a web form with their name, email, the prospect's details, current deal stage, estimated deal value, and a direct link to the audio recording. They can also add optional notes before the analysis runs — for example, flagging that a competitor was mentioned. When they submit, the workflow starts automatically.

**Step 2 — Code: Clean & Validate Form Data**
The workflow reads and cleans every field from the form submission. It strips extra whitespace, normalises email addresses to lowercase, and checks that required fields — rep name, email, company, contact name, and audio link — are all present. If anything is missing, the workflow stops and returns an error immediately. A unique submission ID is generated (formatted as `CALL-` followed by a timestamp) so every call record is trackable.

**Step 3 — HTTP: Download Audio File**
The workflow makes an HTTP request to the audio URL the rep provided and downloads the file. It supports any direct-download link to an mp3, wav, or m4a file. A 60-second timeout is set in case the file is slow to download.

**Step 4 — OpenAI: Transcribe with Whisper**
The downloaded audio is sent to OpenAI's Whisper API. Whisper converts the spoken audio into a full text transcript with timestamps. The response format is set to `verbose_json` so the workflow receives structured output. This step has a 3-minute timeout for long calls.

**Step 5 — Code: Merge Transcript with Call Data**
The transcript text is pulled from the Whisper response and checked — if it comes back empty, the workflow throws an error explaining the audio may be silent or corrupted. The word count is calculated, then the transcript is merged together with all the original form data so the next step has everything it needs in one place.

**Step 6 — AI Agent: GPT-4o Sales Analysis**
The full transcript and all call metadata are passed to a GPT-4o AI agent with a detailed system prompt. The agent is instructed to return a single valid JSON object containing: a 3–5 sentence summary, overall sentiment with a score out of 100, primary prospect intent, deal risk level, deal momentum, a recommended deal stage, estimated rep talk ratio, a list of objections with direct quotes, buying signals, competitor names, next steps with owners and deadlines, a coaching tip, a CRM note, and a personalised follow-up email draft. The agent is told never to hallucinate — if something isn't in the transcript, it returns an empty array or null.

**Step 7 — Code: Parse & Combine AI Analysis**
The raw text output from the AI agent is cleaned of any accidental markdown formatting, then parsed as JSON. The parsed analysis is merged with the original call data into one complete record, and a `processedAt` timestamp is added.

**Step 8, 9, 10 — Fan-out: Airtable, Slack, and HTML Page**
The complete record is sent to three places simultaneously. The **9. Airtable — Save Full Analysis** node creates a new row with all 26 fields. The **10. Slack — Post Analysis to Channel** node sends a notification to your sales channel. The **11. Code — Build HTML Confirmation Page** node builds a formatted HTML results page — including summary, sentiment score, objections, next steps, coaching tip, and the full follow-up email draft — which is returned directly to the rep via the **12. Webhook — Show Results Page to Rep** node as their form confirmation.

---

## Key Features

✅ **Audio format flexibility** — works with mp3, wav, and m4a files from any direct-download URL
✅ **Quote-backed objection detection** — every objection includes a direct quote from the transcript, not a paraphrase
✅ **Deal stage intelligence** — compares the rep's reported stage with the AI's recommended stage after the call
✅ **Rep talk ratio** — estimates how much the rep vs. the prospect spoke, enabling targeted coaching
✅ **Zero-hallucination rules** — the AI is instructed to return empty arrays rather than guess when data isn't present
✅ **Instant rep results page** — the rep sees their full analysis the moment they submit, no waiting for an email
✅ **Parallel delivery** — Airtable, Slack, and the results page are all updated in the same execution, not sequentially
✅ **Submission IDs** — every call gets a unique ID for tracking, filtering, and referencing in follow-up conversations

---

## Customisation Options

**Switch to a cheaper model for high-volume teams**
Open the **7. OpenAI — Chat Model (GPT-4o)** node and change the model from `gpt-4o` to `gpt-4o-mini`. This reduces cost by roughly 15× with minimal quality loss for standard sales calls.

**Add a CRM update step after Airtable**
After the **9. Airtable — Save Full Analysis** node, add a HubSpot or Salesforce node to automatically update the deal stage, log the CRM note, and create a follow-up task using the next steps from the analysis.

**Tag the rep in Slack by email**
In the **10. Slack — Post Analysis to Channel** node, extend the message template to look up the rep's Slack user ID by their email address using the Slack `users.lookupByEmail` API, then `@mention` them directly in the notification.

**Add a language detection step**
Before the AI agent, add a Code node that checks `transcript.length` and language — then pass the detected language to the Whisper node's `language` parameter and adjust the GPT-4o prompt to respond in the same language as the transcript.

**Send the follow-up email automatically**
After the HTML page step, add a Gmail or Outlook node that sends the `analysis.follow_up_email` directly to the prospect's email address (`contactEmail`), so reps can approve and send in one click rather than copy-pasting.

---

## Troubleshooting

**Whisper transcription returns an error:**
- Check that the audio URL is a direct download link — not a Google Drive share link or a page URL
- Confirm the file format is mp3, wav, or m4a
- Verify your OpenAI API key in the **4. OpenAI — Transcribe with Whisper1** node is correct and has available credits
- Increase the download timeout in the **3. HTTP — Download Audio File1** node if the file is large

**GPT-4o returns an empty or unparseable response:**
- Open the **8. Code — Parse & Combine AI Analysis** node and check the error message — it will show the first 300 characters of the raw GPT-4o output
- Make sure the OpenAI credential in the **7. OpenAI — Chat Model (GPT-4o)** node has GPT-4o access enabled on your OpenAI account
- If the response contains markdown fences, the cleanup code in node 8 handles this automatically — but check that the credential is correctly selected

**Airtable row not being created:**
- Confirm your Airtable table has columns with names that match exactly (including spaces and capitalisation) — e.g. `Deal Stage (Before)` not `Deal Stage Before`
- Check that your Airtable Personal Access Token has write access to the correct base

**Slack notification not arriving:**
- Test your webhook URL directly using a tool like Postman or curl to confirm it's active
- Verify the credential is selected in the **10. Slack — Post Analysis to Channel** node — a missing credential causes the node to silently fail due to `continueOnFail: true`

**The form submits but the rep never sees the results page:**
- The workflow uses `responseMode: lastNode`, meaning the form waits for the final webhook response node to complete. If any step errors out silently (Airtable or Slack failures are set to continue on fail), the HTML page should still render — check the **12. Webhook — Show Results Page to Rep** node execution log for errors.

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email:[info@isawow.com](info@isawow.com)
🌐 Website:[https://isawow.com/](https://isawow.com/)

## 🔗 Nodes Used

Airtable, HTTP Request, Slack, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
