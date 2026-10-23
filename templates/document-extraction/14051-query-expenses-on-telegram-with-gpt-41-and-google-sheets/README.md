# 🔬 Query expenses on Telegram with GPT-4.1 and Google Sheets

> ⚡ **158 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# 💬 Chat with Your Finances on Telegram

Ask questions like *“How much did I spend on food last month?”* and get instant answers from your financial data — directly in Telegram.


This workflow connects your **Google Sheets expense log** to an **AI-powered query engine** that understands natural language, resolves ambiguous categories and person names, and sends back a **clean formatted summary** in Telegram.

No spreadsheets. No dashboards.  
Just **chat with your financial data**.

---

## ⚡ How it works

Simply send a message like:

- *How much did we spend on groceries last month?*
- *Show me a breakdown by category for this week.*

The workflow automatically:

1. **Parses your intent** using GPT-4.1-nano  
2. **Resolves categories and person names** via mapping tables  
3. **Filters and aggregates expense data** from Google Sheets  
4. **Returns a formatted summary** directly in Telegram

If a category or person is unknown, the workflow uses AI to **suggest the closest match** and asks the user to confirm via **Telegram inline buttons**.

Confirmed aliases are saved automatically, making the system **self-learning over time**.

---

## ✨ Key Features

- **Natural language queries** in English and German  
- **AI intent parsing** with GPT-4.1-nano (time range, person, category, filters)  
- **Self-learning entity resolution** for categories and names  
- **Interactive disambiguation** via Telegram inline buttons  
- **Relative date support** (`this week`, `last month`, `this year`)  
- **Group-by breakdowns** by category or person  
- **Shared expense filtering** via `common_only` flag  
- **Multi-user support** via Chat ID allowlist

---

## 📋 Requirements

To run this workflow you need:

- **Telegram Bot** (created via `@BotFather`)
- **OpenAI API key**
- **Four Google Sheets**

Required sheets:

- `expenses`
- `expense_categories`
- `categories_mapping`
- `person_mapping`

---

## ⏱ Setup Time

Approx. **15 minutes**

All required configuration steps are documented directly inside the workflow using **"Action Required" notes** in each workflow layer.

---

## Examples

![image.png](fileId:4911)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
