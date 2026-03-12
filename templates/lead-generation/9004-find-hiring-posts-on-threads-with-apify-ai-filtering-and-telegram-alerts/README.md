# 🎣 Find hiring posts on Threads with Apify, AI filtering, and Telegram alerts

> ⚡ **138 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

Automatically scrape Meta Threads for posts hiring specific roles (e.g. automation engineers, video editors, graphic designers), filter true hiring intent, deduplicate, and send alerts.

We are taking automation roles as an example for now.

## What it does

This workflow continuously scans Threads for fresh posts mentioning the roles you care about. It uses AI to filter out self-promotion and service ads, keeping only posts where the author is hiring. Qualified posts are saved into Google Sheets for tracking and sent to Telegram for instant alerts.

It’s ideal for freelancers, agencies, and job seekers who want a steady radar of opportunities.

## How it works (Step by Step)

1. **Schedule trigger** – Runs on a set interval (e.g. every 12 hours).

2. **Scrape Threads posts** – Fetches recent posts from multiple keywords (e.g., “n8n expert”, “hire video editor”, “graphic designer”, etc.) via Apify.

3. **Merge results** – Combines posts into a single stream.

4. **Normalize fields** – Maps raw data into clean fields: text, author, URL, timestamp, profile link.

5. **AI filter** – Uses an AI Agent to:

- Accept only posts where someone is hiring (rejects “hire me” style self-promo).
- Apply simple geography rules (e.g., allow US, UK, UAE, CA; pass unknowns).
- Exclude roles outside your scope.
- Deduplication – Checks Google Sheets to skip posts already seen.

6. **Save to Google Sheets** – Writes qualified posts with full details.

7. **Telegram alerts** – Sends you the matched post instantly so you can act.

## **Who it’s for**

**Freelancers:** Get first dibs on gigs before others spot them.

**Agencies:** Build a client pipeline by tracking hiring signals.

**Job seekers:** Spot hidden opportunities in your target field.

## Customization Ideas

Swap keywords to monitor roles you care about (e.g., “UI/UX designer”, “motion graphics editor”, “copywriter”).

Add Slack or Discord notifications instead of Telegram.

Expand geo rules to match your region.

Use Sheets as a CRM—add columns for status, outreach date, etc

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
