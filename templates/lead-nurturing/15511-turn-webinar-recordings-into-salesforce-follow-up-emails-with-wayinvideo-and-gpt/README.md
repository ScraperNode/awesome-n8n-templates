# 💬 Turn webinar recordings into Salesforce follow-up emails with WayinVideo and GPT-4o-mini

> ⚡ **19 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

### Description

Submit your webinar recording URL along with the webinar title, host name, company name, date, and CTA link and the workflow automatically handles every follow-up. [WayinVideo](https://wayin.ai/api/) summarizes the webinar and extracts numbered highlights, then GPT-4o-mini writes a personalized 150–200 word email per registered Salesforce lead — addressing them by first name, referencing their role and company, and citing 2–3 specific things covered in the webinar. Gmail sends each email, Salesforce logs a completed Task activity on each lead record, and Google Sheets logs every send with the Salesforce Task ID. Built for marketing teams, sales teams, and agencies who want to follow up with every registered lead immediately after a webinar ends — without writing a single email manually.

---

## What This Workflow Does

- **Summarizes the webinar automatically** — WayinVideo extracts a structured summary with numbered highlights from the recording so GPT has real content to reference in every email
- **Fetches all registered leads from Salesforce** — A query pulls up to 500 leads where the webinar name matches your Salesforce custom field — no manual list export needed
- **Writes a personalized email per lead** — GPT addresses each lead by first name, references their job title and company, and cites 2–3 specific webinar highlights relevant to their role
- **Sends each email via Gmail** — Every lead receives a personalized email sent from your Gmail account with your company name as the sender
- **Logs a completed Task on each Salesforce lead record** — A Task activity is created with WhoId linking it to the correct lead — so your CRM shows the follow-up was completed and when
- **Logs every send to Google Sheets** — Each row captures the webinar title, lead details, email subject, personalized intro, Salesforce Lead ID, Salesforce Task ID, sent status, and timestamp
- **Polls automatically until the summary is ready** — Waits 90 seconds then checks every 30 seconds until WayinVideo finishes processing the recording

---

## Setup Requirements

### Tools Needed
- n8n instance (self-hosted or cloud)
- WayinVideo account with API access
- OpenAI account with GPT-4o-mini API access
- Salesforce org with OAuth2 access and a `Webinar_Name__c` custom field on the Lead object
- Gmail account connected via OAuth2
- Google Sheets (one sheet with a tab named **Follow-up Log**)

### Credentials Required
- WayinVideo API key (pasted into **2. WayinVideo — Submit Summarization** and **4. WayinVideo — Get Summary Results**)
- OpenAI API key
- Salesforce OAuth2 (used in **8. Salesforce — Query Registered Leads** and **13. Salesforce — Log Email as Activity**)
- Gmail OAuth2
- Google Sheets OAuth2

&gt; ⚠️ **WayinVideo API key appears in 2 steps** — replace `YOUR_WAYINVIDEO_API_KEY` in both **2. WayinVideo — Submit Summarization** and **4. WayinVideo — Get Summary Results**. Missing either one will cause the workflow to fail.

**Estimated Setup Time: 30–40 minutes**

---

## Step-by-Step Setup

1. **Import the workflow** — Open n8n → Workflows → Import from JSON → paste the workflow JSON → click Import

2. **Get your WayinVideo API key** — Log in to your WayinVideo account → go to Account Settings → copy your API key

3. **Add your WayinVideo API key to node 2** — Open node **2. WayinVideo — Submit Summarization** → find the `Authorization` header value `Bearer YOUR_WAYINVIDEO_API_KEY` → replace `YOUR_WAYINVIDEO_API_KEY` with your actual key

4. **Add your WayinVideo API key to node 4** — Open node **4. WayinVideo — Get Summary Results** → find the same `Authorization` header → replace `YOUR_WAYINVIDEO_API_KEY` with the same key

5. **Connect OpenAI** — Open node **10. OpenAI — GPT-4o-mini Model** → click the credential dropdown → add your OpenAI API key → test the connection

6. **Verify your Salesforce custom field** — In your Salesforce org, confirm the Lead object has a field with the API name `Webinar_Name__c` that is populated at registration time. If your field has a different API name, open node **8. Salesforce — Query Registered Leads** and update the SOQL query to use your actual field name.

7. **Connect Salesforce for lead query** — Open node **8. Salesforce — Query Registered Leads** → click the credential dropdown → add Salesforce OAuth2 → complete the authorization flow in your browser

8. **Connect Salesforce for task logging** — Open node **13. Salesforce — Log Email as Activity** → click the credential dropdown → select the same Salesforce OAuth2 credential

9. **Connect Gmail** — Open node **12. Gmail — Send Follow-Up Email** → click the credential dropdown → add Gmail OAuth2 → complete the Google authorization flow

10. **Create your Google Sheet tab** — Open your Google Sheet → add a tab named exactly **Follow-up Log** → add these 10 column headers in row 1: `Webinar Title`, `Lead Email`, `Lead Name`, `Lead Company`, `Email Subject`, `Personalized Intro`, `Salesforce Lead ID`, `Salesforce Task ID`, `Sent Status`, `Sent On`

11. **Get your Google Sheet ID** — Open your Google Sheet in a browser → copy the string between `/d/` and `/edit` in the URL — this is your Sheet ID

12. **Connect Google Sheets** — Open node **14. Google Sheets — Log Follow-Up** → click the document field → replace `YOUR_GOOGLE_SHEET_ID` by selecting your spreadsheet or entering the Sheet ID manually → click the credential dropdown → add Google Sheets OAuth2 → authorize access

13. **Activate the workflow** — Toggle the workflow to Active → copy the Form URL from node **1. Form — Webinar URL + Details** → open it in a browser to submit your first webinar

---

## How It Works (Step by Step)

**Step 1 — Form: Webinar URL + Details**
You open the form URL and fill in six fields: the webinar recording URL, the webinar title (which must match the value in your Salesforce `Webinar_Name__c` field exactly), the host or speaker name, the company or brand name, the webinar date, and the CTA link for the follow-up email. Submitting the form starts the entire pipeline.

**Step 2 — HTTP: WayinVideo — Submit Summarization**
The webinar URL is sent to WayinVideo's Summarization API. WayinVideo accepts the job and returns a task ID confirming the summarization has started.

**Step 3 — Wait: 90 Seconds**
The workflow pauses 90 seconds before the first status check, giving WayinVideo time to process the recording.

**Step 4 — HTTP: WayinVideo — Get Summary Results**
A GET request checks the summarization results endpoint using the task ID. It returns the current status and, once complete, the summary text, highlights array, and tags array.

**Step 5 — IF: Summary Complete?**
This is the polling gate. If the status equals `SUCCEEDED` (YES path), the summary is ready and the workflow moves forward. If still processing (NO path), the workflow routes to **6. Wait — 30 Seconds Retry** which pauses 30 seconds then loops back to step 4. This repeats until SUCCEEDED.

**Step 6 — Wait: 30 Seconds Retry**
When the summary is not yet ready, the workflow waits 30 seconds then returns to step 4 for another check.

**Step 7 — Code: Extract Summary Data**
The summary text, numbered highlights (formatted as `1. highlight`, `2. highlight`, etc.), and tags are extracted from the WayinVideo results. All six form inputs are also packaged here. Everything is assembled into one clean object that feeds both the Salesforce query and the GPT email prompt.

**Step 8 — Salesforce: Query Registered Leads**
A SOQL query runs against your Salesforce org to fetch all leads where `Webinar_Name__c` matches the webinar title you entered in the form, with a limit of 500 leads. The results include each lead's first name, last name, email, company, and job title. Each lead becomes one email to send.

**Step 9 — AI Agent: Write Personalized Email**
GPT-4o-mini receives the full lead details (first name, last name, email, company, job title) alongside the webinar context (title, host name, company, date, CTA link, recording URL, full summary, and numbered highlights). It writes a 150–200 word email in three labeled sections: a subject line 45–55 characters long referencing the webinar topic, a 1–2 sentence personalized opening that references the lead's role or company, and the full email body starting with "Hi [FirstName]" — warm in tone, referencing 2–3 specific highlights, including the recording URL and CTA link, and ending with the host's name as the signature.

**Step 10 — OpenAI: GPT-4o-mini Model**
This is the language model powering the personalized email writing for each lead.

**Step 11 — Code: Parse Email Output**
The three labeled sections — SUBJECT_LINE, PERSONALIZED_INTRO, and EMAIL_BODY — are extracted from the GPT output using regex. Lead details from step 8 and webinar details from step 7 are also packaged for the Gmail, Salesforce, and Sheets steps. If the subject line is not found, a fallback subject using the webinar title is used.

**Step 12 — Gmail: Send Follow-Up Email**
The personalized email is sent to the lead's email address using the full email body from GPT. The sender name is set to your company name from the form. Each lead receives their own individual email — not a broadcast.

**Step 13 — Salesforce: Log Email as Activity**
A completed Task is created in Salesforce linked to the lead's record using their Salesforce Lead ID as the WhoId. The Task is marked Completed with today's date, Normal priority, and a description that includes the webinar title, email subject, and the lead's email address. This means your CRM reflects the follow-up as done immediately.

**Step 14 — Google Sheets: Log Follow-Up**
One row is appended to your Follow-up Log tab with all 10 columns: webinar title, lead email, lead full name, lead company, email subject, personalized intro, Salesforce Lead ID, Salesforce Task ID (returned by step 13), Sent Status set to Sent, and the current timestamp.

The final result is a personalized email sent to every registered lead, a completed CRM Task on every lead record, and a full send log in Google Sheets — all triggered by one form submission.

---

## Key Features

✅ **Personalized per lead using their first name, title, and company** — Every email addresses the lead by name and frames the webinar highlights around their specific role — not a mass blast
✅ **Webinar highlights referenced in every email** — GPT cites 2–3 numbered highlights from the actual webinar content — making each email feel relevant to what the lead attended
✅ **Salesforce Task logged with WhoId association** — Each completed Task is linked to the correct lead record via WhoId — your CRM shows the follow-up is done without any manual logging
✅ **Recording URL included in every email** — Every lead gets a link to rewatch the recording so they can engage further without needing a separate reminder email
✅ **Up to 500 leads processed per run** — The Salesforce SOQL query fetches up to 500 registered leads so even large webinars are covered in one form submission
✅ **Sender name set to your company** — Gmail sends each email with your company or brand name as the sender — not a generic n8n address
✅ **Salesforce Task ID captured in Google Sheets** — The sheet log includes the Task ID returned by Salesforce so you can cross-reference sends against CRM records at any time

---

## Customisation Options

**Add a retry limit to stop infinite polling** — Before node **6. Wait — 30 Seconds Retry**, add a Set step that increments a poll counter, then add a second IF check to stop after 15 polls and send a Gmail error notification to the form submitter instead of looping indefinitely.

**Use a different Salesforce field to match leads** — In node **8. Salesforce — Query Registered Leads**, edit the SOQL query to use a different field if your org does not use `Webinar_Name__c` — for example `Campaign_Name__c` or a tag field — as long as it identifies which leads attended which webinar.

**Add a Salesforce lead status update after sending** — After node **13. Salesforce — Log Email as Activity**, add a Salesforce Update step that sets the lead's Status to "Webinar Follow-Up Sent" so your sales team can filter CRM views by follow-up status.

**Add a Slack notification when all emails are sent** — After the last lead row is processed, add a Slack step that posts the webinar title and total number of emails sent to a `#marketing` or `#sales` channel so your team knows the follow-up campaign is complete.

**Change the email length** — In the system prompt of node **9. AI Agent — Write Personalized Email**, change the rule from `150-200 words` to `100-150 words` for shorter emails or `200-250 words` for more detailed follow-ups depending on your audience preference.

---

## Troubleshooting

**WayinVideo returning an error on submission:**
- Confirm `YOUR_WAYINVIDEO_API_KEY` in node **2. WayinVideo — Submit Summarization** is replaced with your actual API key — not the placeholder
- Confirm the same replacement was made in node **4. WayinVideo — Get Summary Results** — both steps require the key
- Check the execution log of node 2 for the raw error — a 401 means wrong key, a 422 means the URL format is unsupported

**Salesforce query returning zero leads:**
- Confirm the Webinar Title you entered in the form exactly matches the value stored in the `Webinar_Name__c` field on your lead records — including capitalization and spacing
- Open node **8. Salesforce — Query Registered Leads** and review the SOQL query — if your field name is different from `Webinar_Name__c`, update it to match your org's actual API field name
- Confirm the Salesforce OAuth2 credential is connected and your user has permission to query Lead records

**Gmail sending errors:**
- Confirm the Gmail OAuth2 credential in node **12. Gmail — Send Follow-Up Email** is connected and not expired — re-authorize if needed
- Check that the lead's Email field in Salesforce is populated — leads with empty email fields will cause this step to fail
- Gmail has a daily sending limit — if you are sending to more than ~500 leads in one run, consider using a transactional email service instead

**Salesforce Task not being created:**
- Confirm the Salesforce OAuth2 credential in node **13. Salesforce — Log Email as Activity** has permission to create Task records — some restricted Salesforce profiles block Task creation via API
- Check the execution log of node 13 for the raw Salesforce error — a common issue is the WhoId field not accepting Lead IDs if your org has Task configuration restrictions
- Confirm the lead ID from step 8 is being passed correctly — check the execution log of node **11. Code — Parse Email Output** to verify `leadId` is populated

**Google Sheets not logging rows:**
- Confirm `YOUR_GOOGLE_SHEET_ID` in node **14. Google Sheets — Log Follow-Up** is replaced with your actual sheet ID from the URL
- Confirm the tab is named **Follow-up Log** exactly and all 10 column headers in row 1 match exactly
- Check that the Google Sheets OAuth2 credential is connected and not expired — re-authorize if needed

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email:[info@isawow.com](info@isawow.com)
🌐 Website:[https://isawow.com](https://isawow.com)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Salesforce, Gmail, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
