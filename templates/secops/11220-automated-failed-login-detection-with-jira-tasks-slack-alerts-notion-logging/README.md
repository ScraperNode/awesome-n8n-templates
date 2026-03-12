# 🔒 Automated failed login detection with Jira tasks, Slack alerts & Notion logging

> ⚡ **116 views** · 🔒 [SecOps & Security Automation](../)

## Description

# Automated Failed Login Detection with Jira Security Tasks, Slack Notifications

*Webhook: Failed Login Attempts → Jira Security Case → Slack Warnings*

---

This n8n workflow monitors failed login attempts from any application, normalizes incoming data, detects repeated attempts within a configurable time window and automatically:

* Sends detailed alerts to Slack,
* Creates Jira security tasks (single or grouped based on repetition),
* Logs all failed login attempts into a Notion database.

It ensures fast, structured and automated responses to potential account compromise or brute-force attempts while maintaining persistent records.

### Quick Implementation Steps

1. Import this JSON workflow into n8n.
2. Connect your application to the failed-login webhook endpoint.
3. Add Jira Cloud API credentials.
4. Add Slack API credentials.
5. Add Notion API credentials and configure the database for storing login attempts.
6. Enable the workflow — done!

## What It Does

1. **Receives Failed Login Data**
	* Accepts POST requests containing failed login information.
	* Normalizes the data, ensuring consistent fields: username, ip, timestamp and error.
2. **Validates Input**
	* Checks for missing username or IP.
	* Sends a Slack alert if any required field is missing.
3. **Detects Multiple Attempts**
	* Uses a sliding time window (default: 5 minutes) to detect multiple failed login attempts from the same username + IP.
	* Single attempts → standard Jira task + Slack notification.
	* Multiple attempts → grouped Jira task + detailed Slack notification.
4. **Logs Attempts in Notion**
	* Records all failed login events into a Notion database with fields: Username, IP, Total Attempts, Attempt List, Attempt Type.
5. **Formats Slack Alerts**
	* Single attempt → lightweight notification.
	* Multiple attempts → summary including timestamps, errors, total attempts, and Jira ticket link.

## Who’s It For

This workflow is ideal for:

* Security teams monitoring authentication logs.
* DevOps/SRE teams maintaining infrastructure access logs.
* SaaS platform teams with high login traffic.
* Organizations aiming to automate breach detection.
* Teams using Jira + Slack + Notion + n8n for incident workflows.

## Requirements

* n8n (Self-Hosted or Cloud).
* Your application must POST failed login data to the webhook.
* Jira Software Cloud credentials (Email, API Token, Domain).
* Slack Bot Token with message-posting permissions.
* Notion API credentials with access to a database.
* Basic understanding of your login event sources.

## How It Works

1. **Webhook Trigger**: Workflow starts when a failed-login event is sent to the failed-login webhook.
2. **Normalization**:
	* Converts single objects or arrays into a uniform format.
	* Ensures username, IP, timestamp and error are present.
	* Prepares a logMessage for Slack and Jira nodes.
3. **Validation**:
	* IF node checks whether username and IP exist.
	* If missing → Slack alert for missing information.
4. **Multiple Attempt Detection**:
	* Function node detects repeated login attempts within a 5-minute sliding window.
	* Flags attempts as multiple: true or false.
5. **Branching**:
	* **Multiple attempts** → build summary, create Jira ticket, format Slack message, store in Notion.
	* **Single attempts** → create Jira ticket, format Slack message, store in Notion.
6. **Slack Alerts**:
	* Single attempt → concise message
	* Multiple attempts → detailed summary with timestamps and Jira ticket link
7. **Notion Logging**:
	* Stores username, IP, total attempts, attempt list, attempt type in a dedicated database for recordkeeping.

## How To Set Up

1. **Import Workflow** → _Workflows → Import from File_ in n8n.
2. **Webhook Setup** → copy the URL from Faield Login Trigger node and integrate with your application.
3. **Jira Credentials** → connect your Jira account to both Jira nodes and configure project/issue type.
4. **Slack Credentials** → connect your Slack Bot and select the alert channel.
5. **Notion Credentials** → connect your Notion account and select the database for storing login attempts.
6. **Test the Workflow** → send sample events: missing fields, single attempts, multiple attempts.
7. **Enable Workflow** → turn on workflow once testing passes.

## Logic Overview

| Step Node                       | Description                                   |
|---------------------------------|-----------------------------------------------|
| Normalize input                 | Normalize Login Event — Ensures each event has required fields and prepares a logMessage. |
| Validate fields                 | Check Username & IP present — IF node → alerts Slack if data is incomplete. |
| Detect repeats                  | Detect Multiple Attempts — Finds multiple attempts within a 5-minute window; sets multiple flag. |
| Multiple attempts               | IF - Multiple Attempts + Build Multi-Attempt Summary — Prepares grouped summary for Slack & Jira. |
| Single attempt                  | Create Ticket - Single Attempt — Creates Jira task & Slack alert for one-off events. |
| Multiple attempt ticket         | Create Ticket - Multiple Attempts — Creates detailed Jira task. |
| Slack alert formatting          | Format Fields For Single/Multiple Attempt — Prepares structured message for Slack. |
| Slack alert delivery            | Slack Alert - Single/Multiple Attempts — Posts alert in selected Slack channel. |
| Notion logging                  | Login Attempts Data Store in DB — Stores structured attempt data in Notion database. |


## Customization Options

* **Webhook Node** → adjust endpoint path for your application.
* **Normalization Function** → add fields such as device, OS, location or user-agent.
* **Multiple Attempt Logic** → change the sliding window duration or repetition threshold.
* **Jira Nodes** → modify issue type, labels or project.
* **Slack Nodes** → adjust markdown formatting, channel routing or severity-based channels.
* **Notion Node** → add or modify database fields to store additional context.

**Optional Enhancements:**

* Geo-IP lookup for country/city info.
* Automatic IP blocking via firewall or WAF.
* User notification for suspicious login attempts.
* Database logging in MySQL/Postgres/MongoDB.
* Threat intelligence enrichment (e.g., AbuseIPDB).

## Use Case Examples

1. Detect brute-force attacks targeting user accounts.
2. Identify credential stuffing across multiple users.
3. Monitor admin portal access failures with Jira task creation.
4. Alert security teams instantly when login attempts originate from unusual locations.
5. Centralize failed login monitoring across multiple applications with Notion logging.

## Troubleshooting Guide

| Issue                         | Possible Cause                                   | Solution                                                    |
|-------------------------------|---------------------------------------------------|-------------------------------------------------------------|
| Workflow not receiving data   | Webhook misconfigured                             | Verify webhook URL & POST payload format                    |
| Jira ticket creation fails    | Invalid credentials or insufficient permissions   | Update Jira API token and project access                    |
| Slack alert not sent          | Incorrect channel ID or missing bot scopes        | Fix Slack credentials and permissions                       |
| Multiple attempts not detected| Sliding window logic misaligned                   | Adjust Detect Multiple Attempts node code                   |
| Notion logging fails          | Incorrect database ID or missing credentials      | Update Notion node credentials and database configuration   |
| Errors in normalization       | Payload format mismatch                           | Update Normalize Login Event function code                  |

## Need Help?

If you need help setting up, customizing or extending this workflow, WeblineIndia can assist with full n8n development, workflow automation, security event processing and custom integrations.

## 🔗 Nodes Used

Function, Slack, Webhook, Jira Software, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
