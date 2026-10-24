# 🧾 Send escalating invoice reminders with Notion, Claude, Gmail and Telegram

> ⚡ **24 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow runs every morning to pull unpaid invoices from a Notion database, calculates how overdue each one is, uses Anthropic Claude to draft an escalation-appropriate reminder, emails the client via Gmail, updates the invoice record in Notion, and alerts you in Telegram for high-risk late payments.

## How it works
1. Runs every day at 8:00 AM on a schedule.
2. Fetches all unpaid invoice pages from a Notion database and normalizes the key invoice fields into a flat structure.
3. Calculates days overdue from the due date, determines which reminder tier (1/2/3) is due based on thresholds and what was already sent, and skips invoices that are not yet due for the next escalation.
4. Uses Anthropic Claude to generate a subject line and message body that matches the escalation tier.
5. Sends the reminder email to the client via Gmail and updates the Notion page to record the latest reminder tier sent.
6. If the invoice reaches the final (tier 3) escalation, sends a Telegram message to the freelancer to flag the invoice as a payment risk.

## Setup
1. Create or choose a Notion invoice database with the properties referenced by the workflow (including Status, Due Date, Client Email, and Reminder Tier Sent) and paste the database ID into the Notion node configuration.
2. Add credentials for Notion, Anthropic (Claude), Gmail, and Telegram, and select them in their respective nodes.
3. Set your Telegram chat ID in the Telegram node and ensure your Notion Status values match the workflow filter (for example, invoices to remind are marked as “unpaid”).

## 🔗 Nodes Used

Telegram, Gmail, Notion, Schedule Trigger, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
