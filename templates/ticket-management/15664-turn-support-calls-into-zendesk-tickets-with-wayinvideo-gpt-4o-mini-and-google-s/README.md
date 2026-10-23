# 🎫 Turn support calls into Zendesk tickets with WayinVideo, GPT-4o-mini, and Google Sheets

> ⚡ **10 views** · 🎫 [Ticket Management & Triage](../)

## Description

### Description

Submit any customer support call recording URL along with the agent name, customer details, issue category, call date, and product name and the workflow transcribes and analyzes the full call automatically. WayinVideo's Transcription API returns a speaker-labeled timestamped transcript which GPT-4o-mini reads to extract 10 structured fields — ticket subject, issue summary, root cause, resolution given, follow-up actions, key customer quotes, sentiment, priority, CSAT prediction, and tags. A Zendesk ticket is created via the REST API with the customer as the requester and the full structured summary as the ticket body, and every call is logged to Google Sheets with the Zendesk Ticket ID and URL. Built for customer support teams, customer success managers, and QA teams who record support calls and want structured tickets created automatically without manually listening to recordings after every call.

---

## What This Workflow Does

- **Transcribes the full call with speaker labels and timestamps** — WayinVideo's Transcription API returns every word spoken in the call labeled by speaker and time so GPT has accurate context for every field it extracts
- **Extracts 10 structured support intelligence fields** — GPT identifies the ticket subject, issue summary, root cause, resolution given, follow-up actions, key customer quotes, sentiment, priority, CSAT prediction, and tags — all from what was actually said
- **Predicts CSAT on a 1–5 scale** — GPT assesses how the call ended and assigns a predicted customer satisfaction score so your team can proactively follow up on low-scoring calls
- **Builds a structured Zendesk ticket body** — All 10 fields are assembled into a formatted ticket body with clear section headers making it immediately readable in Zendesk
- **Creates the Zendesk ticket with the customer as requester** — The ticket is opened in Zendesk with the customer's name and email as the requester — not the agent — so reply threads go to the right person
- **Maps priority to Zendesk values automatically** — The GPT priority label (Urgent, High, Normal, Low) is converted to the exact value Zendesk expects before the API call
- **Logs 19 fields to Google Sheets** — Every field plus the Zendesk Ticket ID and constructed Ticket URL are saved in one row per call for QA review and reporting

---

## Setup Requirements

