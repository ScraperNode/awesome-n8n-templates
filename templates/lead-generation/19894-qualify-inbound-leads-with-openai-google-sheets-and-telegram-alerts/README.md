# 🎣 Qualify inbound leads with OpenAI, Google Sheets, and Telegram alerts

> ⚡ **21 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
Automatically capture inbound leads through an n8n form, analyze their sales potential with AI, assign a 0–100 score and HOT/WARM/COLD classification, save every lead to Google Sheets, and instantly notify the sales team in Telegram when a high-value lead arrives.

## How it works
1. Receives a new submission from an n8n Form containing the lead’s contact details, budget, business need, urgency, and message.
2. Uses OpenAI to analyze the lead and generate a 0–100 score, HOT/WARM/COLD classification, rationale, recommended next action, and suggested reply.
3. Parses the AI response and combines it with the original form data into a structured lead record.
4. Saves every qualified lead to Google Sheets for tracking and follow-up.
5. Routes the lead according to its AI-generated classification.
6. Instantly sends a Telegram alert when a lead is classified as HOT so the sales team can respond quickly.

## Setup
1. Connect an OpenAI credential in the AI qualification node and select a compatible text model.
2. Connect your Google Sheets account, create or select a spreadsheet for storing leads, and map the workflow fields to the corresponding columns.
3. Create or connect a Telegram bot, add the bot credentials in n8n, and enter the destination Chat ID for HOT-lead notifications.
4. Review the lead qualification prompt and adjust the scoring criteria, budget expectations, and HOT/WARM/COLD thresholds for your business.
5. Test the workflow using the n8n form, verify that leads are saved correctly, and publish the workflow when everything is working.

## Requirements
- An n8n instance with n8n Forms available.
- OpenAI API access or another compatible OpenAI credential.
- A Google account with access to Google Sheets.
- A Telegram bot and destination Chat ID for HOT-lead notifications.

## Customization
- Adjust the AI qualification prompt and scoring criteria to match your sales process.
- Change the HOT/WARM/COLD score thresholds in the Switch node.
- Customize the lead intake form fields for your business.
- Replace Telegram with Slack, email, Discord, or another notification channel if preferred.
- Add follow-up actions for WARM and COLD leads.

## Additional info
By default, every lead is saved to Google Sheets, while only HOT leads trigger an immediate Telegram alert. The WARM and COLD outputs are intentionally left available so you can add your own follow-up sequences, CRM actions, or nurturing workflows.

Before publishing the workflow, test the form submission, AI response parsing, Google Sheets mapping, and Telegram notification using your own credentials.

## 🔗 Nodes Used

Google Sheets, Telegram, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
