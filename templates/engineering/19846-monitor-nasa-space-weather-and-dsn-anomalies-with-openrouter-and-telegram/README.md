# ⚒️ Monitor NASA space weather and DSN anomalies with OpenRouter and Telegram

> ⚡ **1 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow runs every 5 minutes to fetch NASA DSN status, NASA DONKI CME events, NOAA GOES X-ray flux, and NASA NeoWs near‑Earth object data, then uses an OpenRouter-hosted LLM to generate a brief and sends it to Telegram while logging it in PostgreSQL.

## How it works
1. Runs every 5 minutes on a schedule.
2. Fetches Deep Space Network antenna status from NASA’s DSN XML feed and pulls recent CME events from NASA DONKI using your NASA API key.
3. Fetches the last 6 hours of NOAA GOES X-ray flux data and today/tomorrow near‑Earth object feed data from NASA NeoWs using your NASA API key.
4. Aggregates all sources into a single summary, including DSN tracking/maintenance counts, potential downlink anomalies, CME totals, X-ray classification, and hazardous asteroid names.
5. Sends the summary to an OpenRouter chat model to produce a short, structured monitoring brief with status, actions, and verdict.
6. Sends the generated brief to a Telegram chat and stores the alert text plus raw context data in a PostgreSQL table.

## Setup
1. Add an OpenRouter API credential and ensure the selected model is available in your OpenRouter account.
2. Add a Telegram Bot credential, then set your target chat ID and bot token (and update the chat ID variable in the workflow).
3. Provide a NASA API key (api.nasa.gov) and update the nasaApiKey variable in the workflow.
4. Add PostgreSQL credentials and create an `aegis_alerts` table that matches the insert query columns used by the workflow.
5. Review the schedule interval (default: every 5 minutes) and adjust it to match your desired monitoring cadence.

## Requirements
- NASA API key (free from api.nasa.gov)
- Telegram Bot token and chat ID
- PostgreSQL database with a aegis_alerts table
- OpenRouter API key

## Customization
- Adjust the Schedule Trigger interval to change monitoring frequency
- Add more data sources by duplicating fetch nodes
- Change alert channel from Telegram to Slack or Email
- Modify anomaly thresholds inside the Code node

## Additional info
This template uses only core n8n nodes and free public APIs (NASA, NOAA). No external subscriptions are required.

## 🔗 Nodes Used

HTTP Request, Postgres, Telegram, Schedule Trigger, Basic LLM Chain, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
