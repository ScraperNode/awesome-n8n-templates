# 🧾 Track expenses from receipts with Telegram, Gemini, and Google Sheets

> ⚡ **1 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow uses a Telegram bot to receive receipt photos or documents, extracts expense details with Google Gemini, and appends the results to Google Sheets, asking the user to confirm or correct the category in Telegram when Gemini’s confidence is low.

## How it works
1. Triggers when a Telegram bot receives a message (photo/document) or an inline button callback.
2. If a receipt is sent as a photo or document, it downloads the file from Telegram and sends it to Google Gemini to extract vendor, amount, date, category, payment method, and a confidence score as JSON.
3. Parses Gemini’s JSON response and normalizes invalid dates to null.
4. If the confidence score is above 0.65, it appends the expense to Google Sheets and replies in Telegram that the expense was saved.
5. If the confidence score is 0.65 or below, it stores the extracted expense plus the workflow resume URL in an n8n Data Table and asks the user in Telegram to confirm the detected category.
6. When the user replies via inline buttons, it either resumes the waiting execution with the existing category or prompts the user to choose a new category and then resumes with the selected category.
7. After approval, it appends the reviewed expense to Google Sheets, deletes the pending record from the Data Table, and confirms success in Telegram.

## Setup
1. Create and connect a Telegram bot credential, then set it on all Telegram nodes.
2. Add a Google Gemini (PaLM) API credential and select a Gemini model in both receipt analysis steps.
3. Create an n8n Data Table (for example, `pending_expenses`) with columns for request_id, resume_url, vendor, amount, date, category, and payment_method, and select it in all Data Table steps.
4. Connect a Google Sheets OAuth2 credential and select your target spreadsheet and sheet in each Google Sheets append step.
5. Ensure your Google Sheet has matching columns for the fields you want to store (for example Date, Vendor, Amount, Payment type, and Expense Category).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, Google Gemini, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
