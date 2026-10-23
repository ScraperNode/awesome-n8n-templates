# 🎫 Analyze customer feedback sentiment with OpenAI, Google Sheets, and Slack

> ⚡ **3 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow receives customer feedback via a webhook, uses OpenAI to classify sentiment and extract topics, logs every result to Google Sheets, and posts an alert to Slack when feedback is negative.

## How it works
1. Receives a POST webhook request containing JSON feedback fields (for example, customer and feedback text).
2. Extracts the feedback text and customer name and sends the text to OpenAI Chat Completions (gpt-4o-mini) to return structured sentiment analysis as JSON.
3. Parses the OpenAI JSON response and formats the output fields (including joining topics into a comma-separated string).
4. Appends each analyzed feedback entry to a Google Sheets worksheet.
5. Checks whether the sentiment is negative and, if so, posts a formatted alert message to a Slack channel.

## Setup
1. Add an OpenAI API credential in n8n and select it in the OpenAI HTTP request step.
2. Add a Google Sheets OAuth2 credential, then replace the Google Sheet URL/ID and ensure the target sheet (for example, Sheet1) has matching columns (customer, text, sentiment, score, topics, suggested_action).
3. Add a Slack credential and set the target channel (for example, #customer-alerts) where negative-feedback alerts should be posted.
4. Copy the production webhook URL from the webhook trigger and configure your form/survey/app to send POST requests to it with customer and feedback fields.

## Additional info
More ready-made business workflows: n8n Small-Business Automation Pack: https://opendataforge.gumroad.com/l/nuzbv

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
