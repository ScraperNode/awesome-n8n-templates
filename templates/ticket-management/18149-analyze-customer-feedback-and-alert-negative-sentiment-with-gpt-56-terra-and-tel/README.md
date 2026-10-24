# 🎫 Analyze customer feedback and alert negative sentiment with gpt-5.6-terra and Telegram

> ⚡ **37 views** · 🎫 [Ticket Management & Triage](../)

## Description

Catch unhappy customers before they leave. This workflow receives feedback via webhook, logs it to Google Sheets, classifies sentiment with OpenAI, and fires a Telegram alert the moment sentiment turns negative.

*Last updated: September 2026.*

## Quick overview
This workflow receives customer feedback via a webhook, logs it to Google Sheets, uses OpenAI to classify sentiment and summarize the message, and sends a Telegram alert when the sentiment is negative.

## How it works
1. Receives customer feedback in a POST request via a webhook endpoint.
2. Normalizes the incoming payload into consistent fields (name, email, rating, message, source) and adds a received timestamp.
3. Appends the normalized feedback as a new row in a Google Sheets “Feedback” worksheet.
4. Sends the feedback details to OpenAI (gpt-5.6-terra) to return a JSON analysis with sentiment, category, summary, and suggested action.
5. Extracts the analysis fields from the OpenAI JSON response and combines them with the original feedback details.
6. If the sentiment is negative, sends a formatted alert message to a Telegram chat.

## Setup
1. Create a webhook consumer (e.g. your website form or app) and configure it to POST feedback data to the workflow’s webhook URL.
2. Add a Google Sheets OAuth credential and set the target spreadsheet ID and worksheet name (currently document ID “1uw7UaNuorGIbgEtPSANNT8SdiS6qnnArvJVwbfrMpi4” and sheet “Feedback”).
3. Ensure the Google Sheet has columns for received_at, name, email, rating, source, message, sentiment, category, and summary.
4. Add an OpenAI API credential for the OpenAI node.
5. Add a Telegram bot credential and update the target chat ID (currently set to 7040749953).

## Requirements
- A webhook-capable source system (form, app, or API) that sends feedback
- Google account with access to the target Sheets document
- OpenAI API key with credits
- Telegram bot token and chat ID for alerts

## Customization
- Change the sentiment categories or trigger condition in the IF node
- Adjust the OpenAI prompt to extract different fields
- Modify the Telegram alert message formatting
- Add extra fields to the Google Sheets log

### Quick Answers
**What triggers an alert?**  
Negative sentiment. Everything gets logged, but only negative feedback pings Telegram.  
**What does the analysis include?**  
Sentiment, category, summary, and a suggested action, returned as JSON.  
**Where does feedback live?**  
One new row per message in the Google Sheets Feedback worksheet.  

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Google Sheets, Webhook, Telegram, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
