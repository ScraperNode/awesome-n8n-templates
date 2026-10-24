# 💬 Coach fitness and nutrition on Telegram with Claude, Google Sheets and Calendar

> ⚡ **99 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow turns a Telegram bot into a fitness and nutrition coach powered by Anthropic Claude, with voice-note transcription via OpenAI, user data stored in Google Sheets, and optional workout scheduling in Google Calendar.

## How it works
1. Triggers when a new Telegram message arrives in your bot chat.
2. If the message is a voice note, it downloads the audio from Telegram and transcribes it with OpenAI.
3. Normalizes the incoming text or transcript into common fields (message, chat ID, and current date).
4. Uses an Anthropic Claude agent with session memory to interpret the request and generate a coaching response.
5. When needed, the agent reads and updates the user profile, logs workouts, logs meals with estimated macros, and reads/saves weekly plans in Google Sheets.
6. When the user asks to schedule training, it creates a workout event in Google Calendar.
7. Sends the coach’s reply back to the user in Telegram.

## Setup
1. Add Telegram bot credentials (BotFather token) for receiving messages, downloading voice notes, and sending replies.
2. Add an OpenAI API credential for audio transcription and an Anthropic credential for the Claude chat model.
3. Add Google Sheets OAuth2 credentials and select the target spreadsheet in all Google Sheets tools.
4. Create a Google Sheets workbook with tabs and columns used by the workflow: profil (id_telegram, poids_actuel, objectif), historique (id_telegram, date, exercice, performance), nutrition (id_telegram, date, repas, calories, proteines, lipides, glucides), plan_nutrition (id_telegram, date_maj, plan_repas, liste_courses), and plan_sport (id_telegram, date_maj, programme_texte).
5. Add Google Calendar OAuth2 credentials and choose the calendar where workout events should be created.
6. Update the Configuration values (coach language, transcription language, date format, and memory context length) to match your preferences.

## Additional info
## Coach fitness and nutrition on Telegram with Claude, Google Sheets and Calendar

# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Coach-fitness-and-nutrition-on-Telegram-with-Claude-Google-Sheets-and-Calendar-Course-support-En-3993d6550fd9810c9641ffc68da1d2aa)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, Anthropic Chat Model, Simple Memory, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
