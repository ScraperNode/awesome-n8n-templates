# ⚡ Send daily birthday greetings via Gmail, WhatsApp, Telegram and Slack

> ⚡ **146 views** · ⚡ [Personal Productivity](../)

## Description

## Quick Overview
This workflow runs daily, pulls birthdays from Google Contacts, generates personalized birthday copy with OpenAI, sends greetings via Gmail, WhatsApp Business Cloud, and Telegram when available, and posts a per-contact delivery summary to Slack.

## How it works
1. Runs every day at 8:00 AM on a schedule.
2. Fetches all contacts from Google Contacts including names, birthdays, email addresses, phone numbers, and biographies.
3. Normalizes contact details, validates email/phone/Telegram chat ID fields, and keeps only contacts whose birthday is today.
4. Uses OpenAI to generate a birthday message payload (email subject/body plus a short chat message) and applies fallback text if any fields are missing.
5. Sends the birthday greeting through Gmail, WhatsApp Business Cloud, and Telegram only for channels that pass validation, and records a sent or skipped status for each channel.
6. Builds a Slack-friendly summary per birthday contact and posts it to the configured Slack channel.

## Setup
1. Connect your Google Contacts account in n8n so the workflow can read contacts with birthdays, emails, phone numbers, and biographies.
2. Add an OpenAI credential and ensure your prompt returns JSON fields named `subject`, `emailMessage`, and `shortMessage`.
3. Add a Gmail OAuth2 credential for sending emails and confirm the workflow is allowed to email your contacts.
4. Add WhatsApp Business Cloud credentials and replace `YOUR_WHATSAPP_PHONE_NUMBER_ID` with your phone number ID.
5. Add a Telegram bot credential and ensure each recipient’s numeric `chatId` is available (for example stored in the contact biography field).
6. Add a Slack OAuth2 credential and replace `YOUR_SLACK_CHANNEL_ID` with the channel where the final summary should be posted.

## 🔗 Nodes Used

Slack, Telegram, Google Contacts, Gmail, WhatsApp Business Cloud, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
