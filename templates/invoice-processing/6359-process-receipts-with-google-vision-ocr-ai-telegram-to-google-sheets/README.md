# 🧾 Process receipts with Google Vision OCR, AI & Telegram to Google Sheets

> ⚡ **3,499 views** · 🧾 [Invoice Processing](../)

## Description

## Automated Financial Reporting Using Google Vision OCR, Telegram & Google Sheets


This workflow automates the process of recording financial transactions from photos of receipts or shopping receipts. Users simply send an image of the receipt via Telegram. The image is processed using the Google Vision API to detect text, then extracted and structured by LLM via OpenRouter. The final result is saved to Google Sheets and also displayed to the user via a Telegram bot.

**🧾 Google Sheets Template**
Create a Google Sheet using this template: [Financial Reporting](https://docs.google.com/spreadsheets/d/11oT95lKoGNFlZtV129ampaBNOxnnKAJnUn1fAlqYZvY/edit?usp=sharing)

## 🛠️ Key Features
- The workflow starts when a user sends a photo of a receipt to the Telegram bot.
- The image is converted to text using the Google Vision API's OCR.
- Data processing with LLM (OpenRouter) helps identify and structure transaction elements such as: date, vendor name & address, receipt/invoice number, item list (product name, quantity, unit price, total), and transaction category.
- Cleaned and structured data is automatically recorded to Google Sheets per item.
- The system also sends a summary of the recording results in an easy to read text format.
- Users can also send text messages to the bot to query stored transaction data, which will be answered by a Google Sheets-based AI Agent.

## 🔧 Requirements
- Active Telegram Bot + API Token
- Google Vision API Key
- OpenRouter Account + API Key
- Google Sheets connected to n8n

## 🧩 Setup Instructions
1. Replace all API keys and tokens with your own in the relevant nodes.
   - Google Vision API Key: Set in 'Set Vision API' node.
   - Telegram Bot Token: Set in 'Set Telegram Token' node and all Telegram nodes.
   - OpenRouter API Key: Set in all OpenRouter nodes.
   - Google Sheets: Connect your own Google Sheets credential.
2. Use the provided Google Sheets template or your own.
3. Activate the workflow after configuration.
4. (Optional) Review sticky notes for step-by-step explanations.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, AI Agent, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
