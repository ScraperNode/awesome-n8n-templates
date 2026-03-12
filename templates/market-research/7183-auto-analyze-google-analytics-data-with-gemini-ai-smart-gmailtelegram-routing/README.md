# 📊 Auto-analyze Google Analytics data with Gemini AI & smart Gmail/Telegram routing

> ⚡ **1,528 views** · 📊 [Market Research & Insights](../)

## Description

# Who’s it for
This workflow is ideal for marketing teams, growth analysts, and business owners who need regular Google Analytics insights without manually digging through data. It’s also perfect for organizations that want to ensure positive performance updates reach stakeholders quickly while negative trends get immediate attention from the internal team.

# How it works / What it does
The workflow runs weekly on a set schedule, pulls key performance metrics from Google Analytics, and aggregates the data into a clean summary.
An AI Agent (powered by Google Gemini and connected to Simple Memory for historical context) analyzes the data, generates actionable insights, and classifies the sentiment as Positive, Negative, or Neutral.
- Positive sentiment → Automatically emailed to stakeholders via Gmail.
- Negative sentiment → Sent instantly to a designated Telegram group for faster response.

This ensures wins are celebrated, and issues are addressed promptly.

# How to set up
- Configure the Schedule Trigger for your preferred reporting day/time.
- Connect the Google Analytics node with your property ID and metrics/dimensions.
- Set up the AI Agent with Google Gemini/others model API credentials.
- Connect Gmail and Telegram accounts to their respective nodes.
- Adjust sentiment routing rules.

# Requirements
- Google Analytics account with API access
- Google Gemini API key
- Gmail account with OAuth connection
- Telegram bot token and group chat ID

# How to customize the workflow
- Modify the AI prompt to include custom KPIs or industry-specific recommendations.
- Change the schedule frequency (daily, monthly, or on-demand).
- Add Neutral sentiment handling (e.g., log to Google Sheets).
- Extend with Slack, Discord, or other notification channels.

## 🔗 Nodes Used

Telegram, Gmail, Google Analytics, Schedule Trigger, AI Agent, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
