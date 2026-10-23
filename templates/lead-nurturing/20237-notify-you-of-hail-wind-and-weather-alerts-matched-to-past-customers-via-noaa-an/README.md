# 💬 Notify you of hail, wind, and weather alerts matched to past customers via NOAA and Twilio

> ⚡ **2 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow runs every 30 minutes to check NOAA Storm Prediction Center hail/wind reports and National Weather Service alerts, matches them to your past customers by location, and texts you a consolidated summary via Twilio, with an optional handoff to a separate outreach webhook.

## How it works
1. Runs every 30 minutes on a schedule.
2. Loads your business settings and customer list, validates phone numbers/time zone, and determines which customer addresses still need to be geocoded.
3. For new addresses, looks up latitude/longitude via the US Census Geocoder and retrieves the corresponding National Weather Service forecast zone and county from api.weather.gov.
4. Builds a set of checks by downloading NOAA Storm Prediction Center hail and wind report CSVs (today and yesterday, or a replay date) and active National Weather Service alerts for the states your customers are in.
5. Matches reports and alerts to located customers within your configured radius and thresholds, suppresses repeat notifications using workflow static data, and formats a single summary message (holding messages during quiet hours and retrying previously failed sends).
6. Texts you what it found: names, phone numbers, distance, size and local time. If outreach_url is set, each group goes to the companion outreach workflow instead, which asks for your approval before any customer is texted. If that handoff fails, the list is texted to you on the next check.

## Setup
1. Add a Twilio credential and select it on Find your Twilio account and Text you. The Twilio number must be able to text your cell (A2P 10DLC or a verified toll-free number in the US).
2. Update “Your settings” with your Twilio number, your cell number, your time zone, and a contact email to include in the National Weather Service User-Agent header.
3. Add your customers (name, address, and optional phone/email/ok_to_text plus optional lat/lon) in “Your customers” or replace it with a Google Sheets/database node that outputs the same fields.
4. Adjust monitoring options such as radius, hail/wind thresholds, warning types, and quiet hours to fit your use case. Then publish the workflow. It remembers located addresses and who it has already named in workflow static data, which n8n keeps only for published workflows.
5. (Optional) Import and configure the companion outreach workflow, then set outreach_url and outreach_key to its webhook URL and shared key to enable handoff for approval-based customer texting.

## Requirements
- A Twilio number that can text your own cell, and a Twilio credential in n8n
- US customer addresses. The Census geocoder and the National Weather Service cover the United States only
- No accounts or keys for the weather data or address lookups, no database and no AI model

## Customization
- radius_miles (default 3) for how close a storm report must be to a customer
- hail_min_inches (default 1), wind_min_mph (default 58) and wind_damage_reports for reports with no speed
- warnings: the Weather Service warning names to watch, for example only Hard Freeze Warning for a plumber
- quiet_start and quiet_end, and max_names per group
- Swap Your customers for a Google Sheets or database node that returns name, phone, email, address, ok_to_text, and optionally lat and lon
- hail_message, wind_message and warning_message for the customer text handed to the outreach workflow
- replay_spc_day to test against a past storm day, for example 250519

## Additional info
Tested live on n8n Cloud against the real NOAA, Census and Weather Service feeds with a real Twilio number, plus 49 automated checks. Storm reports are points where hail or wind was reported, not radar swaths, so treat a match as a reason to check, not proof of damage. Test notes and the texts it sends: https://github.com/mikematthewsai/n8n-weather-watch-past-customers

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
