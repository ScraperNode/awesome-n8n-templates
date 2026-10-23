# 🔧 Provide normalized weather forecasts with WeatherAPI and Open-Meteo

> ⚡ **9 views** · 🔧 [Miscellaneous](../)

## Description

## Quick overview
This workflow exposes a webhook-based weather proxy API that builds a request from query parameters, fetches forecast data from WeatherAPI or historical averages from Open-Meteo Archive, and returns a simplified JSON response with key temperature and condition fields.

## How it works
1. Receives a webhook request on the `/weather-proxy` endpoint with query parameters like `lat`, `lon`, and `start_date`.
2. Builds an external API URL by comparing `start_date` to today, using WeatherAPI for dates within 14 days and Open-Meteo Archive for older dates.
3. Calls the selected weather provider over HTTP to retrieve forecast or historical daily weather data.
4. Normalizes the provider response into a compact JSON payload (max/min temperature and a derived condition such as hot/cold/rain/snow, plus rain chance or rain percentage).
5. Returns the formatted JSON response to the webhook caller with CORS and JSON content-type headers.

## Setup
1. Replace the hardcoded WeatherAPI key in the parameter-building code with your own WeatherAPI API key.
2. Ensure the calling app sends `lat`, `lon`, and `start_date` as webhook query parameters (or rely on the default Tokyo coordinates).
3. Copy the production webhook URL for `/weather-proxy` and configure it in your client application as the weather endpoint.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
