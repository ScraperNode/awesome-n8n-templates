# 🔬 Triage backflow compliance notices with Google Sheets, Gmail, Slack, OpenAI, and a state API

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs daily, reads a Google Sheets backflow device registry, calculates overdue risk, and uses OpenAI to classify each device as Critical Overdue, Due Soon, or Compliant, then routes actions through a state reporting API, Gmail notices, Slack alerts, and an audit log sheet.

## How it works
1. Runs every day at 06:00 on a schedule.
2. Pulls all device rows from the Google Sheets “Device Registry” tab and processes them one device at a time.
3. Calculates days since last test, days overdue, next due date, and a risk score based on hazard level and device details.
4. Checks that required fields (device_id and owner_email) are present and posts a Slack message to #cross-connection-data-quality for incomplete rows.
5. Uses an OpenAI chat model to classify each complete device into Critical Overdue, Due Soon, or Compliant.
6. For Critical Overdue devices, posts a non-compliance record to the state e-reporting portal API, emails a shutoff warning letter via Gmail, and alerts #cross-connection-alerts in Slack.
7. For Due Soon devices, sends a test reminder email via Gmail, and for Compliant devices, records a no-action audit entry.
8. Appends one consolidated audit row per processed device to the Google Sheets “Audit Log” tab.

## Setup
1. Add credentials for Google Sheets, Gmail, Slack, an OpenAI API key, and an API auth method for the state e-reporting portal HTTP request.
2. Replace REPLACE_WITH_SHEET_ID in both Google Sheets nodes and ensure your spreadsheet has “Device Registry” and “Audit Log” tabs.
3. Update the Slack channels (#cross-connection-data-quality and #cross-connection-alerts) and confirm Gmail sending permissions for the mailbox you use.
4. Replace the placeholder state e-reporting portal URL and adjust the test-cycle logic in the code step if your jurisdiction’s rules differ.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Schedule Trigger, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
