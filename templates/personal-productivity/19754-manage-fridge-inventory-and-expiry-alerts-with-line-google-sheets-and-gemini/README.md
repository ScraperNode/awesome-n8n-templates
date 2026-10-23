# ⚡ Manage fridge inventory and expiry alerts with LINE, Google Sheets and Gemini

> ⚡ **17 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow lets users register fridge items by sending images to LINE, uses Google Gemini to extract item details, saves them to Google Sheets, and runs a daily check to notify users in LINE with AI-generated meal ideas for items expiring soon.

## How it works
1. Receives a POST webhook from the LINE Messaging API when a user sends a message containing a food package image.
2. Downloads the image content from LINE and sends it to Google Gemini to extract the food name, expiration date, storage location, and notes in a fixed text format.
3. Appends the extracted details to a Google Sheets inventory table with an “In Stock” status, registration timestamp, and the originating LINE user ID.
4. Replies to the user in LINE confirming the registration and echoing the stored item details.
5. Runs every day at 9:00 to read all rows from the Google Sheets inventory.
6. Filters the sheet to items marked as in stock whose expiration dates fall between today and the next three days, then aggregates the results into a single list.
7. Uses Google Gemini to generate short Japanese meal suggestions based on the expiring items and sends the suggestions as a LINE push notification.

## Setup
1. Create a LINE Messaging API channel, enable webhooks, and add an HTTP Header Auth credential with your LINE channel access token for the LINE content, reply, and push endpoints.
2. Add a Google Sheets OAuth2 credential and set the target spreadsheet and sheet to store your inventory rows.
3. Add a Google Gemini (PaLM) API credential and confirm the selected Gemini model is available in your region/project.
4. Ensure your Google Sheet columns match the workflow’s mappings (e.g., Food Name, Expiration Date, Storage Location, Status, Notes, AI Output, LINE User ID, Registered At) and update any localized column names used for filtering if they differ.
5. Copy the n8n webhook URL for the /line-fridge path into your LINE webhook settings and verify your LINE bot can receive image messages.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Schedule Trigger, Filter, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
