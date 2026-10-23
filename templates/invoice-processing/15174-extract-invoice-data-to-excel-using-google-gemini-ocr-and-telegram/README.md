# 🧾 Extract invoice data to Excel using Google Gemini, OCR, and Telegram

> ⚡ **120 views** · 🧾 [Invoice Processing](../)

## Description

## 🚀 1. HOW IT WORKS
This workflow automatically extracts structured data from invoices sent via Telegram (PDF or image) and saves it to Excel.

1. A user sends an invoice (PDF or image) to a Telegram bot
2. The workflow detects the file type (PDF or image)
3. For PDF:
   - Extracts text directly from the file
   - Falls back to OCR if needed
4. For images:
   - Uses OCR to extract text
5. The extracted text is cleaned and processed
6. AI (Google Gemini) converts the raw text into structured JSON data
7. The data is validated and formatted
8. Valid data is saved to Excel (Microsoft Excel or Google Sheets)
9. A confirmation message is sent back via Telegram

This eliminates manual data entry and speeds up invoice processing.

## ⚙️ 2. SETUP INSTRUCTIONS
Prerequisites:

1. Telegram Bot
   - Create a bot using BotFather
   - Copy the Bot Token

2. Google Gemini API Key
   - Get API key from Google AI Studio

3. Excel / Google Sheets
   - Prepare a sheet with columns:
     invoice_number, date, vendor, total, tax, items

Setup Steps:

1. Configure Telegram Trigger Node
   - Paste your Bot Token

2. Configure File Download
   - Ensure binary data is correctly passed

3. Configure OCR
   - Use Tesseract OCR node or external OCR API

4. Configure Google Gemini Node
   - Add API key
   - Use provided prompt for structured extraction

5. Configure Excel / Google Sheets Node
   - Connect your account
   - Map fields correctly

6. Test Workflow
   - Send a sample invoice via Telegram

7. Activate Workflow

## 🛠 Requirements
- n8n (self-hosted or cloud)
- Telegram Bot Token
- Google Gemini API Key
- Excel 365 or Google Sheets

## 📂 Output Example
```
{
  "invoice_number": "INV-001",
  "date": "2025-01-01",
  "vendor": "ABC Company",
  "total_amount": "100000",
  "tax": "10000",
  "items": [
    {
      "name": "Service A",
      "quantity": "1",
      "price": "100000"
    }
  ]
}
```
## 🚀 Use Cases
- Invoice automation
- Accounts payable automation
- Financial data entry automation
- Document digitization

## 💡 Notes
- Works best with clear and high-quality images
- OCR accuracy depends on image quality
- AI improves extraction accuracy significantly

## 🔗 Nodes Used

Telegram, Telegram Trigger, Microsoft Excel 365, Extract from File, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
