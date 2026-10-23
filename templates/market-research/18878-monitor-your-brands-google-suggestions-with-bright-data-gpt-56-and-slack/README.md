# 📊 Monitor your brand’s Google suggestions with Bright Data, GPT-5.6, and Slack

> ⚡ **14 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs daily to monitor Google Autocomplete, People Also Ask, and related searches for your brand via Bright Data, classifies new suggestions with keyword rules and GPT-5.6, stores history in an n8n Data Table, and routes alerts to Slack and comparison topics to Google Sheets.

## How it works
1. Runs every morning on a schedule.
2. Builds a set of brand + intent probes, then fetches Google Autocomplete suggestions and a Google Search results JSON (People Also Ask and related searches) via Bright Data.
3. Normalizes and deduplicates the returned suggestions, keeping only those that contain your brand.
4. Loads previously tracked suggestions from the `brand_suggestions` n8n Data Table and identifies which suggestions are new since the last run.
5. Classifies new suggestions using keyword rules first, then sends only the unclear ones to OpenAI (GPT-5.6) to label them as damaging, competitive, or neutral.
6. Upserts all suggestions back into the `brand_suggestions` table with first/last seen dates, then routes only new items by verdict to post a digest to Slack (damaging), append comparison topics to Google Sheets (competitive), or record and take no further action.

## Setup
1. Create a Bright Data Header Auth credential and set up a SERP zone, then enter the zone name in the workflow Settings.
2. Add an OpenAI credential (for the GPT-5.6 model) and a Slack credential, and set the target Slack channel in Settings.
3. Create an n8n Data Table named `brand_suggestions` with columns `suggestion_key`, `suggestion`, `source`, `verdict`, `first_seen`, and `last_seen`.
4. Connect a Google Sheets credential, create a spreadsheet with a `Comparisons` tab, and paste the spreadsheet URL into the Settings `backlog_sheet` field.
5. Update the Settings values for `brand`, `brand_context`, `seeds`, and `region` to match the brand and market you want to monitor.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, Filter, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
