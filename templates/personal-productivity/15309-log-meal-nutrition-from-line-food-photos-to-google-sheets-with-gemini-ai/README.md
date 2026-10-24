# ⚡ Log meal nutrition from LINE food photos to Google Sheets with Gemini AI

> ⚡ **37 views** · ⚡ [Personal Productivity](../)

## Description

# Log meal nutrition from LINE food photos to Google Sheets using Gemini AI

---

## Who is this for

Health-conscious individuals, people on a diet, and anyone who wants to track daily nutrition without manual data entry. Designed especially for LINE users (Japan, Taiwan, Thailand, etc.) who want an effortless way to monitor calories and macronutrients from meal photos.

## What this workflow does

Send a meal photo to a LINE bot and Gemini 1.5 Flash automatically identifies the food and estimates calories, protein, fat, and carbohydrates. Each meal is logged to Google Sheets with a timestamp and user ID. The workflow calculates the running daily calorie total and warns when the personal limit is exceeded. Every Monday morning, a weekly nutrition summary with AI-generated advice is pushed via LINE automatically.

## How to set up

1. Create a LINE Messaging API channel and copy the Channel Access Token
2. Copy your LINE User ID for weekly Push messages
3. Set up a Google Sheet with columns: Timestamp, LINE_UID, Food_Name, Meal_Type, Calories, Protein, Fat, Carbs, Confidence
4. Get a Google Gemini API key (free tier available)
5. Configure CALORIE_LIMIT (default 2000) and LINE_USER_ID in the Set Config Fields node
6. Register the n8n Webhook URL in LINE Developer Console

## Requirements

- LINE Messaging API account (free tier)
- Google Sheets (any Google account)
- Google Gemini API key (free tier available)

## How to customize

Adjust CALORIE_LIMIT in the Set Config Fields node for different dietary goals. Add a Slack notification node to share weekly reports with a fitness accountability group. Modify the Gemini prompt to track additional nutrients like fiber or sodium.

---

## Node List

| # | Node Name | Type | Role |
|---|-----------|------|------|
| 1 | Set Config Fields | Set | Centralizes LINE token, Sheet ID, calorie limit, and user ID |
| 2 | When LINE Event Received | Webhook | Receives LINE Webhook (POST) |
| 3 | If Image Message | If | Branches on image vs text message |
| 4 | If Report Command | If | Checks whether text is a report command |
| 5 | Send Help Reply via LINE | HTTP Request | Sends usage guide as reply |
| 6 | Fetch LINE Image Data | HTTP Request | Downloads image from LINE Content API |
| 7 | Encode Image to Base64 | Code | Converts image binary to Base64 string |
| 8 | Gemini Food Analysis Config | Gemini Chat Model | Gemini 1.5 Flash model for food analysis |
| 9 | Process Food Analysis | LLM Chain | Estimates nutrition info from meal image as JSON |
| 10 | Extract Nutrition Data | Code | Extracts and parses JSON from Gemini response |
| 11 | Append Meal to Sheets | Google Sheets | Appends nutrition data to spreadsheet |
| 12 | Read Today's Total from Sheets | Google Sheets | Retrieves all records for today |
| 13 | Compute Daily Calorie Total | Code | Calculates total calories for the day |
| 14 | If Over Calorie Limit | If | Checks whether daily limit is exceeded |
| 15 | Send Calorie Warning via LINE | HTTP Request | Sends calorie warning reply via LINE |
| 16 | Send Nutrition Info via LINE | HTTP Request | Sends nutrition info and daily total via LINE |
| 17 | Weekly 9AM Schedule | Schedule Trigger | Triggers weekly report every Monday at 9 AM JST |
| 18 | Read Weekly Data from Sheets | Google Sheets | Retrieves records from the past 7 days |
| 19 | Summarize Weekly Stats | Code | Aggregates weekly totals, averages, and peak day |
| 20 | Gemini Weekly Report Config | Gemini Chat Model | Gemini 1.5 Flash model for weekly comment |
| 21 | Create Weekly Comment with LLM | LLM Chain | Generates personalized nutrition advice |
| 22 | Deliver Weekly Report via LINE | HTTP Request | Sends weekly report via LINE Push |
| 23 | Send Webhook Response OK | Respond to Webhook | Returns HTTP 200 to Webhook |

**Total: 23 nodes (+ 9 Sticky Notes)**

---

## Sticky Note Compliance

| # | Sticky Note Title | Color | Role |
|---|-------------------|-------|------|
| 1 | Main Sticky Note (Overview) | Yellow | Workflow overview, How it works, Setup steps, Customization |
| 2 | Set configuration fields | White | Covers configuration setup |
| 3 | Receive and verify message type | White | Covers LINE webhook and message type checks |
| 4 | Download and convert image | White | Covers image fetch and Base64 encoding |
| 5 | Analyze image and parse data | White | Covers Gemini analysis and data parsing |
| 6 | Log and calculate nutrition | White | Covers meal logging and daily total calculation |
| 7 | Notify via LINE based on calorie | White | Covers calorie warning and nutrition info LINE replies |
| 8 | Weekly report scheduling and stats | White | Covers schedule trigger and weekly aggregation |
| 9 | Respond to LINE webhook | White | Covers webhook response |

All sticky notes use H2 headings (`## `) and follow n8n public guidelines.

---

## Setup Guide

### 1. Create a LINE Messaging API channel

1. Log in to [LINE Developers](https://developers.line.biz/)
2. Create a new provider and a Messaging API channel
3. Issue a long-lived Channel Access Token and copy it
4. Copy your User ID from the channel basic settings

### 2. Prepare Google Sheets

1. Create a new spreadsheet
2. Add the following headers in row 1:

```
Timestamp | LINE_UID | Food_Name | Meal_Type | Calories | Protein | Fat | Carbs | Confidence
```

3. Copy the spreadsheet ID from the URL (between `/d/` and `/edit`)

### 3. Get a Google Gemini API key

1. Go to [Google AI Studio](https://aistudio.google.com/)
2. Create an API key (free tier available)
3. Register it as a Google PaLM API credential in n8n

### 4. Configure the n8n workflow

1. Import the workflow JSON into n8n
2. Open Set Config Fields and enter:
   - `LINE_CHANNEL_ACCESS_TOKEN`
   - `GOOGLE_SHEET_ID`
   - `CALORIE_LIMIT` (default: 2000)
   - `LINE_USER_ID`
3. Set up Google Sheets OAuth2 and Google PaLM API credentials

### 5. Register the Webhook URL

1. Activate the workflow in n8n
2. Copy the Webhook URL
3. Paste it into LINE Developers Console → Messaging API settings
4. Enable Webhook and verify the connection

### 6. Test

1. Send a meal photo to your LINE bot → confirm nutrition info is returned
2. Send "report" as text → confirm weekly summary is returned
3. Send other text → confirm help message is returned

---

## Tags

`ai` `gemini` `line` `google-sheets` `health` `nutrition-tracking` `image-recognition` `automation`

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Schedule Trigger, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
