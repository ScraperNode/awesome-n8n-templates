# 🧾 Send rent reminders and weekly AI summaries with OpenAI, Sheets, Gmail and Telegram

> ⚡ **3 views** · 🧾 [Invoice Processing](../)

## Description

Late rent, handled politely and automatically. This workflow reads your tenant ledger from Google Sheets every morning, has AI draft gentle-to-firm reminders for overdue tenants, sends them via Gmail, and escalates serious cases to Telegram. Mondays bring an AI-written collections summary.

*Last updated: September 2026.*

## Quick overview
This workflow reads a tenant rent ledger from Google Sheets, uses OpenAI to draft overdue rent reminder emails, sends them via Gmail, and escalates firm/final cases to Telegram, while also producing a weekly AI-written collections summary sent by Gmail and Telegram.

## How it works
1. Runs every day at 08:00 (Asia/Jakarta) and loads tenant rows from the TenantLedger tab in Google Sheets.
2. Validates that each tenant row contains tenant name, email, due day, and rent amount, and sends a Telegram alert if any required field is missing.
3. Normalizes tenant data, calculates the due date for the current month, and computes how many days the rent is overdue.
4. For tenants who are unpaid and due today or overdue, uses OpenAI to generate a short reminder email (gentle/firm/final) in JSON format.
5. Sends the drafted reminder via Gmail, appends a reminder entry to the ReminderLog tab in Google Sheets, and notifies the landlord in Telegram when the stage is firm or final.
6. Runs every Monday at 09:00, summarizes the current ledger in Google Sheets, uses OpenAI to write a weekly rent report, and sends it by Gmail and Telegram.

## Setup
1. Connect Google Sheets OAuth2 credentials and update the spreadsheet ID and sheet names (TenantLedger and ReminderLog) to match your ledger file.
2. Connect a Gmail OAuth2 account and set the recipient/formatting for reminder emails and the weekly summary email.
3. Add an OpenAI API credential for the two OpenAI (gpt-5.6-terra) steps that generate reminders and the weekly report.
4. Add a Telegram bot credential and replace the chat ID with your landlord/admin chat for alerts and weekly summaries.
5. Ensure TenantLedger includes columns for tenant_name, email, due_day, rent_amount, unit, and optionally status (paid/unpaid) and reminder_stage.

## Requirements
- A source system that triggers the workflow (form, sheet, email, or schedule)
- Access to the target storage and messaging services
- API key for the AI provider
- Bot tokens or account credentials for notification channels

## Customization
- Change validation rules or decision thresholds in IF nodes
- Edit the AI prompt to fit your domain and tone
- Swap notification channels (email, Slack, Discord, Telegram)
- Add or remove fields in the log destination

### Quick Answers
**How do reminder tones work?**  
Gentle first, then firm, then final, based on days overdue. Firm and final stages also alert the landlord on Telegram.  
**When is the summary sent?**  
Every Monday at 09:00, covering the current ledger state.  
**Which sheets are involved?**  
TenantLedger for tenants and ReminderLog for every reminder sent.  

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Google Sheets, Telegram, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
