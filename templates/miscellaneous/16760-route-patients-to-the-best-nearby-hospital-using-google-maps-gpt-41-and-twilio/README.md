# 🔧 Route patients to the best nearby hospital using Google Maps, GPT-4.1 and Twilio

> ⚡ **47 views** · 🔧 [Miscellaneous](../)

## Description

## Quick overview
This workflow accepts emergency location requests (or runs on a 5-minute schedule), finds and ranks nearby hospitals/clinics using Google Places, capacity data, and Google Distance Matrix, generates a routing message with OpenAI, sends the recommendation via Twilio SMS, logs the event to Google Sheets, and returns a JSON response.

## How it works
1. Receives an emergency request via a webhook POST (or runs every 5 minutes on a schedule) and normalizes latitude, longitude, severity, phone number, and a request ID.
2. Validates the GPS coordinates, maps severity to a numeric score, and sets a search radius, returning an error response if the location is invalid.
3. Queries the Google Places API for nearby hospitals and clinics, then merges and deduplicates the results into a single facility list.
4. Looks up each facility’s ED capacity metrics from a capacity API and calculates real-time driving time to each facility with the Google Distance Matrix API.
5. Scores and ranks facilities using a severity-adjusted composite score (travel time, available beds, wait time, and ED diversion penalties) and selects the best match plus two alternatives.
6. Uses OpenAI to generate a calm routing message, formats an SMS with a Google Maps link, sends it via Twilio, logs the routing event to Google Sheets, and returns the recommendation as JSON to the caller.

## Setup
1. Copy the webhook URL from n8n and configure your client/app to POST latitude, longitude, severity, and phone to the workflow.
2. Provide a Google Maps API key (Places API and Distance Matrix API enabled) and replace `YOUR_GOOGLE_MAPS_API_KEY` in the Google Places and Distance Matrix request URLs.
3. Configure the capacity lookup endpoint used in the “facility-capacity” HTTP request (or replace it with your own API) so it returns `ed_status`, `available_beds`, and `wait_time_minutes`.
4. Add Twilio HTTP Basic Auth credentials (Account SID and Auth Token) and replace `YOUR_TWILIO_ACCOUNT_SID` and `YOUR_TWILIO_NUMBER` in the SMS request.
5. Add an OpenAI API credential and select the model you want to use for generating the routing message.
6. Add Google Sheets OAuth2 credentials and replace `YOUR_SHEET_ID`, and ensure the `EmergencyLog` sheet tab exists with the expected columns for the appended row.

## 🔗 Nodes Used

HTTP Request, Webhook, Schedule Trigger, Filter, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
