# 🔬 Extract & store receipt data with GPT-4, OCR, Google Sheets & Notion via Telegram Bot

> ⚡ **1,407 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## Overview
Transform your receipt management with this comprehensive n8n workflow that automatically processes receipts through Telegram, extracts transaction data using AI, and stores it across multiple platforms for seamless expense tracking.

## Key Features
- **📱 Telegram Bot Integration**: Send receipts via photo or manual text entry
- **🔍 OCR Processing**: Automatic text extraction from receipt images using OCR.space API
- **🤖 AI Data Extraction**: OpenAI GPT-4 intelligently extracts vendor, amount, date, and category
- **📊 Multi-Platform Storage**: Automatically saves to Google Sheets, Notion, and custom APIs
- **💾 Receipt Archival**: Stores original receipt images in Google Drive
- **✅ Smart Validation**: Validates extracted data and handles errors gracefully
- **📲 Real-time Feedback**: Sends confirmation messages with transaction details

## How It Works
1. **Input Methods**: Send receipt photos or text messages to your Telegram bot
2. **Image Processing**: Downloads and processes receipt images using OCR technology
3. **AI Analysis**: GPT-4 extracts structured transaction data from OCR text
4. **Data Validation**: Ensures data quality and handles missing information
5. **Multi-Storage**: Simultaneously saves to Google Sheets, Notion database, and external APIs
6. **Confirmation**: Sends formatted confirmation with all transaction details

## Use Cases
- Personal expense tracking and budgeting
- Small business receipt management
- Travel expense documentation
- Tax preparation and record keeping
- Automated bookkeeping workflows

## Required Credentials
- Telegram Bot API (for bot functionality)
- OCR.space API (for receipt text extraction)
- OpenAI API (for AI data processing)
- Google Sheets OAuth2 (for spreadsheet storage)
- Google Drive OAuth2 (for image storage)
- Notion API (for database integration)

## Setup Notes
Replace placeholder values in the workflow:
- `YOUR_GOOGLE_SHEET_ID_HERE` in Google Sheets node
- `YOUR_NOTION_DATABASE_ID_HERE` in Notion node
- `YOUR_API_KEY_HERE` and API endpoint in Website API node

This workflow provides a complete solution for automated receipt processing, making expense tracking effortless through simple Telegram interactions while maintaining data across multiple platforms for maximum accessibility and backup.

## 🔗 Nodes Used

Function, Google Sheets, HTTP Request, Telegram, Telegram Trigger, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
