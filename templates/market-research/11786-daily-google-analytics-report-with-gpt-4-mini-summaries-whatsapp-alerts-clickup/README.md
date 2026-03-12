# 📊 Daily Google Analytics report with GPT-4 mini summaries, WhatsApp alerts & ClickUp tasks

> ⚡ **309 views** · 📊 [Market Research & Insights](../)

## Description

## How it Works.

The workflow runs automatically every day and collects analytics data for both today and yesterday. It cleans and standardizes both datasets in the same way so they are easy to compare. After that, it measures how performance has changed from one day to the next and interprets those changes to understand trends and context. Once all calculations are finished, the AI creates a clear, easy-to-read summary of what happened. This summary is then formatted and sent through the required communication channels, while the final data is saved for tracking over time and for creating follow-up tasks if needed.

## Key Features:
- Trigger runs once per day recommended (11: 57 PM).
- Fetch seperate data for today and yesterday in node.
- Compare the two days data and highlight if traffic is less
- Add the trend `lowTraffic` for low traffic identification.
- Using GPT-4 Mini for human readable summary to suit different communication channels.
- Sending report to WhatsApp / Email
- Stored the final structure data to Google Sheet for future analytics and historical record

## Setup Steps

#### 1. Connect Required Credentials
You must connect the following credentials:
Google Analytics API
Google Sheets
OpenAi API
Email SMTP
WhatsApp API
ClickUp API

#### 2. Replace Defalut Values
Update the workflow with:
Your Google Analytics Id's
Your Google Sheet Tabs
Replace SMTP Credentials, sender and recipients
Change with your OpenAi API key
Create your WhatApi API Credentials
ClickUp API Key's

#### 3. Customize Email Template
Modify subject, message body, or formatting style based on your reporting standards.

#### 4. Adjust Trigger
You may choose:
Manual Trigger
Cron Trigger for daily/weekly report
Webhook Trigger integrated with your system


## Detailed Process Flow

#### Schedule Trigger

- Node Type: Trigger Node
- Purpose: Automates the start of the workflow.
- Details:
Runs every day (or every hour if real-time monitoring is needed).
Eliminates manual data collection and ensures consistent reporting.

#### Analytics Reports

- Node Type :- Google Analytics Node
- Purpose: Fetch website performance data
- Metrics includes: users, sessions, page views

#### Combine the Data


- Node Type: Merge Node (Append)
- Purpose: Combines today’s and yesterday’s datasets into a single item for comparison.
- Details:
Prepares data for calculating percentage changes.
Maintains proper structure for further nodes.

#### Calculate Percent Changes

- Node Type: Function Node
- Purpose: Computes day-over-day percentage changes for users, sessions, and page views.
- Details:
Formula: ((today - yesterday) / yesterday) * 100
Handles increases and decreases correctly.
Outputs values used for trend indicators and alerts.

#### Generate AI Summary

- Node Type: OpenAI Node
- Purpose: Produces human-readable, professional insights about the daily analytics.
- Details:
Summarizes key changes, trends, and recommendations.
Provides context such as low-traffic warnings.
Text output is used in emails, WhatsApp, and ClickUp tasks.

#### Send Email or Whatsapp to Dedicated Person / Marketing Team

- Node Type: Email Node / Whatspp
- Purpose: Sends daily alert or report emails or whatsapp.
- Details:
Includes formatted metrics and AI summary.
Email subject and body clearly indicate trends and recommendations.

## Workflow Benefits

- Fully automated daily GA reporting
- AI-generated summaries for clear insights
- Alerts only triggered when necessary
- Historical logging for trends and dashboards
- Actionable tasks automatically created in ClickUp
- Multi-channel delivery via Email and WhatsApp
Handles low-traffic scenarios gracefully

## 🔗 Nodes Used

Send Email, Google Sheets, ClickUp, Google Analytics, WhatsApp Business Cloud, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
