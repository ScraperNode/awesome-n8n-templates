# 🔧 Source and approve emergency equipment rentals with Telegram, Gmail and Azure OpenAI

> ⚡ **54 views** · 🔧 [Miscellaneous](../)

## Description

## Quick Overview
This workflow listens for emergency equipment breakdown requests via Telegram, emails multiple rental vendors through Gmail to request quotes, uses Azure OpenAI to compare responses, and sends the project manager an approval email with Approve/Reject links before notifying the vendor and foreman.

## How it works
1. Triggers when a foreman sends a /breakdown command to a Telegram bot.
2. Parses and normalizes the request details (machine type, site, duration, urgency) and generates a unique breakdown reference.
3. Sends a quote-request email to each vendor via Gmail and waits for the vendor reply window to close.
4. Aggregates collected vendor quotes, filters out unavailable options, and sends the shortlist to Azure OpenAI to produce a ranked recommendation and HTML comparison table.
5. Emails the project manager via Gmail with the comparison and one-click approval and rejection links, then waits for the response.
6. If approved, emails a booking confirmation to the recommended vendor and sends a Telegram confirmation message to the foreman; if rejected, emails the project manager a manual-review notice.
7. If the workflow errors at any point, posts an error alert to a designated Slack channel.

## Setup
1. Add Telegram Bot credentials for the Telegram trigger and ensure the /breakdown command is configured for your bot.
2. Add Gmail OAuth2 credentials and update all Gmail nodes with the correct sender account and real recipient addresses (vendors and project manager).
3. Add Azure OpenAI credentials (endpoint, deployment/model, and API key) for the quote analysis step.
4. Replace the placeholder vendor names and email addresses in the vendor list with your actual suppliers and ensure vendor replies are captured and mapped into the workflow’s quote aggregation.
5. Replace the placeholder approval webhook base URL (YOUR-N8N-INSTANCE) with your live n8n domain so the Approve/Reject links route back to your instance.
6. Add Slack OAuth2 credentials and set the target channel for workflow error notifications.

## 🔗 Nodes Used

Slack, Telegram, Telegram Trigger, Gmail, AI Agent, Azure OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
