# ⚒️ Schedule golf course irrigation with Open-Meteo, GPT-4o-mini, and Telegram

> ⚡ **2 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow receives a daily batch of golf course zone sensor readings, pulls a forecast from Open-Meteo, calculates per-zone irrigation runtimes, checks pesticide-label REI and water-hazard buffer rules with OpenAI, then posts the final schedule to an irrigation controller API and alerts staff via Telegram.

## How it works
1. Receives a webhook POST containing course coordinates and an array of zone readings.
2. Fetches the hourly weather forecast (including ET0 and precipitation probability) for the course location from the Open-Meteo API.
3. Splits the incoming payload into one item per zone and calculates each zone’s soil-moisture deficit, ET-adjusted water need, and whether irrigation should be skipped due to high rain probability.
4. For zones with a pesticide application within the last 5 days, uses OpenAI (GPT-4o-mini) to extract REI hours and required water-buffer distance from provided label text and determines whether the zone is still restricted.
5. Sets irrigation minutes to zero for restricted zones, otherwise computes irrigation runtime minutes (or zeroes it when the rain forecast threshold is met).
6. Aggregates all zones back into a single schedule, prioritizes zones by type, and builds a controller-ready payload including total runtime and compliance exceptions.
7. Sends the schedule to the irrigation controller API and, if any zones were skipped, posts a Telegram message listing the affected zones and reasons.

## Setup
1. Create an OpenAI credential and ensure the Information Extractor uses the GPT-4o-mini chat model.
2. Configure HTTP Header Auth credentials for the irrigation controller API and replace the controller base URL with your real endpoint.
3. Add Telegram bot credentials, set the GROUNDS_CREW_TELEGRAM_CHAT_ID, and ensure the bot is added to the target group/chat.
4. Copy the production webhook URL for the webhook trigger and configure your sensor gateway to POST zone batches to it.
5. Verify the incoming payload includes required fields (course_lat, course_lon, zones[].soil_moisture_pct, zone_type, days_since_pesticide_app, pesticide_applied_at, pesticide_product, label_text, distance_to_water_ft) and tune target moisture/crop coefficients and label-default behavior to match your agronomy and compliance rules.

## Requirements
- OpenAI API Key: Connect your OpenAI account to the GPT-4o-mini for Label Extraction node.
- Telegram Bot Credentials: Add your Telegram bot token to the Alert Grounds Crew – Restricted Zones node.
- Irrigation Controller Auth: Provide your controller's API URL and Header Auth credentials in the Push Schedule to Irrigation Controller node.
- Environment Variable: Set GROUNDS_CREW_TELEGRAM_CHAT_ID to your target Telegram group or channel ID.
- Incoming Webhook Source: Set up your field sensors or data gateway to send POST payloads to the /golf-zone-sensor-batch endpoint.

## Customization
- Turf Moisture Targets: Adjust target moisture percentages (default: greens 28%, fairways 22%, roughs 16%) in the Compute Soil Moisture Deficit node for your grass species.
- Product Label Source: Connect a database or inventory sheet to the Extract REI & Buffer Requirements node instead of sample text.
- Zone Run Priority: Modify run order and zone hierarchies (e.g., greens before fairways) inside the Build Irrigation Controller Payload node.
- Local Weather Source: Swap the free Open-Meteo API in the Fetch Today's Weather Forecast node for an on-site physical weather station.
- Notification Platform: Replace Telegram with Slack, Microsoft Teams, WhatsApp, or SMS in the Alert Grounds Crew – Restricted Zones node.

## Additional info
Built-in Retry Logic: External API nodes include 3 automatic retries with a 2-second delay to handle temporary network dropouts.

Token Cost Efficiency: The AI label extraction step only triggers for zones treated within the past 5 days.

Expected Input Format: Expects a batch JSON object containing course coordinates and zone arrays: { "course_lat": <number>, "course_lon": <number>, "zones": [...] }.

Platform Compatibility: Built and validated for n8n version 1.6x and newer.

## 🔗 Nodes Used

HTTP Request, Webhook, Telegram, OpenAI Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
