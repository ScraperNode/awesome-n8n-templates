# 🔒 Check offboarding credential risks with RelayShield, Slack, Notion and Gmail

> ⚡ **32 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
This workflow receives offboarding events via webhook, checks the departing employee’s email in RelayShield for breach, infostealer, and OAuth exposure signals, then logs the outcome to Notion and, when risk is detected, alerts the security team in Slack and emails the employee’s manager via Gmail.

## How it works
1. Receives an HTTP POST webhook from your HR system with the offboarded employee’s details (email, name, department, and manager email).
2. Queries RelayShield for credential breach history, infostealer log matches, and OAuth watchlist exposure for the employee’s email address.
3. Evaluates whether any of the RelayShield checks indicates risk (breaches found, infostealer detected, or OAuth exposure matched).
4. If risk is found, creates a risk-flag entry in a Notion database with the findings and a “Pending Review” status.
5. If risk is found, posts a structured alert with recommended actions to a designated Slack security channel.
6. If risk is found, sends an HTML email to the employee’s manager via Gmail summarizing the findings and next steps.
7. If no risk is found, creates a “Clean — No Action Required” entry in the same Notion database for auditability.

## Setup
1. Create and add RelayShield API credentials in n8n.
2. Add Notion OAuth credentials, create an offboarding risk log database, and set `$vars.notionOffboardingDbId` to its database ID.
3. Add Slack credentials (bot token), choose a security channel, and set `$vars.slackSecurityChannelId` to that channel ID.
4. Add Gmail OAuth2 credentials for the account that should send manager notifications.
5. Copy the production webhook URL for the “employee-offboard” endpoint and configure your HR system to POST the expected payload to it.

## 🔗 Nodes Used

Slack, Webhook, Gmail, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
