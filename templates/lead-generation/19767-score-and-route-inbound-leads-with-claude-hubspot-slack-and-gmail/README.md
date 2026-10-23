# 🎣 Score and route inbound leads with Claude, HubSpot, Slack, and Gmail

> ⚡ **36 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
Turn every website form submission into a scored, routed lead. Claude scores fit and intent against your ideal-customer profile, HubSpot gets the contact, Slack gets a five-second brief on hot leads, and the prospect gets an acknowledgement at any hour. The model never picks the route.

## How it works
1. Receives a new lead submission via a POST webhook.
2. Normalizes the incoming fields (name, email, company, website, message, source) and checks that an email and message are present, otherwise posting a “needs a look” alert to Slack.
3. Fetches the company website over HTTP and extracts a short, cleaned text sample from the HTML.
4. Sends the lead details and website text to the Anthropic Messages API (Claude) and requests a structured JSON response with a 0–100 score, reasons, concerns, a summary, and a recommended next step.
5. Parses Claude’s response, assigns the lead to hot/warm/cold (or “review” if parsing/refusal fails) using the configured thresholds, and timestamps the result.
6. Routes by tier: hot leads trigger a detailed Slack alert, warm and hot leads receive a Gmail acknowledgement email, and all scored leads are upserted as contacts in HubSpot.

## Setup
1. Configure the webhook URL in your lead form tool to POST JSON fields like name, email, company, website, message, and (optionally) source.
2. Add an Anthropic API key as an HTTP Header Auth credential (x-api-key) and attach it to the Claude HTTP request.
3. Connect your Slack credentials and set the target channel name in the workflow settings.
4. Connect your HubSpot app token credentials for contact upserts.
5. Connect your Gmail credentials for sending acknowledgement emails and update the company name, ICP text, thresholds, and reply-within promise in the Settings values.

## Requirements
- An Anthropic API key stored as a Header Auth credential named x-api-key, plus Slack, HubSpot (private app token) and Gmail credentials. Core nodes only, so it runs on n8n Cloud or self-hosted.

## Customization
- Swap HubSpot for Pipedrive, Salesforce or a Google Sheet (fields needed: name, email, company, websiteUrl, score, tier, summary). Change the thresholds and the ideal-customer paragraph in the Settings node. The scoring call is a plain HTTP Request, so another model provider drops in; keep JSON output or the tier code sends everything to review. Nothing AI-written reaches the prospect; add a review step before the send if you want personalised replies.

## Additional info
Built by Amplence. The costs, the decision boundary and the reasoning behind each node are explained in the companion article: https://amplence.com/blog/n8n-lead-qualification-workflow

Want it wired into your own CRM? We build and maintain n8n workflows: https://amplence.com/services/n8n-automation-services
All our free templates as JSON on GitHub: https://github.com/muneeb-ashraf/n8n-workflow-templates

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, HubSpot, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
