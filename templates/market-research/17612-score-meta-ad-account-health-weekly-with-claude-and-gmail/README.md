# 📊 Score Meta ad account health weekly with Claude and Gmail

> ⚡ **14 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow pulls hourly performance from the Meta Marketing API for the last 30 days, calculates cost-per-result by hour, asks Anthropic Claude to recommend a dayparting schedule, and emails a formatted report via Gmail.

## How it works
1. Runs when you manually execute the workflow.
2. Fetches account-level Meta Ads insights for a selected date preset, broken down by hour of day in the advertiser time zone.
3. Calculates cost-per-result per hour, compares it to the overall benchmark, and identifies best and worst-performing hours above a minimum spend threshold.
4. Sends the benchmark and ranked hourly performance data to Anthropic Claude to generate a JSON dayparting recommendation (cut hours, scale hours, and a brief plan).
5. Converts the AI response into a plain-text “Meta Dayparting Report” with the benchmark CPA and recommended hours.
6. Emails the report using Gmail.

## Setup
1. Set the required environment variables for the Meta Marketing API request: META_ACCESS_TOKEN, META_AD_ACCOUNT_ID, and optionally META_API_VERSION.
2. Add your Anthropic API key as an environment variable named ANTHROPIC_API_KEY.
3. Connect a Gmail account in the Gmail node and set the recipient, subject, and any other email options you want.
4. Adjust the configuration values (DATE_PRESET, MIN_HOUR_SPEND, and RESULT_ACTIONS) to match the conversion events you optimize for.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
