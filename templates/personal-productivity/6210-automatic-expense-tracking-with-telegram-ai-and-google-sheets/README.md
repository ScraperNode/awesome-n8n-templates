# ⚡ Automatic expense tracking with Telegram, AI, and Google Sheets

> ⚡ **2,265 views** · ⚡ [Personal Productivity](../)

## Description

The Problem 😫
Tired of manually logging every coffee and cab ride? Stop wrestling with spreadsheets! This template automates your expense tracking so you can manage your finances effortlessly.

It's perfect for freelancers, small business owners, and anyone who wants a simple, chat-based way to track spending.

---
![Screen Shot 20250724 at 16.23.52 PM.png](fileId:1855)
---
How It Works ✨
Just send a message to your personal Telegram bot like "5 usd for coffee with my card" and this workflow will automatically:

📲 Get your message from Telegram.

🤖 Use AI to understand the amount, category, currency, and payment method.

💱 Convert currencies automatically using live exchange rates.

✍️ Log everything neatly into a new row in your Google Sheet.

🛠️ Quick Setup Guide
1. Google Sheets 📝
Create a new Google Sheet.

Make sure your first row has these exact column names:
date, amount, category, description, user_id, payment_method, currency, exchange_rate, amount_converted

Copy the Sheet ID from the browser's URL bar.

2. Telegram Bot 🤖
Chat with @BotFather on Telegram, use the /newbot command, and get your API Token.

Chat with @userinfobot to get your personal Chat ID.

3. n8n Workflow 🔗
Add your credentials for Google Sheets, Telegram, and your AI model.

Paste your Chat ID into the Telegram Trigger node.

Paste your Sheet ID into the Append row in sheet node.

Activate the workflow and start tracking! ✅

## 🔗 Nodes Used

Google Sheets, Telegram Trigger, AI Agent, Anthropic Chat Model, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
