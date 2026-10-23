# ⚡ Run a Telegram productivity assistant with OpenRouter, Google Calendar, and Todoist

> ⚡ **93 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow turns Telegram into a personal assistant that manages your Google Calendar and Todoist, sends daily briefings, and alerts you when meetings are booked or things break.



## How it works
1. Morning briefing - Every day at a set time, the workflow checks your Google Calendar for today's events and your Todoist for open tasks, then sends you two Telegram messages: a calendar rundown and a task summary grouped by project with priority flags.
2. Cal.com booking alerts - When someone books, reschedules, or cancels a call on Cal.com, or a meeting ends, the workflow catches the webhook and sends you a Telegram notification with the attendee's name, email, meeting title, and time.
3. Talk to your assistant on Telegram - Message the bot with text or a voice note. Voice notes get transcribed automatically. Your message goes to an AI agent that can read, create, update, or delete calendar events, and create, find, update, complete, or delete Todoist tasks, all through natural conversation. The agent replies back in the same chat.
4. Error alerts - If any part of the workflow fails, you get a Telegram message with the failed node, the error, and a link to the execution, so you catch problems before they pile up.

## Setup
1. Create your Telegram bot - Message @BotFather on Telegram, create a bot, grab the token, and add it as Telegram API credentials in n8n. Get your own chat ID (message @userinfobot) and use it in every Telegram send node.
2. Connect Google Calendar - Set up a Google Cloud project, enable the Calendar API, create OAuth2 credentials, and connect them in n8n. Point the calendar ID (your Google account email) in both the scheduled reminder nodes and the agent's calendar tools.
3. Connect Todoist - Generate a Todoist API token from your Todoist settings and add it as credentials in n8n. Update the project names referenced in the agent's system prompt and tool descriptions to match your own Todoist projects.
4. Add an OpenRouter API key - Sign up on OpenRouter, generate a key, add it as credentials, and pick your model in the AI Agent's language model node (this template uses Gemini 2.5 Flash, but any OpenRouter model works).
5. Add a Groq API key - Sign up on Groq (free tier available), generate an API key, and use it as a credential (not a hardcoded header) in the transcription HTTP Request node. This powers voice note transcription via Whisper.
6. Set up the Cal.com webhook - In Cal.com, go to Settings → Developer → Webhooks, add a new webhook pointing to this workflow's webhook URL, and subscribe to Booking Created, Booking Rescheduled, Booking Cancelled, and Meeting Ended events.
7. Set your schedule times - Adjust the two Schedule Trigger nodes to whatever time you want your calendar and task briefings delivered.
8. Turn on error alerts - Activate the workflow, then set this workflow as the "error workflow" in your n8n instance settings (or leave the Error Trigger active within it) so failures route to your Telegram.

## Requirements
- An active n8n instance (cloud or self-hosted)
- A Telegram bot (created via BotFather) and your Telegram chat ID
- A Google account with Calendar API access (OAuth2 credentials)
- A Todoist account and API token
- A Cal.com account (only needed if you want booking notifications)
- An OpenRouter account and API key
- A Groq account and API key (for voice transcription)
- Basic comfort setting up credentials inside n8n

## Customization
- Swap Todoist for another task manager (Notion, ClickUp, Asana) by replacing the Todoist tool nodes and updating the agent's system prompt
- Change the AI model in the OpenRouter node, or swap OpenRouter entirely for another provider
- Edit the agent's system prompt to change its tone, rules, or the list of known projects
- Add or remove Cal.com event types in the Switch node if you want to track more (or fewer) booking states
- Change the memory window (currently 30 messages) if you want the assistant to remember more or less conversation history
- Point Telegram messages to a group chat instead of a single user
- Add Slack or email as a second channel for error alerts alongside Telegram

## Additional info
Voice notes and text messages both route through the same AI agent, so there's no difference in what you can ask either way
Conversation memory is keyed per Telegram user ID, so multiple people can message the same bot without mixing up context
The agent is instructed to always verify actions (create, update, delete) against live data rather than assuming success
Before publishing: replace any hardcoded API keys, bot tokens, chat IDs, or personal email addresses in the JSON with credential references or placeholder values

## 🔗 Nodes Used

HTTP Request, Webhook, Telegram, Telegram Trigger, Todoist, Google Calendar

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
