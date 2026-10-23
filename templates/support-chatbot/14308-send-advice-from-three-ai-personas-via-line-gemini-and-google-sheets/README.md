# 💬 Send advice from three AI personas via LINE, Gemini, and Google Sheets

> ⚡ **100 views** · 💬 [Support Chatbots](../)

## Description

## Who is this for

Anyone who wants a fun and practical AI chatbot on LINE. Great for people who enjoy getting advice from multiple angles — whether they face work stress, personal dilemmas, or everyday decisions.

## What this workflow does

When a user sends a text message to the LINE bot, the workflow:

1. Parses the incoming LINE Webhook event
2. Passes the message to Google Gemini via Basic LLM Chain
3. Gemini replies as three distinct personas in a single structured response
4. The advice is logged to Google Sheets for history tracking
5. A Flex Message carousel is sent back to the user — one card per persona, each color-coded

**The three personas:**
- 🔮 Fortune Teller — mystical, fate-driven advice
- 💼 Business Coach — logical, action-oriented guidance
- 😊 Best Friend — casual, empathetic encouragement

## How to set up

1. Create a LINE Messaging API channel and copy the Channel Access Token
2. Set your n8n webhook URL as the LINE Webhook URL
3. Create a Google Sheets spreadsheet with a sheet named `advice_history` and these headers in row 1: `Timestamp`, `User ID`, `Message`, `Fortune Teller`, `Business Coach`, `Best Friend`
4. Open the **Set config** node and paste your LINE token and Sheet ID
5. Connect your Google Gemini credential to the **Google Gemini Chat Model** node
6. Connect your Google Sheets credential to the **Save advice to Sheets** node
7. Activate the workflow and send a message to your LINE bot

## Requirements

- LINE Messaging API channel (free)
- Google Gemini API key (free tier available at aistudio.google.com)
- Google Sheets (any Google account)

## How to customize

- Change the three personas in the **Generate advice with Gemini** prompt to fit your use case (e.g. therapist, investor, comedian)
- Adjust the Flex Message card colors in **Send Flex Message to LINE**
- Add extra columns to Google Sheets to track additional metadata

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
