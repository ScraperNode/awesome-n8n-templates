# 💬 Generate hotel guest upsell recommendations with OpenAI, Sheets and Slack

> ⚡ **76 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## 📘 Description
This workflow automates guest upsell discovery and recommendation for hotels by combining Google Sheets, OpenAI, and Slack. It is designed to help hospitality teams proactively identify the single best upsell opportunity for each guest—before arrival or during the stay—without manual analysis or guesswork.

The workflow runs on a fixed daily schedule and reads guest records from Google Sheets, which acts as the operational source of truth. Guests are automatically categorized based on stay status (upcoming arrivals vs. currently checked in). For each guest, relevant context such as room type, repeat status, spend level, preferences, and special occasions is prepared and passed to an AI engine. The AI deterministically recommends one high-confidence upsell (e.g., room upgrade, airport pickup, spa, dining, or experience), returns a structured JSON response, and explains the reasoning behind the recommendation.

The selected upsell type is written back to the spreadsheet for tracking, and a clear, actionable Slack notification is sent to the team so they can act immediately. Any workflow failure triggers a Slack alert, ensuring reliability and operational visibility.

## ⚙️ What This Workflow Does (Step-by-Step)

 ⏰ Daily Scheduled Trigger
 Runs automatically every day at a fixed time.
📊 Read Guest Data from Google Sheets
 Fetches all guest records from the central spreadsheet.
🔀 Split by Stay Status
 Routes guests into two paths: before arrival or during stay.
🎯 Prepare Guest Context
 Extracts guest attributes (room type, spend level, preferences, occasion, stay phase).
🤖 AI Upsell Recommendation
 Uses OpenAI to recommend one best upsell per guest and returns structured JSON.
🧹 Parse AI Response
 Cleans and validates AI output to ensure reliability.
💾 Update Guest Record
 Writes the selected upsell type back into Google Sheets.
💬 Notify Team in Slack
 Posts a formatted upsell notification with reasoning for immediate action.
🚨 Error Handling → Slack Alert
 Sends an instant alert if any step in the workflow fails.

## 🧩 Prerequisites
 • Google Sheets OAuth2 (read/write)
 • OpenAI API key (GPT-4o-mini)
 • Slack API credentials
 • Self-hosted n8n recommended

## 💡 Key Benefits
 ✔ Identifies high-value upsell opportunities automatically
 ✔ Context-aware AI recommendations (not generic offers)
 ✔ Clear before-arrival vs. during-stay logic
 ✔ Real-time team visibility via Slack
 ✔ Centralized tracking in Google Sheets
 ✔ Built-in error monitoring

## 👥 Perfect For
-  Hotels and resorts
-  Revenue and upsell teams
-  Front-desk and concierge teams
-  Hospitality operators focused on guest experience and ARPU growth

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
