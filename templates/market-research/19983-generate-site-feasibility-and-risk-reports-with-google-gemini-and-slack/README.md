# 📊 Generate site feasibility and risk reports with Google Gemini and Slack

> ⚡ **1 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/Ry6lMULSsF4

This workflow collects a site location via an n8n form, checks whether the coordinates are on land, pulls elevation, protected-species occurrences, and US Census demographics, then uses Google Gemini to generate a structured feasibility and risk report and posts it to Slack.

## How it works
1. Receives a site submission (name, latitude, longitude, radius) from an n8n Form trigger.
2. Checks the coordinates with isitwater.com and posts a rejection message to Slack if the location is water.
3. If the location is land, retrieves elevation from Open Topo Data and searches GBIF for nearby occurrences of IUCN-listed threatened species within the specified radius.
4. Geocodes the point to a US Census block group and fetches ACS 5-year estimates (median household income and population) from the US Census API.
5. Aggregates the site, elevation, species, and census data into a single structured record, including simple flags like low-elevation flood risk and protected species counts.
6. Sends the structured data to Google Gemini (via an n8n LangChain chain) to produce a JSON-formatted risk score, verdict, summaries, and recommendation.
7. Formats the AI output into a Slack-friendly report and posts it to the configured Slack channel.

## Setup
1. Add credentials for isitwater.com (HTTP Bearer token), Google Gemini/PaLM API, and Slack.
2. Update the Slack channel selection in both Slack posting steps to your target channel (and ensure the channel exists).
3. (Optional) Add a US Census API key to the Census ACS request, or remove the empty key parameter if you do not use a key.

## 🔗 Nodes Used

HTTP Request, Slack, Basic LLM Chain, Structured Output Parser, n8n Form Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
