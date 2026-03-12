# 📊 Japanese-to-English review sentiment analysis with GPT and Telegram alerts

> ⚡ **10 views** · 📊 [Market Research & Insights](../)

## Description

## Who is this for

This template is designed for e-commerce businesses, customer support teams, and marketing professionals who need to monitor and analyze customer reviews at scale. It's especially useful for teams dealing with multilingual reviews (Japanese to English) and those who want instant alerts for critical feedback.

## What it does

This workflow automatically processes customer reviews stored in Google Sheets using OpenAI GPT. For each review, it performs:

- **Translation** from Japanese to English
- **Sentiment analysis** with a score from -1.0 to +1.0
- **Importance classification** (High/Medium/Low) based on urgency
- **Category tagging** (Quality, Price, Shipping, Support, Features, Usability, Other)
- **Key phrase extraction** for quick summary

Results are written back to the spreadsheet, and Telegram notifications are sent based on priority level.

## How to set up

1. Connect your Google Sheets account and select your review spreadsheet
2. Configure OpenAI API credentials
3. Set up Telegram Bot and enter your Chat ID in both notification nodes
4. Adjust the schedule trigger interval as needed

## Requirements

- Google Sheets with columns: ReviewID, Keyword (review text), ProcessStatus
- OpenAI API key
- Telegram Bot Token and Chat ID

## How to customize

- Modify the AI prompt in "AI Agent - Review Analysis" to change analysis criteria or add new fields
- Adjust the sentiment threshold (-0.5) in "Check Importance & Sentiment" node
- Customize notification messages in Telegram nodes
- Change the source/target language by editing the prompt

## 🔗 Nodes Used

Google Sheets, Telegram, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
