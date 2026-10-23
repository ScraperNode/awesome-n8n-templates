# 🎣 Turn conference contacts into Gmail follow-ups with Telegram, OpenAI and Google Sheets

> ⚡ **30 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
Handshake AI turns every conference handshake into a follow-up. Send a Telegram card photo, voice note or text; OpenAI (and Groq for voice) extracts and researches the contact, saves it to Google Sheets, drafts a Gmail follow-up and sends an interactive Telegram card for review, sending and reminders.

## How it works
1. Triggers from a Telegram message/callback, a daily 9:00 schedule, a Sunday 18:00 schedule, or a self-call when one photo contains multiple cards.
2. Interprets the incoming message (photo, voice, text, command, reply edit, or button tap). Only chat IDs listed in allowedChatId can use the bot; until that is set, it only replies with its guide and your chat ID.
3. For photos, downloads the image from Telegram and uses OpenAI to extract one or more contact records; for voice notes, downloads and transcribes audio via Groq and then uses OpenAI to extract the contact; for plain text, uses OpenAI to structure the contact details.
4. Normalizes the contact data, checks Google Sheets for an existing match to avoid duplicates, then uses OpenAI web search to research the person and generate a lead score plus a personalized follow-up message.
5. Creates or replaces a Gmail draft when an email address is available, writes/updates the contact row in the Google Sheets “Contacts” tab, and posts a Telegram summary card with buttons for actions like showing/sending/rewriting the draft, snoozing, marking status, WhatsApp/LinkedIn links, and saving a vCard.
6. Handles commands like /ask, /search, /people, /top, /stats, /recap, /nudges, and /match by reading from Google Sheets, using OpenAI where needed, and replying in Telegram (including drafting intro emails in Gmail for suggested introductions).
7. Sends a daily Telegram reminder of due follow-ups and quiet contacts, and a weekly Telegram message suggesting introductions based on your saved contacts.

## Setup
1. Create a Telegram bot with @BotFather and add a Telegram Bot credential in n8n.
2. Add credentials for OpenAI, Google Sheets and Gmail. For voice notes, add your Groq API key as an HTTP Header Auth credential (Name: Authorization, Value: Bearer YOUR_GROQ_KEY) on the "Transcribe voice note" node.
3. Create a Google Sheet with a tab named “Contacts” and put “id” in cell A1, then paste the spreadsheet ID into the Config values.
4. Fill in the Config values (your name, role, offer, default event name, language/tone, follow-up delay, allowedChatId, and time zone) and ensure the workflow time zone matches your local schedule requirements.
5. Activate the workflow and send /start to your bot. The reply ends with your chat ID: paste it into allowedChatId in Config (add more IDs with commas; the first one is the owner who gets reminders and can send emails). Until you do, the bot only replies with its guide.

## Requirements
- A Telegram bot token from @BotFather
- An OpenAI API key (models are set to gpt-4.1-mini)
- Gmail and Google Sheets accounts
- A free Groq API key for voice notes (optional)

## Customization
- Change the tone, language or length of the emails in Config and in the Write follow-up email prompt.
- Change how many days until a follow-up reminder with followUpDays in Config.
- Swap Google Sheets for another database by replacing the sheet steps; every section reads and writes the same columns

## Additional info
Tip: in @BotFather use /setcommands to show the commands in Telegram's menu (help, people, search, top, match, nudges, stats, edit, ask, recap, event). Nothing is ever emailed without your tap on Send: follow-ups are saved as Gmail drafts first. Contacts stay in your own Google Sheet.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, Execute Sub-workflow, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
