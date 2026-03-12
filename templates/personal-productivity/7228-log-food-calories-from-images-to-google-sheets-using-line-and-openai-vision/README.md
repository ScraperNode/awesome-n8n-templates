# ⚡ Log food calories from images to Google Sheets using LINE and OpenAI Vision

> ⚡ **1,383 views** · ⚡ [Personal Productivity](../)

## Description

This workflow allows a LINE user to send either text or an image of food to a connected LINE bot.

If text is sent, the AI agent responds directly via LINE.

If an image is sent, the workflow downloads it from LINE’s API, analyzes it using OpenAI’s Vision model, estimates calories (only if the image contains food), and formats the result into JSON.

Detected dishes and calories are appended to a Google Sheet, and a confirmation message is sent back to the user via LINE.

Key Features:

Integrates LINE Messaging API webhook with n8n

Uses OpenAI Vision to detect food and estimate calories

Automatically logs results into Google Sheets

Sends real-time feedback to the LINE user

How to use:

Set up a LINE Messaging API channel and get your channel access token.

Add your OpenAI API credentials in n8n.

Replace placeholders for {channel access token}, {your id}, and Google Sheet IDs with your own.

Activate the workflow and send a food image or text message to your LINE bot.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
