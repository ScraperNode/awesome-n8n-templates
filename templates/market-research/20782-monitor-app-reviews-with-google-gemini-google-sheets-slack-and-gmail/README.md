# 📊 Monitor app reviews with Google Gemini, Google Sheets, Slack, and Gmail

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow fetches mobile app reviews from an HTTP endpoint, analyzes each review with Google Gemini for sentiment and support category, logs negative reviews to Google Sheets, and alerts your team via Slack and Gmail with an AI-suggested reply.

## How it works
1. Runs manually when you click Execute workflow in n8n.
2. Calls an HTTP endpoint to retrieve a batch of app reviews and normalizes them into one item per review with metadata like rating, platform, and device details.
3. Sends each review to Google Gemini to generate a sentiment label, sentiment score, and confidence, then parses the JSON response.
4. Sends the same review to Google Gemini again to classify it into a single support category (for example Bug, Payment, or Crash) and parses the JSON response.
5. If the review sentiment is Negative, appends or updates a row in Google Sheets with the review details, sentiment, and category.
6. If the negative review meets the workflow’s critical conditions, posts an alert to a Slack channel, generates a short suggested reply with Google Gemini, and emails the review details and suggested response via Gmail.

## Setup
1. Provide Google Gemini (PaLM) credentials for the three Google Gemini nodes used for sentiment analysis, categorization, and reply generation.
2. Update the HTTP Request node URL to your reviews API endpoint (and add any required authentication options).
3. Connect Google Sheets credentials and update the spreadsheet/document ID and sheet tab so the columns (for example Review ID, Rating, Review, Category, and Sentimate) match your sheet.
4. Connect Slack credentials and choose the target channel for critical review alerts.
5. Connect Gmail credentials and update the recipient email address (sendTo) used for the review alert message.

## Additional info
## Use Case Examples

### 1. Customer Feedback Monitoring

Automatically collect and analyze customer reviews instead of manually checking the stores.

### 2. Crash Detection

Identify reviews mentioning application crashes and notify the development team.

### 3. Payment Issue Detection

Detect payment-related complaints and send them to the appropriate team.

### 4. Login Issue Tracking

Automatically identify users reporting login or authentication problems.

### 5. Feature Request Collection

Identify customer requests and store them for future product planning.

### 6. Customer Response Assistance

Generate a professional suggested response that the support team can review before replying to the customer.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|---|---|---|
| No reviews returned | FastAPI is not running | Start the FastAPI server and test `/reviews` |
| HTTP Request fails | Wrong API URL | Check the FastAPI URL and port |
| Only one item appears | Reviews array was not normalized | Check the Normalize Reviews Code node |
| Gemini returns invalid JSON | Prompt/output format issue | Ask Gemini to return only valid JSON |
| Sentiment is incorrect | Review context is unclear | Improve the Gemini sentiment prompt |
| Wrong category | Category rules are unclear | Update the Gemini classification prompt |
| Google Sheets error | Column names do not match | Check the Google Sheets column mapping |
| Slack alert not sent | Invalid credentials/channel | Reconnect Slack and check the selected channel |
| Gmail not sent | Gmail credentials issue | Reconnect Gmail and verify permissions |
| Critical reviews not detected | IF condition is incorrect | Check rating/category/sentiment conditions |
| FastAPI works in browser but not n8n | n8n cannot access localhost | Use the FastAPI machine's network IP instead of `localhost` |


## Need Help?

If you need help customizing or extending this workflow, connecting real Google Play/App Store APIs, monitoring multiple apps, creating review dashboards, automatically creating development tasks or improving AI-based review analysis, then our [n8n development team](https://www.weblineindia.com/hire-n8n-developers/) at **WeblineIndia** can assist you with advanced automation.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
