# 🧾 Follow up on overdue invoices with OpenAI, Gmail and Google Sheets

> ⚡ **8 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow runs daily and reads an invoices Google Sheet, checks recent Gmail threads for each overdue invoice, and uses OpenAI to classify correspondence before sending a stage-based follow-up email via Gmail or deferring/flagging for human review, then writes the decision back to Google Sheets.

## How it works
1. Runs every day at 9:00 AM (America/Chicago).
2. Reads the Invoices tab in Google Sheets and selects only eligible rows (not paid/void/closed, not on manual hold, not already in human review, and overdue long enough for the next reminder stage).
3. For each eligible invoice, searches Gmail for recent messages with the client and builds a compact thread history, including dedupe checks for an exact stage subject and detection of recent activity.
4. If the exact stage email subject already exists, it reconciles the invoice as already reminded and updates the sheet; if there was recent conversation within the configured window, it defers the next follow-up and updates the sheet.
5. Otherwise, sends the Gmail thread history to OpenAI to classify the context as SEND, DEFER, or HUMAN, and safely parses/validates the model’s JSON output with a confidence threshold.
6. When OpenAI returns SEND, it generates a deterministic stage-based reminder email (optionally including a safe reference sentence), sends it via Gmail, and records the sent stage and next follow-up date in Google Sheets.
7. When OpenAI returns DEFER or HUMAN, it sets the appropriate collection status and next follow-up timing (or human review) and updates the invoice row in Google Sheets.

## Setup
1. Add credentials for Google Sheets, Gmail, and OpenAI, and ensure the OpenAI model ID in the Configuration step matches a model available to your account.
2. Update the Configuration values (Google Sheet ID, sheet name, sender name/signature, lookback window, and recent-conversation hours) to match your environment.
3. Create a Google Sheet with an Invoices tab that contains the required columns (including Invoice ID as the unique key) exactly as listed in the template notes.
4. Confirm the Gmail sending behavior fits your process (switch to draft/manual review if needed) and test with a few sample invoices before enabling the schedule.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
