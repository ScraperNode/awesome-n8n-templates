# 🎣 Find weak local Google Business profiles with Bright Data, GPT-5.6, Sheets and Slack

> ⚡ **126 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow runs weekly to discover local businesses on Google Maps via Bright Data, score measurable Google Business Profile gaps against nearby peers, extract complaint themes from low-rated reviews with OpenAI (GPT-5.6), then logs prospects to Google Sheets and posts a ranked digest to Slack.

## How it works
1. Runs weekly on a schedule and reads a city, categories, thresholds, and destination settings.
2. Triggers Bright Data Google Maps discovery searches (one per category) and polls the snapshot progress until results are ready.
3. Downloads the discovered business profiles and scores each one based on measurable profile gaps benchmarked against the “people also search” peer set.
4. Reads previously logged prospects from Google Sheets and filters out businesses contacted within the last 90 days.
5. Uses OpenAI (GPT-5.6) to extract complaint themes from reviews rated three stars and below for the remaining prospects.
6. Builds a ranked report, appends one row per prospect to Google Sheets, and posts a formatted digest to a Slack channel.

## Setup
1. Add a Bright Data API key as an HTTP Header Auth credential (Authorization: Bearer <key>) for the Bright Data dataset requests.
2. Add an OpenAI credential and ensure the GPT-5.6 model selected in the workflow is available to your account.
3. Connect Google Sheets credentials and create a spreadsheet with a sheet named “Prospects”, then paste its URL into the workflow configuration.
4. Connect Slack credentials and set the target channel name in the workflow configuration.
5. Update the search configuration values (city, categories, per-category limit, scoring thresholds, and recontact window) to match your prospecting needs.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
