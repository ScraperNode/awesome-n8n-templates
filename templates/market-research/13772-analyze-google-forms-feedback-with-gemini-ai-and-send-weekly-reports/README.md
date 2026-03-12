# 📊 Analyze Google Forms feedback with Gemini AI and send weekly reports

> ⚡ **37 views** · 📊 [Market Research & Insights](../)

## Description

## Who is this for

Product managers, customer success teams, and small business owners who collect feedback via Google Forms and want automated sentiment analysis without manual review. Ideal for teams processing 10-100+ responses weekly.

## What this workflow does

This workflow reads new Google Forms responses from a linked Google Sheets spreadsheet, sends them to Gemini AI for sentiment analysis and topic categorization, then writes results back to the sheet, logs weekly insights in a Notion database, and emails an HTML summary report to your team. Each response gets a sentiment label (positive, neutral, negative), a 1-10 score, a category tag, and a key theme extraction.

## How to set up

1. Create a Google Form and link responses to a Google Sheet. Add four columns to the sheet: Processed, Sentiment, Category, Score.
2. Connect your Google Sheets OAuth2 credential and select the responses sheet.
3. Connect your Google Gemini API credential (requires a Google AI Studio API key).
4. Create a Notion database with columns: Date, Total Responses, Positive Rate, Top Themes, Recommendation. Connect your Notion API credential.
5. Connect your Gmail OAuth2 credential and set the recipient email address.
6. Activate the workflow.

## Requirements

- Google Sheets OAuth2 credentials (linked to a Google Form)
- Google Gemini API key (Google AI Studio)
- Notion API integration token
- Gmail OAuth2 credentials

## How to customize

- Change the schedule trigger interval for more or less frequent analysis runs.
- Edit the AI prompt in the Analyze feedback node to add custom categories relevant to your product.
- Modify the email HTML template in the Parse results node to match your branding.
- Add a Slack notification node after the email for real-time team alerts.

## 🔗 Nodes Used

Google Sheets, Gmail, Notion, Schedule Trigger, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
