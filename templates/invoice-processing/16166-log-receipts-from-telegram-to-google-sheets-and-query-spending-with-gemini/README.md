# 🧾 Log receipts from Telegram to Google Sheets and query spending with Gemini

> ⚡ **65 views** · 🧾 [Invoice Processing](../)

## Description

## Quick Overview
This workflow logs receipt photos from Telegram into Google Sheets using Google Gemini for data extraction, and exposes an MCP server tool that lets clients like Claude or ChatGPT query your spending by month and category.

## How it works
1. Triggers when you send a receipt photo to your Telegram bot.
2. Downloads the highest-resolution image from the Telegram message and sends it to Google Gemini to extract receipt details as JSON.
3. Parses and normalizes the extracted fields (date, amount, currency, vendor, category, note) and adds a timestamp.
4. Appends the expense as a new row in Google Sheets and replies in Telegram with a confirmation message.
5. Exposes an MCP Server HTTP/SSE endpoint that MCP clients can call to query spending.
6. When queried, reads all expenses from the same Google Sheet, filters by the requested month and category, and returns totals, a category breakdown, and matching transactions.

## Setup
1. Create a Telegram bot with @BotFather and add your Telegram credential so the workflow can receive messages, download photos, and send confirmations.
2. Add a Google Gemini API credential for the Google Gemini node.
3. Create a Google Sheet with headers: Date, Amount, Currency, Vendor, Category, Note, LoggedAt, then set the document ID and sheet name in both Google Sheets nodes (Append to Expense Sheet and Read Expenses).
4. After importing, open the Query Spending tool configuration and re-link it to your own copy of the “Personal Finance Query Spending (MCP Tool)” sub-workflow, then save that sub-workflow.
5. Activate the MCP Server workflow to generate the Production URL, then configure that URL in your MCP client (Claude Desktop/ChatGPT/Cursor).
6. For production use, enable Bearer authentication on the MCP server trigger and set the same token in your MCP client.

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, Execute Workflow Trigger, Call n8n Workflow Tool, MCP Server Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
