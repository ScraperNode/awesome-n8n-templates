# 📊 Send keyword-based Hacker News Slack alerts with Groq and Google Sheets

> ⚡ **7 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow polls Hacker News search results every two hours for a list of keywords, filters out posts already logged in Google Sheets, generates a one-sentence explanation with Groq, and sends a Slack webhook alert for each new match.

## How it works
1. Runs every two hours on a schedule.
2. Splits your comma-separated keywords into individual Hacker News Algolia search-by-date API queries for the last seven days.
3. Fetches results from the Hacker News Algolia API and flattens each hit into a normalized list of posts with the matched keyword.
4. Reads previously seen post URLs from a Google Sheets tab and filters out any candidates that have already been logged (capped to 20 new posts per run).
5. Sends each new post’s keyword, title, and snippet to Groq Chat Completions to generate a single-sentence explanation of the match.
6. Posts a formatted alert to Slack via an incoming webhook and then upserts the post URL and metadata into Google Sheets to prevent repeat alerts.

## Setup
1. Add Groq API credentials in n8n (used to call Groq Chat Completions).
2. Create a Google Sheet with a tab named "SeenPosts" and columns for at least post_url, title, matched_keyword, and seen_at, then connect Google Sheets credentials in n8n.
3. Create a Slack incoming webhook for your target channel and paste the webhook URL into the workflow’s configuration values.
4. Update the workflow configuration values for your keywords (comma-separated) and your Google Sheet ID before activating the workflow.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
