# 📊 Identify and fix low-quality Meta ads with OpenAI and Gmail reports

> ⚡ **33 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow pulls daily reach and frequency insights from the Meta Marketing API, detects early signs of audience saturation, asks Anthropic Claude to summarize the status and recommended actions, and emails a formatted saturation forecast report via Gmail.

## How it works
1. Runs when triggered manually.
2. Fetches the last 30 days of daily reach, frequency, impressions, and spend from the Meta Marketing API at the ad account level.
3. Analyzes reach and frequency trends, estimates the daily frequency slope, flags potential saturation, and projects how long until frequency hits your defined ceiling.
4. Sends the trend metrics and projection to Anthropic Claude to return a JSON assessment with a status, summary, and recommended actions.
5. Formats the Claude output into a readable saturation report.
6. Sends the report by email using Gmail.

## Setup
1. Set environment variables for Meta Marketing API access: META_ACCESS_TOKEN, META_AD_ACCOUNT_ID, and optionally META_API_VERSION.
2. Add your Anthropic API key as the ANTHROPIC_API_KEY environment variable.
3. Connect a Gmail account in the Gmail node and set the recipient(s) and subject as needed for your report emails.
4. Update the date preset and frequency ceiling values in the configuration step if you want a different analysis window or saturation threshold.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
