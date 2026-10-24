# 📊 Log App Store reviews and build weekly scorecards with Apify and Google Sheets

> ⚡ **7 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow runs every Monday, pulls the latest Apple App Store reviews for a list of apps using Apify, and logs them to Google Sheets while also generating a per-app weekly rating scorecard (average, count, min/max, critical share, and versions seen) in a second sheet.

## How it works
1. Runs every Monday morning on a schedule.
2. Loads the list of App Store product IDs to track, along with the target country store and how many recent reviews to fetch per app.
3. Uses Apify (apple-app-store-reviews-api actor) to fetch the most recent reviews for each app.
4. Filters out any items that don’t contain a review ID and formats the remaining data into one clean row per review with a “critical” flag for 1–2 star ratings.
5. Appends the full review rows into a Google Sheets “history” tab to build an ongoing review log.
6. Aggregates the same review rows by app to calculate weekly metrics and appends one scorecard row per app into a Google Sheets “scorecard” tab.

## Setup
1. Create an Apify account and add your Apify API token as an Apify credential.
2. Add a Google Sheets credential, then select the target spreadsheet and set the sheet/tab names for both Google Sheets append steps (history and scorecard).
3. Update the app list (product IDs and labels), country code, and review limit in the “Set the apps to watch” step.
4. (Optional) Connect the Slack node to post the weekly scorecard and add a Slack credential and channel.
5. (Optional) Connect the provided filters to keep only critical reviews and/or restrict results to a specific app version.

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger, Filter, Summarize

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
