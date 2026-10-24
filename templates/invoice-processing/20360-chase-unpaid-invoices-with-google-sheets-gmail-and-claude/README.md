# 🧾 Chase unpaid invoices with Google Sheets, Gmail, and Claude

> ⚡ **3 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow runs on a schedule or manually to read unpaid invoices from Google Sheets, checks recent client email history in Gmail, uses Anthropic Claude to decide whether to send or pause reminders, then drafts or sends reminder emails and emails you a daily digest with optional action links.

## How it works
1. Runs on a weekday schedule, a manual trigger, or via a webhook link used for digest actions.
2. On scheduled runs, reads invoice rows from Google Sheets and selects which clients need a follow-up today based on due dates, status, snoozes, and minimum spacing between reminders.
3. For each client, pulls recent related Gmail messages and builds a cleaned conversation timeline plus a filled reminder template for the appropriate follow-up step.
4. If the situation is unclear, sends the context to Anthropic Claude to choose SEND, SNOOZE, ESCALATE, or SKIP and optionally rewrite the reminder body, then applies guardrails to prevent missing invoice IDs, links, or placeholders.
5. Sends the reminder via Gmail or saves it as a Gmail draft depending on the auto-send setting, or updates the invoice status for snoozes/escalations/skips.
6. Writes results back to Google Sheets per invoice (last step sent, last follow-up date, snooze date, status, and notes) and emails you an HTML daily digest in Gmail summarizing outcomes with optional one-tap action links.

## Setup
1. Create a Google Sheet with the required invoice columns (for example using the provided template) and add Google Sheets credentials, then paste the sheet URL and tab name into the Config node.
2. Add Gmail credentials for reading history, creating drafts/sending reminders, and sending the digest, and set the digest recipient (ownerEmail) plus sender/business names in Config.
3. Add an Anthropic credential for the Claude model used for reminder decisions and edits.
4. Verify your sheet’s due-date format matches sheetDateFormat/timezone in Config and start with autoSend set to false to review drafts before enabling sending.
5. (Optional) Publish the workflow and set actionLinkUrl to the production webhook URL plus a long random actionSecret to enable Paid/Snooze/Stop buttons in the digest.

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail, Schedule Trigger, Basic LLM Chain, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
