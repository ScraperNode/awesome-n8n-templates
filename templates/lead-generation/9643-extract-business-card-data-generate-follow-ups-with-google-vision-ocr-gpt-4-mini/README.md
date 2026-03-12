# 🎣 Extract business card data & generate follow-ups with Google Vision OCR & GPT-4 Mini

> ⚡ **553 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

This n8n template helps you turn business cards into qualified sales opportunities — instantly.

No more lost leads after events or networking meetups. Just send a business card photo via Telegram, and let AI handle the rest.

The workflow extracts details (name, company, role, email, phone) using Google Vision OCR, analyzes context with OpenAI, and then generates personalized WhatsApp or email messages to help you follow up faster.

## Use Cases

Capture leads instantly from events or meetups.

Auto-analyze business card data into structured CRM entries.

Send hyper-personalized WhatsApp messages or emails within minutes.

Ideal for founders, marketers, and business development teams.

## How it Works

Trigger: Send a photo of a business card via Telegram.

Extract: Google Vision OCR reads and extracts all text from the image.

Process: The extracted text is sent to an AI agent (OpenAI GPT-4.1-mini) for:

Contact parsing (name, company, role, email, phone)

Business/industry inference

AI-generated personalized follow-up messages

Output: The system returns structured JSON containing:

Email subject & body

WhatsApp draft message

Fit score, opportunities, and next action steps

## How to Use

Import the JSON template into n8n.

Add your Telegram Bot Token to the “Telegram Trigger” node.

Add your Google Cloud Vision API key in the HTTP Request node.

Add your OpenAI credentials in the “OpenAI Chat Model” node.

(Optional) Connect the output to Google Sheets, Airtable, or your CRM.

Run the workflow — take a photo of a business card and watch the magic happen!

## Requirements

Telegram Bot for image input

Google Vision API Key

OpenAI API Key

(Optional) Integration with CRM or WhatsApp API

## Customization Ideas

Replace Telegram with Email or WhatsApp triggers.

Push qualified leads directly into HubSpot or Notion.

Automate multi-step sequences based on AI fit scores.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram Trigger, Gmail, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
