# 📊 Track commodity news sentiment with Groq, Google Sheets, and Slack

> ⚡ **13 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow runs daily at 10:00 and reads commodity news from OilPrice and Invezz RSS feeds, uses a Groq-hosted LLM to classify sentiment and extract commodity/impact details, appends the results to Google Sheets, and posts a Slack alert when aggregated sentiment crosses a threshold.

## How it works
1. Runs every day at 10:00 on a schedule.
2. Fetches the latest articles from the OilPrice and Invezz commodities RSS feeds, sorts them by publication date, and keeps the five most recent from each source.
3. Merges both feeds and normalizes each article into a consistent structure (title, link, date, content, snippet, and source).
4. Sends the article text to Groq (chat model) to return a JSON sentiment classification with confidence, commodity, impact level, and a one-line summary.
5. Parses the model response and appends the structured result to a Google Sheets worksheet along with the article URL/title/source and a timestamp.
6. Converts the sentiment label into a numeric score, aggregates average sentiment per commodity across the processed articles, and formats a Slack message with the trend and latest summary/link.
7. Posts the Slack message when the average sentiment for a commodity is greater than 0.3 or less than -0.3, otherwise it ends without sending an alert.

## Setup
1. Add Groq API credentials for the Groq chat model used for sentiment classification.
2. Connect Google Sheets OAuth2 credentials and update the spreadsheet/document ID, sheet name, and column headers to match the fields being appended.
3. Connect Slack OAuth2 credentials and set the target Slack user/channel configuration used to send alerts.
4. Review and, if needed, adjust the RSS feed URLs and the alert thresholds (0.3 and -0.3) to fit your news sources and sensitivity.

## 🔗 Nodes Used

Google Sheets, RSS Read, Slack, Schedule Trigger, AI Agent, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
