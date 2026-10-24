# 🎣 Qualify inbound leads with OpenAI, Slack, and Google Sheets

> ⚡ **5 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow receives inbound leads via a webhook, normalizes common form fields, and uses OpenAI to score and tier each lead as HOT, WARM, or NURTURE. It logs the result to Google Sheets, sends a tier-specific email auto-reply, and alerts a Slack channel for HOT leads.

## How it works
1. Receives an inbound lead submission via a POST webhook.
2. Normalizes incoming fields (name, email, company, website, message, budget, timeline, and source) into a consistent structure.
3. Sends the normalized lead details to OpenAI to generate JSON scores (fit, budget, urgency, overall), a tier, reasoning, next action, and red flags.
4. Merges the AI qualification results back into the lead record and routes the lead based on the tier.
5. For HOT leads, posts an alert to Slack, appends the lead to the “Hot Leads” tab in Google Sheets, and sends a HOT auto-reply email.
6. For WARM and NURTURE leads, appends the lead to the matching Google Sheets tab and sends the corresponding tier-specific auto-reply email.
7. Returns a JSON response to the webhook caller confirming success and the assigned tier.

## Setup
1. Add an OpenAI credential and customize the system prompt ICP/scoring rules in the OpenAI step.
2. Add Google Sheets OAuth credentials, set your spreadsheet ID, and ensure it contains tabs named “Hot Leads”, “Warm Leads”, and “Nurture” with matching columns.
3. Add Slack credentials and replace the placeholder Slack channel ID for HOT lead alerts.
4. Configure SMTP/email sending credentials, and update the fromEmail address and the “YOUR NAME” placeholders in the email templates.
5. Copy the production webhook URL and configure your website or CRM form to send lead submissions to it via POST.

## Requirements
- An OpenAI API account (for lead scoring)
- A Google Sheets account with a spreadsheet containing tabs named "Hot Leads", "Warm Leads" and "Nurture"
- A Slack workspace (for HOT-lead alerts)
- An SMTP / email-sending account (for the auto-replies)

## Customization
- Edit the OpenAI system prompt to match your ICP and scoring rules
- Adjust the HOT/WARM/NURTURE thresholds in the "Route by Tier" node
- Rewrite the three tier-specific auto-reply emails in your own voice
- Point the webhook at any website form or CRM

## Additional info
Built by Operstead. A fuller version with a step-by-step setup guide and an expanded prompt library is available at https://operstead.gumroad.com/l/ai-lead-qualifier

## 🔗 Nodes Used

Send Email, Google Sheets, Slack, Webhook, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
