# 🧾 Chase overdue QuickBooks invoices with Claude, Gmail, Slack and Google Sheets

> ⚡ **2 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow runs every weekday to find overdue QuickBooks Online invoices, selects the right reminder stage using Google Sheets logs and a do-not-chase list, drafts or sends Gmail reminders with openings/closings written by Anthropic Claude, and posts escalation alerts and a daily summary to Slack.

## How it works
1. Runs every weekday at 9:00 (or manually with built-in sample data for testing).
2. Pulls all unpaid QuickBooks Online invoices that are past their due date and reads the Reminder log and Do not chase tabs from Google Sheets.
3. Applies stage rules, cooldown, minimum balance, and per-run limits to decide which customers get a reminder, which invoices need a human escalation, and what is skipped.
4. Uses Anthropic Claude to write the opening and closing text for the selected stage, then assembles a plain-text email including the invoice table, totals, and payment instructions.
5. Sends stage 1–3 reminders via Gmail or saves them as drafts based on your send mode, and always saves final notices as Gmail drafts for review.
6. Posts one-time Slack alerts for invoices past the escalation threshold and posts a daily Slack summary of totals, reminders, escalations, and skipped items.
7. Appends one row per affected invoice to the Google Sheets Reminder log to track sent/drafted/failed reminders and Slack escalations.

## Setup
1. Connect credentials for QuickBooks Online, Google Sheets, Gmail, Slack, and Anthropic (Claude) in n8n.
2. Create a Google Sheet with two tabs named “Reminder log” and “Do not chase” using the required header columns, then paste the Sheet ID into the workflow Settings.
3. Update workflow Settings for company name, sender name, signature, payment instructions, Slack channel, and optional reply-to/BCC, and keep sendMode set to draft until you are ready to send.
4. Ensure each QuickBooks invoice has a valid BillEmail address for the customer, and add any disputes/payment plans to the “Do not chase” tab (optionally with an until date).

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, QuickBooks Online, Schedule Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
