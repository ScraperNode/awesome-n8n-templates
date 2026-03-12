# 📊 Analyze customer survey feedback with AI, Google Sheets & Slack reports

> ⚡ **141 views** · 📊 [Market Research & Insights](../)

## Description

Here’s a clean, English-only **template description** you can paste into the n8n “Description” field.

---

## Overview

This workflow analyzes customer survey responses, groups them by sentiment (positive / neutral / negative), generates themes and insights with an AI agent, and delivers a consolidated report to your destinations (Google Sheets, Slack). It runs on a daily schedule and uses batch-based AI analysis for accuracy.

**Flow:** Schedule → Fetch from Sheets → Group & batch (Code) → AI analysis → Aggregate → Save/Notify (Sheets, Slack)

## What You’ll Need

* A survey data source (Google Sheets recommended)
* AI model credentials (e.g., OpenAI or OpenRouter)
* Optional destinations: Google Sheets (summary sheet), Slack channel

## Setup

1. **Data source (Google Sheets)**

   * In **Get Survey Responses**, replace `YOUR_SHEET_ID` and `YOUR_SHEET_NAME` with your sheet details.
   * Ensure the sheet includes columns like: `満足度 (Rating)`, `自由記述コメント (Comment)`, `回答日時 (Timestamp)`.
2. **AI model**

   * Add credentials to your preferred LLM node (OpenAI/OpenRouter).
   * Keep the prompt’s **JSON-only** requirement so the structured parser can consume it reliably.
3. **Destinations**

   * **Save to Sheet**: set your output `documentId` / `sheetName`.
   * **Slack**: set the target `channelId` on the Slack node.

## How It Works

1. **Daily Schedule Trigger** — starts the workflow at your chosen time.
2. **Get Survey Responses (Sheets)** — reads survey data.
3. **Group & Prepare Data (Code)** — classifies by rating (`&gt;=4: positive`, `=3: neutral`, `&lt;3: negative`) and creates batches (max 50 per batch).
4. **Loop Over Batches** — feeds each sentiment batch to the AI separately for cleaner signals.
5. **Analyze Survey Batch (AI Agent)** — returns structured JSON: themes, insights, recommendations.
6. **Add Metadata (Code)** — attaches original sentiment and item counts to each AI result.
7. **Aggregate Results (Code)** — merges all batches; outputs Top Themes, Key Insights, Priority Recommendations, and an Executive Summary.
8. **Save to Sheet / Slack** — appends the summary to a sheet and posts highlights to Slack.

## Data Assumptions (Columns)

Your source should include at least:

* `満足度 (Rating)` — integer 1–5
* `自由記述コメント (Comment)` — string
* `回答日時 (Timestamp)` — ISO string or date

## Outputs

* **Consolidated summary** containing:

  * Top themes (with example quotes)
  * Key insights
  * Priority recommendations
  * Executive summary
* **Destinations**: Google Sheets (one row per run) and Slack (high-level highlights)

## Customize

* Adjust sentiment thresholds (e.g., require `&gt;=5` for positive) or batch size (default 50) in the Code node.
* Tailor the AI prompt or the output JSON schema to your domain.
* Add more outputs (CSV export, database insert, additional channels) in parallel after the Aggregate step.

## Before You Run (Checklist)

* [ ] Add credentials for Sheets / AI / Slack in **Credentials**
* [ ] Update `documentId`, `sheetName`, and Slack `channelId`
* [ ] Confirm your column names match the Code node references
* [ ] Verify schedule time and timezone (e.g., Asia/Tokyo)

## Troubleshooting

* **Parser errors on AI output**: ensure the model response is **JSON-only**; reduce temperature or simplify schema if needed.
* **Only some batches run**: check batch size in Loop and ensure each sentiment bucket actually contains responses.
* **No output to Sheets/Slack**: verify credentials, IDs, and required fields; confirm permissions.

## Security & Template Notes

* Do **not** include credentials in the template file. Users add their own after import.
* Use Sticky Notes to document Overview, Setup, Processing Logic, and Output choices. This template already includes guideline-friendly notes.

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger, AI Agent, Structured Output Parser, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
