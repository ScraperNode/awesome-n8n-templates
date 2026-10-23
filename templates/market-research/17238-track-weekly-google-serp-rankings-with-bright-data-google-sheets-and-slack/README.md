# 📊 Track weekly Google SERP rankings with Bright Data, Google Sheets, and Slack

> ⚡ **6 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs every Monday at 8 AM to check your Google rankings for keywords stored in Google Sheets using Bright Data’s SERP API, then writes the latest and previous positions back to the sheet and posts a per-keyword update to a Slack channel.

## How it works
1. Runs every Monday at 8 AM on a scheduled trigger.
2. Reads the list of keywords, target domains, and target countries from a Google Sheets spreadsheet.
3. Queries Google for each keyword via the Bright Data SERP API.
4. Parses the organic results to find the ranking position of the target domain (or returns “Not in top 100”) and carries forward the prior saved position.
5. Updates Google Sheets by writing the new “Last Position” and shifting the prior value into “Previous Position” for the same row.
6. Sends a formatted SERP rank update message to a selected Slack channel for each tracked keyword.

## Setup
1. Add credentials for Google Sheets, Bright Data, and Slack (OAuth2).
2. Replace `YOUR_GOOGLE_SHEET_ID` in both Google Sheets steps with your spreadsheet ID and ensure the worksheet contains `Keyword`, `Target Domain`, `Target Country`, `Last Position`, and `Previous Position` columns.
3. Configure the Bright Data node with your preferred zone and set the country input to use your sheet’s `Target Country` value if you want per-row geo targeting.
4. Set `YOUR_SLACK_CHANNEL_ID` to the channel where you want the updates posted.

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
