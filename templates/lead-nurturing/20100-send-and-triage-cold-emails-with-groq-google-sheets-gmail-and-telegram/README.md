# 💬 Send and triage cold emails with Groq, Google Sheets, Gmail and Telegram

> ⚡ **1 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow turns new prospects in Google Sheets into Groq-written cold emails sent or drafted in Gmail, monitors Gmail for replies, then uses Groq to classify and draft responses while sending Telegram alerts and requiring a Telegram button approval before any reply draft is sent.

## How it works
1. Triggers when a new row is added to a Google Sheets Prospects tab.
2. Validates required prospect fields, generates a personalized cold email with Groq, and writes the subject/body back to Google Sheets.
3. Sends the email via Gmail when the row’s Auto Send field is true, otherwise creates a Gmail draft, and updates the prospect’s status and timestamps in Google Sheets.
4. Every 2 minutes, reads prospect rows marked Sent - Awaiting Reply from Google Sheets and searches Gmail for inbox replies matching the prospect via the REF-<Prospect ID> subject tag.
5. For a new reply, Groq classifies it (interested, question, declined, unclear) and produces a reply draft when appropriate, then records the reply details in Google Sheets and notifies you in Telegram.
6. Creates a Gmail draft reply in the original thread and stores the draft ID in Google Sheets, then posts the draft text to Telegram with an inline “Send reviewed draft” approval button.
7. When you press the Telegram approval button, the workflow verifies the latest reply and sends the exact saved Gmail draft via the Gmail API, then updates Google Sheets and confirms the send in Telegram.

## Setup
1. Create a Google Sheets spreadsheet with a Prospects tab and the required columns (including Prospect ID, Email, Service Offer, Auto Send, Status, Sent At, Draft Subject, Last Reply ID, and Reply Draft ID).
2. Add credentials for Google Sheets (OAuth2), Gmail (OAuth2 with access to gmail.googleapis.com), Telegram (bot token), and Groq (HTTP Header Auth with Authorization: Bearer <GROQ_API_KEY>).
3. Select your spreadsheet and sheet in every Google Sheets node and ensure update operations match rows by Prospect ID.
4. Replace YOUR_TELEGRAM_CHAT_ID in the Telegram trigger, message nodes, and the approval-check code so approvals only work from your chat.
5. Update the Groq prompts and Gmail email template branding (for example, replace “Wiga Studio”) to match your organization before activating.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
