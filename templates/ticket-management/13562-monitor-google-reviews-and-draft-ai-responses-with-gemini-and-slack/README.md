# 🎫 Monitor Google reviews and draft AI responses with Gemini and Slack

> ⚡ **9 views** · 🎫 [Ticket Management & Triage](../)

## Description

# Monitor Google reviews and draft AI responses with Gemini and Slack

## Who is this for

Restaurant owners, retail store managers, and small business owners who want to stay on top of customer feedback without manually checking Google reviews multiple times a day. Perfect for businesses that receive regular reviews and need quick response drafts for customer service.

## How it works

The workflow runs hourly via a schedule trigger, fetching new Google reviews through the Places API. Each review gets analyzed by Google Gemini AI, which provides a sentiment score (1-5 scale) and generates a professional response draft in under 50 words.

All reviews are automatically logged to a Google Sheets spreadsheet for tracking and analytics. When negative reviews (score below 3) are detected, the system immediately sends Slack notifications containing the review details and AI-generated response suggestions. At the end of each day, business owners receive email summaries with review statistics and highlights.

## How to set up

You'll need a Google Maps Places API key and your business place_id. Set up OAuth2 credentials for Google Sheets and Gmail, plus a Slack app for notifications. Configure the Setup Variables node with your business details, spreadsheet ID, and notification preferences.

## Requirements

- Google Cloud account with Places API enabled
- Google Sheets, Gmail, and Slack accounts
- Basic familiarity with API keys and OAuth2 setup

## How to customize

Adjust the sentiment threshold in the Filter node to change what counts as "negative." Modify the Gemini AI prompt for different response styles or languages. Change the schedule trigger frequency or add additional notification channels like SMS or Discord.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
