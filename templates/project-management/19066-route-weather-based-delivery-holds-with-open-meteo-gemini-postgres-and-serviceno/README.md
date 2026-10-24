# 📋 Route weather-based delivery holds with Open-Meteo, Gemini, Postgres, and ServiceNow

> ⚡ **3 views** · 📋 [Project Management](../)

## Description

## Quick overview
Demo Video: https://youtu.be/ccE_y0J-LKY

This workflow polls Open-Meteo weather data every 15 minutes for a configured region, when severe conditions are detected, checks today’s delivery manifests in Postgres, use Gemini to identify impacted stores, creates a ServiceNow incident, updates an alert log in Postgres, and sends Slack notifications.

## How it works
1. Runs every 15 minutes and loads the configured region, zip code, and coordinates.
2. Requests the current and daily forecast from the Open-Meteo API and evaluates whether conditions qualify as heavy snow, flood warning, or low visibility.
3. If severe weather is detected, queries Postgres to see whether an active alert for the same region and event type already exists within the cooldown window and suppresses duplicates.
4. If no active duplicate exists, inserts a new processing record in Postgres and fetches today’s delivery manifest rows for the region’s zip code.
5. Uses Google Gemini (via an agent with structured output) to determine which stores are affected and to generate an incident summary, priority, and estimated delay.
6. Creates a ServiceNow incident using the AI-generated summary, then updates the Postgres alert record as active (or no_impact if no deliveries are affected) and posts an operations summary to Slack.
7. If the workflow errors at any point, logs the failure details to Postgres and sends a Slack alert with the execution link.

## Setup
1. Add Postgres credentials and ensure the tables `delivery_manifests`, `weather_alert_log`, and `weather_workflow_error_log` exist with the fields used by the queries and inserts.
2. Add a Google Gemini (PaLM) API credential and keep the model set to `models/gemini-3.1-flash-lite`.
3. Add ServiceNow Basic Auth credentials and verify incident creation permissions in your ServiceNow instance.
4. Add Slack credentials and set the target channel for failure alerts and the target user (or change to a channel) for the ops summary message.
5. Update the region configuration values (zip code, latitude/longitude, region name, and cooldown hours) to match your operating area.

## 🔗 Nodes Used

HTTP Request, Postgres, Slack, ServiceNow, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
