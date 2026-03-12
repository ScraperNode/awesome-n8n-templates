# ⚡ Smart break recommendation system using Google Calendar, weather data, and GPT-4 to Slack

> ⚡ **61 views** · ⚡ [Personal Productivity](../)

## Description

Who is this for
This workflow is perfect for busy professionals, consultants, and anyone who frequently travels between meetings. If you want to make the most of your free time between appointments and discover great nearby spots without manual searching, this template is for you.
What it does
This workflow automatically monitors your Google Calendar and identifies gaps between appointments. When it detects sufficient free time (configurable, default 30+ minutes), it calculates travel time to your next destination, checks the weather, and uses AI to recommend the top 3 spots to visit during your break. Recommendations are weather-aware: indoor spots like cafés in malls or stations for rainy days, and outdoor terraces or open-air venues for nice weather.
How it works

Schedule Trigger - Runs every 30 minutes to check your calendar
Fetch Data - Gets your next calendar event and user preferences from Notion
Calculate Gap Time - Determines available free time by subtracting travel time (via Google Maps) from time until your next appointment
Weather Check - Gets current weather at your destination using OpenWeatherMap
Smart Routing - Routes to indoor or outdoor spot search based on weather conditions
AI Recommendations - GPT-4.1-mini analyzes spots and generates personalized top 3 recommendations
Slack Notification - Sends a friendly message with recommendations to your Slack channel

Set up steps

Configure API Keys - Add your Google Maps, Google Places, and OpenWeatherMap API keys in the "Set Configuration" node
Connect Google Calendar - Set up OAuth connection and select your calendar
Set up Notion - Create a database for user preferences and add the database ID
Connect Slack - Set up OAuth and specify your notification channel
Connect OpenAI - Add your OpenAI API credentials
Customize - Adjust currentLocation and minGapTimeMinutes to your needs

Requirements

Google Cloud account with Maps and Places APIs enabled
OpenWeatherMap API key (free tier available)
Notion account with a preferences database
Slack workspace with bot permissions
OpenAI API key

How to customize

Change trigger frequency: Modify the Schedule Trigger interval
Adjust minimum gap time: Change minGapTimeMinutes in the configuration node
Modify search radius: Edit the radius parameter in the Places API calls (default: 1000m)
Customize spot types: Modify the type and keyword parameters in the HTTP Request nodes
Change AI model: Switch to a different OpenAI model in the AI node
Localize language: Update the AI prompt to generate responses in your preferred language

## 🔗 Nodes Used

HTTP Request, OpenWeatherMap, Slack, Google Calendar, Notion, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
