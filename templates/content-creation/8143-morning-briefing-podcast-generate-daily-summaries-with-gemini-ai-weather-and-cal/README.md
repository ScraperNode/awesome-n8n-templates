# 🎬 Morning briefing podcast: generate daily summaries with Gemini AI, weather, and calendar

> ⚡ **1,223 views** · 🎬 [Content Creation & Video](../)

## Description

## What it does

Instead of manually checking separate apps for your calendar, weather, and news each morning, this workflow consolidates the most important information into a single, convenient audio briefing. The "Good Morning Podcast" is designed to be a 3-minute summary of your day ahead, delivered directly to you. It's multi-lingual and customizable, allowing you to start your day informed and efficiently.

## How it works

The workflow executes in three parallel branches before merging the data to generate the final audio file.

1.  **Weather Summary:** It starts by taking a user-provided **city** and fetching the current 15-hour forecast from the **OpenWeatherMap**. It formats this information into a concise weather report.
2.  **Calendar Summary:** It securely connects to your **Google Calendar** to retrieve all of today's scheduled meetings and events. It then formats the schedule into a clear, readable summary.
3.  **News Summary:** It connects to the **NewsAPI** to perform two tasks: it fetches the top general headlines and also searches for articles based on user-defined **keywords** (e.g., "AI", "automation", "space exploration"). The collected headlines are then summarized using a **Google Gemini** node to create a brief news digest.
4.  Audio Generation and Delivery: All three text summaries (weather, calendar, and news) are merged into a single script. The workflow uses **Google's Text-to-Speech (TTS)** to generate the raw multi-speaker audio. A dedicated **FFmpeg** node then processes and converts this audio into the final MP3 format. The completed podcast is then sent directly to you via a **Telegram Bot**.

## Setup Instructions

To get this workflow running, you will need to configure credentials for each of the external services and set your initial parameters.

⚠️ Important Prerequisite
**Install FFmpeg**: The workflow requires the `FFmpeg` software package to be installed on the machine running your n8n instance (local or server). Please ensure it is installed and accessible in your system's PATH before running this workflow.

### Required Credentials

1.  **OpenWeatherMap:**
    * Sign up for a free account at [OpenWeatherMap](https://openweathermap.org/) and get your API key.
    * Add the API key to your n8n OpenWeatherMap credentials.
2.  **Google Calendar & Google AI (Gemini/TTS):**
    * You will need Google OAuth2 credentials for the Google Calendar node.
    * You will also need credentials for the Google AI services (Gemini and Text-to-Speech). Follow the n8n documentation to create and add these credentials.
3.  **NewsAPI:**
    * Get a free API key from [NewsAPI.org](https://newsapi.org/).
    * Add the API key to your n8n NewsAPI credentials.
4.  **Telegram:**
    * Create a new bot by talking to the `BotFather` in your Telegram app.
    * Copy the **Bot Token** it provides and add it to your n8n Telegram credentials.
    * Send a message to your new bot and get your **Chat ID** from the `Telegram Trigger` node or another method. You will need this for the `Telegram` send node.

### Workflow Inputs

In the first node (or when you run the workflow manually), you must provide the following initial data:
* `name`: Your first name for a personalized greeting.
* `city`: The city for your local weather forecast (e.g., "Amsterdam").
* `language`: The language for the entire podcast output (e.g., "en-US", "nl-NL", "fa-IR").
* `news_keywords`: A comma-separated list of topics you are interested in for the news summary (e.g., "n8n,AI,technology").

## How to Adapt the Template

This workflow is highly customizable. Here are several ways you can adapt it to fit your needs:

### Triggers

* **Automate It:** The default trigger is manual. Change it to a **Schedule Trigger** to have your podcast automatically generated and sent to you at the same time every morning (e.g., 7:00 AM).

### Content Sources

* **Weather:** In the "User Weather Map" node, you can change the forecast type or switch the units from metric to imperial.
* **Calendar:** In the "Get Today Meetings" node, you can select a different calendar from your Google account (e.g., a shared work calendar instead of your personal one).
* **News:**
    * In the "Get Headlines From News Sources" node, change the country or category to get different top headlines.
    * In the "Get Links From Keywords" node, update your keywords to track different topics.
    * In the "Aggregate Headlines" (Gemini) node, you can modify the prompt to change the tone or length of the AI-generated news summary.

### Audio Generation

* **Voice & Language:** The `language` is a starting parameter, but you can go deeper into the Google TTS nodes (`Generate Virtual Parts`, etc.) to select specific voices, genders, and speaking rates to create a unique podcast host style.
* **Scripting:** Modify the `Set` and `Merge` nodes that construct the final script. You can easily change the greeting, the transition phrases between sections, or the sign-off message.

### Delivery

* **Platform:** Don't use Telegram? Swap the `Telegram` node for a `Slack` node, `Discord` node, or even an `Email` node to send the MP3 file to your preferred platform.
* **Message:** Customize the text message that is sent along with the audio file in the final node.

## 🔗 Nodes Used

HTTP Request, Telegram, Google Calendar, AI Agent, Read/Write Files from Disk, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
