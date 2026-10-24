# 📊 Match Japanese jGrants subsidies to your company with Gemini, Slack and Gmail

> ⚡ **6 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow runs weekly to search the public jGrants API for open Japanese subsidies, scores each subsidy’s fit for your company using Google Gemini, logs results to Google Sheets, and notifies a Slack channel (and drafts a Gmail kickoff email) for strong matches.

## How it works
1. Runs weekly on a schedule and loads your company profile details (industry, headcount, prefecture, investment plan, and search keyword).
2. Calls the public jGrants subsidies API to retrieve currently accepting programs sorted by newest first, and posts to Slack if the search fails.
3. Processes each returned subsidy individually and asks Google Gemini to produce a fit score, verdict (strong/possible/no), reasons, next steps, and a short summary.
4. Normalizes the Gemini response into consistent fields, and posts to Slack if scoring fails for a subsidy.
5. Upserts each scored subsidy into a Google Sheets tracker (keyed by subsidy ID) to avoid duplicates across weekly runs.
6. Routes results by verdict: sends a detailed Slack alert and creates a Gmail draft for strong matches, posts a lightweight Slack message for possible matches, and flags unclear verdicts in Slack.

## Setup
1. Add credentials for Google Gemini (PaLM) API, Google Sheets OAuth2, Slack OAuth2, and Gmail OAuth2.
2. Update the company details and jGrants search keyword in the company profile step to match your business and investment plan.
3. Select your target Google Sheets spreadsheet and sheet/tab for logging subsidy matches.
4. Choose the Slack channel to receive alerts and review notifications.
5. Set the Gmail account used to create draft kickoff emails for strong matches.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Schedule Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
