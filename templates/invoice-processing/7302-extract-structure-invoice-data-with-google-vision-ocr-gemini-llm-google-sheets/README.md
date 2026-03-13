# 🧾 Extract & structure invoice data with Google Vision OCR, Gemini LLM & Google Sheets

> ⚡ **2,363 views** · 🧾 [Invoice Processing](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Automated Invoice Collection & Data Extraction Using Vision API and LLM

This workflow automates the process of collecting uploaded invoices, extracting text using **Google Vision API**, and processing the extracted text with an LLM to produce structured data containing key transaction details such as **date, voucher number, transaction detail, vendor, and transaction value**.  
The final data is saved to **Google Sheets** and a notification is sent to **Telegram** in real time.

## ✨ Key Features
- **Invoice Upload Form**  
  Users can upload invoice images through a provided form.
- **Google Drive Integration**  
  Files are stored in a specified Google Drive folder with a shareable preview link.
- **OCR via Google Vision API**  
  Converts invoice images to text using `TEXT_DETECTION`.
- **Data Structuring via LLM**  
  Uses LLM model to parse and structure data.
- **Structured Output Parser**  
  Ensures consistent output with required columns.
- **Data Cleaning**  
  Cleans and formats numeric values without currency symbols.
- **Google Sheets Sync**  
  Appends or updates transaction data in Google Sheets (matched by file ID).  
  **Template:** [Google Sheets](https://docs.google.com/spreadsheets/d/1HMzQtFK9T-GDxGFSD7ErW_QLlq-PvCvoFASiHGG2fGM/edit?gid=0#gid=0)
- **Telegram Notification**  
  Sends a transaction summary directly to a Telegram chat/group.

---

## 🔐 Required Credentials
- **Google Vision API Key** → for OCR processing.  
- **OpenRouter API Key** → to access the Gemini Flash LLM.  
- **Google Drive OAuth2** → to upload and download invoice files.  
- **Google Sheets OAuth2** → to write or update spreadsheet data.  
- **Telegram Bot Token** → to send notifications to Telegram.  
- **Telegram Chat ID** → target chat/group for notifications.

---

## 🎁 Benefits
- **Fully automated** from invoice upload to structured reporting.
- **Time-saving** by eliminating manual transaction data entry.
- **Real-time integration** with Google Sheets for reporting and auditing.
- **Instant notifications** via Telegram for quick transaction monitoring.
- **Duplicate prevention** using file ID as a matching key.
- **Flexible** for accounting, finance, or administrative teams.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Google Drive, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
