# 💬 Personalize client meeting prep with GPT-4, Google Calendar, Notion & Places API to Slack

> ⚡ **80 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

Who is this for
This template is perfect for sales professionals, account managers, and business development teams who want to make memorable impressions on their clients. It automates the tedious task of researching gift shops and preparation spots before important meetings.
What it does
This workflow automatically prepares personalized recommendations for client visits by monitoring your Google Calendar, enriching data from Notion, and using AI to select the perfect options.
How it works

Trigger: Activates when a calendar event containing keywords like "visit," "meeting," "client," or "dinner" is created or updated
Extract: Parses company name from the event title
Enrich: Fetches customer preferences from your Notion database
Search: Google Places API finds nearby gift shops and quiet cafes
Analyze: GPT-4 recommends the best options based on customer preferences
Notify: Sends a personalized message to Slack with recommendations

Example Slack Output
Here's what the final notification looks like:
🎁 Recommended Gift Shop
Patisserie Sadaharu AOKI (★4.6)
3-5-2 Marunouchi, Chiyoda-ku
💡 Reason: The customer loves French desserts, so this patisserie's macarons would be perfect!

☕ Pre-Meeting Cafe
Starbucks Reserve Roastery (★4.5)
5 min walk from meeting location
Set up steps
Setup time: approximately 15 minutes

Google Calendar: Connect your Google Calendar account and select your calendar
Notion Database: Create a customer database with "Company Name" (title) and "Preferences" (text) fields
Google Places API: Get an API key from Google Cloud Console and add it to the Configuration node
OpenAI: Connect your OpenAI account for AI-powered recommendations
Slack: Connect your Slack workspace and update the channel ID in the final node

Requirements

Google Calendar account
Notion account with a customer database
Google Places API key (requires Google Cloud account)
OpenAI API key
Slack workspace with bot permissions

How to customize

Search radius: Adjust the searchRadius parameter in the Configuration node (default: 1000 meters)
Event keywords: Modify the Filter node conditions to match your calendar naming conventions
Notification channel: Change the Slack channel ID to your preferred channel

## 🔗 Nodes Used

HTTP Request, Slack, Notion, Google Calendar Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
