# ⚡ Send severe weather alerts from Visual Crossing to Telegram

> ⚡ **33 views** · ⚡ [Personal Productivity](../)

## Description

## How it works
This workflow automates the process of fetching weather forecasts for your home location, including severe weather alerts, and sends timely notifications. It uses the Visual Crossing API for detailed weather data and integrates with Telegram (or other messaging services) for messaging and alerts.

## Step-by-step
In summary, the workflow runs every hour, grabs the current day's weather conditions for [your city/location of interest], and returns only those items that truly contain one or more weather alerts.

📅 Step 1: **Hourly Trigger**
The workflow begins with the Hourly Trigger node, which is a scheduleTrigger. This node acts as the clock that initiates the entire process at regular hourly intervals.

🌤️ Step 2: **Fetch Weather Data**
Immediately after the trigger, the workflow moves to the Meteo node, an httpRequest. This node makes an external API call to fetch weather data for your specified location.

API Used: Visual Crossing Web Services

Authentication: Uses your API key (key=[API KEY])

Response format: JSON

🌪🌀 Step 3: **Check for Severe Weather**
The JSON weather data output is analyzed, and if severe weather conditions or alerts are detected, the workflow sends the alert via your preferred communication channel(s).

## Optional
You can replace the Telegram node with email, WhatsApp, SMS notifications, or add multiple notification nodes to receive severe weather alerts across all desired channels.

## 🔗 Nodes Used

Function, HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
