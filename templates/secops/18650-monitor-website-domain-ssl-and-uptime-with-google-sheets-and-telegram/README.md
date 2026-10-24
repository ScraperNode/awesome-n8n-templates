# 🔒 Monitor website domain, SSL, and uptime with Google Sheets and Telegram

> ⚡ **39 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
This workflow runs daily and checks each site listed in Google Sheets for domain expiry (RDAP), SSL certificate expiry (nslookup.io), and HTTP uptime, then sends priority-based tiered alerts and a weekly Telegram health summary.

## How it works
1. Runs every day at 7:00 AM on a schedule.
2. Fetches the IANA RDAP bootstrap file and builds a TLD-to-RDAP-server map for resolving the correct registry lookup endpoint.
3. Reads the list of monitored sites from a Google Sheets tab and processes them one by one.
4. For each site, looks up domain expiry via RDAP, checks SSL certificate days-until-expiry via nslookup.io, and performs an HTTP request to determine uptime status.
5. Calculates the highest alert tier across domain, SSL, and uptime results and applies a minimum alert threshold based on the site’s priority.
6. When an alert is required, sends a formatted Telegram message and appends the incident details to a Google Sheets history tab.
7. After all sites are checked, sends a weekly Telegram digest on the configured weekday when weekly summaries are enabled.

## Setup
1. Create Telegram bot credentials in n8n using a BotFather token and set the target chat ID for where alerts should be delivered.
2. Connect Google Sheets OAuth2 credentials and create a spreadsheet with `sites` and `history` tabs using the expected column headers.
3. Fill in the Configuration values, including the Google Sheet ID, sites/history sheet names, Telegram chat ID, and whether weekly digests are enabled (and which weekday to send them).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
