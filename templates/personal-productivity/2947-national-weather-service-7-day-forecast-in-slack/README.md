# ⚡ National Weather Service 7-day forecast in Slack

> ⚡ **2,015 views** · ⚡ [Personal Productivity](../)

## Description

# Weather via Slack 🌦️💬

## Overview
This workflow provides real-time weather updates via Slack using a **custom Slack command**:  
`/weather [cityname]`

Users can type this command in Slack (e.g., `/weather New York`), and the workflow will fetch and post the latest forecast, including temperature, wind conditions, and a short weather summary.

While this workflow is designed for Slack, users can modify it to send weather updates via **email, Discord, Microsoft Teams, or any other communication platform**.

## How It Works
1. **Webhook Trigger** – The workflow is triggered when a user runs `/weather [cityname]` in Slack.
2. **Geocoding with OpenStreetMap** – The city name is converted into latitude and longitude coordinates.
3. **Weather Data from NOAA** – The coordinates are used to retrieve detailed weather data from the **National Weather Service (NWS)** API.
4. **Formatted Weather Report** – The workflow extracts relevant weather details, such as:
   - Temperature (°F/°C)
   - Wind speed and direction
   - Short forecast summary
5. **Slack Notification** – The weather forecast is posted back to the Slack channel in a structured format.

## Requirements
- A **custom Slack app** with:
  - The ability to create a **Slash Command (`/weather`)**
  - OAuth permissions to post messages in Slack
- An **n8n instance** to host and execute the workflow

## Customization
- Replace Slack messaging with **email, Discord, Microsoft Teams, Telegram, or another service**.
- Modify the weather data format for different output preferences.
- Set up scheduled weather updates for specific locations.

## Use Cases
- Instantly check the weather for any location directly in Slack.
- Automate weather reports for team members or projects.
- Useful for remote teams, outdoor event planning, or general weather tracking.

## Setup Instructions
1. **Create a custom Slack app**:
   - Go to [api.slack.com/apps](https://api.slack.com/apps) and create a new app.
   - Add a **Slash Command** (`/weather`) with the webhook URL from n8n.
   - Enable OAuth scopes for sending messages.
2. **Deploy the webhook** – Ensure it can receive and process Slack commands.
3. **Run the workflow** – Type `/weather [cityname]` in Slack and receive instant weather updates.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
