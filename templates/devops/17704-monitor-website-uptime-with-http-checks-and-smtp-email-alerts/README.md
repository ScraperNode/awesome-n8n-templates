# ⚙️ Monitor website uptime with HTTP checks and SMTP email alerts

> ⚡ **14 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow runs every five minutes to check a specified website URL with an HTTP request and sends an email alert via SMTP whenever the response status code is not 200.

## How it works
1. Runs every 5 minutes on a schedule.
2. Sets the website URL to monitor and the email address to use for alerts.
3. Sends an HTTP GET request to the monitored URL and captures the full response, including the status code.
4. Checks whether the returned HTTP status code is not 200.
5. Sends a plaintext downtime email with the URL, status code, and current timestamp to the configured address.

## Setup
1. Add an email/SMTP credential (Gmail, SendGrid, Postmark, or any provider supported by n8n's Send Email node) and select it in the Send Downtime Alert step.
2. Open the Config node and update the monitorUrl and alertEmail values to match the website you want to monitor and the address that should receive alerts.
3. Confirm the schedule interval in the trigger node (default: every 5 minutes), save, and activate the workflow so monitoring runs automatically in the background.

## Requirements
- n8n instance (self-hosted or n8n Cloud)
- SMTP/email credential supported by n8n's Send Email node (Gmail, SendGrid, Postmark, or custom SMTP)
- A URL you want to monitor

## Customization
- Change the check interval by editing the Schedule Trigger node (default: every 5 minutes)
- Swap the Send Email node for Slack/Telegram/Discord — reuse the same status code, URL, and timestamp values
- Monitor multiple URLs by duplicating the Config → Check Website → If branch

## 🔗 Nodes Used

Send Email, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
