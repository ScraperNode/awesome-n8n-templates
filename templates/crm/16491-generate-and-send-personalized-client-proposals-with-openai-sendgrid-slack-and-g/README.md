# 🤝 Generate and send personalized client proposals with OpenAI, SendGrid, Slack, and Google Sheets

> ⚡ **122 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow accepts proposal requests via webhook or an hourly schedule, normalizes and validates the client data, uses OpenAI to generate a tailored proposal with pricing, then sends it via SendGrid, logs the request to Google Sheets, notifies a Slack channel, and returns a webhook response.

## How it works
1. Receives a proposal request from a webhook POST (or runs hourly on a schedule) and maps incoming fields into a consistent client schema.
2. Validates required fields, converts the budget to a number, and assigns a budget tier for pricing.
3. If required data is missing, sends a SendGrid email to the requester listing the validation errors.
4. Routes valid requests by client type (startup, enterprise, agency, nonprofit, or default) and applies conditional pricing and discounts to build line items and totals.
5. Uses OpenAI (GPT-4o-mini) to generate a seven-section, personalized proposal based on the client details, project scope, template context, and pricing.
6. Formats the generated proposal into a branded HTML email with an investment breakdown table.
7. Sends the proposal via SendGrid, appends a tracking row to Google Sheets, posts a Slack notification, and returns a JSON success response to the webhook caller.

## Setup
1. Add an OpenAI API credential for the OpenAI chat model used to generate the proposal.
2. Provide SendGrid authorization (for example, a Bearer API key header) and replace the default sender details (like proposals@yourcompany.com) in both SendGrid HTTP requests.
3. Replace YOUR_SHEET_ID in the Google Sheets append URL and ensure your Google Sheets request is authenticated (OAuth access token or equivalent) and the Proposals sheet/tab and columns exist.
4. Replace the Slack incoming webhook URL (YOUR/SLACK/WEBHOOK) with your own Slack webhook endpoint.
5. If using the webhook trigger, copy the production webhook URL for /proposal-request and configure your CRM or form to POST the expected fields (clientName, clientEmail, projectScope, servicesNeeded, budget, timeline, clientType, and industry).

## 🔗 Nodes Used

HTTP Request, Webhook, Schedule Trigger, Filter, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
