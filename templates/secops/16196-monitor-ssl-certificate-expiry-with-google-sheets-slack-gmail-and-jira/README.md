# 🔒 Monitor SSL certificate expiry with Google Sheets, Slack, Gmail and Jira

> ⚡ **8 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick Overview
This workflow runs daily to check SSL certificate expiry for domains listed in Google Sheets, using ssl-checker.io to fetch certificate details, then creating Jira issues and sending Slack and Gmail alerts for risky certificates while logging results and posting a daily Slack digest.

## How it works
1. Runs every day at 08:00 on a schedule trigger.
2. Reads the domain list from a Google Sheets “Domains” sheet and filters out blank rows or domains marked as disabled.
3. Processes domains one by one, calling the ssl-checker.io API to retrieve each site’s live SSL certificate details.
4. Calculates days remaining until expiry, assigns a status (Expired, Critical, Warning, Healthy, or Unknown), and flags items that require attention.
5. For certificates that need attention, creates a Jira task and sends an alert to Slack and an email via Gmail with the certificate details.
6. For healthy certificates, writes the latest check results to a Google Sheets “Log” sheet.
7. Aggregates all results from the run into a single summary message and posts the daily digest to Slack.

## Setup
1. Create a Google Sheet with a “Domains” sheet containing at least a `domain` column (and optionally an `enabled` column) and a “Log” sheet to store results, then add your Google Sheets credentials and set the spreadsheet ID.
2. Add an API key for ssl-checker.io (or a compatible SSL lookup endpoint) and place it in the HTTP Authorization header.
3. Add your Jira credentials and set the target project key for ticket creation.
4. Add your Slack credentials and set the channel ID used for alerts and the daily digest.
5. Add your Gmail credentials and set the recipient address for email alerts.
6. (Optional) Adjust the warning and critical thresholds (30 and 7 days) in the expiry calculation code if your policy differs.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Jira Software, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
