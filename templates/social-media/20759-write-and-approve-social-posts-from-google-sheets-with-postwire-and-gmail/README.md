# 📱 Write and approve social posts from Google Sheets with PostWire and Gmail

> ⚡ **0 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick Overview
This workflow runs every weekday and pulls the next “ready” topic from Google Sheets, uses PostWire to generate draft posts for LinkedIn, Facebook, and Bluesky, then emails the drafts via Gmail for approval before publishing the approved text and writing posting results back to the sheet.

## How it works
1. Runs every weekday at 9:00 and reads Google Sheets rows where the status is set to “ready.”
2. Takes the first available topic, then updates the same row in Google Sheets to mark it as “drafting” to prevent duplicate drafting.
3. Uses PostWire to generate platform-specific drafts (LinkedIn, Facebook, and Bluesky) using the topic, optional notes, and your configured brand voice.
4. Sends the drafts to you in Gmail and waits for an approve-or-skip response.
5. If approved, publishes the drafts to the selected networks with PostWire and aggregates the per-network publish results.
6. Updates the Google Sheets row with post links and a “posted” status if everything succeeds, or writes error details and emails you fix instructions if one or more networks fail, while a skip marks the row as “skipped.”

## Setup
1. Install and configure PostWire (postwire.io), connect your social accounts, and add a PostWire API credential in n8n.
2. Add Google Sheets OAuth credentials, select your spreadsheet and sheet in each Google Sheets step, and ensure the sheet includes columns like topic, notes, status, posted_at, links, note, and row_number.
3. Add Gmail credentials and set the approval email recipient address and your writing voice text in the workflow’s configuration values.
4. Queue topics by setting status to “ready,” and optionally adjust the schedule time and the target PostWire platforms to match your posting plan.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
