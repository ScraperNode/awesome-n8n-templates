# 🎫 Automate email triage with GPT-4.1-mini classification and Gmail auto-replies

> ⚡ **938 views** · 🎫 [Ticket Management & Triage](../)

## Description

## How it works:
- Detects new unread Gmail messages
- Extracts sender name for personalized replies
- Classifies the email into one of four categories
- Applies the correct Gmail label and either sends an auto-reply, creates a draft, or logs the contact in Google Sheets

## Setup steps:
- Takes about 5–10 minutes to connect accounts and set labels
- Connect Gmail, OpenAI, and optional Google Sheets in n8n
- Add label IDs, Google Sheet ID, sheet name, and phone number in Set – Config
- Create four Gmail labels for the categories
- Keep full setup instructions in the sticky notes inside the workflow

## 🔗 Nodes Used

Google Sheets, Gmail, Gmail Trigger, OpenAI Chat Model, OpenAI, Text Classifier

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
