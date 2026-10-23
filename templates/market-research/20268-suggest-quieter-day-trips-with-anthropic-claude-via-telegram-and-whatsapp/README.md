# 📊 Suggest quieter day trips with Anthropic Claude via Telegram and WhatsApp

> ⚡ **15 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow receives a day-trip question via Telegram, WhatsApp, or n8n Chat, uses Anthropic Claude to interpret the request and search for local events, and combines Open-Meteo, OpenHolidays, OSRM, and transport.opendata.ch data to score expected crowds and suggest quieter alternatives.

## How it works
1. Write to the bot on Telegram, WhatsApp or in the n8n chat, for example "Sunday Klewenalp from Basel". Claude reads destination, start point and day(s) from free text.
2. Claude suggests up to three similar destinations that are usually less crowded. Open-Meteo geocodes all places.
3. For each place the workflow checks public and school holidays (OpenHolidays), the forecast including the "first sunny day after rain" effect (Open-Meteo), the driving time (OSRM) and, within Switzerland, public transport (transport.opendata.ch).
4. Claude searches the web for events on that day, such as festivals, races or organised hiking days.
5. You get a crowd score per place, a quieter or drier alternative and travel times, in German or English. Optionally, a copy goes out by email.

## Setup
1. Create an Anthropic credential and select it in Extract Trip Request, Suggest Alternatives and Search Local Events.
2. Set up either a Telegram bot credential (and start a chat with the bot) or use n8n Chat; for WhatsApp, configure WhatsApp Business Cloud credentials and enable the WhatsApp trigger and send nodes.
3. Update the configuration values (time zone, departure time, reply language, and allowedChatIds) and replace the default email addresses (emailCopyTo and senderMailbox) as needed.
4. For email copies, add a Microsoft Entra Service Principal credential with permission to send mail from the configured mailbox and select it in the Microsoft Outlook node.
5. For WhatsApp, create both WhatsApp credentials and enable the two WhatsApp nodes.

## Requirements
- A recent n8n version
- An Anthropic API key with web search enabled
- A Telegram bot token from @BotFather, or just the n8n chat
- Optional: WhatsApp Business Cloud, and an Entra app registration with Mail.Send for email copies
- Holiday data is available for European countries

## Customization
- Change alternativesCount or claudeModel, or set useEventSearch to false to save API costs.
- Tune the weights in Score Places.
- The public OSRM server is meant for light use. For more traffic, point Fetch Driving Time to your own routing service.
- Set showAttribution to false to remove the template credit.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Microsoft Outlook, WhatsApp Business Cloud, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
