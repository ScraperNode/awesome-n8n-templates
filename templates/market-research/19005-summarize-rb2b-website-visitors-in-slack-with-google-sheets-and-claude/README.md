# 📊 Summarize RB2B website visitors in Slack with Google Sheets and Claude

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow captures RB2B-identified website visitors to Google Sheets and sends a daily morning Slack digest summarizing yesterday’s visits using Anthropic Claude, including top pages and recommended follow-ups.

## How it works
1. Receives a POST webhook from RB2B each time an identified visitor is detected.
2. Appends the visitor details (name, company, email, page, referrer, and timestamp) to a Google Sheets “Visitors” sheet.
3. Runs every morning on a schedule and loads all logged visitors from Google Sheets.
4. Filters the rows to keep only visits from yesterday and aggregates them into a single payload.
5. Sends the aggregated visit data and your focus instructions to Anthropic Claude to produce a structured summary, top pages with counts, and outreach recommendations.
6. Posts the formatted digest (summary and follow-up list) to the configured Slack channel.

## Setup
1. In RB2B, add an n8n webhook integration and paste in the workflow’s Production webhook URL for the `rb2b-visitor` endpoint.
2. Connect your Google Sheets account, replace `YOUR_GOOGLE_SHEET_ID`, and ensure a “Visitors” sheet exists with columns that match the fields being appended.
3. Connect your Anthropic credential (Claude) and optionally adjust the model and temperature.
4. Connect your Slack credential and set the target channel and focus text in the “Config (edit me)” values.

## Requirements
- RB2B account with the n8n integration enabled
- Google Sheets workbook with a "Visitors" sheet
- Anthropic API key
- Slack workspace and permission to post to the target channel

## Customization
- Change the schedule trigger time to match when your team starts the day
- Describe the visitors you care about in the focus statement in Config
- Swap Claude for any other chat model, the rest of the workflow is unchanged
- Add a Filter after the webhook to log only the pages you care about
- Send the digest by email or Teams instead by swapping the final node

## Additional info
RB2B sends webhook data only while your account is active, and business email is available only on paid tiers. The digest still works if you have company-level data but no email address.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Schedule Trigger, Filter, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
