# ⚡ Track study weaknesses from LINE images with Google Gemini and Google Sheets

> ⚡ **2 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow receives study result images from LINE, uses Google Gemini to extract key details and store them in Google Sheets, then analyzes the student’s history to identify weaknesses, generate review questions, and replies with feedback in LINE.

## How it works
1. Receives a POST webhook from LINE Messaging API when a user sends a message.
2. Checks that the incoming LINE message is an image, then downloads the image content from LINE.
3. Sends the image to Google Gemini to extract Subject, Topic, Score, Weak Points, and short Review Advice.
4. Appends the extracted study record (including LINE user ID and timestamp) to a Google Sheets worksheet.
5. Looks up the same user’s past study records in Google Sheets and aggregates them into a single history payload.
6. Sends the study history to Google Gemini to summarize learning trends, recurring weak points, review priorities, next actions, and three review questions.
7. Replies to the user in LINE with the generated analysis and review questions.

## Setup
1. Create a LINE Messaging API channel, enable webhooks, and configure the workflow’s webhook URL as your LINE webhook endpoint.
2. Add an HTTP Header Auth credential for LINE (Bearer channel access token) and ensure the image download and reply requests use it.
3. Connect Google Sheets OAuth2 credentials and set the target spreadsheet and sheet (for example, “AI Study Review Tracker” → “Study Records”).
4. Add a Google Gemini (PaLM) API credential and select it for both Gemini chat model steps.
5. Ensure your Google Sheet includes columns for Recorded At, Subject, Topic, Score, Weak Points, Review Advice, LINE User ID, and AI Output.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Filter, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
