# 🔬 Score AQI health risks with Open-Meteo, AirNow, Gemini, WhatsApp, SMS and Slack

> ⚡ **8 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
Video Explanation: https://youtu.be/5TNw4aaHtHI?si=wLY3Gc_i9n3vKYNQ

This workflow runs daily at 6:30 AM to fetch AQI from Open-Meteo and AirNow, calculates a weighted average AQI, uses Google Gemini to generate a health-specific risk tier and advisory, deduplicates same-day alerts, and notifies via WhatsApp, Twilio and Slack based on severity.

## How it works
1. Runs every day at 6:30 AM and sets the target city name, coordinates, and AirNow RSS feed URL.
2. Requests current air-quality readings from the Open-Meteo Air Quality API and normalizes AQI and pollutant values.
3. Fetches the AirNow RSS feed and parses it to extract AQI and the reported pollutant.
4. Reconciles Open-Meteo and AirNow by computing a weighted-average final AQI, deriving an AQI bucket, and selecting a dominant pollutant.
5. Combines the AQI results with the user’s health profile and sends them to Google Gemini to return a structured risk tier and actionable advisory text.
6. Skips sending notifications if the same city has already been alerted for the same risk tier on the same day.
7. Routes non-duplicate alerts by risk tier and sends WhatsApp for moderate alerts, and WhatsApp + Twilio SMS + Slack for severe and hazardous alerts.

## Setup
1. Add Google Gemini (Google PaLM) API credentials for the LangChain agent and select the desired Gemini chat model.
2. Add WhatsApp Business API credentials and set a valid Phone Number ID and recipient number(s) for the WhatsApp alert nodes.
3. Add Twilio credentials and replace the placeholder "YOUR_TWILIO_NUMBER" with a verified Twilio sending number.
4. Add Slack credentials and ensure the target channels (or channel names used in the workflow data) exist and are accessible.
5. Update the city configuration (latitude/longitude and AirNow RSS URL) and the user health profile fields (age, conditions, phone numbers, and Slack channel names) to match your environment.

## 🔗 Nodes Used

HTTP Request, Slack, Twilio, WhatsApp Business Cloud, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
