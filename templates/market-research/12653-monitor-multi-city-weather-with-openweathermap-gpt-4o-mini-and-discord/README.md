# 📊 Monitor multi-city weather with OpenWeatherMap, GPT-4o-mini, and Discord

> ⚡ **239 views** · 📊 [Market Research & Insights](../)

## Description

## Weather Monitoring Across Multiple Cities with OpenWeatherMap, GPT-4o-mini, and Discord

This workflow provides an automated, intelligent solution for global weather monitoring. It goes beyond simple data fetching by calculating a custom "Comfort Index" and using AI to provide human-like briefings and activity recommendations. Whether you are managing remote teams or planning travel, this template centralizes complex environmental data into actionable insights.

## Who’s it for
- **Remote Team Leads:** Keep an eye on environmental conditions for team members across different time zones.
- **Frequent Travelers & Event Planners:** Monitor weather risks and comfort levels for multiple destinations simultaneously.
- **Smart Home/Life Enthusiasts:** Receive daily morning briefings on air quality and weather alerts directly in Discord.

## How it works
1. **Schedule Trigger:** The workflow runs every 6 hours (customizable) to ensure data is up to date.
2. **Data Collection:** It loops through a list of cities, fetching current weather, 5-day forecasts, and Air Quality Index (AQI) data via the **OpenWeatherMap node** and **HTTP Request node**.
3. **Smart Processing:** A **Code node** calculates a "Comfort Index" (based on temperature and humidity) and flags specific alerts (e.g., extreme heat, high winds, or poor AQI).
4. **AI Analysis:** The **OpenAI node** (using GPT-4o-mini) analyzes the aggregated data to compare cities and recommend the best location for outdoor activities.
5. **Conditional Routing:** An **If node** checks for active weather alerts. Urgent alerts are routed to a specific Discord notification, while routine briefings are sent normally.
6. **Archiving:** All processed data is appended to **Google Sheets** for historical tracking and future analysis.

## How to set up
1. **Credentials:** Connect your OpenWeatherMap, OpenAI, Discord (Webhook), and Google Sheets accounts.
2. **Locations:** Open the **'Set Monitoring Locations'** node and edit the JSON array with the cities, latitudes, and longitudes you wish to track.
3. **Google Sheets:** Configure the **'Log to Google Sheets'** node with your specific Spreadsheet ID and Sheet Name.
4. **Discord:** Ensure your Webhook URL is correctly pasted into the **Discord nodes**.

## Requirements
- **OpenWeatherMap API Key** (Free tier is sufficient).
- **OpenAI API Key** (Configured for GPT-4o-mini).
- **Discord Webhook URL**.
- **Google Sheet** with headers ready for logging.

## How to customize
- **Adjust Alert Thresholds:** Modify the logic in the 'Process and Analyze Data' Code node to change what triggers a "High Wind" or "Extreme Heat" alert.
- **Refine AI Persona:** Edit the System Prompt in the 'AI Weather Analysis' node to change the tone or focus of the weather briefing.
- **Change Frequency:** Adjust the Schedule Trigger to run once a day or every hour depending on your needs.

## 🔗 Nodes Used

Google Sheets, HTTP Request, OpenWeatherMap, Discord, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
