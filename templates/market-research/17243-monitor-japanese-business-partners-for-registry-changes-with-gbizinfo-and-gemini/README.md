# 📊 Monitor Japanese business partners for registry changes with gBizINFO and Gemini

> ⚡ **7 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow runs weekly to check Japanese business partners listed in Google Sheets against the gBizINFO corporate registry API, uses Google Gemini to assess the risk impact of detected changes, updates the stored partner snapshot, and escalates findings to Slack and Gmail based on materiality.

## How it works
1. Runs every week on a schedule.
2. Reads the partner list (including corporate numbers and last-known name/address) from Google Sheets.
3. Queries the gBizINFO corporate registry API for each partner and posts a Slack message if the lookup fails.
4. Compares the latest registry data to the stored snapshot to detect name, address, or closure/dissolution changes and continues only when changes are found.
5. Sends the detected changes to Google Gemini to classify materiality (high/medium/low) with a short summary and recommended action, and posts a Slack message if the assessment fails.
6. Updates the Google Sheets partner snapshot with the latest registry details so the change is recorded.
7. Routes by materiality to notify Slack (medium/other), and for high materiality also posts a Slack alert and creates a Gmail draft requesting a credit review.

## Setup
1. Create a Google Sheets spreadsheet with a "Partners" sheet that includes columns like Corporate Number, Company Name, Last Name, and Last Address, and select the correct spreadsheet and sheet in the Google Sheets steps.
2. Add a gBizINFO API token and configure an HTTP Header Auth credential used by the gBizINFO request.
3. Add Google Gemini (PaLM) API credentials for the Gemini chat model.
4. Add a Slack OAuth2 connection and set the destination channel (for example, #partners) used by the Slack notifications.
5. Add a Gmail OAuth2 connection for creating email drafts, and adjust the draft subject/body templates if needed.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Schedule Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
