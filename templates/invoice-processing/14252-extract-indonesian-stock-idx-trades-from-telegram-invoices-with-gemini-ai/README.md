# 🧾 Extract Indonesian stock (IDX) trades from Telegram invoices with Gemini AI

> ⚡ **78 views** · 🧾 [Invoice Processing](../)

## Description

Automatically extract stock transactions from Indonesian broker trade confirmation documents sent via Telegram using AI vision.

How it works:

Send a PDF or image of your broker trade confirmation to the bot. The workflow downloads the file, encodes it, and sends it to OpenRouter (Gemini) for AI extraction. All detected transactions are displayed in a single confirmation message with ✅ Save All / ❌ Cancel buttons. The extracted data is stored temporarily using workflow static data, ready to be forwarded to any destination on confirm.

Features:

Supports PDF and image (JPG, PNG, screenshot)
Handles multi-transaction documents — all shown in one batch confirmation
Indonesian market aware — quantity in lots (1 lot = 100 shares)
Extracts: ticker, company name, type, quantity, price, fee, total, date, broker, confidence score
Low-confidence extractions handled gracefully
Modular — connect the confirm output to any node (HTTP Request, Google Sheets, Airtable, Notion, database, etc.)
Required credentials:

Telegram account — your bot token from BotFather
OpenRouter API — Header Auth credential (Authorization: Bearer sk-or-v1-...)
Setup:

Import workflow
Add credentials
Expose n8n via HTTPS (Cloudflare Tunnel, ngrok, or public server)
Activate workflow — webhook registers automatically
Send a broker PDF to your bot
Default model: google/gemini-2.5-flash-lite via OpenRouter (free tier available)

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
