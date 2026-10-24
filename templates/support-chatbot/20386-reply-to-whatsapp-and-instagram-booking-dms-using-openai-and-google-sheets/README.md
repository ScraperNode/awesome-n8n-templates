# 💬 Reply to WhatsApp and Instagram booking DMs using OpenAI and Google Sheets

> ⚡ **48 views** · 💬 [Support Chatbots](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow receives WhatsApp and Instagram DM webhooks, uses OpenAI to generate short support and booking replies, logs conversations to Google Sheets, captures corporate/group leads into a Leads sheet with staff email alerts, and triggers a timed human-handoff mode to silence the bot.

## How it works
1. Receives incoming WhatsApp and Instagram messages via Meta webhook endpoints (with separate GET verification handling).
2. Normalizes each event into a common message format (platform, sender ID, message type, and text) and looks up the sender in a Google Sheets Contacts tab.
3. If the sender is new, saves the contact to Google Sheets and sends a predefined welcome message back on WhatsApp or Instagram.
4. If the sender exists and is currently marked as handed off within the defined time window, stops without replying.
5. Otherwise, sends the message text to OpenAI, parses the returned JSON intent and reply text, and routes the conversation based on the intent.
6. For corporate/group intents, saves the lead to a Google Sheets Leads tab when required details are present and emails staff, then replies to the customer on the originating platform.
7. For human handoff intents, marks the contact as handed off in Google Sheets, emails staff with the customer message, replies on the originating platform, and logs the exchange to a Google Sheets Conversations tab.

## Setup
1. Create and connect Meta webhook subscriptions for WhatsApp Business Cloud API and Instagram Messaging, then copy the n8n webhook URLs into Meta and set your verification token as needed.
2. Add OpenAI API credentials and replace all [PLACEHOLDER] business details in the system prompt (business name, locations, hours, website URL, membership, discounts, and pricing example).
3. Configure sending for both channels by adding WhatsApp Business credentials and phone number ID, and by setting your Instagram Graph API access token and Instagram business account ID in the HTTP request and message normalization code.
4. Connect Google Sheets credentials, create Contacts, Leads, and Conversations tabs with the expected columns (including status and handoff_time in Contacts), and update the spreadsheet ID in all Google Sheets steps.
5. Add SMTP email credentials and set the to/from addresses used for corporate lead and human-handoff notifications.

## Requirements
- WhatsApp Business Cloud API account with a verified phone number
- Instagram Business account connected to a Meta App with Messaging permissions
- OpenAI API key with billing enabled
- Google account with access to Google Sheets
- SMTP credentials (e.g. Gmail, SendGrid) for staff email alerts

## Customization
- Edit the system prompt in "Message a model" to match your own business, tone, and services beyond booking (e.g. retail, clinics, salons)
- Adjust the HOURS_LIMIT in "Check Handoff Status" to change how long the bot stays silent after a human takes over
- Add more intents to the system prompt's JSON schema (e.g. "complaint", "refund_request") and extend "Route by Intent" to handle them separately

## Additional info
Human handoff automatically resumes after the set time window unless staff manually reset the contact's status in the Contacts sheet.
The AI only knows what's written in its system prompt — accuracy depends entirely on keeping that prompt up to date with real business details.
Corporate/group leads are only saved once all required fields (name, contact) are present; the agent will keep asking for missing details in earlier replies.

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Webhook, WhatsApp Business Cloud, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