### Tools Needed
- n8n instance (self-hosted or cloud)
- [WayinVideo](https://wayin.ai/api/) account with API access
- OpenAI account with GPT-4o-mini API access
- Zendesk account with API token access
- Google Sheets (one sheet with a tab named **Support Call Log**)

### Credentials Required
- WayinVideo API key (pasted into **2. WayinVideo — Submit Transcription** and **4. WayinVideo — Get Transcript Results**)
- OpenAI API key
- Zendesk subdomain, agent email, and API token (used in **11. HTTP Request — Create Zendesk Ticket**)
- Google Sheets OAuth2

&gt; ⚠️ **WayinVideo API key appears in 2 steps** — replace `YOUR_WAYINVIDEO_API_KEY` in both **2. WayinVideo — Submit Transcription** and **4. WayinVideo — Get Transcript Results**. Missing either one will cause the workflow to fail.

&gt; ⚠️ **Three Zendesk placeholders in node 11** — replace `YOUR_ZENDESK_SUBDOMAIN` in both the URL and the Ticket URL column, `YOUR_ZENDESK_EMAIL`, and `YOUR_ZENDESK_API_TOKEN` in the Authorization header of **11. HTTP Request — Create Zendesk Ticket**.

**Estimated Setup Time: 25–30 minutes**

---

## Step-by-Step Setup

1. **Import the workflow** — Open n8n → Workflows → Import from JSON → paste the workflow JSON → click Import

2. **Get your WayinVideo API key** — Log in to your WayinVideo account → go to Account Settings → copy your API key

3. **Add your WayinVideo API key to node 2** — Open node **2. WayinVideo — Submit Transcription** → find the `Authorization` header value `Bearer YOUR_WAYINVIDEO_API_KEY` → replace `YOUR_WAYINVIDEO_API_KEY` with your actual key

4. **Add your WayinVideo API key to node 4** — Open node **4. WayinVideo — Get Transcript Results** → find the same `Authorization` header → replace `YOUR_WAYINVIDEO_API_KEY` with the same key

5. **Connect OpenAI** — Open node **9. OpenAI — GPT-4o-mini Model** → click the credential dropdown → add your OpenAI API key → test the connection

6. **Get your Zendesk API token** — Log in to Zendesk Admin Center → go to Apps and Integrations → APIs → Zendesk API → click Add API token → give it a name → copy the token (you can only see it once)

7. **Get your Zendesk subdomain** — Your Zendesk subdomain is the part before `.zendesk.com` in your Zendesk URL — for example if your URL is `mycompany.zendesk.com` then your subdomain is `mycompany`

8. **Configure Zendesk credentials in node 11** — Open node **11. HTTP Request — Create Zendesk Ticket** → in the URL, replace `YOUR_ZENDESK_SUBDOMAIN` with your actual subdomain → in the `Authorization` header value, replace `YOUR_ZENDESK_EMAIL` with the email address of your Zendesk agent account, replace `YOUR_ZENDESK_API_TOKEN` with the token you copied in step 6

9. **Create your Google Sheet tab** — Open your Google Sheet → add a tab named exactly **Support Call Log** → add these 19 column headers in row 1: `Call Date`, `Agent Name`, `Customer Name`, `Customer Email`, `Product`, `Issue Category`, `Issue Summary`, `Root Cause`, `Resolution Given`, `Follow-up Required`, `Sentiment`, `Priority`, `CSAT Prediction`, `Tags`, `Zendesk Ticket ID`, `Zendesk Ticket URL`, `Call Duration (min)`, `Recording URL`, `Created On`

10. **Get your Google Sheet ID** — Open your Google Sheet in a browser → copy the string between `/d/` and `/edit` in the URL

11. **Connect Google Sheets** — Open node **12. Google Sheets — Log Support Record** → click the document field → replace `YOUR_GOOGLE_SHEET_ID` by selecting your spreadsheet or entering the Sheet ID manually → also replace `YOUR_ZENDESK_SUBDOMAIN` in the Zendesk Ticket URL formula in this step → click the credential dropdown → add Google Sheets OAuth2 → authorize access

12. **Activate the workflow** — Toggle the workflow to Active → copy the Form URL from node **1. Form — Support Call + Details** → open it in a browser to submit your first call

---

## How It Works (Step by Step)

**Step 1 — Form: Support Call + Details**
Your support agent opens the form URL and fills in seven fields: the call recording URL (Zoom, Loom, Google Meet, or any direct link), the agent name, the customer name, the customer email, the issue category (e.g. Billing, Technical Issue, Onboarding), the call date, and the product or service name. Submitting the form starts the workflow.

**Step 2 — HTTP: WayinVideo — Submit Transcription**
The call recording URL is sent to WayinVideo's Transcription API using the `/v2/transcripts` endpoint. WayinVideo accepts the job and returns a task ID. The transcription returns speaker-labeled segments — each with a speaker name, start time, end time, and spoken text.

**Step 3 — Wait: 90 Seconds**
The workflow pauses 90 seconds before the first status check, giving WayinVideo time to transcribe the full call.

**Step 4 — HTTP: WayinVideo — Get Transcript Results**
A GET request checks the transcription results endpoint using the task ID from step 2. It returns the current status and, once complete, the full transcript array with each speaker-labeled segment.

**Step 5 — IF: Transcription Complete?**
This is the polling gate. If the status equals `SUCCEEDED` (YES path), the transcript is ready and the workflow moves forward to formatting. If still processing (NO path), the workflow routes to **6. Wait — 30 Seconds Retry** which pauses 30 seconds then loops back to step 4. This repeats until SUCCEEDED.

**Step 6 — Wait: 30 Seconds Retry**
When the transcript is not yet ready, the workflow waits 30 seconds then returns to step 4 for another check.

**Step 7 — Code: Format Transcript**
Each transcript segment is formatted as `[Speaker | MM:SS] Spoken text` and joined into a single readable block. Total call duration in minutes, unique speakers, and transcript word count are also calculated. All seven form inputs are packaged alongside the formatted transcript for the GPT prompt.

**Step 8 — AI Agent: Extract Support Summary**
GPT-4o-mini receives the full formatted transcript as the main input and the call context (agent, customer, product, category, date, duration, recording URL) in the system prompt. It extracts 10 labeled sections: TICKET_SUBJECT (a specific 60–80 character subject line), ISSUE_SUMMARY (2–3 sentences of what the customer reported), ROOT_CAUSE (why it happened or "Under investigation"), RESOLUTION_GIVEN (what was done or "Unresolved — escalation required"), FOLLOW_UP_REQUIRED (specific actions or "None"), KEY_QUOTES (the most important things the customer said), SENTIMENT (one of five levels), PRIORITY (one of four levels based on tone and severity), CSAT_PREDICTION (a number 1–5), and TAGS (5–8 lowercase comma-separated tags).

**Step 9 — OpenAI: GPT-4o-mini Model**
This is the language model powering the support analysis.

**Step 10 — Code: Parse Support Output**
All 10 labeled sections are extracted from the GPT output using regex. The priority text is mapped to the exact Zendesk API priority value using a lookup table (urgent → urgent, high → high, normal → normal, low → low). A structured Zendesk ticket body is assembled with clear section headers — SUPPORT CALL SUMMARY, ISSUE SUMMARY, ROOT CAUSE, RESOLUTION GIVEN, FOLLOW-UP REQUIRED, KEY QUOTES FROM CUSTOMER, CALL INTELLIGENCE (sentiment, priority, CSAT), and TAGS — each on separate lines so the ticket is immediately readable in Zendesk.

**Step 11 — HTTP: Create Zendesk Ticket**
A POST request creates the ticket in Zendesk via the REST API. The ticket includes the subject, the structured body, the customer's name and email as the requester, the mapped Zendesk priority, the type set to "problem", and the tags array parsed from the GPT output. Zendesk returns the new ticket's ID and other metadata.

**Step 12 — Google Sheets: Log Support Record**
One row is appended to your Support Call Log tab with all 19 columns. The Zendesk Ticket ID comes from the API response. The Zendesk Ticket URL is constructed directly in the sheet formula as `https://YOUR_ZENDESK_SUBDOMAIN.zendesk.com/agent/tickets/TICKET_ID` so every row has a clickable link to the ticket. All other fields come from the parsed GPT output and form inputs.

---

## Key Features

✅ **Speaker-labeled transcript passed to GPT** — Each segment includes the speaker name and timestamp so GPT can distinguish between what the customer said and what the agent said when extracting quotes and sentiment
✅ **CSAT prediction per call** — Every ticket includes a predicted satisfaction score based on how the call ended — allowing your team to prioritize follow-ups before survey results come in
✅ **Structured ticket body with section headers** — The Zendesk ticket body is formatted with labeled sections so any agent opening the ticket can read the summary, root cause, and follow-up in seconds
✅ **Customer set as ticket requester automatically** — The ticket is opened with the customer's email as the requester — not the agent's — so Zendesk email threading works correctly from the first reply
✅ **Priority mapped to Zendesk API values** — GPT's priority label is automatically converted to the exact lowercase value Zendesk expects in the API body — no manual conversion needed
✅ **Zendesk Ticket URL in every sheet row** — The log row includes a direct clickable link to the Zendesk ticket so QA and managers can jump from the sheet to the ticket in one click
✅ **Tags parsed from GPT output and sent to Zendesk** — The tags field from GPT is split, trimmed, and sent as a proper array in the Zendesk API body — making the ticket filterable immediately

---

## Customisation Options

**Add a retry limit to stop infinite polling** — Before node **6. Wait — 30 Seconds Retry**, add a Set step that increments a poll counter, then add a second IF check to stop after 15 polls and send a Gmail error notification to the agent instead of looping indefinitely.

**Send a Slack notification when a high-priority ticket is created** — After node **11. HTTP Request — Create Zendesk Ticket**, add an IF check that triggers only when `priority` equals "urgent" or "high", then add a Slack step that posts the ticket subject, customer name, and Zendesk URL to a `#support-escalations` channel.

**Send a confirmation email to the agent** — After node **12. Google Sheets — Log Support Record**, add a Gmail step that sends the agent a plain-text email with the Zendesk ticket subject, ID, URL, and predicted CSAT so they have a record without opening the sheet.

**Add a Zendesk assignee** — In the JSON body of node **11. HTTP Request — Create Zendesk Ticket**, add `"assignee_id": YOUR_ZENDESK_AGENT_ID` inside the ticket object to automatically assign every created ticket to a specific agent or team — get the agent ID from your Zendesk Admin Center.

**Change the ticket type** — In node **11. HTTP Request — Create Zendesk Ticket**, change `"type": "problem"` to `"type": "incident"`, `"question"`, or `"task"` depending on the nature of the support calls you are logging — this affects how Zendesk categorizes and reports on the tickets.

---

## Troubleshooting

**Form submission not starting the workflow:**
- Confirm the workflow is Active — inactive workflows do not receive form submissions
- Copy the Form URL fresh from node **1. Form — Support Call + Details** after activating — URLs copied before activation will not work
- Make sure all seven fields are filled in — all are marked required

**WayinVideo API key errors:**
- Confirm `YOUR_WAYINVIDEO_API_KEY` in node **2. WayinVideo — Submit Transcription** is replaced with your actual key — this workflow uses the `/v2/transcripts` endpoint, confirm the URL in node 2 is correct
- Confirm the same key replacement was made in node **4. WayinVideo — Get Transcript Results**
- Check the execution log of node 2 for the raw error — a 401 means wrong key, a 422 means the URL format is not supported

**Workflow stuck in the polling loop:**
- Check that the recording URL is publicly accessible — private Zoom links, password-protected meetings, or expired recordings will not be transcribed
- Open the execution log of node **4. WayinVideo — Get Transcript Results** for the raw response — WayinVideo may have returned FAILED with a specific reason
- Transcription of longer support calls (over 30 minutes) may take several polling cycles before completing — this is expected

**Zendesk ticket not being created:**
- Confirm `YOUR_ZENDESK_SUBDOMAIN` in the URL of node **11. HTTP Request — Create Zendesk Ticket** is replaced with just your subdomain (e.g. `mycompany`) — not the full URL
- Confirm `YOUR_ZENDESK_EMAIL` is the email address of your Zendesk agent account — it must be an active agent email with API access
- Confirm `YOUR_ZENDESK_API_TOKEN` is replaced with the token generated in Admin Center → APIs — tokens can only be viewed once at creation; if lost, generate a new one
- Check the execution log of node 11 for the Zendesk API error — a 401 means wrong credentials, a 422 means a field in the request body is invalid

**Google Sheets not saving the row:**
- Confirm `YOUR_GOOGLE_SHEET_ID` in node **12. Google Sheets — Log Support Record** is replaced with your actual Sheet ID
- Confirm `YOUR_ZENDESK_SUBDOMAIN` in the Zendesk Ticket URL formula in node 12 is also replaced — this is a second occurrence of the placeholder
- Confirm the tab is named **Support Call Log** exactly and all 19 column headers in row 1 match exactly

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email: [info@isawow.com](info@isawow.com)
🌐 Website: [https://isawow.com/](https://isawow.com/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
