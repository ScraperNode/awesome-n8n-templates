# 🎣 Route insurance quote leads with OpenAI, Airtable, Sheets, Teams, Slack and Twilio

> ⚡ **569 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow receives insurance quote submissions via a webhook, normalizes and deduplicates them against Airtable and/or Google Sheets, uses OpenAI to score and classify the lead, then routes hot/warm leads to Microsoft Teams and/or Slack (plus Twilio SMS for hot leads) and logs the quote.

## How it works
1. Receives an insurance quote request through a webhook endpoint.
2. Applies configurable settings (log destination, notification channels, thresholds) and normalizes the incoming form payload into a standard quote format.
3. Checks Airtable and/or Google Sheets for recent matching email/phone/hash entries to detect duplicate submissions.
4. If the quote is new and has contact details, sends the quote data to OpenAI to generate a lead score, priority, underwriting flags, missing info, and recommended next steps.
5. Routes the quote as hot, warm, or cold based on the score/priority and prepares formatted alert messages for Microsoft Teams and Slack.
6. Posts hot/warm alerts to Microsoft Teams and/or Slack, and sends a Twilio SMS to an agent for hot leads.
7. Creates a quote log record in Airtable and/or appends a row to Google Sheets, then returns a JSON response with logging and notification status.

## Setup
1. Configure the webhook URL in your form tool or website so it POSTs submissions to this workflow’s production webhook endpoint.
2. Update the configuration values in the settings code (Airtable base/table, Google Sheet ID/tab, Teams incoming webhook URL, Slack channel, Twilio phone numbers, score threshold, and duplicate window).
3. Add credentials for the services you enable: OpenAI API, Airtable Personal Access Token, Google Sheets OAuth2, Slack OAuth2, and Twilio.
4. Ensure your Airtable table and/or Google Sheets tab includes columns that match the fields this workflow writes (for example Email, Phone, Received At, Lead Score, Priority, and Status).

## Requirements
- n8n Cloud or self-hosted n8n instance
- OpenAI API key configured in n8n
- Airtable Personal Access Token and/or Google Sheets OAuth2 (based on QUOTE_LOG)
- Microsoft Teams incoming webhook and/or Slack OAuth2 (based on NOTIFY_CHANNELS)
- Twilio account with an SMS-enabled phone number
- A quote form (Typeform, JotForm, Tally, or custom) that can POST to a webhook

## Customization
- Set QUOTE_LOG to airtable, sheets, or both
- Set NOTIFY_CHANNELS to teams, slack, or both
- Edit field mapping aliases in Normalize Quote Data
- Change HOT_LEAD_SCORE_THRESHOLD and DUPLICATE_WINDOW_HOURS in Configure Quote Settings
- Tune the AI prompt in AI Quote Pre-Qualification
- Adjust routing rules in Analyze AI Quote Response

## Additional info
This template targets insurance agencies that lose leads to slow follow-up. Buyers choose their stack without buying multiple templates: Teams and/or Slack for alerts, Airtable and/or Google Sheets for logging. Defaults match the Gumroad product listing (Teams + Airtable) so docs stay consistent across both portals.

## 🔗 Nodes Used

Airtable, Google Sheets, HTTP Request, Slack, Twilio, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
