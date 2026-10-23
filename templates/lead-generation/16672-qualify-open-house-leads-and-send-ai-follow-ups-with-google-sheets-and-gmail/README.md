# 🎣 Qualify open house leads and send AI follow-ups with Google Sheets and Gmail

> ⚡ **27 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
When a visitor signs in at your open house, this workflow instantly scores their buying intent using Gemini AI, sends a personalized follow-up email via Gmail, logs every visitor to Google Sheets, and alerts the agent for hot leads only.


## How it works
1. A visitor signs in via your Google Form at the open house.
2. Their details — name, email, phone, budget, timeline, and buying intent — are captured automatically.
3. AI (Gemini) scores them as Hot, Warm, or Cold based on their responses and drafts a personalized follow-up email in the same step.
4. A tailored thank-you and next-step email sends immediately via Gmail.
5. Every visitor is logged to Google Sheets with their score, reasoning, and message sent.
6. If a lead scores Hot, the agent receives an instant notification email — and optionally a Slack alert — so they can prioritize personal outreach right away.

## Setup
1. Connect credentials for Google Sheets (trigger and append), Google Gemini (PaLM API), and Gmail (to send visitor follow-ups and agent notifications).
2. Set the Google Sheets Trigger document and sheet to your sign-in responses sheet, and map the expected column headers (Full Name, Email Address, Phone Number, property, budget, timeline, intent, Timestamp).
3. Set the destination Google Sheets document and “Leads” sheet for logging, and ensure it has columns matching the appended fields (including Lead Score, Score Reasoning, Email Subject, and Agent Notified).
4. Replace the placeholder agent email address in the Hot lead notification Gmail step.
5. (Optional) Connect a Slack OAuth credential and set the target channel (for example, #hot-leads), or disable the Slack notification if you don’t need it.

## Requirements
- Required credentials: Google Sheets OAuth2, Gmail OAuth2, Gemini API key, Slack OAuth2 (optional — for agent notification only)
- Google Form setup: Create a Google Form with these fields before connecting the trigger: Full Name (short answer), Email Address (short answer), Phone Number (short answer), Which property are you interested in? (short answer), What is your budget range? (short answer or multiple choice), What is your buying timeline? (multiple choice), and How would you describe your buying intent? (multiple choice). Link the form to a Google Sheet response tab — the workflow trigger listens to this sheet.
- Google Sheet setup: Copy the Open House Sign-In Log sheet template and link its ID to both the Append and Update Sheets nodes. The sheet requires these columns in order: recordId, Timestamp, Visitor Name, Email, Phone, Property Address, Budget, Timeline, Buying Intent, Lead Score, Score Reasoning, Email Subject, and Agent Notified.
- Replace the placeholder email in "Notify Agent — Hot Lead" with the agent's real email address.
- Confirm form field names in your Google Form exactly match the expressions in the "Extract Visitor Details" node — if you rename any field, update the matching expression too.

## Customization
- Edit the AI prompt in "Qualify & Draft Follow-Up" to adjust scoring criteria, tone, or language
- Add Warm lead agent notifications by duplicating the Hot lead branch and changing the IF condition
- Extend the Google Form with additional qualification questions and map them in "Extract Visitor Details"
- Replace Gmail agent notification with Slack only by disabling the Gmail notify node and enabling the Slack branch
- Adjust the trigger poll time (default: 1 minute) to match your open house pace

## Additional info
1. Slack is optional. If you don't have Slack credentials, leave that node disconnected — the Gmail agent notification fires independently and is unaffected.
2. AI fallback is built in. If Gemini fails to respond or returns malformed output, a backup message is sent automatically, so no open house visitor is ever missed.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Google Sheets Trigger, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
