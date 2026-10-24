# 🧾 Extract transactions from images using unli.dev Vision API & Telegram

> ⚡ **234 views** · 🧾 [Invoice Processing](../)

## Description

[unli.dev](https://unli.dev) + [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) + Telegram

Image Analyzer turns images sent to your Telegram bot into clean, Markdown-formatted transaction text using [unli.dev Vision API](https://unli.dev). Instead of typing numbers and dates manually, the workflow downloads the photo, converts it to base64, analyzes it via API, and replies in-chat with extracted details. Faster input, fewer errors.

*Last updated: September 2026.*

## Why Use Image Analyzer?

* **Save time:** Images processed in seconds, manual entry down by up to 90%.
* **Solve pain points:** No more blurry screenshot frustration. Clean Markdown transactions back.
* **Faster outcomes:** Per-image turnaround under 15s.
* **Competitive edge:** Staff and customers get structured feedback instantly.


## Perfect For

* **Small business owners:** Capture receipts and payments quickly.
* **Accountants/bookkeepers:** Intake client receipts with fewer typos.
* **Ops/support teams:** Turn messy screenshots into actionable records.


## How It Works

1. **Trigger:** Telegram bot receives photo.
2. **Process:** Convert to base64 & prepare request.
3. **Smart Logic:** Call [unli.dev Vision API](https://unli.dev) for text extraction.
4. **Output:** Send Markdown result back to Telegram.
5. **Optional:** Save structured data to Google Sheets, Airtable, or DB.


## Quick Setup

1. Import workflow JSON to your [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) instance.
2. Add credentials: Telegram bot + unli.dev API key.
3. Customize the system prompt (default: *extract the transaction in Markdown*).
4. Test by sending a real photo to your bot.

## You’ll Need

* [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) instance
* Telegram bot token
* [unli.dev Vision API](https://unli.dev) key
* Optional: Google Sheets / Airtable for storage

### Quick Answers
**What do I send?**  
Any photo with transaction details to your Telegram bot.  
**What comes back?**  
Clean Markdown-formatted transaction text, right in the chat.  
**Can it store results?**  
Yes. Optionally save structured data to Google Sheets, Airtable, or a database.  


Made by: **[khmuhtadin](https://khmuhtadin.com)**  
Category: Image Analysis

Need custom work? **[Contact me](https://khmuhtadin.com/contact)**

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
