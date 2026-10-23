# 🎫 Manage rent, maintenance and tenant messages with OpenAI, Telegram and Sheets

> ⚡ **41 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick Overview
This workflow automates rent reminders and tenant support by combining Google Sheets as the system of record with Telegram messaging, OpenAI (gpt-4o-mini) intent classification and receipt writing, and Slack/Telegram owner alerts for overdue rent, urgent repairs, and workflow errors.

## How it works
1. Runs daily at 09:00 to read all tenants from Google Sheets, calculate each tenant’s rent status (due today, due soon, overdue, paid/OK), and route them accordingly.
2. Sends Telegram rent reminders for tenants whose rent is due today or due within the next three days, then updates the tenant row in Google Sheets with the last reminder timestamp.
3. Sends an overdue Telegram notice to the tenant, escalates the overdue status to the property owner via Telegram and Slack, and updates the tenant’s Google Sheets status to “Overdue.”
4. Triggers on incoming Telegram messages, looks up the tenant by Telegram chat ID in Google Sheets, and uses OpenAI to classify the message as maintenance, payment, or general (including category and urgency).
5. For maintenance requests, logs the ticket to the Maintenance tab in Google Sheets, selects a vendor from the Vendors tab by category, notifies the assigned vendor via Telegram, and confirms the ticket to the tenant.
6. If a maintenance request is marked high urgency, also escalates the repair to the property owner via Telegram and Slack.
7. For payment confirmations, updates the tenant as “Paid” in Google Sheets, uses OpenAI to generate a JSON receipt message, sends it to the tenant on Telegram, and appends a record to the PaymentLog tab.
8. For general inquiries, sends a standard auto-reply to the tenant on Telegram, and posts a Slack alert if any workflow execution errors occur.

## Setup
1. Create and connect credentials for Google Sheets, Telegram Bot API, OpenAI, and Slack (OAuth2) used by the workflow.
2. In Google Sheets, create tabs named Tenants, Vendors, Maintenance, and PaymentLog with columns that match the fields used (for example TenantID, TelegramChatId, DueDay, RentStatus, VendorType, VendorTelegramChatId).
3. Replace all instances of YOUR_GOOGLE_SHEET_ID in the Google Sheets nodes with your spreadsheet ID.
4. Set YOUR_OWNER_TELEGRAM_CHAT_ID in the owner escalation Telegram messages, and set the Slack channel ID for overdue/urgent alerts and the error-alert channel (YOUR_SLACK_CHANNEL_ID).
5. Activate the Telegram trigger by copying the n8n Telegram webhook configuration to your bot, then enable the workflow and verify the daily schedule time matches your timezone requirements.

## 🔗 Nodes Used

Google Sheets, Slack, Telegram, Telegram Trigger, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
