# ⚡ Log Strava zone 2 and 5K test runs to Google Sheets

> ⚡ **28 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This scheduled workflow pulls your latest running activities from Strava, classifies them as Zone 2 runs or 5K tests based on pace and distance, and writes the formatted results into specific cells in a Google Sheets training log while tracking processed activity IDs.

## How it works
1. Runs on a daily schedule.
2. Fetches recent activities from the Strava API for the authenticated athlete.
3. Processes each activity to calculate pace (min/km) and routes it into “Zone 2” or “Test Run” based on sport type, duration, pace, and distance rules.
4. Formats the selected activities into sheet-ready fields (date, pace string, moving time, and distance) and labels them as ZONA 2 or TEST 5KM.
5. Reads the target Google Sheets range to find the next available slots and checks an “IDs Registrados” list to avoid reprocessing activities.
6. Updates Google Sheets with the activity details in the appropriate cycle columns and appends new Strava activity IDs to the “IDs Registrados” cell.

## Setup
1. Connect your Strava OAuth2 credentials and ensure the athlete has permission to read activities.
2. Connect your Google Sheets OAuth2 credentials and update the spreadsheet URL/ID and sheet (tab) selection used for reading and updating.
3. Ensure your Google Sheet matches the expected layout, including columns like “Tirada 1–5”, “Test 5k/5km”, row_number mapping, and an “IDs Registrados” cell (stored on row 2) to track processed Strava IDs.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
