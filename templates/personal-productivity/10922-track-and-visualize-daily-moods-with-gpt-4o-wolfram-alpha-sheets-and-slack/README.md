# ⚡ Track and visualize daily moods with GPT-4o, Wolfram Alpha, Sheets, and Slack

> ⚡ **33 views** · ⚡ [Personal Productivity](../)

## Description

## Overview
This workflow, "Mood Graph Studio," offers a comprehensive solution to track and visualize your emotional well-being. By simply inputting a single sentence about your mood, this template uses AI to perform a sentiment analysis, generates a visual graph via Wolfram Alpha, provides personalized feedback, and logs everything to Google Sheets.

It is designed for anyone interested in mindfulness, self-reflection, or quantified self-tracking.

## How It Works
The workflow is divided into two main API functionalities and a manual trigger for easy testing.

1. **Analyze a Single Mood (`/mood` endpoint)**
- An AI Agent (OpenAI) quantifies your mood text into `valence` (positivity) and `energy` (activity).
- A query is sent to **Wolfram Alpha** to generate a simple linear graph based on the score.
- A second AI Agent provides short, encouraging advice in Japanese.
- The complete entry is logged as a new row in **Google Sheets**.
- Returns a JSON response containing the full analysis and the graph image.

2. **Generate Mood History Graph (`/history` endpoint)**
- Retrieves historical mood data for a specified user from Google Sheets.
- A Code node formats the data into a time-series plot query.
- **Wolfram Alpha** generates a line graph visualizing the mood trend over time.
- The resulting graph is automatically posted to **Slack**.

## How to Set Up

### 1. Credentials
You must add your own credentials for the following services in the respective nodes:
- **OpenAI**: Used in both Chat Model nodes.
- **Google Sheets**: Used in the "Log Mood" and "Get History" nodes.
- **Slack**: Used in the "Send History" node.

### 2. Wolfram Alpha App ID
This workflow uses the HTTP Request node to call the Wolfram Alpha API.
- Get a free App ID from the [Wolfram|Alpha Developer Portal](https://developer.wolframalpha.com/portal/myapps/index.html).
- Paste your App ID into the `appid` parameter value in both `Generate...Graph` nodes.

### 3. Google Sheet Configuration
- Create a new Google Sheet.
- Paste the **Sheet ID** into the `Document ID` field in both Google Sheets nodes.
- **Crucially**, ensure the first row has the following headers exactly (case-sensitive):
`userId`, `moodText`, `valence`, `energy`, `createdAt`, `wolframQuery`, `feedback`

## How to Use

**For Testing:**
Use the **Manual Trigger**. Modify the sample text in the "Set Test Data" node and click "Execute Workflow" on the canvas.

**For Production:**
Activate the workflow. Send POST requests to the Production URL of the Webhook nodes.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
