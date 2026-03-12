# ⚡ AI-powered personal finances manager with Gemini, Telegram & Google Sheets

> ⚡ **4,762 views** · ⚡ [Personal Productivity](../)

## Description

### Who’s it for

This template is designed for individuals who want to gain full control over their personal finances without the hassle of manual tracking. Ideal for freelancers, small business owners, or anyone who wants a simple, automated way to monitor income and expenses.

### How it works / What it does

Using **n8n**, **Telegram**, and **Google Sheets**, this workflow allows you to log, edit, and query your financial transactions through simple Telegram messages. The AI interprets your input—whether text or audio—and automatically categorizes your income and expenses. Responses are delivered **fully formatted in Telegram HTML**, giving you clean, readable summaries and insights.

Features include:

* Add, edit, and delete transactions automatically
* Query totals and category-specific expenses, e.g., “How much did I spend on food this month?”
* Generate financial summaries and monthly reports
* Automatic ID assignment and date handling

### How to set up

1. Deploy this workflow on your **self-hosted n8n instance**.
2. Connect your **Telegram Bot** and **Google Sheets** account.
3. Configure the **Google Gemini AI node** for message interpretation.
4. Update sheet headers and categories if needed.
5. Start sending messages to your Telegram bot to track expenses instantly.

## How to Set Up the Google Sheet

To use this workflow, you’ll need a Google Sheet with the following structure:

| Column Name         | Description                                     |
| ------------------- | ----------------------------------------------- |
| **id**              | Unique sequential identifier (auto-incremented) |
| **type**            | "income" or "expense"                           |
| **value**           | Monetary value (format: 1234.56)                |
| **category**        | Classification of the transaction               |
| **payment\_method** | Payment method used (e.g., card, cash, PIX)     |
| **description**     | Details about the transaction                   |
| **date**            | Transaction date (format: yyyy-MM-dd)           |

Make sure the column headers match exactly as shown above, and leave the rows empty for the bot to fill automatically.

### Requirements

* n8n (self-hosted or cloud instance)
* Telegram Bot API
* Google Sheets
* Google Gemini AI or equivalent AI node

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, Simple Memory, Calculator, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
