# 🎫 Transform email responses with GPT-4O Mini and Telegram human-in-the-loop

> ⚡ **492 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Description

This workflow automates your email communication by listening for incoming emails and notifying you via Telegram. It then prompts you to provide a quick response, which it transforms into a polished, professional message inspired by Chick-fil-A’s renowned customer support style—super friendly, thoughtful, and smooth. This ensures your replies always sound top-notch, even if you’re not naturally great at writing customer messages.

I use this exact flow for my own business to handle customer interactions with ease and exceptional care.

---

## Step-by-Step Setup Instructions

### 1. Email Connection

* Connect your email inbox (e.g., Gmail, Outlook) to the workflow to monitor incoming emails.
* Set the trigger to listen for new messages or specific labels/folders as needed.

### 2. Telegram Connection

* Connect your Telegram account using a Telegram Bot token.
* Configure the bot to send notifications when a new email arrives and to receive your reply input directly in Telegram.

### 3. OpenAI Connection

* Connect your OpenAI account by adding your API key.
* Use OpenAI to rephrase your raw responses into highly polished, friendly customer support messages.

---

## Workflow Description

* The system continuously monitors your email inbox.
* When a new email arrives, you receive an instant Telegram notification with the email summary.
* You reply quickly on Telegram with your initial thoughts or answers.
* The reply is sent to OpenAI, which “translates” it into a Chick-fil-A style, ultra-courteous response.
* The final message is either emailed back to the customer or saved for you to review and send manually.

---

## Target Audience and Problem Solved

This workflow is perfect for:

* Small business owners who handle customer support alone.
* Entrepreneurs who want to maintain a high level of professionalism in their responses but struggle with wording.
* Teams looking to streamline email replies with fast, human-like, and warm communication.

**Problem solved:**
It removes the stress of crafting perfectly polite and engaging customer support emails from scratch, saving time and boosting customer satisfaction.

---

## Customization Guidance

* **Adapting tone and style:** Change the OpenAI prompt to match your brand voice, whether more formal, casual, or playful.
* **Different business contexts:** Adjust email filters or Telegram notifications to prioritize specific types of inquiries.
* **Response automation:** Add extra steps to automatically send replies or integrate with CRM tools.
* **Multilingual support:** Incorporate language detection and translation if your business serves customers in multiple languages.

## 🔗 Nodes Used

Email Trigger (IMAP), Send Email, Telegram, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
