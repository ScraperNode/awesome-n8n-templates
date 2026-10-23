# 🔒 Monitor website uptime and SSL expiry with Cert Spotter and Telegram alerts

> ⚡ **50 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
This workflow monitors website uptime every 5 minutes and SSL certificate expiry daily at 8:00, sending Telegram alerts only when a site changes state (down/recovered) or when a certificate is nearing expiration using Cert Spotter certificate transparency data.

## How it works
1. Runs every 5 minutes on a schedule to check each configured website URL.
2. Sends an HTTP request to each site with a 10-second timeout and captures the HTTP status or network error.
3. Compares the current result to the last saved state and only creates an alert when a site goes down (error/timeout/status ≥ 500) or recovers.
4. Sends the uptime state-change alert message to a Telegram chat.
5. Runs daily at 8:00 to extract domains from the same site list and query Cert Spotter for the newest issued SSL certificate expiry date.
6. Calculates days until expiry and sends a Telegram warning at 21 days and a critical alert at 7 days (or flags domains with missing certificate data).

## Setup
1. Add Telegram credentials in n8n and replace `YOUR_TELEGRAM_CHAT_ID` in both Telegram nodes with your chat ID.
2. Update the URL list in the site list code so it contains the websites you want to monitor (one URL per line).
3. Ensure the workflow is activated so workflow static data can persist site up/down state between scheduled runs.

## Requirements
- A free Telegram bot token (create one with @BotFather) and your chat ID

## Customization
- Swap Telegram for Gmail, Slack or SMS by replacing the alert nodes; change what counts as DOWN (e.g. treat 404 as down) in the Check for Status Change node; adjust the WARN_DAYS and CRITICAL_DAYS thresholds in Check SSL Expiry.

## Additional info
SSL data comes from Cert Spotter's free CT-log API - no API key or payment needed. CT logs show the newest issued certificate; if you renew but forget to deploy it, the 5-minute uptime loop still catches the broken TLS as DOWN - two layers, no gaps.

I run production monitoring for real businesses. Need escalation chains, status pages, keyword checks, response-time budgets, or backup/disk monitoring for the same server that runs your n8n? I build extended versions with async delivery - contact links in my creator profile.

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
