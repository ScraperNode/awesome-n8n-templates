# 🔬 Track vendor insurance COIs and renewals with Gmail, DeepSeek, Sheets, Discord, and Telegram

> ⚡ **15 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow monitors a Gmail inbox for vendor certificate of insurance (COI) emails, uses the DeepSeek (OpenAI-compatible) model to extract policy details, logs results to Google Sheets, and sends compliance confirmations or renewal/gap notices via Gmail with team alerts in Discord and critical escalations in Telegram.

## How it works
1. Triggers every minute when a new unread COI-related email arrives in Gmail and normalizes the sender, subject, and plain-text body.
2. If the email has sufficient content, DeepSeek extracts COI fields (vendor, carrier, policy, limits, additional insured, and effective/expiration dates) into structured JSON.
3. Validates and parses the AI output, and if parsing fails it alerts a Discord channel and emails an internal address for review.
4. Computes compliance status by checking required limits (GL and auto at 1M), workers’ comp, additional insured, and days until expiration.
5. If compliant, emails the vendor a confirmation, appends the record to the “COI Registry” Google Sheet, and posts a compliant update to Discord.
6. If expired, expiring soon, or missing required coverage, appends the record to the registry, emails the vendor a tailored action/reminder message, posts an attention alert to Discord, and sends a critical Telegram alert for expired/critical cases.
7. Runs a daily scheduled sweep that reads the COI Registry in Google Sheets, emails reminder notices for certificates expiring within 45 days, logs reminders to a “ReminderLog” sheet, and posts a summary (or all-clear) to Discord.
8. Runs a weekly scheduled digest that reads the registry, computes compliance stats, uses DeepSeek to write a short plain-text digest, then emails it and posts it to Discord.

## Setup
1. Connect Gmail OAuth2 credentials for the inbox that receives COI emails and update internal notification recipients (for invalid/parse-failure and weekly digest emails).
2. Connect an OpenAI API credential configured for the DeepSeek model used by the two AI steps.
3. Connect Google Sheets OAuth2 credentials and ensure the target spreadsheet contains tabs named “COI Registry” and “ReminderLog” with matching columns.
4. Connect Discord bot credentials and select the target server and channel for compliant posts, alerts, sweep summaries, and weekly digests.
5. Connect Telegram bot credentials and set the chat ID for critical alerts.
6. Adjust policy requirements and timing thresholds (1M limits, 45-day sweep window, 10-day critical window, and the daily/weekly cron schedules) to match your compliance rules.

## 🔗 Nodes Used

Google Sheets, Telegram, Discord, Gmail, Gmail Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
