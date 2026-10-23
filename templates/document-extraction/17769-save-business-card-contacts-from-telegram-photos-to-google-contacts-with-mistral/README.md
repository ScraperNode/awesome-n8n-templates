# 🔬 Save business card contacts from Telegram photos to Google Contacts with Mistral and OpenAI

> ⚡ **62 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow listens for Telegram messages containing a business card photo and the /business caption, uses Mistral OCR and OpenAI to extract contact details, checks Google Contacts for duplicates by email, then creates a new Google Contact and replies in Telegram with the result.

## How it works
1. Triggers when a Telegram bot receives a message.
2. Verifies the message includes a photo and a caption starting with the configured command (for example, /business).
3. Checks the sender’s Telegram user ID against an allowlist to restrict who can use the bot.
4. Downloads the business card photo from Telegram and runs Mistral OCR to extract the text.
5. Uses OpenAI (via an information extraction step) to parse the OCR text into structured fields like name, company, role, phone, email, and address.
6. Searches Google Contacts for an existing contact with the same email and either notifies the user about the duplicate or creates a new Google Contact.
7. Sends a success or error confirmation message back to the user in Telegram.

## Setup
1. Create a Telegram bot with @BotFather and add your Telegram credential in n8n.
2. Add a Mistral API key credential for OCR and an OpenAI API key credential for field extraction.
3. Connect a Google Contacts OAuth2 credential with permission to read and create contacts.
4. In the Configuration step, set the authorized Telegram user IDs (comma-separated) and adjust the trigger caption and reply messages if needed.

## Additional info
# Save business card contacts from Telegram photos to Google Contacts
# 📥 [Open full documentation on Notion](https://automatisation.notion.site/Course-Save-business-card-contacts-from-Telegram-photos-to-Google-Contacts-39f3d6550fd9814aac7def269dee2bca)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

Telegram, Telegram Trigger, Google Contacts, OpenAI Chat Model, Information Extractor, Mistral AI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
