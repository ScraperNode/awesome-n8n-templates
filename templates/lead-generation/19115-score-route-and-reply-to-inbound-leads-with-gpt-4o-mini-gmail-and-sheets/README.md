# 🎣 Score, route, and reply to inbound leads with GPT-4o-mini, Gmail and Sheets

> ⚡ **6 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow receives inbound leads via a webhook, filters spam, and uses OpenAI GPT-4o-mini to score and draft replies. It routes hot leads to Gmail and Telegram alerts, logs all leads to Google Sheets, and sends a weekly Telegram digest from the sheet.

## How it works
1. Receives a POST request from a form via a webhook and immediately returns a JSON acknowledgment to the submitter.
2. Normalizes incoming lead fields (name, email, message, etc.) and filters out spam and empty submissions using email validation, disposable-domain checks, a honeypot field, and a required message.
3. Sends the cleaned lead details to OpenAI (GPT-4o-mini) to score budget, authority, need, and timeline against a structured JSON schema and to generate a summary, reasons, language code, and a suggested reply.
4. Calculates a transparent 0–100 lead score from the AI sub-scores and adds bonus points for a business email domain and a provided phone number.
5. Routes the lead into Hot (≥70), Warm (40–69), or Cold (<40) and logs the lead (with tier, score, summary, reasons, and next steps) to a Google Sheets “Leads” tab.
6. For Hot leads, sends a Gmail alert and a Telegram message to the sales team and creates a Gmail draft reply to the lead; for Warm leads, creates only the Gmail draft reply.
7. If AI scoring fails, flags the lead for manual review, appends it to Google Sheets with tier “Review,” and pings Telegram with the error details.
8. Every Monday at 9:00, reads the last 7 days of rows from Google Sheets, composes a weekly summary (counts by tier, average score, and top hot leads), and sends it to Telegram.

## Setup
1. Add OpenAI credentials and customize the GPT-4o-mini system message to describe your business, ideal customer, and qualification rules.
2. Add Gmail credentials and replace the alert recipient email address used for hot-lead notifications.
3. Add Telegram credentials and set your Telegram chat ID for hot-lead pings, manual-review alerts, and the weekly digest.
4. Add Google Sheets credentials, set the spreadsheet ID, and create a “Leads” sheet with columns matching the fields written by the logging steps (for example: Timestamp, Lead ID, Name, Email, Company, Phone, Score, Tier, Next step, AI summary, Reasons, Budget, Timeline, Source, Message).
5. Copy the webhook URL for the “lead-intake” endpoint and configure your form tool to POST submissions to it (including a message field and optional honeypot field).

## Requirements
- OpenAI API key (GPT-4o-mini: fractions of a cent per lead)
- Google credentials with Gmail and Google Sheets scopes
- A Google Sheet with a "Leads" tab and this header row: Timestamp | Lead ID | Name | Email | Company | Phone | Score | Tier | Next step | AI summary | Reasons | Budget | Timeline | Source | Message
- Telegram bot token and your chat ID (free, via @BotFather)
- Any form builder that can POST JSON to a webhook (Tally, Typeform, Webflow, WordPress, Framer, Jotform or a plain HTML form)

## Customization
- Thresholds live in the Switch (Hot 70+, Warm 40-69); weights and bonuses in the "Compute Lead Score" Code node
- Map extra form fields in "Set Lead Fields"; adjust the spam rules in the Filter (add your own honeypot field name)
- Swap Telegram for Slack or SMS, send the draft automatically once you trust the replies, change the digest day or time, or switch the model to GPT-4o for harder cases

## Additional info
The workflow is built to run unattended: the form always gets an instant reply, spam never reaches the AI, the final score is plain arithmetic over the model's four criteria, and a failed AI call flags the lead for manual review instead of dropping it. Drafts are never sent automatically - review them in Gmail and hit send.

Test it before wiring up your form: curl -X POST https://YOUR-N8N/webhook/lead-intake -H "Content-Type: application/json" -d '{"name":"Anna Berg","email":"anna@bergtrading.no","company":"Berg Trading","phone":"+47 900 00 000","budget":"5k EUR","timeline":"this month","message":"We need a Shopify store with ERP sync."}'

I build extended versions for real businesses (CRM sync with HubSpot or Pipedrive, lead enrichment, duplicate detection, multi-brand intake), async and without calls: https://www.fiverr.com/shopdevlab/set-up-fix-or-build-your-n8n-workflow-on-your-server-async-no-calls
Stuck on an error in any n8n workflow? I fix one error within 24 hours: https://www.fiverr.com/shopdevlab/fix-one-error-in-your-n8n-workflow-within-24-hours

## 🔗 Nodes Used

Google Sheets, Webhook, Telegram, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
