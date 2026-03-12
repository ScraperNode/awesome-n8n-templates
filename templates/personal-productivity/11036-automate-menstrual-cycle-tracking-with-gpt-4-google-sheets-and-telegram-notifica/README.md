# ⚡ Automate menstrual cycle tracking with GPT-4, Google Sheets and Telegram notifications

> ⚡ **89 views** · ⚡ [Personal Productivity](../)

## Description

## Who's it for

Women and healthcare providers who want to automate menstrual cycle tracking with personalized AI-powered health insights delivered through multiple channels.

## What it does

This workflow automates the complete cycle tracking process:
- Retrieves period and symptom data from Google Sheets every morning
- Analyzes patterns using OpenAI GPT to generate personalized health insights
- Sends daily notifications via Telegram on weekdays
- Creates Google Calendar reminders for upcoming cycle events
- Generates comprehensive weekly reports sent via email on weekends

## How it works

1. **Daily Trigger**: Activates every morning at 8 AM
2. **Data Collection**: Fetches period tracking and symptom logs from Google Sheets
3. **AI Analysis**: GPT-4 analyzes your cycle data to provide personalized insights and predictions
4. **Smart Distribution**: Weekday updates go to Telegram for quick access, weekend summaries are emailed
5. **Calendar Integration**: Automatically creates events for predicted cycle phases

## Requirements

- Google account (for Sheets and Calendar)
- Telegram account and bot token
- OpenAI API key
- Gmail account for email reports

## Setup steps

1. Configure the "Configuration Settings" node with your personal IDs
2. Connect your Google Sheets with period and symptom data
3. Set up Telegram bot and add your chat ID
4. Add OpenAI credentials for AI analysis
5. Connect Gmail for weekly reports
6. Activate the workflow

## How to customize

- Adjust trigger time to your preferred schedule
- Modify AI prompts for different health focuses
- Add more notification channels (Slack, Discord, etc.)
- Customize report formatting and frequency
- Add additional data sources for more comprehensive tracking

## 🔗 Nodes Used

Google Sheets, Telegram, Google Calendar, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
