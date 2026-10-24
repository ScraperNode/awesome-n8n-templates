# 💬 Handle WhatsApp gym bookings and surveys with Claude, Whisper, and Google Sheets

> ⚡ **21 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
A complete WhatsApp AI chatbot that handles class bookings, cancellations, FAQ responses, schedule lookups, location queries, waitlist management, booking reminders, survey, and staff notifications — all through WhatsApp in English, Arabic, or French.

## How it works
1. Receives WhatsApp messages via UltraMsg webhook
2. Voice messages are transcribed automatically using OpenAI Whisper
3. Detects special commands — staff survey triggers and survey responses
4. Loads user session from Google Sheets for conversation continuity
5. Checks for waitlist offer responses
6. AI Agent (Claude Haiku) processes the request using 7 tool sub-workflows
7. Response is split and sent back via WhatsApp

## Setup
1. Connect Google Sheets OAuth2, Google Calendar OAuth2, and Anthropic API credentials
2. Set up a UltraMsg account and point the webhook to this workflow's URL
3. Copy the included Google Sheets template and add the Spreadsheet ID to Gymbot_Config
4. Import and activate all 14 sub-workflows before activating this one
5. Required config fields: ultramsg_token, ultramsg_instance, anthropic_api_key, sheet_id, branch_1, branch_2, staff_phone_branch_1, staff_phone_branch_2, calendar_id_branch_1, calendar_id_branch_2

## Requirements
- n8n Cloud Starter or self-hosted
- UltraMsg account (~$39/month)
- Anthropic API key (Claude Haiku, ~$20/month)
- Google account (Sheets + Calendar, free)
- A dedicated WhatsApp number

## Customization
- Add branches by duplicating sheets and updating Gymbot_Config — no workflow changes needed
- Switch AI model from Claude Haiku to Claude Sonnet for richer conversations
- Add classes, FAQ, and branch info directly in Google Sheets

## Additional info
The complete system including all 14 sub-workflows, Google Sheets template, and 40-page setup guide is available at oscarbek.gumroad.com/l/gymbot

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Execute Sub-workflow, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
