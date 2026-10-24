# 🔬 Validate compliance records with OpenAI, Google Sheets, Telegram, and Slack

> ⚡ **98 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs daily to audit rows in a Google Sheets ComplianceRecords tab using two OpenAI checks, automatically marking compliant items, fixing safe issues, and escalating unresolved violations to Telegram, while logging every outcome to an AuditLog sheet and posting errors to Slack.

## How it works
1. Runs every 24 hours on a schedule trigger.
2. Reads all records from the Google Sheets `ComplianceRecords` worksheet.
3. Sends each record to OpenAI (GPT-4o-mini) for a first-pass compliance screen and parses the JSON result.
4. Marks records with no violations as Compliant and routes flagged records to a second OpenAI (GPT-4o-mini) review to classify them as false positives, auto-fixable issues, or true violations.
5. Updates Google Sheets with the corrected value for auto-fixable records, sends a Telegram message to the compliance team for records requiring human review, and labels false positives as resolved.
6. Merges all outcomes and appends a timestamped entry to the Google Sheets `AuditLog` worksheet, while sending Slack alerts if the AI steps or overall workflow error.

## Setup
1. Add OpenAI credentials for both OpenAI nodes and ensure the selected model (gpt-4o-mini) is available in your account.
2. Add Google Sheets OAuth2 credentials, create a spreadsheet with `ComplianceRecords` and `AuditLog` tabs, and replace `YOUR_GOOGLE_SHEET_ID` in all Google Sheets nodes.
3. Add Telegram Bot credentials and replace `YOUR_COMPLIANCE_TEAM_CHAT_ID` with the destination chat ID for escalations.
4. Add Slack OAuth2 credentials and replace `YOUR_SLACK_CHANNEL_ID` in all Slack alert nodes.
5. Confirm `ComplianceRecords` includes the expected columns (for example `RecordID, RecordType, DataField, Value, Description, Department, Status`) and adjust the schedule interval if you want a different audit frequency.

## 🔗 Nodes Used

Google Sheets, Slack, Telegram, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
