# 🔬 Organize handwritten memos from LINE using Gemini OCR, Drive and Sheets

> ⚡ **108 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## AI Handwritten Memo Organizer – Overview
This workflow receives handwritten memo images sent via LINE and automatically extracts, summarizes, and organizes the content using AI.

## Step-by-step process:
1.	User sends a handwritten memo image via LINE
2.	Webhook receives the image
3.	Immediate reply is sent: “Processing…”
4.	Image is saved to Google Drive
5.	AI performs OCR and generates structured data (title, category, summary, tags)
6.	The JSON response is safely parsed with error handling
7.	OCR failure is detected if text cannot be properly extracted
If OCR fails:
→ User is notified with guidance for retaking the image
If OCR succeeds:
→ Check if the category sheet exists in Google Sheets
→ If not, create a new sheet
→ Save the data (title, summary, tags, date, image URL)
8.	Completion message is sent to the user via LINE

## Setup Steps
1.	Create a LINE Messaging API channel and obtain the Channel Access Token
2.	Create a Google Spreadsheet for storing memo data
3.	Create a Google Drive folder to store uploaded images
4.	Set the following values in the Config node:
o	LINE_ACCESS_TOKEN
o	GOOGLE_SHEETS_ID
5.	Set the Webhook URL in the LINE Developers Console

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Google Drive, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
