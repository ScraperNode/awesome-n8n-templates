# 🧾 Extract transactions from images using unli.dev Vision API & Telegram

> ⚡ **226 views** · 🧾 [Invoice Processing](../)

## Description

[unli.dev](https://unli.dev) + [n8n](https://n8n.io) + Telegram

Image Analyzer turns images sent to your Telegram bot into clean, Markdown-formatted transaction text using [unli.dev Vision API](https://unli.dev). Instead of typing numbers and dates manually, the workflow downloads the photo, converts it to base64, analyzes it via API, and replies in-chat with extracted details, saving time and reducing errors. 


## 💡 Why Use Image Analyzer?

* **Save time:** Process images in seconds, cutting manual entry by up to 90%.
* **Solve pain points:** No more blurry screenshot frustration; get clean Markdown transactions.
* **Faster outcomes:** Per-image turnaround under 15s.
* **Competitive edge:** Give staff/customers structured feedback instantly 


## ⚡ Perfect For

* **Small business owners:** Capture receipts/payments quickly.
* **Accountants/bookkeepers:** Intake client receipts with fewer typos.
* **Ops/support teams:** Turn messy screenshots into actionable records.


## 🔧 How It Works

1. **Trigger:** Telegram bot receives photo.
2. **Process:** Convert to base64 & prepare request.
3. **Smart Logic:** Call [unli.dev Vision API](https://unli.dev) for text extraction.
4. **Output:** Send Markdown result back to Telegram.
5. **Optional:** Save structured data to Google Sheets, Airtable, or DB.


## 🛠 Quick Setup

1. Import workflow JSON to your [n8n](https://n8n.io) instance.
2. Add credentials: Telegram bot + unli.dev API key.
3. Customize the system prompt (default: *extract the transaction in Markdown*).
4. Test by sending a real photo to your bot.

## 🧩 You’ll Need

* [n8n](https://n8n.io) instance
* Telegram bot token
* [unli.dev Vision API](https://unli.dev) key
* Optional: Google Sheets / Airtable for storage


Made by: **[Khaisa Studio](https://khaisa.studio?utm_source=n8nofficial)**  
Category: `Image Analysis`

Contact: **[Get in touch](https://khmuhtadin.com/contact)**

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
