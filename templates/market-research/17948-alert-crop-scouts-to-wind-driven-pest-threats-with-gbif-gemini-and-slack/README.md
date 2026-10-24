# 📊 Alert crop scouts to wind-driven pest threats with GBIF, Gemini, and Slack

> ⚡ **16 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
Workflow Link: https://youtu.be/3ExkAWTyEXU?si=R7bAUzHqf1_LpHnT

This workflow runs daily at 6 AM to check GBIF for recent invasive pest occurrences near a farm, combines them with Open-Meteo wind data to assess whether winds could carry pests toward the farm, and uses Gemini send a concise Slack alert to field scouts.

## How it works
1. Runs every day at 6 AM on a schedule.
2. Sets the farm latitude/longitude, search radius, lookback windows, wind-alignment tolerance, and the target Slack channel.
3. Queries the GBIF Occurrence Search API for recent invasive/introduced pest occurrences within the configured distance of the farm.
4. If any nearby occurrences are found, fetches recent wind speed and direction data for the farm location from the Open-Meteo API.
5. Calculates average wind direction and flags occurrences where the wind direction aligns with the bearing from the occurrence toward the farm.
6. If at least one wind-aligned threat exists, sends the threat data to a Google Gemini-powered agent to draft a short, prioritized scouting alert.
7. Posts the generated alert text to the configured Slack channel.

## Setup
1. Replace the farm latitude and longitude values with your coordinates (as numbers) and adjust radius, lookback days, and alignment tolerance to match your scouting area.
2. Add Google Gemini (Google PaLM) API credentials for the Gemini chat model used to generate the Slack alert text.
3. Add Slack API credentials and set a valid destination channel name in the configuration so the workflow can post alerts.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
