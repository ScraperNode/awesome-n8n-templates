# 💬 Turn Telegram into a French fitness coach with Claude, OpenAI and Google Sheets

> ⚡ **89 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow turns a Telegram chat into a French-speaking fitness and nutrition coach that can handle text or voice messages, use Anthropic for responses, log and read training/nutrition data in Google Sheets, and schedule workouts in Google Calendar.

## How it works
1. Triggers when a new Telegram message is received.
2. Detects whether the incoming message is a voice note and, if so, downloads it from Telegram and transcribes it with OpenAI.
3. Normalizes the user message, chat ID, and current date fields for downstream processing.
4. Uses an Anthropic chat model with short-term session memory to generate a coaching response and decide when to call tools.
5. Reads from and writes to Google Sheets to fetch or update the user profile, log workouts and meals, retrieve daily nutrition totals, and create or update weekly training and nutrition plans.
6. Optionally creates a workout event in Google Calendar when the user asks to schedule a session.
7. Sends the generated response back to the user in Telegram.

## Setup
1. Create and connect credentials for Telegram, Anthropic, OpenAI (for audio transcription), Google Sheets OAuth2, and Google Calendar OAuth2.
2. Replace `YOUR_SHEET_ID_HERE` and select the correct sheet tabs for profile, workout history, nutrition log, and weekly plans in all Google Sheets tool nodes.
3. Ensure your Google Sheets contain the expected columns (for example `id_telegram`, `date`, `objectif`, `poids actuel`, and plan text fields) so matching and appends work correctly.
4. In Telegram, enable the bot and start a chat with it so the trigger can receive messages from users.
5. Verify the Google Calendar account and target calendar in the event-creation tool node match the calendar you want to write to.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, Anthropic Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
