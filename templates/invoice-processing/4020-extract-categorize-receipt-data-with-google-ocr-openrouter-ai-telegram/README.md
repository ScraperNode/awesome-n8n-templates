# 🧾 Extract & categorize receipt data with Google OCR, OpenRouter AI & Telegram

> ⚡ **3,602 views** · 🧾 [Invoice Processing](../)

## Description

Stop typing expenses by hand. **MoneyMate** is an [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) workflow that turns receipts into organized financial insights.

Send a photo or a text via **Telegram**, and **MoneyMate** pulls out the key details, store info, transaction dates, items, and totals, using **Google Vision OCR** and **AI-powered** parsing via **OpenRouter**.

It categorizes expenses (e.g., **Food & Beverages**, **Transport**, **Household**) and sends a clean, emoji-rich summary back to your **Telegram** chat. If a total comes back as zero, it nudges you to double-check the input.

Great for freelancers, small business owners, or anyone who wants expense tracking without the hassle. No database needed, so your data stays private and the setup stays simple.

*Last updated: September 2026.*

## Key Features
- **Telegram Integration:** Input via photo or text, receive summaries instantly.
- **Receipt Scanning:** Converts receipt images to text using **Google Vision API**.  
- **AI Parsing:** Categorizes transactions with **OpenRouter’s AI** analysis.   
- **Privacy-First:** Processes data on-the-fly without storage.  
- **Smart Error Handling:** Catches zero totals with user-friendly prompts.  
- **Flexible Categories:** Supports **Income/Expense** and custom expense types.  

## Ideal For
- **Budget-conscious individuals** managing personal finances.  
- **Entrepreneurs** tracking business expenses.  
- **Teams** needing quick, automated expense reporting.  

## Pre-Requirements
- **[n8n Instance](https://n8n.partnerlinks.io/creator-khmuhtadin):** A running [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) instance (cloud or self-hosted).  
- **Credentials:**  
  - **Telegram:** A bot token and webhook setup (obtained via BotFather). For more information, please refer to [Telegram bots creation](https://core.telegram.org/bots/tutorial)
  - **Google Cloud:** A service account with **Google Vision API** enabled and API key. For more informations, please refer to [Google cloud Vision](https://cloud.google.com/use-cases/ocr)  
  - **OpenRouter:** An account with API access for AI language model usage.  
- **Telegram Bot:** A configured **Telegram** bot to receive inputs and send summaries.  

## Setup Instructions
- **Import Workflow:** Copy the **MoneyMate** workflow JSON and import it into your [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) instance using the "Import Workflow" option.  
- **Set Up Telegram Bot:** Create a bot via BotFather on **Telegram** to get a token and set up a webhook. For detailed steps, refer to [n8n’s Telegram setup guide](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.telegram/).  
- **Configure Credentials:**  
  - In the **Telegram Trigger**, **Send Error Message**, and **Send Expense Summary** nodes, add **Telegram API** credentials with your bot token.  
  - In the **Get Telegram File** and **Download Image** nodes, ensure **Telegram API** credentials are linked.  
  - In the **Google Vision OCR** node, add **Google Cloud** credentials with **Google Vision API** access.  
  - In the **OpenRouter AI Model** node, set up **OpenRouter API** credentials.  
- **Test the Workflow:** Send a test receipt photo or text (e.g., "Lunch 50,000 IDR") via **Telegram** and verify the summary in your chat.  
- **Activate:** Enable the workflow in [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) to run automatically for each input.  

## Customization Options
- **Add Categories:** Modify the **AI Categorizer** node to include new expense types (e.g., **Entertainment**).  
- **Change Output Format:** Adjust the **Format Summary Message** node to include more details like taxes or payment methods.  
- **Switch AI Model:** In the **OpenRouter AI Model** node, select a different **OpenRouter** model for better parsing.  
- **Store Data:** Add a **Google Sheets** node after **Parse Receipt Data** to save expense records.  
- **Enhance Errors:** Include an email notification node after **Check Invalid Input** for failed inputs.  

## Why Choose MoneyMate?
Save time, cut manual entry, and see exactly where your money goes. Ready to streamline your finances? Get **MoneyMate** now!

### Quick Answers
**Does it store my receipts anywhere?**  
No. It processes each receipt on the fly and sends back a summary. Nothing is stored.  
**What can I send it?**  
A receipt photo or a plain text description, straight through Telegram.  
**What if my total shows zero?**  
It will nudge you to double-check the input and try again.  

*Made by: [khmuhtadin](https://khmuhtadin.com)*
Need a custom? contact me on **[LinkedIn](https://www.linkedin.com/in/khmuhtadin/)** or **[Web](https://khmuhtadin.com)**

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Basic LLM Chain, Structured Output Parser, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
