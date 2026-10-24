# ⚙️ Monitor service uptime and send incident alerts via HTTP checks and Telegram

> ⚡ **13 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow runs every five minutes to check a configured health URL and sends a Telegram alert when the endpoint returns an HTTP error status.

## How it works
1. Runs every 5 minutes on a schedule.
2. Loads the target URL, service name, and Telegram chat ID from a configuration step.
3. Sends an HTTP request to the URL with a 10-second timeout and captures the full response without failing the workflow on errors.
4. Checks whether the HTTP status code is greater than 399.
5. Sends a Markdown-formatted Telegram message with the service name, status code, URL, and check timestamp when the status indicates a failure.
6. Ends silently without sending anything when the status indicates the service is up.

## Setup
1. Create a Telegram bot with BotFather and add your Telegram bot token as an n8n Telegram credential.
2. Update the URL, service name, and Telegram chat ID in the configuration step (or map them to the HTTP_URL, SERVICE_NAME, and TELEGRAM_CHAT_ID environment variables).
3. Select your Telegram credential in the Telegram alert step and activate the workflow.

## Requirements
- n8n (self-hosted or cloud - built and tested on 2.35.x) and a Telegram bot token from BotFather.

## Customization
- Change the interval on the Schedule Trigger, add more items to the Config node to monitor several services at once, or replace the Telegram node with Slack, Discord or email.

## Additional info
Also published as a free, MIT-licensed workflow with setup notes at https://github.com/gregorymammone-coder/n8n-uptime-telegram-alert

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
