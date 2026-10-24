# 🎣 Qualify and route inbound leads with GPT-5, Google Sheets, Gmail, and Slack

> ⚡ **51 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow captures leads via an n8n hosted form, validates and de-duplicates them in Google Sheets, enriches company details with Clearbit autocomplete, qualifies the lead with OpenAI, then logs results and routes follow-ups through Gmail and Slack based on Hot/Warm/Cold category.

## How it works
1. Receives a new submission from an n8n Form Trigger lead-capture form.
2. Cleans the submitted fields, validates the email format, and flags free/personal email domains.
3. Looks up the email in Google Sheets to stop processing duplicate leads.
4. Calls Clearbit’s autocomplete API to guess the company domain and merges the enrichment into the lead.
5. Sends the enriched lead details to OpenAI (GPT-5-mini via LangChain) to generate a structured lead score, category, summary, owner, and follow-up timing.
6. Appends the lead and AI qualification output to Google Sheets for tracking.
7. Routes by category: Hot sends a Slack alert plus a Gmail alert and auto-reply, Warm sends an auto-reply then waits 1 day before a nurture email, and Cold logs only without outreach.

## Setup
1. Connect your OpenAI API credentials and select the chat model used by the qualification step (gpt-5-mini by default).
2. Connect Google Sheets credentials, set the spreadsheet ID, and choose the sheet used for the duplicate lookup and the sheet used to append all leads.
3. Connect Gmail credentials and replace the internal alert recipient (your-email@example.com) with your team’s email address.
4. Connect Slack credentials and select the channel where Hot lead alerts should be posted.
5. Publish the n8n form and share or embed the generated form URL (path: /lead-capture) wherever you capture leads.

## Requirements
- REQUIREMENTS
- □ n8n Cloud or self-hosted n8n
- □ OpenAI API credentials
- □ Google Sheets credentials
- □ Gmail credentials
- □ Slack credentials
- □ A Google Sheet for storing qualified leads
- □ A webhook/form connected to the Lead Capture Webhook

## Customization
- CUSTOMIZATION
- • Adjust the AI qualification prompt to match your sales criteria.
- • Change the Hot/Warm/Cold score thresholds.
- • Customize the company enrichment and research fields.
- • Add or remove fields stored in Google Sheets.
- • Customize Slack and email alert messages.
- • Modify the follow-up message and timing.
- • Change the routing logic based on lead score or category.
- • Add your own CRM or database instead of Google Sheets.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
