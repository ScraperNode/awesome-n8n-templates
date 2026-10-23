# 🎫 Send earthquake safety check alerts from USGS to Slack using Google Sheets

> ⚡ **0 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow runs every 5 minutes, reads your site locations from Google Sheets, checks the USGS GeoJSON earthquake feed, and posts a Slack safety-check message when a qualifying quake occurs near any site, while recording sent alerts back to Google Sheets to avoid duplicates.

## How it works
1. Runs every 5 minutes (or manually) to start an earthquake check cycle.
2. Reads the list of monitored sites from the Google Sheets “Sites” tab, including latitude/longitude, contact, and optional per-site thresholds.
3. Fetches recent earthquakes from the USGS real-time GeoJSON feed based on the configured feed type.
4. Reads previously sent alerts from the Google Sheets “Alerts” tab to prevent re-notifying the same earthquake/site pair.
5. Calculates great-circle distance from each earthquake to each site, filters by minimum magnitude and radius, and generates a formatted Slack message (and stops with an error if site coordinates are invalid).
6. Posts one Slack message per matching earthquake listing the nearby sites and contacts to notify.
7. Writes/updates one row per earthquake/site alert in the Google Sheets “Alerts” tab so the workflow does not send the same pair twice.

## Setup
1. Create or choose a Google Sheet and add Google Sheets OAuth credentials in n8n.
2. Paste your spreadsheet ID in the “Spreadsheet ID” node and run the “Run once: set up the sheet” path to create the “Sites” and “Alerts” tabs with headers.
3. In the main path’s Google Sheets nodes, select the same spreadsheet document ID for both “Read Sites tab” and “Read Alerts tab” (and for “Add to Alerts tab” if needed).
4. Fill the “Sites” tab with columns site, lat, lon, contact, and optionally radius_km and min_magnitude (use a Slack member ID in contact to @mention them).
5. Add Slack credentials, choose the target channel, and adjust the defaults (feed, min_magnitude, radius_km, language, timezone) in the Config step as needed.

## Requirements
- Google account (Google Sheets OAuth2) and a blank Google Sheet
- Slack app that is a member of the channel you choose
- No API key for the earthquake data: the free USGS real-time GeoJSON feed
- The latitude and longitude of each site (right-click the place in Google Maps to copy them)
- n8n must be running: the workflow checks the feed every 5 minutes
- No AI is used: no data is sent to an AI provider

## Customization
- Config: the USGS feed (default 4.5_hour; also 2.5_hour, significant_hour, 4.5_day), the default magnitude (5.0), the default radius (100 km), language (en or ja), time zone
- Per-site limits in the Sites tab: radius_km and min_magnitude (a warehouse may need a lower magnitude than an office)
- A Slack member ID in the contact column becomes a mention
- Add a second message to email or LINE for people who are not in Slack
- Change the schedule in "Every 5 minutes"

## Additional info
What this workflow does and does not tell you:
- It judges by magnitude and straight-line distance from the epicentre, not by the shaking at your site (such as the Japanese seismic intensity, shindo). A deep earthquake can be felt little; a shallow one nearby can be strong. Treat the message as a trigger to ask "is everyone safe?", not as a damage report.
- USGS values are preliminary and can change. A later revision of the same event does not send a second message.
- USGS coverage of small earthquakes outside the United States is limited; M4.5 and above is the default for that reason.
- A message is not an evacuation instruction: follow official warnings. If USGS sets a tsunami flag, the message says so and points to official local warnings.
- A site with an invalid latitude or longitude stops the run with a message naming the row, instead of silently dropping that site from the watch.
- The pair (earthquake, site) is recorded after the Slack post, so a failed post is retried on the next run and a sent one is never repeated.

What I tested: the live USGS feed with two made-up sites (one near Kushiro, Japan, one in Tokyo), using the past week's feed and a limit of M4.5. The M4.5 "53 km S of Kushiro" event matched the Kushiro site at about 54 km, the Tokyo site did not match, the message reached Slack, and the second run sent nothing. Plus 14 unit checks of the code (distances, invalid coordinates, per-site limits, already-sent pairs, deleted and non-earthquake events, mentions, time zone, both languages). I did not see a real alert for a large nearby earthquake: test with your own sites first.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
