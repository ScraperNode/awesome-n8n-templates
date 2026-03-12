# 🧾 Automate invoice analysis via Telegram with ChatGPT-4o-mini extraction

> ⚡ **468 views** · 🧾 [Invoice Processing](../)

## Description

## Introduction
Upload invoices via Telegram, receive structured data instantly. Perfect for accountants and finance teams.
## How It Works
Telegram bot receives invoices, downloads files, extracts data using OpenAI, then returns analysis.
## Workflow Template
Telegram Trigger → Document Check → Get File → HTTP Download → AI Extract → Format Response → Send to Telegram

## Workflow Steps
1. **Telegram Trigger:** Listens for uploads.
2. **Document Check:** Validates files; routes errors.
3. **Get File:** Retrieves metadata.
4. **HTTP Download:** Fetches content.
5. **AI Extract:** OpenAI parses invoice fields.
6. **Format Response:** Structures data.
7. **Send Analysis:** Delivers to chat.
## Setup Instructions
1. **Telegram Bot:** Create via BotFather, add credentials.
2. **OpenAI Agent:** Add API key and extraction prompt.
3. **HTTP Node:** Set authentication.
4. **Parser:** Define invoice schema.
5. **Error Handling:** Configure fallbacks.
## Prerequisites
- n8n instance
- Telegram Bot Token
- OpenAI API key
## Customization
- Database storage
- Accounting software integration
## Benefits
- Eliminates manual entry
- Reduces errors

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
