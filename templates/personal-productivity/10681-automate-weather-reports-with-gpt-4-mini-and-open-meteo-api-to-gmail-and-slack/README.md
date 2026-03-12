# ⚡ Automate weather reports with GPT-4 Mini and Open-Meteo API to Gmail and Slack

> ⚡ **687 views** · ⚡ [Personal Productivity](../)

## Description

This workflow provides a comprehensive weather reporting system with two main functionalities: a scheduled daily summary and an interactive AI agent for dynamic queries.

## Who's it for?

This template is ideal for anyone who wants to stay updated on the weather, from individuals planning their day to teams needing automated daily briefings. It's also a great example for developers and n8n users who want to explore the capabilities of AI Agents and integrating external APIs in their workflows.

## What it does / How it works

This workflow operates in two distinct modes:

1.  **Scheduled Daily Summary:**
    *   The workflow triggers automatically every day at 9:00 AM (customizable) or can be run manually.
    *   It fetches the latest weather data for a specified location (default is near Chiba, Japan) from the Open-Meteo API.
    *   It then formats a message with the day's maximum and minimum temperatures.
    *   Finally, it sends this summary to a designated Gmail address and a Slack channel.

2.  **AI-Powered Forecasts via Chat:**
    *   When you send a message to the Chat Trigger webhook, it activates the AI Agent.
    *   The AI Agent, powered by an OpenAI model, understands natural language questions like "What's the humidity right now?" or "Will it be warmer tomorrow?".
    *   The agent uses an HTTP Request tool to fetch real-time, specific data from the weather API to answer your question.
    *   The generated answer is then sent back to you via both Gmail and Slack.

## How to set up

1.  **Configure Credentials:** Add your credentials for OpenAI, Gmail, and Slack in the credentials menu.
2.  **Set Your Location:** In the `Fetch Weather Data` and `HTTP Request Tool for AI` nodes, update the `latitude` and `longitude` in the URL to your desired location.
3.  **Update Email and Slack:**
    *   In the `Send Email Summary` and `Send AI Response via Email` nodes, change the recipient email address to your own.
    *   In the `Send Slack Summary` and `Send AI Response via Slack` nodes, select your desired Slack channel.
4.  **Adjust the Schedule:** Modify the `Schedule Trigger` node to change the time or frequency of the daily summary.
5.  **Activate the Workflow:** Click the "Active" toggle in the top-right corner to enable the workflow.

## How to customize the workflow

*   **Change the Message:** You can easily customize the notification message in the `Format Daily Summary` node (for the summary) and in the `Send...` nodes for both flows.
*   **Add More Data:** The Open-Meteo API provides a wealth of data. You can fetch additional information like precipitation, wind speed, or UV index by modifying the URL in the HTTP Request nodes.
*   **Integrate Other Services:** Add other notification nodes like Discord, Telegram, or Microsoft Teams to send the weather reports to more platforms.

## 🔗 Nodes Used

HTTP Request, Slack, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
