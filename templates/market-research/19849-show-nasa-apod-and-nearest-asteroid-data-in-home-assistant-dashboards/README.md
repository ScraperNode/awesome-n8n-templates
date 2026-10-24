# 📊 Show NASA APOD and nearest asteroid data in Home Assistant dashboards

> ⚡ **47 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs daily and pulls NASA’s Astronomy Picture of the Day plus the closest near‑Earth asteroid from NASA’s NEO feed, then upserts both datasets into Home Assistant as sensors for use in dashboards and automations.

## How it works
1. Runs every day at 6:00 AM (or on demand via manual trigger) and starts two parallel data pulls.
2. Requests NASA’s Astronomy Picture of the Day (APOD) from the NASA API with thumbnail support enabled.
3. Extracts the APOD title, date, media type, a best-available image/thumbnail URL, and trims the explanation to 280 characters.
4. Upserts a Home Assistant sensor state at `sensor.nasa_apod` with the APOD title and attributes (image URL, explanation, media type, and date).
5. Requests NASA’s Near-Earth Object feed for today through the next three days from the NASA API.
6. Flattens all returned asteroids, sorts them by miss distance, and selects the closest approach with distance, estimated diameter, velocity, and hazard flag.
7. Upserts a Home Assistant sensor state at `sensor.nasa_asteroid` with the asteroid name and attributes (date, distance, size, speed, hazard flag, and total count).

## Setup
1. Create a free NASA API key at https://api.nasa.gov and add it as an HTTP Query Auth credential (as `api_key`) used by both NASA HTTP requests.
2. Add Home Assistant credentials (instance URL and a long-lived access token) and select them in both Home Assistant upsert steps.
3. Ensure your Home Assistant instance allows creating/updating the entities `sensor.nasa_apod` and `sensor.nasa_asteroid` (or update the entity IDs to match your naming).
4. Run the workflow once and verify the sensor states/attributes in Home Assistant under Developer Tools → States.
5. Activate the workflow and adjust the schedule time or the 3-day asteroid lookahead window if needed.

## Requirements
- Home Assistant with API access and a long-lived access token
- A free NASA API key from api.nasa.gov
- n8n (cloud or self-hosted)

## Customization
- Change the trigger time in the Daily 6AM node
- Adjust the explanation length (280 characters) in Process APOD
- Extend the asteroid look-ahead window beyond 3 days in Fetch Asteroid Data
- Display the picture with a Picture Entity card using the image_url attribute
- Add a Home Assistant automation that notifies you when hazardous is true

## Additional info
Sensors created through the Home Assistant API are not stored permanently: they disappear after a Home Assistant restart until the workflow runs again. Click Test Run after a restart, or add a second schedule, if you want them back sooner.

## 🔗 Nodes Used

HTTP Request, Home Assistant, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
