# 🎣 Track Upwork jobs from Vollna RSS with Google Sheets logging and Slack alerts

> ⚡ **270 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Who’s it for

Freelancers and agencies who track new Upwork leads via Vollna RSS and want clean logging to Google Sheets with instant Slack alerts.

## What it does

Polls a Vollna RSS feed every few minutes, parses each job (title, budget, link, skills, categories), dedupes against your sheet, appends only new jobs, and notifies Slack with a compact alert.

## How it works
	1. Schedule Trigger fires on an interval.
	2. RSS Read pulls new items from Vollna.
	3. Filter (optional) skips non-ASCII titles.
	4. Code node normalizes fields (title/budget split, clean Upwork link, “Posted x mins ago”, etc.).
	5. Sheets Lookup + Compare prevents duplicates by job URL.
	6. Sheets Append writes new rows; Slack posts a job alert.

## Set up
	1. In ⚙️ Config, set: VOLLNA_RSS_URL, GOOGLE_SHEETS_DOC_ID, GOOGLE_SHEET_NAME, SLACK_CHANNEL_ID, EMAIL_TO (optional).
	2. Add OAuth credentials for Google Sheets, Slack, and Gmail (optional).
	3. Create sheet columns: TITLE, BUDGET, UPWORK JOB LINK, CATEGORIES, SKILLS, DATE, JOB DESCRIPTION, POSTED.
	4. (Optional) Adjust polling interval on the Schedule Trigger.

## Requirements
	• Vollna RSS feed URL (your tokenized link)
	• n8n (cloud or self-hosted) with Google Sheets + Slack creds

## Customize
	• Remove the ASCII filter for broader coverage.
	• Swap Gmail/Slack with your preferred notifier.
	• Add keyword filters before appending to Sheets.

## 🔗 Nodes Used

Google Sheets, RSS Read, Slack, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
