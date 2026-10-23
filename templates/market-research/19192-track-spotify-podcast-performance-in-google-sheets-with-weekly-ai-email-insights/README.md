# 📊 Track Spotify podcast performance in Google Sheets with weekly AI email insights

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow manually pulls episode lists and performance metrics from Spotify for Creators (Anchor API) and appends one analytics row per episode to a Google Sheets worksheet.

## How it works
1. Starts when you run the workflow manually.
2. Calls the Spotify for Creators (Anchor) API to look up your podcast’s Spotify show URI and extracts the show ID.
3. Fetches the full episode list for the podcast and splits the response so each episode is processed individually.
4. For each episode, requests performance metrics from the Spotify for Creators (Anchor) API and combines them with episode metadata (title, publish date, duration).
5. Waits briefly between episodes to reduce the chance of rate-limiting.
6. Appends a row to Google Sheets for each episode with plays, streams/downloads, unique listeners, consumption hours, median consumption, audience retention, and episode ID.

## Setup
1. Create a Google Sheets credential in n8n and set the target spreadsheet ID and sheet name (for example, a tab named "Episode Analytics").
2. In Spotify for Creators, capture your podcast ID and the Authorization bearer token from your browser session and paste them into the workflow’s configuration values.
3. Verify the Spotify for Creators (Anchor) API base URL is correct for your account and update it if needed before running the workflow.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
