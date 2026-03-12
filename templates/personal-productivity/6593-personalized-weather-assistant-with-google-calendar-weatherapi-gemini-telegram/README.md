# ⚡ Personalized weather assistant with Google Calendar, WeatherAPI, Gemini & Telegram

> ⚡ **1,171 views** · ⚡ [Personal Productivity](../)

## Description

# Personalized Weather Assistant with Google Calendar, WeatherAPI, AI & Telegram

This workflow automates the delivery of a personalized daily agenda by combining events from Google Calendar with real-time local weather conditions. Using AI-powered summarization and Telegram integration, users receive a friendly and motivating message every morning everything needed to plan the day effectively.

Perfect for professionals or individuals who want an overview of their schedule and weather in one place.

## 🛠️ Key Features

- Triggered automatically every morning by schedule
- Fetches Google Calendar events for today and tomorrow
- Retrieves weather conditions (temperature, humidity, wind, UV index) using WeatherAPI based on event location
- Uses AI Agent to generate a concise, human-friendly agenda summary
- Sends the summary via Telegram bot
- If no location is available, delivers a simplified agenda without weather

## 🔧 Requirements

- Google Calendar OAuth2 credentials connected to n8n
- WeatherAPI key ([weatherapi.com](https://www.weatherapi.com/))
- Telegram Bot Token and user `chat_id`
- OpenRouter API Key ([openrouter.ai](https://openrouter.ai/))

## 🧩 Setup Instructions

1. **Timezone**
   - Adjust timezone in the Set Timezone node

2. **Google Calendar**
   - Add Google Calendar OAuth2 credentials
   - Set your primary calendar ID in the Get many events node

3. **WeatherAPI**
   - Replace the API key in the HTTP Request node with your WeatherAPI key

4. **OpenRouter**
   - Create credentials in n8n and connect them to the OpenRouter Chat Model nodes

5. **Telegram**
   - Add your bot token and chat_id to both Telegram nodes

6. **Deploy**
   - Activate the workflow
   - You’ll start receiving personalized daily Telegram messages

## 🔗 Nodes Used

HTTP Request, Telegram, Google Calendar, Schedule Trigger, AI Agent, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
