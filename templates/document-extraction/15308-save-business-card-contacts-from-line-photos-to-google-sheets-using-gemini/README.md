# 🔬 Save business card contacts from LINE photos to Google Sheets using Gemini

> ⚡ **23 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# Save business card contacts from LINE photos to Google Sheets with Gemini

---

## Who is this for

Sales professionals, account managers, and anyone who exchanges business cards regularly. Designed especially for LINE users (Japan, Taiwan, Thailand, etc.) who want to eliminate manual data entry after networking events or client meetings.

## What this workflow does

When a user sends a business card photo to a LINE bot, Gemini AI automatically extracts contact information (name, company, job title, phone number, email, postal address) and saves it to Google Sheets. Duplicate entries are detected by email address and skipped automatically. The team receives a Slack notification for every new contact, and the user gets an instant LINE confirmation.

## How to set up

1. Create a LINE Messaging API channel and obtain a Channel Access Token
2. Prepare a Google Sheet with columns: Timestamp, Name, Company, Title, Phone, Email, Address, LINE_UID
3. Get a Google Gemini API key from Google AI Studio
4. Set up a Slack Incoming Webhook URL
5. Enter all credentials in the Set Configuration Parameters node
6. Register the n8n Webhook URL in LINE Developer Console

## Requirements

- LINE Messaging API account (free tier available)
- Google Sheets (any Google account)
- Google Gemini API key (free tier available)
- Slack workspace with Incoming Webhooks enabled

## How to customize

Adjust Google Sheets columns to match your CRM fields. Add a HubSpot or Salesforce node after the Sheets node to sync contacts directly to your CRM. Replace Slack with Microsoft Teams or Discord for team notifications.

---

## Node List

| # | Node Name | Type | Role |
|---|-----------|------|------|
| 1 | Set Configuration Parameters | Set | Centralizes all credentials and config values |
| 2 | When LINE Event Received | Webhook | Receives LINE Webhook events (POST) |
| 3 | If Image Message | If | Checks whether the message contains an image |
| 4 | Fetch Image from LINE API | HTTP Request | Downloads image from LINE Content API |
| 5 | Encode Image as Base64 | Code | Converts image binary to Base64 string |
| 6 | Setup Gemini for Card Data | Gemini Chat Model | Gemini 1.5 Flash model definition |
| 7 | Extract Card Info with Gemini | LLM Chain | Extracts contact info from card image as JSON |
| 8 | Parse Gemini Output Data | Code | Parses Gemini response into structured data |
| 9 | Read Contacts from Sheets | Google Sheets | Searches existing records by email address |
| 10 | If Contact Exists | If | Checks whether a duplicate record exists |
| 11 | Append Contact to Sheets | Google Sheets | Appends new contact to Google Sheets |
| 12 | Post New Contact to Slack | HTTP Request | Sends Slack notification for new contact |
| 13 | Send Success Reply via LINE | HTTP Request | Sends registration confirmation via LINE |
| 14 | Send Duplicate Reply via LINE | HTTP Request | Sends duplicate notification via LINE |
| 15 | Respond Not Image to LINE | Respond to Webhook | Responds to non-image messages |
| 16 | Acknowledge OK Webhook | Respond to Webhook | Returns HTTP 200 on success |
| 17 | Acknowledge Duplicate Webhook | Respond to Webhook | Returns HTTP 200 on duplicate |

**Total: 17 nodes (+ 8 Sticky Notes)**

---

## Sticky Note Compliance

| # | Sticky Note Title | Color | Role |
|---|-------------------|-------|------|
| 1 | Main Sticky Note (Overview) | Yellow | Workflow overview, How it works, Setup steps, Customization |
| 2 | Configuration setup | White | Covers credentials and config |
| 3 | Webhook event handling | White | Covers LINE webhook reception and image check |
| 4 | Image download and conversion | White | Covers image fetch and Base64 encoding |
| 5 | Card data extraction | White | Covers Gemini extraction and parsing |
| 6 | Duplicate check and contact saving | White | Covers Sheets read/write and duplicate logic |
| 7 | Messaging and webhook response | White | Covers Slack post, LINE replies, and webhook responses |
| 8 | Gemini configuration | White | Covers Gemini model setup |

All sticky notes use H2 headings (`## `) and follow n8n public guidelines.

---

## Setup Guide

### 1. Create a LINE Messaging API channel

1. Log in to [LINE Developers Console](https://developers.line.biz/)
2. Create a new provider (or select an existing one)
3. Create a Messaging API channel
4. Issue a long-lived Channel Access Token and copy it
5. Set the Webhook URL after configuring n8n

### 2. Prepare Google Sheets

1. Create a new spreadsheet
2. Add the following headers in row 1:

| A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|
| Timestamp | Name | Company | Title | Phone | Email | Address | LINE_UID |

3. Copy the spreadsheet ID from the URL (between `/d/` and `/edit`)

### 3. Set up Slack Incoming Webhook

1. Create a new app at [Slack API](https://api.slack.com/apps)
2. Enable Incoming Webhooks
3. Select a channel and copy the Webhook URL

### 4. Get a Google Gemini API key

1. Go to [Google AI Studio](https://aistudio.google.com/)
2. Create an API key
3. Add it as a Google PaLM API credential in n8n

### 5. Configure the n8n workflow

1. Import the workflow JSON into n8n
2. Open the Set Configuration Parameters node and enter:
   - `LINE_CHANNEL_ACCESS_TOKEN`
   - `GOOGLE_SHEET_ID`
   - `SLACK_WEBHOOK_URL`
3. Set up Google Sheets OAuth2 credentials
4. Set up Gemini Chat Model credentials

### 6. Register the LINE Webhook URL

1. Return to LINE Developers Console
2. Enter the n8n Webhook URL
3. Enable Webhook usage
4. Disable auto-reply messages

### 7. Test

1. Activate the workflow
2. Send a business card photo to your LINE bot
3. Confirm the contact is saved in Google Sheets
4. Confirm the Slack notification is received
5. Confirm the LINE confirmation message is received

---

## Tags

`ai` `gemini` `line` `google-sheets` `slack` `crm` `image-recognition` `automation`

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
