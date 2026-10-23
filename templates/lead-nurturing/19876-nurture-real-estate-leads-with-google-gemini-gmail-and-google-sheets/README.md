# 💬 Nurture real estate leads with Google Gemini, Gmail, and Google Sheets

> ⚡ **4 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow adds real-estate leads to a 5-touch Gmail drip campaign, uses Google Gemini to generate and classify all five emails upfront, sends them automatically on schedule, detects replies and stops the sequence instantly, and delivers a morning digest of all active. 

## How it works
1. Receives a new lead via a webhook request (or an optional Google Sheets row-added trigger) and normalizes the lead and property fields into a consistent format.
2. Uses Google Gemini to pre-generate five personalized email subjects and bodies based on the lead, property address, and agent details.
3. Creates a new sequence row in Google Sheets (Active Sequences) with the generated email content and sends Touch 1 via Gmail, then applies a Gmail label and stores the Gmail thread ID back in the sheet.
4. Waits the configured number of days between touches, checks the current sequence status in Google Sheets, and sends Touches 2–5 via Gmail only if the sequence is still active, updating the sheet and applying the Gmail label after each send.
5. Monitors Gmail for replies on the labeled threads, fetches the full thread from the Gmail API, and extracts the latest reply text.
6. Uses Google Gemini to classify the reply sentiment (Hot, Neutral, or Unsubscribe), matches the reply to the active sequence (by thread ID or sender email), updates the sequence as Responded in Google Sheets, emails the agent a notification, and logs the event to a Sequence Log sheet.
7. Runs daily on a schedule to pull all sequences from Google Sheets, builds an HTML digest of active and responded sequences, emails it to the agent via Gmail, and logs the digest to a Daily Digest Log sheet.

## Setup
1. Create and connect credentials for Gmail OAuth2, Google Sheets OAuth2, and a Google Gemini (PaLM) API key.
2. Create a Gmail label (for example, "drip-sequence") and update the workflow’s label configuration to match the label used by the Gmail trigger and label-applying steps.
3. Create a Google Sheets spreadsheet with tabs/columns matching the workflow outputs (Active Sequences, Sequence Log, and Daily Digest Log) and fill in the target Spreadsheet ID and sheet/tab references in all Google Sheets steps.
4. Update the agent configuration values (agent name, agent email, and the touch timing offsets) in the sequence configuration sections, and set the agent notification recipient email in the reply notification email.
5. If using the webhook entry point, copy the production webhook URL and configure your lead source to POST leadName/leadEmail/propertyAddress (and optional property details) to that endpoint.

## Requirements
- Gmail label setup (required before first use): Create a label named drip-sequence in Gmail before activating. Go to Gmail → Settings → See all settings → Labels → Create new label → name it drip-sequence. This label is applied to every outgoing sequence email so incoming replies are detectable by the Gmail Trigger. The label name must exactly match the GMAIL_LABEL value in the Configuration node.
- Google Sheets setup: Create a Drip Campaign Manager sheet template and link its ID to all Sheets nodes. Three tabs are required. Tab 1 — Active Sequences — with these columns: Sequence ID, Lead Name, Email, Phone, Property Address, Property URL, Property Description, Lead Background, Touch 1 Subject, Touch 1 Body, Touch 2 Subject, Touch 2 Body, Touch 3 Subject, Touch 3 Body, Touch 4 Subject, Touch 4 Body, Touch 5 Subject, Touch 5 Body, Current Touch, Status, Start Date, Last Touch Date, Thread ID, Reply Received, Reply Sentiment, Agent Notified, Sequence Label. Tab 2 — Sequence Log — with columns: Date, Sequence ID, Lead Name, Touch Number, Email Subject, Status, Notes. Tab 3 — Daily Digest Log — with columns: Digest Date, Active Count, Completed Count, Responses Today, Digest Sent.
- Before going live: Update AGENT_NAME and AGENT_EMAIL in the Section A Configuration node. Update AGENT_EMAIL in the Section C Daily Digest Configuration node — keep both in sync. Confirm the Gmail label drip-sequence exists and matches GMAIL_LABEL in the Configuration node.

## Customization
- Adjust wait days between touches in the Configuration node — SEQUENCE_DAYS_2 through SEQUENCE_DAYS_5 — without any workflow changes.
- Edit the Gemini system prompt to change the strategic angle of any touch, adjust tone, change email length, or translate the entire sequence to another language.
- Stop any sequence at any time by setting Status = Stopped in the Active Sequences sheet — the loop exits cleanly on the next check.
- Edit pre-generated email content directly in Google Sheets before a touch sends — the workflow reads from Sheets at send time, not from the original Gemini output.
- Chain from any QualMatic lead qualification template (e.g., Templates #5, #6, and #10) — send an HTTP POST request to the Section A webhook URL with leadName, leadEmail, propertyAddress, propertyDescription, and leadBackground to add a Hot lead automatically.
- Add a sixth touch by extending the Prepare Remaining Touches Code node with a sixth item and adding SEQUENCE_DAYS_6 to the Configuration node.

## Additional info
Pre-generation pattern. All five emails are generated by Gemini at the start of the sequence and stored in Google Sheets. Subsequent touches read their pre-written content from Sheets rather than calling Gemini again — one API call delivers the entire 21-day sequence. This means the sequence continues reliably even if the Gemini API is temporarily unavailable on Day 14 or Day 21.

Editable before sending. Because all five emails are stored in Google Sheets immediately after generation, the agent can review and edit any email before it sends. Open the Active Sequences sheet, find the lead's row, and edit the Touch Subject or Body columns — the workflow reads the updated content at send time.

Reply detection via Thread ID. The workflow stores the Gmail Thread ID when Touch 1 sends. When a reply arrives, it is matched to the correct sequence by Thread ID — more reliable than email address matching, which can fail with aliases or forwarded addresses.

Loop architecture. Touches 2–5 are processed by a Split In Batches loop — one batch per touch. Each batch waits its configured number of days, checks the current sequence status in Sheets, and sends only if the status still matches the expected previous touch. If a lead has replied or the sequence was manually stopped, the loop exits without sending further emails.

Manual sequence stop. Set Status = Stopped in the Active Sequences sheet at any time. The loop's status check will detect this on the next iteration and exit cleanly — no further emails send. The agent does not need to modify the workflow.

Previous QualMatic Templates. Any of the following QualMatic templates can be used as a source for the webhook in Section A.

Template#5
https://n8n.io/workflows/17258-qualify-facebook-lead-ads-and-send-follow-ups-with-gemini-gmail-and-sheets/

Template#6
https://n8n.io/workflows/17409-qualify-inbound-real-estate-leads-from-gmail-with-gemini-and-hubspot/

Template#10
https://n8n.io/workflows/18329-match-new-property-listings-to-buyer-leads-with-gemini-gmail-and-sheets/

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Gmail, Gmail Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
