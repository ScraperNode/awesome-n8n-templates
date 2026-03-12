# 🎯 Digitize business cards with Thai OCR & save to Google Sheets or CRM

> ⚡ **376 views** · 🎯 [AI Summarization & Classification](../)

## Description

## This n8n template demonstrates how to use Typhoon OCR + LLM to digitize business cards, enrich the extracted details, and save them directly into Google Sheets or any CRM.

It works with both Thai and English business cards and even includes an optional step to draft greeting emails automatically.

Use cases: Automatically capture leads at events, enrich contact details before saving them into your CRM, or simply keep a structured database of your professional network.

### Good to know

Two versions of the workflow are provided:

🟢 **Without Search API** → cost-free option using only Typhoon OCR + LLM

🔵 **With Search API** → adds Google Search enrichment for richer profiles (may incur API costs via SerpAPI)

The Send Email step is optional — include it if you want to follow up instantly, or disable it if not needed.

Typhoon provides a free API for anyone to sign up and use → [opentyphoon.ai](https://opentyphoon.ai/?utm_source=n8n)


### How it works

1. A form submission triggers the workflow with a business card image (JPG/PNG).

2. Typhoon OCR extracts text from the card (supports Thai & English).

3. Typhoon LLM parses the extracted text into structured JSON fields (e.g., name, job title, organization, email).

4. Depending on your chosen path:

- Version 1: Typhoon LLM enriches the record with job type, level, and sector.

- Version 2: The workflow calls the Search API (via SerpAPI) to add a profile/company summary.

5. The cleaned and enriched contact is saved to Google Sheets (can be swapped with your preferred CRM or database).

6. (Optional) Typhoon LLM drafts a short, friendly greeting email, which can be sent automatically via Gmail.

### How to use

The included form trigger is just one example. You can replace it with:
- A webhook for uploads
- A file drop in cloud storage
- Or even a manual trigger for testing

You can easily change the destination from Google Sheets to HubSpot, Notion, Airtable, or Salesforce.

The enrichment prompt is customizable — adjust it to classify contacts based on your organization’s needs.

### Requirements

- Typhoon API key
- Google Sheets API credentials + a prepared spreadsheet
- (Optional) Gmail API credentials for sending emails
- (Optional) SerpAPI key for the Search API enrichment path

### Customising this workflow

This AI-powered business card reader can be adapted to many scenarios:

- Event lead capture: Collect cards at conferences and sync them to your CRM automatically.

- Sales enablement: Draft instant greeting emails for new contacts.

- Networking: Keep a clean and enriched database of your professional connections.

## 🔗 Nodes Used

Edit Image, Google Sheets, Gmail, AI Agent, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
