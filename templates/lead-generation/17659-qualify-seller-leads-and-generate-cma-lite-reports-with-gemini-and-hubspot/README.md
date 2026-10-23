# 🎣 Qualify seller leads and generate CMA-lite reports with Gemini and HubSpot

> ⚡ **18 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
When a seller asks what their home is worth, this workflow generates a professional CMA-lite valuation report in Google Docs using Gemini AI, emails them the link within minutes, creates a HubSpot deal in the right pipeline stage, and alerts you instantly for hot sellers.

## How it works
1. A seller submits their property details via your website form, landing page, or Typeform — name, email, phone, address, property type, bedrooms, condition, timeline, reason for selling, and expected price.
2. Gemini AI generates a complete CMA-lite valuation report covering six sections: Executive Summary, Estimated Value Range, Key Value Factors, Market Context, Pricing Strategy, and Recommended Next Steps.
3. The report is saved as a Google Docs document and set to "Anyone with the link can view."
4. An instant personalized email sends to the seller with the Google Docs report link within minutes of their submission.
5. The seller is scored as Hot, Warm, or Cold based on timeline and selling motivation.
6. A contact is created or updated in HubSpot CRM, and a deal is created in the correct pipeline stage — Hot sellers land in Appointment Scheduled (30-day close), Warm in Qualified to Buy (90-day close), Cold in Presentation Scheduled (180-day close).
7. Everything logs to Google Sheets as a backup record, including the Google Docs URL and HubSpot deal ID.
8. Hot sellers trigger an instant agent notification email with the full seller profile, estimated value range, report link, and a listing consultation booking link everything needed to act immediately.
9. An optional Slack alert fires alongside the email notification for Hot sellers.

## Setup
1. Add credentials for Google Gemini (PaLM/Gemini API), Google Docs OAuth2 (with Google Drive API enabled), Gmail OAuth2, HubSpot app token, and Google Sheets OAuth2 (plus Slack OAuth2 if you want Slack alerts).
2. If using Typeform instead of the webhook, connect Typeform credentials, enable the Typeform trigger, and disable the webhook trigger.
3. Google Cloud Console setup: Enable both the Google Docs API and Google Drive API in your Google Cloud project before connecting the Google Docs credentials. Go to console.cloud.google.com → APIs & Services → Enable APIs → search for and enable the Google Docs API and Google Drive API separately.
4. Google Drive folder setup: Create a dedicated folder in Google Drive named Valuation Reports to keep all generated reports organized. Note the folder ID from the URL for reference — all reports save to your Drive root by default.
5. HubSpot custom properties: Three custom contact properties must exist in HubSpot before the workflow runs. Go to HubSpot → Settings → Properties → Contact Properties → Create Property and create these as Single-line text: lead_score (internal name: lead_score), Property Interest (internal name: property_interest), Portal Source (internal name: portal_source).
6. Google Sheet setup: Create the Seller Valuation Database sheet and link its URL to the Sheets nodes. Required columns in order: recordId, Timestamp, Seller Name, Email, Phone, Property Address, Property Type, Bedrooms, Bathrooms, Condition, Timeline, Reason for Selling, Expected Price, Seller Score, Score Reasoning, Google Docs URL, Email Sent, HubSpot Contact ID, HubSpot Deal ID, Agent Notified.
7. Replace placeholders like YOUR_GOOGLE_CALENDAR_BOOKING_URL and YOUR_AGENT_EMAIL@EXAMPLE.COM, and set the Slack channel to your preferred destination (for example #hot-leads).

## Customization
- Edit the AI scoring rules in the Generate CMA-Lite Report Gemini node to adjust Hot, Warm, or Cold thresholds for your market — timeline is the primary scoring factor.
- Edit or add report sections in the Gemini system prompt — the six default sections can be modified, removed, or extended with additional sections like neighborhood analysis or renovation impact.
- Change the dynamic close date offsets in the Parse AI Output node — default is Hot: 30 days, Warm: 90 days, Cold: 180 days.
- Change the acknowledgment email tone in the Gemini system prompt — adjust formality, language, or translate to another language.
- Enable the Typeform trigger for a richer conversational seller intake experience — requires a permanent public n8n URL and Typeform API credentials.
- Add additional HubSpot deal properties in the Create Seller Deal node — deal owner, pipeline stage, custom properties.
- Disable HubSpot by disconnecting the HubSpot nodes — Google Sheets logging continues independently.

## Additional info
Typeform field ref mapping. The Extract & Normalize Property Details node maps Typeform answers using field refs specific to the included Seller Valuation Request form. If you create your own Typeform, fire one test submission, inspect the answers array in n8n's execution panel, and update the refMap constants in the Extract node to match your form's field refs. The webhook path (default) requires no such mapping — field names are set by the form tool.

HubSpot deal stages. The workflow uses HubSpot's default pipeline stage internal names — appointmentscheduled, qualifiedtobuy, presentationscheduled. If your HubSpot account uses a custom pipeline, go to HubSpot → Settings → Objects → Deals → Pipelines and find your stage internal names, then update the dealStageMap in the Parse AI Output node.

Google Docs sharing. The Share Document Publicly HTTP Request sets the document to "Anyone with the link can view" — the seller can open the report without a Google account. If you prefer restricted sharing, change the Drive API permission role from reader to specific user emails instead.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Typeform Trigger, HubSpot

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
