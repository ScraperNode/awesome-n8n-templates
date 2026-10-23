# 🤝 Follow up real estate site visits from Telegram with OpenAI, GoHighLevel and Gmail

> ⚡ **10 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow listens for Telegram voice notes from real-estate agents, transcribes and extracts buyer intent with OpenAI, updates the buyer in GoHighLevel, matches similar available listings from Google Sheets, emails top matches via Gmail, creates interest-based follow-up tasks, and confirms actions back in Telegram.

## How it works
1. Triggers when an agent sends a message to your Telegram bot and prompts for a voice note if the message is not audio.
2. Downloads the Telegram voice note and uses OpenAI audio transcription to convert it to text.
3. Uses OpenAI (GPT-4o-mini) to extract structured visit details (buyer contact info, preferences, budget, and interest level) and builds a CRM note plus a timed follow-up plan.
4. If a phone number or email is present, upserts the buyer contact in GoHighLevel and adds the formatted site-visit note to the contact record.
5. Reads available listings from Google Sheets, scores them against the buyer’s criteria, and selects the top three matches while excluding the visited property.
6. If an email address exists and matches were found, sends the similar listings to the buyer via Gmail.
7. Creates GoHighLevel follow-up tasks for each scheduled step and sends the agent a Telegram confirmation summarizing the CRM update, emailed matches, and task due dates.

## Setup
1. Create and connect credentials for Telegram (bot token), OpenAI (API key), GoHighLevel (LeadConnector OAuth/API access for the Contacts and Tasks endpoints), Google Sheets (OAuth2), and Gmail (OAuth2).
2. In Google Sheets, create a listings table with columns like listing_id, title, area, price, bedrooms, property_type, url, and status, then set the spreadsheet ID and sheet name in the Google Sheets node.
3. In the workflow code settings, set your GoHighLevel location ID (and optionally an assigned user ID) and adjust the follow-up timing/titles to match your process.
4. Enable the Telegram trigger and share the bot with your agents, instructing them to include the buyer’s name plus a phone number or email in each post-visit voice note.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, Gmail, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
