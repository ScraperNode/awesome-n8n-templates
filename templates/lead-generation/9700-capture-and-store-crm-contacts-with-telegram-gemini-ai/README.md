# 🎣 Capture and Store CRM Contacts with Telegram & Gemini AI

> ⚡ **157 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## What it does

This workflow is an AI agent in the form of a Telegram bot. Its main purpose is to **capture contact information and store it in a CRM**. The agent supports multi-modal inputs and can extract contact details from text messages, voice recordings, and images (like photos of business cards).

The bot guides the user through data collection via a natural conversation, asks clarifying questions for missing information, and summarizes the extracted data for confirmation before saving. It also checks for duplicate contacts by email and gives users the choice to either create a new contact or update an existing one.

For simplicity, this example uses a Google Sheets document to store collected contacts. It can easily be replaced by a real CRM like HubSpot, Pipedrive, Monday, etc.

### How to use the bot

Send contact details via text or voice, or upload a photo of a business card. The bot will show the extracted information and ask questions when needed. Once the bot confirms saving of the current contact, you can send the next one. Use the `/new` command at any moment to discard the previous conversation and start from scratch.

### Requirements
1. A Telegram bot [Access Token](https://docs.n8n.io/integrations/builtin/credentials/telegram/)
2. Google Gemini API key
3. Google Sheets credentials

### How to set up
1. Create a new Telegram bot (see [n8n docs](https://docs.n8n.io/integrations/builtin/credentials/telegram/#using-api-bot-access-token) and [Telegram bot API docs](https://core.telegram.org/bots/features) for details)
2. Take webhook URL from the Telegram Trigger node (`WEBHOOK_URL`) and your bot's access token (`TOKEN`) and run `curl -X POST "https://api.telegram.org/bot{TOKEN}/setWebhook?url={WEBHOOK_URL}"`
2. Create a new Google Sheets document with "Full name", "Email", "Phone", "Company", "Job title" and "Meeting notes" columns
3. Configure parameters in the **parameters** node:
    - Set ID of the Google Sheets document
    - Set sheet name ("Sheet1" by default)
4. Configure Google Sheets credentials for AI Agent's tools: **Search for contact** and **Create new contact** and **Update existing contact**.
5. Add Google Gemini API key for the models ("AI Agent", "Transcribe audio", "Analyze image" nodes)

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, Simple Memory, Google Gemini Chat Model, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
