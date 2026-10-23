# ⚒️ Alert on at-risk nursery plants with OpenWeather, Google Sheets, Gemini, and Slack

> ⚡ **19 views** · ⚒️ [Engineering](../)

## Description

## Quick Overview
This workflow runs daily at 7 PM IST, pulls an overnight forecast from OpenWeatherMap and plant inventory data from Google Sheets, uses Google Gemini to identify plants whose temperature tolerances are at risk, and posts critical alerts to a Slack channel.

## How it works
1. Runs every day at 7 PM IST on a schedule.
2. Requests the weather forecast from the OpenWeatherMap API for the configured latitude/longitude and units, then calculates the overnight low/high and summary conditions.
3. Reads the plant inventory from Google Sheets and aggregates it into a single list.
4. Sends the forecast and plant list to a Google Gemini agent to return a structured list of plant risk alerts.
5. Checks whether any alerts are returned and, if so, formats them into a single notification message.
6. Posts the alert message to the selected Slack channel.

## Setup
1. Add an OpenWeatherMap API key as an HTTP Query Auth credential and set your latitude, longitude, and units values.
2. Connect Google Sheets using a Service Account (or update authentication) and set the target spreadsheet and sheet that contain your plant inventory.
3. Add Google Gemini (Google PaLM) API credentials for the AI agent.
4. Add Slack credentials and choose the channel where alerts should be posted.
5. Adjust the schedule trigger time/cron expression if you want the check to run at a different local time.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
