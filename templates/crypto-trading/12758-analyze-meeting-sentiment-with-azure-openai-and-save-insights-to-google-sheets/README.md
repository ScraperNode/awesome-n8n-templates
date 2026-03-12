# 📈 Analyze meeting sentiment with Azure OpenAI and save insights to Google Sheets

> ⚡ **76 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## 📊 Description
This workflow analyzes meeting transcripts using AI to understand team sentiment, engagement, and morale.
The results are saved in Google Sheets for easy tracking and review.
It receives meeting data through a webhook, validates the input, sends the transcript to AI for analysis, cleans the output, and stores the insights in a structured format. This helps teams track morale over time and spot risks early.

## 🔁 What This Template Does
Receives meeting transcript data through a webhook.
Checks that all required fields are present.
Sends the transcript to AI for analysis.
Identifies sentiment, engagement, emotional tone, and morale risk.
Cleans and structures the AI response.
Adds a timestamp for when the analysis was done.
Looks for an existing record in Google Sheets using the meeting ID.
Updates the row if the meeting already exists.
Creates a new row if the meeting is new.
Sends a response back to the webhook caller.

## ⭐ Key Benefits
- Removes the need for manual sentiment review
- Gives consistent and structured meeting insights
- Helps detect morale and engagement risks early
- Avoids duplicate records using meeting ID
- Keeps all sentiment data in one place
- Works with any system that can send webhooks

## 🧩 Features
- Webhook-based meeting data input
- AI-powered sentiment and engagement analysis
- Clear extraction of morale and risk signals
- Clean and predictable output structure
- Google Sheets create or update logic
- Safe retry handling using meeting ID
- Webhook response after completion
- Production-ready workflow design

## 🔐 Requirements
- A webhook source that can send meeting data
- Azure OpenAI credentials or a compatible AI model
- Google Sheets OAuth credentials
- A Google Sheet with required columns
- An AI prompt for meeting sentiment analysis

## 🎯 Target Audience
- Engineering and product teams
- HR and people operations teams
- Project and delivery managers
- Leadership teams tracking team health
- n8n automation builders
- Organizations monitoring meeting effectiveness

## 🔗 Nodes Used

HTTP Request, Slack, Telegram, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
