# 📊 Analyze customer review sentiment automatically with Google Sheets

> ⚡ **749 views** · 📊 [Market Research & Insights](../)

## Description

## Overview
This workflow watches for new rows in a Google Sheet (e.g., where you manually log customer reviews) and uses a Code node to perform a simple sentiment analysis, then updates the same row with the detected sentiment.

**Use Case**: Quickly gauge customer satisfaction, identify positive/negative trends, and prioritize follow-ups based on sentiment.

## How It Works
This workflow operates in four main steps:

Google Sheets Trigger (New Row):

The workflow starts with a Google Sheets Trigger node configured to monitor a specific Google Sheet for new rows. This triggers the workflow whenever a new review is added.

Code Node (Sentiment Analysis):

A Code node receives the new row data (containing the review text).

Inside this node, JavaScript code performs a basic sentiment analysis by checking for keywords (e.g., "great", "excellent" for positive; "bad", "problem" for negative). It assigns "Positive", "Negative", or "Neutral" sentiment.

Update Google Sheet Row:

A Google Sheets node is configured to update the same row that triggered the workflow.

It adds the sentiment result (and potentially other analysis data) to a new column in that row.

## Setup Steps
To get this workflow up and running, follow these instructions:

Step 1: Create Google Sheets Credentials in n8n

In your n8n instance, click on Credentials in the left sidebar.

Click New Credential.

Search for and select "Google Sheets OAuth2 API" and follow the authentication steps with your Google account. Save it.

Make note of the Credential Name (e.g., "My Google Sheets Account").

Step 2: Prepare Your Google Sheet (or better Make a copy of the one provided in the template)

Create a new Google Sheet in your Google Drive (e.g., Customer Reviews).

In the first row, add these column headers:

Timestamp

Customer Name

Review Text

Sentiment (This column will be updated by the workflow)

Review ID (Optional, for tracking)

Copy the Sheet ID from the URL (e.g., https://docs.google.com/spreadsheets/d/YOUR_GOOGLE_SHEET_ID_HERE/edit).

Copy the GID of the specific sheet tab (e.g., https://docs.google.com/spreadsheets/d/YOUR_GOOGLE_SHEET_ID_HERE/edit#gid=YOUR_GID_HERE). This is the sheetName value.

Step 3: Import the Workflow JSON

Step 4:  Activate and Test the Workflow

Click the "Activate" toggle button in the top right corner of the n8n workflow editor.

Go to your Google Sheet and manually add a new row with a "Review Text" (e.g., "This product is great, I love it!"). Leave the "Sentiment" column empty.

The workflow should trigger automatically (it polls every minute by default), analyze the sentiment, and update the "Sentiment" column in your Google Sheet. You can also manually "Execute Workflow" to test immediately.

## 🔗 Nodes Used

Google Sheets, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
