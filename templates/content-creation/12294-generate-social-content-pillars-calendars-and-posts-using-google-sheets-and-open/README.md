# 🎬 Generate social content pillars, calendars and posts using Google Sheets and OpenAI

> ⚡ **271 views** · 🎬 [Content Creation & Video](../)

## Description

## How it works
This workflow turns a single planning row in Google Sheets into a fully structured content engine. It generates weighted content pillars, builds a rule-based posting calendar, and then creates publish-ready social posts using AI. The workflow strictly controls format routing, CTA rules, and execution order. All outputs are written back to Google Sheets for easy review and execution.

## Step-by-step
- **Step 1: Input capture & pillar generation**
  - **Google Sheets Trigger** – Detects new or updated planning rows.
  - **Get row(s) in sheet** – Fetches brand, platform, scheduling, and promotion inputs.
  - **Message a model** – Calculates calendar metrics and generates platform-specific content pillars.
  - **Code in JavaScript** – Validates AI output and enforces 100% weight distribution.
  - **Append row in sheet** – Stores finalized content pillars in the pillars sheet.

- **Step 2: Calendar generation & routing**
  - **Message a model7** – Generates a full day-by-day content calendar from the pillars.
  - **Code in JavaScript7** – Normalizes calendar data into a sheet-compatible structure.
  - **Append row in sheet6** – Saves calendar entries with dates, formats, CTAs, and status.
  - **Switch By Format** – Routes items based on Video vs Non-Video formats.

- **Step 3: Post creation & final storage**
  - **Loop Over Items** – Processes each calendar entry one at a time.
  - **Message a model6** – Creates complete hooks, captions, CTAs, and hashtags.
  - **Code in JavaScript6** – Formats AI output for final storage.
  - **Append row in sheet7** – Stores publish-ready posts in the final sheet.
  - **Wait** – Controls pacing to avoid API rate limits.

## Why use this?
- Eliminates manual content planning and ideation.
- Enforces strategic content mix and CTA discipline.
- Produces platform-ready posts automatically.
- Keeps all planning, calendars, and content in Google Sheets.
- Scales content operations without extra overhead.

## 🔗 Nodes Used

Google Sheets, Google Sheets Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
