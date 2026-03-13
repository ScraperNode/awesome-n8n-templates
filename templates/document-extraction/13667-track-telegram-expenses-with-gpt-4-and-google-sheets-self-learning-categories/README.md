# 🔬 Track Telegram expenses with GPT-4 and Google Sheets (self-learning categories)

> ⚡ **19 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

**💸 HOW IT WORKS — AI TELEGRAM EXPENSE TRACKER**

This workflow transforms natural Telegram messages into structured expenses using AI — without forms, manual typing, or complex inputs.

Simply send a message like:


*Groceries 23€ yesterday*



The workflow validates the sender, understands the intent, extracts structured data, and prepares the expense for approval before saving.

────────────────

**🔄 WORKFLOW OVERVIEW**

**🟩 1. Secure Input Layer**
Incoming Telegram messages are checked against a list of approved Chat IDs to ensure only authorized users can create expenses.

**🟦 2. AI Expense Detection**
An AI layer analyzes the message and decides whether it represents a real financial transaction.
Non-expense messages are safely ignored to avoid noise in your data.

**🟨 3. Smart Category Intelligence**
Existing categories are loaded from Google Sheets and compared with the message content.
If no suitable category exists, the workflow can suggest and learn new categories over time.

**🟪 4. Structured Data Extraction**
AI converts natural language into structured fields:

date

amount

category

description

shared vs personal expense

Supports German and English input.

**🟥 5. Human Approval & Storage**
Before saving, the user confirms the extracted result directly via Telegram.
After approval, the expense is appended to Google Sheets automatically.

────────────────

📋 SETUP REQUIREMENTS

Before using this workflow, make sure the following components are ready:

1️⃣**Telegram Bot**
Create a Telegram bot using BotFather and connect it to the Telegram Trigger node in n8n. Detailed setup instructions can be found [here](https://medium.com/@robinvm/how-to-create-a-telegram-bot-and-connect-it-to-n8n-99eec8ad6ed0).

2️⃣**LLM API Access**
An API Key for a Large Language Model (LLM) is required for:

expense detection

category matching

structured data extraction

Add your API credentials inside the AI node configuration.

3️⃣**Google Sheets**

Create two Google Sheets before importing the workflow.

***EXPENSES***
Required columns:
*date, amount, category, description, common_expense, Person*

***EXPENSE_CATEGORIES***
Required columns:
*category, description, examples*

The workflow reads existing data and appends new entries automatically.

────────────────

💡**KEY FEATURES**

• AI-powered expense detection from natural language
• Self-learning category system
• Human-in-the-loop approval step
• Multi-language support (DE & EN)
• Clean Google Sheets integration
• Designed for real-life shared finance tracking

────────────────

👥**MULTI-USER SUPPORT**

Built for couples, roommates, or teams.

Add multiple Chat IDs in:
Security — Allow Approved Chat IDs

Each expense is automatically tagged with the sender.
Shared expenses are stored as true in the common_expense column, while personal expenses default to false unless shared spending is detected.

This allows easy downstream analysis, dashboards, or automation.

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, Filter, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
