# 🧾 Log Telegram receipt images to Excel 365 using Tesseract OCR and GPT-4.1-mini

> ⚡ **198 views** · 🧾 [Invoice Processing](../)

## Description

# 📸💰 Log receipt transactions from Telegram images to Excel using OCR and AI

OCR + AI + Duplicate Protection (n8n Workflow)

## Overview

This workflow automatically converts receipt images or payment proof sent via Telegram into structured financial records stored in Excel 365.

Core flow:
```
Take Photo → OCR → AI Structuring → Validation → Duplicate Check → Append to Excel
```
The system is designed to reduce manual data entry errors and improve financial visibility by turning unstructured receipt images into reliable financial records.

⸻

## How it works
This workflow captures receipt images sent to a Telegram bot and converts them into structured financial records in Excel.

When a user sends an image, the workflow downloads the file and extracts the text using OCR. The extracted text is then analyzed by an AI model (OpenAI or Gemini) to identify key transaction details such as date, amount, merchant, and transaction type.

The workflow validates the extracted data and generates a unique duplicate key. It then checks Excel to ensure the transaction has not already been recorded. If no duplicate is found, the transaction is appended to the Excel sheet.

The user receives a confirmation message in Telegram indicating whether the transaction was successfully recorded or rejected due to missing data or duplication.

## Workflow Nodes

The workflow contains the following nodes:
1. Telegram Trigger
1. Edit Fields (extract chat_id and image_id)
1. Condition (validate image exists)
1. Telegram Get File
1. Tesseract OCR
1. AI Agent (ChatGPT / Gemini)
1. Edit Field (JSON Output Parsing)
1. Excel 365 – Get Configuration
1. Edit Field – Normalize & Generate duplicate_key
1. Condition – Validate required fields
1. Excel 365 – Lookup duplicate_key
1. Condition – Duplicate Check
1. Excel 365 – Append Transaction
1. Telegram – Send Confirmation Message

## 🧠 What This Workflow Does

This workflow automatically:
- Captures receipt images from Telegram
- Extracts text using OCR
- Converts OCR text into structured transaction data using AI
- Validates required financial fields
- Prevents duplicate transaction entries
- Saves valid records into Excel
- Sends confirmation messages to Telegram

## Setup steps
1. Create a Telegram bot using @BotFather and copy the Bot Token.
2. Add Telegram credentials in n8n using the Bot Token.
3. Prepare an Excel file in OneDrive or SharePoint with a TRANSACTIONS sheet.
4. Configure Microsoft Excel credentials in n8n.
5. Add either OpenAI or Google Gemini credentials for the AI parsing step.
6. If running self-hosted n8n, ensure Tesseract OCR is installed.
7. Activate the workflow and send a receipt image to the Telegram bot to test.
8. 

## 🎯 Key Benefits
	•	Reduce financial recording errors
	•	Eliminate repetitive manual data entry
	•	Improve cashflow visibility
	•	Simple photo-based financial recording
	•	Scalable foundation for AI-powered financial automation


## 🚀 Use Cases

This workflow is useful for:
	•	Small business owners
	•	Online sellers
	•	Freelancers
	•	Finance administrators
	•	Personal expense tracking


## 📌 Notes
	•	Duplicate detection is based on a composite transaction key
	•	OCR accuracy depends on image quality
	•	AI parsing improves recognition compared to OCR-only approaches

## 🧱 Requirements

To run this workflow you need:
	•	n8n (Cloud or Self-Hosted)
	•	Telegram Bot Token
	•	Microsoft Excel 365 Account
	•	OpenAI API Key or Google Gemini API Key
	•	Tesseract OCR (for self-hosted installations)


## 🏁 Result

After setup, users can simply send receipt photos to Telegram and the workflow will automatically convert them into structured financial records stored in Excel.

No manual bookkeeping required.

Built for automation lovers, small businesses, and teams who want simple but powerful financial tracking using n8n.```language

```

## 🔗 Nodes Used

Telegram, Telegram Trigger, Microsoft Excel 365, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
