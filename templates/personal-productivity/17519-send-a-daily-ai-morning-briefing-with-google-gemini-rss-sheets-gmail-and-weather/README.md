# ⚡ Send a daily AI morning briefing with Google Gemini, RSS, Sheets, Gmail and weather

> ⚡ **38 views** · ⚡ [Personal Productivity](../)

## Description

## Quick Overview
This workflow runs every morning to pull top BBC News headlines via RSS, today’s open tasks from Google Sheets, and a one-day forecast from Open-Meteo, then uses Google Gemini to write a short morning briefing and emails it to you via Gmail.

## How it works
1. Runs every morning at 06:30 on a schedule.
2. Reads the BBC News RSS feed and formats the top six headlines into a short text block.
3. Fetches task rows from a Google Sheets worksheet and formats them as an “open tasks” list with a count.
4. Calls the Open-Meteo forecast API for the configured location and converts the response into a single weather summary (continuing even if the API fails).
5. Combines the news, tasks, and weather summaries into one briefing input object.
6. Uses Google Gemini to generate a ~120-word, non-bulleted morning briefing from the combined context.
7. Sends the generated briefing to the configured recipient using Gmail.

## Setup
1. Connect credentials for Google Gemini (PaLM) API, Google Sheets OAuth2, and Gmail OAuth2.
2. Select the Google Sheets document and worksheet that contains your tasks, and ensure it has columns like “Task” and (optionally) “Priority.”
3. Update the RSS feed URL (if desired), set the weather latitude/longitude for your location, and set the “sendTo” email address in Gmail.
4. Adjust the schedule time to match when you want to receive the briefing.

## 🔗 Nodes Used

Google Sheets, HTTP Request, RSS Read, Gmail, Schedule Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
