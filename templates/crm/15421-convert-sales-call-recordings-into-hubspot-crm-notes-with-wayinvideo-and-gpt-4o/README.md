# 🤝 Convert sales call recordings into HubSpot CRM notes with WayinVideo and GPT-4o-mini

> ⚡ **13 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Sales Call to HubSpot CRM Note Logger (WayinVideo + GPT-4o-mini + HubSpot)

---

### Short Description

Paste any Zoom, Google Meet, or Teams recording URL into a simple form along with the contact email, company name, call purpose, and sales rep name and the workflow logs everything to HubSpot automatically. [WayinVideo](https://wayin.ai/api/) transcribes the full call with speaker labels and timestamps, then GPT-4o-mini extracts nine structured CRM fields including pain points, objections, key quotes, next steps, deal stage recommendation, sentiment, and a confidence score. A formatted note is created on the matching HubSpot contact and a follow-up task is created with the agreed next steps. Everything is also logged to Google Sheets with the HubSpot Note ID, Task ID, and Contact ID. Built for sales teams, account managers, and agencies who want structured CRM notes created automatically after every call.

---

## What This Workflow Does

- **Transcribes sales calls with speaker labels** — WayinVideo processes the full recording and returns every spoken segment attributed to the correct speaker with timestamps
- **Extracts nine structured CRM fields** — GPT-4o-mini identifies call summary, pain points, objections raised, key quotes, next steps, follow-up date, deal stage recommendation, sentiment, and a deal confidence score from 1–10
- **Looks up the HubSpot contact by email** — The workflow searches HubSpot for the contact using the email you submitted — no manual ID lookup required
- **Creates a formatted engagement note on the HubSpot contact** — The full CRM note with all nine sections is posted directly to the contact record in HubSpot
- **Creates a follow-up task in HubSpot** — A task linked to the same contact is created with the next steps from the call and the agreed follow-up date as the due date
- **Polls automatically until transcription is ready** — Waits 90 seconds then checks every 30 seconds until the transcript is available, with no manual monitoring needed
- **Logs all 16 fields to Google Sheets** — Appends a row with contact details, call metadata, all CRM intelligence fields, and HubSpot Note ID, Task ID, and Contact ID

---

## Setup Requirements

### Tools Needed
- n8n instance (self-hosted or cloud)
- WayinVideo account with API access
- OpenAI account with GPT-4o-mini API access
- HubSpot account with a Private App token
- Google Sheets (one sheet with a tab named **CRM Call Log**)

### Credentials Required
- WayinVideo API key (pasted into **2. WayinVideo — Submit Transcription** and **4. WayinVideo — Get Transcript Results**)
- OpenAI API key
- HubSpot Private App token (pasted into **11. HTTP — Search HubSpot Contact**, **13. HTTP — Create HubSpot Note**, and **14. HTTP — Create HubSpot Task**)
- Google Sheets OAuth2

&gt; ⚠️ **WayinVideo API key appears in 2 steps** — replace `YOUR_WAYINVIDEO_API_KEY` in both **2. WayinVideo — Submit Transcription** and **4. WayinVideo — Get Transcript Results**. Missing either one will cause the workflow to fail.

&gt; ⚠️ **HubSpot Private App token appears in 3 steps** — replace `YOUR_HUBSPOT_PRIVATE_APP_TOKEN` in **11. HTTP — Search HubSpot Contact**, **13. HTTP — Create HubSpot Note**, and **14. HTTP — Create HubSpot Task**. Missing any one will cause those steps to fail.

**Estimated Setup Time: 25–30 minutes**

---

## Step-by-Step Setup

1. **Import the workflow** — Open n8n → Workflows → Import from JSON → paste the workflow JSON → click Import

2. **Get your WayinVideo API key** — Log in to your WayinVideo account → go to Account Settings → copy your API key

3. **Add your WayinVideo API key to node 2** — Open node **2. WayinVideo — Submit Transcription** → find the `Authorization` header value `Bearer YOUR_WAYINVIDEO_API_KEY` → replace `YOUR_WAYINVIDEO_API_KEY` with your actual key

4. **Add your WayinVideo API key to node 4** — Open node **4. WayinVideo — Get Transcript Results** → find the same `Authorization` header → replace `YOUR_WAYINVIDEO_API_KEY` with the same key

5. **Connect OpenAI** — Open node **9. OpenAI — GPT-4o-mini Model** → click the credential dropdown → add your OpenAI API key → test the connection

6. **Create your HubSpot Private App** — Go to your HubSpot account → Settings → Integrations → Private Apps → Create a private app → give it a name → under Scopes, enable: `crm.objects.contacts.write`, `crm.objects.notes.write`, `crm.objects.tasks.write` → click Create app → copy the access token

7. **Add your HubSpot token to node 11** — Open node **11. HTTP — Search HubSpot Contact** → find the `Authorization` header value `Bearer YOUR_HUBSPOT_PRIVATE_APP_TOKEN` → replace `YOUR_HUBSPOT_PRIVATE_APP_TOKEN` with your actual token

8. **Add your HubSpot token to node 13** — Open node **13. HTTP — Create HubSpot Note** → find the same `Authorization` header → replace `YOUR_HUBSPOT_PRIVATE_APP_TOKEN` with the same token

9. **Add your HubSpot token to node 14** — Open node **14. HTTP — Create HubSpot Task** → find the same `Authorization` header → replace `YOUR_HUBSPOT_PRIVATE_APP_TOKEN` with the same token

10. **Create your Google Sheet tab** — Open your Google Sheet → add a tab named exactly **CRM Call Log** → add these 16 column headers in row 1: `Contact Email`, `Contact Name`, `Company`, `Call Purpose`, `Call Date`, `Sales Rep`, `Call Duration (min)`, `HubSpot Contact ID`, `HubSpot Note ID`, `HubSpot Task ID`, `Deal Stage`, `Sentiment`, `Confidence Score`, `Follow-up Date`, `Recording URL`, `Created On`

11. **Connect Google Sheets** — Open node **15. Google Sheets — Log CRM Entry** → click the document field → replace `YOUR_GOOGLE_SHEET_ID` by selecting your spreadsheet or entering the Sheet ID (the string between `/d/` and `/edit` in your Sheet URL) → click the credential dropdown → add Google Sheets OAuth2 → authorize access

12. **Activate the workflow** — Toggle the workflow to Active → copy the Form URL from node **1. Form — Call Recording + CRM Details** → open it in a browser to submit your first call

---

## How It Works (Step by Step)

**Step 1 — Form: Call Recording + CRM Details**
You open the form URL in a browser and fill in seven fields: the call recording URL (Zoom, Google Meet, Teams, or Loom), the contact email address in HubSpot, the contact name, the company name, the call purpose (e.g. Discovery Call, Demo, Negotiation), the call date, and the sales rep name. Submitting the form starts the workflow.

**Step 2 — HTTP: WayinVideo — Submit Transcription**
The recording URL is sent to the WayinVideo transcription API with the target language set to English. WayinVideo accepts the job and returns a task ID confirming transcription has started.

**Step 3 — Wait: 90 Seconds**
The workflow pauses for 90 seconds before the first status check. Sales calls are typically 30–60 minutes long and need more initial processing time than short videos.

**Step 4 — HTTP: WayinVideo — Get Transcript Results**
A GET request checks the WayinVideo results endpoint using the task ID from step 2. It returns the current processing status and, once complete, the full speaker-labeled transcript.

**Step 5 — IF: Transcription Complete?**
This is the polling gate. If the status equals `SUCCEEDED` (YES path), the transcript is ready and the workflow moves forward to formatting. If still processing (NO path), the workflow routes to **6. Wait — 30 Seconds Retry** which pauses 30 seconds then loops back to step 4 to check again. This repeats until SUCCEEDED.

**Step 6 — Wait: 30 Seconds Retry**
When the transcript is not yet ready, the workflow waits 30 seconds then returns to step 4 for another check. The loop continues automatically.

**Step 7 — Code: Format Transcript**
Each segment is formatted as `[Speaker Name | MM:SS] text`. Total call duration in minutes, unique speaker names, and all seven form inputs are packaged here for the AI prompt.

**Step 8 — AI Agent: Extract CRM Note**
GPT-4o-mini receives the formatted transcript and a detailed system prompt. It extracts nine labeled sections: a 3–4 sentence call summary, pain points the prospect actually mentioned, objections raised during the call, the most important quotes, next steps with owners, the agreed follow-up date (or TBD), a deal stage from a fixed seven-option list, a sentiment label from a fixed five-option list, and a confidence score from 1–10. GPT is instructed to write only from what was actually said — no invented content.

**Step 9 — OpenAI: GPT-4o-mini Model**
This is the language model powering the CRM extraction. It runs with default settings for consistent, structured output.

**Step 10 — Code: Parse CRM Output**
All nine labeled sections are extracted from the AI output using regex. A full formatted HubSpot note body is assembled with sections for summary, pain points, objections, quotes, next steps, and a deal intelligence line showing stage, sentiment, and confidence score in one readable block. A follow-up timestamp is calculated — if a specific date was mentioned in the call it is used; if not, a default of 7 days from now is set for the HubSpot task due date. All call metadata is carried forward for the sheet log.

**Step 11 — HTTP: Search HubSpot Contact**
A POST request searches HubSpot for a contact matching the email address you submitted. It returns the contact's details including the HubSpot internal contact ID.

**Step 12 — Code: Extract HubSpot Contact ID**
The contact ID is extracted from the search results. If no contact is found for that email, the step throws a clear error stopping the workflow — preventing a note from being created on the wrong contact or no contact at all.

**Step 13 — HTTP: Create HubSpot Note**
A POST request creates an engagement note on the HubSpot contact using the full formatted note body. The note timestamp is set to the call date you submitted. The note is associated with the contact using HubSpot's standard association type ID 202.

**Step 14 — HTTP: Create HubSpot Task**
A follow-up task is created on the same HubSpot contact. The task subject includes the contact name and company. The task body contains the next steps extracted from the call. The task due date is set to the follow-up timestamp calculated in step 10. The task is marked HIGH priority and type CALL, and starts with NOT_STARTED status.

**Step 15 — Google Sheets: Log CRM Entry**
One row is appended to your CRM Call Log tab with all 16 columns: contact email, name, company, call purpose, date, sales rep, duration, HubSpot Contact ID, Note ID, Task ID, deal stage, sentiment, confidence score, follow-up date, recording URL, and the log timestamp.

---

## Key Features

✅ **Contact lookup by email** — No manual contact ID lookup needed — the workflow finds the HubSpot contact automatically using the email you provide at submission
✅ **Nine structured CRM fields per call** — Pain points, objections, key quotes, deal stage, sentiment, and confidence score are all extracted separately — not lumped into one generic note
✅ **Fixed deal stage and sentiment options** — GPT is constrained to exact picklist values for both fields so every entry in your sheet is filterable and consistent
✅ **Follow-up task created automatically** — You never need to manually create a follow-up task — it is generated from the next steps in the call with the agreed due date already set
✅ **HubSpot Note ID and Task ID logged to Sheets** — Every row in your Google Sheets log contains the exact HubSpot IDs so you can cross-reference or deep-link directly to the record
✅ **7-day default due date when follow-up not mentioned** — If no specific follow-up date was discussed, the task is automatically due in 7 days so nothing falls through the cracks
✅ **Full note body formatted for HubSpot readability** — The note is structured with labeled sections and a deal intelligence summary line so any sales rep who opens the contact record can scan it in 30 seconds

---

## Customisation Options

**Add a retry limit to stop infinite polling** — Before node **6. Wait — 30 Seconds Retry**, add a Set step that increments a poll counter, then add a second IF check to stop after 15 polls and send a Slack or Gmail error notification instead of looping indefinitely — this is noted as a known risk in the workflow overview.

**Create the HubSpot contact if not found** — In node **12. Code — Extract HubSpot Contact ID**, instead of throwing an error when no contact is found, add an HTTP step that creates the contact in HubSpot using the form's contact name, email, and company name — then continue to note and task creation.

**Update the HubSpot deal stage property** — After node **13. HTTP — Create HubSpot Note**, add a PATCH request to `https://api.hubapi.com/crm/v3/objects/contacts/{id}` with the `dealstage` property set to the extracted deal stage value — keeping the contact record's pipeline stage in sync with every call.

**Send the rep a summary email after logging** — After node **15. Google Sheets — Log CRM Entry**, add a Gmail step that sends the sales rep a plain-text email with the call summary, action items, and a direct link to the HubSpot contact so they have everything in their inbox immediately.

**Log calls to a HubSpot Deal instead of Contact** — In nodes **13** and **14**, change the association type and target object from `contacts` to `deals` — and add a step before note creation that searches HubSpot for a deal associated with the contact — routing notes and tasks to the deal record instead.

---

## Troubleshooting

**WayinVideo returning an error on submission:**
- Confirm `YOUR_WAYINVIDEO_API_KEY` in node **2. WayinVideo — Submit Transcription** is replaced with your actual API key — not the placeholder
- Confirm the same replacement was made in node **4. WayinVideo — Get Transcript Results** — both steps require the key
- Check the execution log of node 2 for the raw error — a 401 means wrong key, a 422 means the URL format is unsupported

**Workflow stuck in the polling loop:**
- Check that the recording URL is publicly accessible — Zoom recordings with passwords, expired links, or private Meet recordings will not be processed
- Open the execution log of node **4. WayinVideo — Get Transcript Results** to inspect the raw response — WayinVideo may have returned FAILED with a specific reason
- If the loop runs indefinitely, deactivate the workflow, fix the recording URL, and resubmit — this is a known risk flagged in the workflow overview

**HubSpot contact not found:**
- Confirm the email address submitted in the form exactly matches the email in HubSpot — including capitalization and no extra spaces
- Check that the HubSpot Private App token in node **11. HTTP — Search HubSpot Contact** is valid and not expired
- If the contact does not exist in HubSpot, the workflow stops with a clear error at step 12 — add the contact to HubSpot first, then resubmit the form

**HubSpot note or task not being created:**
- Confirm `YOUR_HUBSPOT_PRIVATE_APP_TOKEN` is replaced in all three steps: **11. HTTP — Search HubSpot Contact**, **13. HTTP — Create HubSpot Note**, and **14. HTTP — Create HubSpot Task**
- Confirm your Private App has all three required scopes enabled: `crm.objects.contacts.write`, `crm.objects.notes.write`, `crm.objects.tasks.write` — check in HubSpot Settings → Integrations → Private Apps
- Check the execution log of node 13 or 14 for the HubSpot API error — a 403 means missing scope permission

**Google Sheets not logging the row:**
- Confirm `YOUR_GOOGLE_SHEET_ID` in node **15. Google Sheets — Log CRM Entry** is replaced with your actual sheet ID from the URL
- Confirm the tab is named **CRM Call Log** exactly and all 16 column headers match exactly
- Check that the Google Sheets OAuth2 credential is connected and not expired — re-authorize if needed

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email: [info@incrementors.com](info@incrementors.com)
🌐 Website: [https://www.incrementors.com/](https://www.incrementors.com/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
