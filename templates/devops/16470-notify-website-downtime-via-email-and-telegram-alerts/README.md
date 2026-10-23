# ⚙️ Notify website downtime via email and Telegram alerts

> ⚡ **6 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow runs every minute to check one or more website URLs with HTTP requests and, if a site appears down on two consecutive checks, sends an email alert and a Telegram message.

## How it works
1. Runs on a schedule trigger every minute.
2. Loads a newline-separated list of website URLs plus alert settings (wait time, Telegram chat ID, and email address), then converts the URL list into an array.
3. Splits the array to test each website individually with an HTTP request that captures the full response without failing the workflow on errors.
4. Determines whether the site is up based on the HTTP status code (up if status code is 400 or lower).
5. If the first check indicates the site is down, waits for the configured number of seconds and performs a second HTTP check for the same URL.
6. If the second check also indicates the site is down, sends a “Website Down” email via SMTP and then sends a Telegram message to the configured chat.

## Setup
1. Add SMTP email credentials (for example, Gmail SMTP on port 465) and set the from/to email addresses in the email step.
2. Create a Telegram bot with BotFather, add Telegram Bot API credentials in n8n, and set your Telegram chat ID in the workflow configuration.
3. Update the website URL list and the wait time (seconds) in the workflow configuration to match the sites you want to monitor and your preferred retry delay.

## 🔗 Nodes Used

Send Email, HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
