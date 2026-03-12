# 📊 Automated Amazon price monitoring & alerts with Decodo, Google Sheets & Telegram

> ⚡ **177 views** · 📊 [Market Research & Insights](../)

## Description

[Sign up for Decodo — get better pricing here](https://visit.decodo.com/MA90zY)
## Who’s it for
This workflow is designed for e-commerce operators, pricing analysts, retail founders, and procurement teams who need reliable, automated price intelligence without manual tracking. If you manage competitive pricing across Amazon or multiple product URLs stored in Google Sheets, this workflow gives you consistent monitoring and automated alerts.

## What it does
This automation checks product prices on a schedule, scrapes real-time Amazon data using Decodo, compares it with your baseline price, and routes alerts depending on whether the price increases, stays normal, or drops.
High increases trigger Telegram alerts and automatically create a Google Calendar meeting. Price drops send a rich HTML email to stakeholders. All items are processed in controlled batches to avoid rate limits.

## How it works

Reads product URLs + baseline prices from Google Sheets

Uses Decodo to extract current Amazon price, title, and product data

Calculates percentage difference via Code node

Routes items through the Switch node (High / Normal / Low)

Sends alerts or emails accordingly

Loops continuously until all rows are processed

## Requirements


- Google Sheets, Gmail, Google Calendar, and - Telegram credentials
- Active Decodo API credentials
- A sheet containing URL + baseline columns


## How to customize
You can adjust alert thresholds, add more channels (Slack, WhatsApp, Notion), change batch size, modify email templates, or extend the Google Sheet with additional product metadata. The routing logic is easily expandable for more pricing scenarios.

## 🔗 Nodes Used

Google Sheets, Telegram, Google Calendar, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
