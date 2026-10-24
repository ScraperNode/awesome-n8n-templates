# 📊 Monitor brand mentions and route Slack alerts with Groq and Google News

> ⚡ **7 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow runs every 15 minutes to monitor Google News (and optionally Reddit/Trustpilot) for brand mentions, deduplicates stories, uses Groq to classify sentiment/intent/severity, sends high-severity alerts to Slack with a suggested reply draft, and logs all results to Google Sheets with Slack-based error reporting.

## How it works
1. Runs every 15 minutes on a schedule.
2. Fetches recent mentions from a Google News RSS search feed (with optional, disabled-by-default Reddit and Trustpilot HTTP sources).
3. Normalizes each mention into a consistent schema and deduplicates near-identical stories based on title similarity.
4. Sends each story to the Groq Chat Completions API to classify sentiment, intent, severity, and a short reasoning.
5. If severity is high, asks Groq to draft a short public reply and posts an alert to a Slack channel including the classification, link, and suggested reply.
6. Appends all processed mentions (including non-high severity) to a Google Sheets spreadsheet for logging.
7. When a request or Groq call errors, formats the error details and posts them to a separate Slack error-reporting channel.

## Setup
1. Add a Groq API credential as an HTTP Header Auth connection (for calls to https://api.groq.com/openai/v1/chat/completions).
2. Add a Slack OAuth credential and set the alert channel for high-severity mentions and a separate channel for automation errors.
3. Add a Google Sheets OAuth2 credential and replace YOUR_GOOGLE_SHEET_ID (and sheet name if needed) in the logging step.
4. Update the Google News RSS URL query to match the brand terms you want to monitor.
5. (Optional) Enable the Reddit and/or Trustpilot HTTP requests, then provide the required API/OAuth access and connect their normalized outputs into the merge/deduplication path.

## 🔗 Nodes Used

Google Sheets, HTTP Request, RSS Read, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
