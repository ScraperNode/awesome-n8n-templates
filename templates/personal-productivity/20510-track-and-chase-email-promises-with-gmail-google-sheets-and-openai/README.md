# ⚡ Track and chase email promises with Gmail, Google Sheets and OpenAI

> ⚡ **1 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow monitors your Gmail inbox for promises people make, logs them to a Google Sheets “Commitments” ledger using OpenAI extraction, and runs a daily sweep to draft follow-up emails into a “Chase-Queue” tab for approval, with alerts and digests sent to the owner via Gmail.

## How it works
1. Runs every hour on a schedule and routes 08:00 (workflow timezone) to a daily sweep while all other hours run inbox intake.
2. During intake, fetches recent unprocessed Gmail inbox messages, builds an extraction prompt from the email content, and uses OpenAI to decide whether the message contains a concrete promise or fulfills a previous one.
3. Writes new promises to the Google Sheets “Commitments” tab using a dedupe key, or marks the oldest matching open commitment as done when a fulfillment message is detected.
4. Labels processed Gmail messages with the configured label to prevent reprocessing, and emails the owner when the AI output is unparseable, missing a due date, or otherwise needs review.
5. At 08:00, reads all commitment rows from Google Sheets and classifies each active item as due today, overdue, 3+ days overdue (escalate), on track, or closed.
6. Uses OpenAI to draft follow-up emails for due-today and overdue items, stores the drafts in the Google Sheets “Chase-Queue” tab as pending approval, notifies the owner by Gmail, and updates the commitment status and chase count in the ledger.
7. Sends the owner a daily digest email summarizing what is due/overdue/escalated (and any ledger alerts), and escalates 3+ day overdue items directly to the owner while marking them escalated so they only fire once.

## Setup
1. Add credentials for Gmail, Google Sheets, and OpenAI.
2. Run the one-time setup lane to create the “Promise Ledger — Follow-ups” spreadsheet (Commitments and Chase-Queue tabs) and copy the generated spreadsheet ID.
3. Create a Gmail label named `promises-processed`, get its label ID, and paste the spreadsheet ID, label ID, and your owner email into the “Workflow Config” node.
4. Set the workflow timezone as desired (08:00 is the daily sweep time) and activate the workflow after deleting the one-time setup/demo lanes if you don’t need them.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
