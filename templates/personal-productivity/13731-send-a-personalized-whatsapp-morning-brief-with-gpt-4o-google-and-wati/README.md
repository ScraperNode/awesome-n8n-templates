# ⚡ Send a personalized WhatsApp morning brief with GPT-4o, Google and WATI

> ⚡ **17 views** · ⚡ [Personal Productivity](../)

## Description

Transform your morning routine with an automated personal assistant that delivers everything you need to know directly to WhatsApp. This workflow aggregates live data from multiple sources and uses OpenAI to greet you with a context-aware, motivational message based on your specific day.

---

## 🎯 What This Workflow Does

This template creates a highly personalized "Daily Digest" that saves you from checking multiple apps every morning:

### ⚡ Dual Entry Points
The briefing can be automated to fire every morning at 7 AM via a Schedule Trigger, or it can be requested on-demand by texting the word `brief` to your WATI number.

### 🌤️ Real-time Environment Data
Fetches current weather conditions (temperature, humidity, and wind speed) for your specific city using the OpenWeatherMap API.

### 📰 Custom News Feed
Pulls the top 3 headlines based on your personal interests (e.g., technology, business) via NewsAPI.

### 📅 Agenda Integration
Syncs with Google Calendar and Google Tasks to list your upcoming meetings and high-priority to-do items for the day.

### 🤖 AI-Powered Greetings
OpenAI (GPT-4o) analyzes your weather and schedule to write a unique, 15-word opener that sets the tone for your day.

---

## ✨ Key Features

- **Self-Service Subscription:** Users can join or leave the service themselves by texting `subscribe` or `stop`.
- **Subscriber-Specific Config:** Supports multiple users, each with their own city and news interest preferences.
- **Intelligent Assembly:** A central Code Node formats all data into a clean, emoji-rich WhatsApp card for easy reading.
- **Reliability Fallbacks:** Designed with error-handling to ensure the briefing still sends even if one data source (like weather) is temporarily unavailable.

---

## 💼 Perfect For

- **Busy Professionals:** Getting a snapshot of your day before your first coffee.
- **Remote Workers:** Staying connected to global news and local weather.
- **Productivity Enthusiasts:** Consolidating multiple task and calendar apps into one interface.
- **Community Groups:** Providing a daily value-add service to WhatsApp group members.

---

## 🔧 What You'll Need

### Required Integrations

- **WATI:** For WhatsApp messaging and command triggers.
- **Google OAuth2:** For Calendar and Tasks access.
- **OpenAI API:** For generating the daily personalized opener.

### Configuration Steps

1. **API Keys:** Obtain free keys for OpenWeatherMap and NewsAPI.
2. **Subscriber List:** Update the Load User Config node with your phone number and city.
3. **Credentials:** Connect your Google and OpenAI accounts in n8n.

---

Ready to wake up to a better morning? Import this template and connect your accounts to start receiving your daily briefings!

## 🔗 Nodes Used

HTTP Request, Google Calendar, Google Tasks, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
