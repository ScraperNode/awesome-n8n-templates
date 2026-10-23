# 🎫 Handle NPS survey replies and routing with OpenAI, Gmail, and Google Sheets

> ⚡ **7 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick Overview
This workflow runs every 6 hours to read new NPS responses from Google Sheets, uses OpenAI to draft a personalized reply, sends it via Gmail, routes respondents by NPS segment, logs promoter quotes back to Google Sheets, alerts support on detractors, and marks each row as processed.

## How it works
1. Runs on a schedule every 6 hours and reads NPS response rows from a Google Sheets document.
2. Filters the sheet to keep only rows where Status equals “new” to avoid reprocessing.
3. Validates required fields, parses the 0–10 NPS score, and classifies each response as Promoter, Passive, or Detractor.
4. Calls the OpenAI Chat Completions API to generate a warm, personalized email body based on the score segment and the customer’s comment.
5. Sends the generated reply to the customer via Gmail and then routes the workflow by segment.
6. For promoters, appends the customer comment as a quote to a “promoter-quotes” tab in Google Sheets and marks the original row as Processed; for passives, it marks the row as Processed.
7. For detractors, sends an alert email to your support team via Gmail and then updates the original Google Sheets row status to Processed.

## Setup
1. Create credentials for Google Sheets, Gmail, and OpenAI (OpenAI API key) in n8n.
2. Replace YOUR_NPS_SHEET_ID with your Google Sheets document ID in all Google Sheets steps used to read, append, and update rows.
3. Ensure your spreadsheet has a “nps-responses” tab with a Status column (using values “new” and “Processed”) and a “promoter-quotes” tab with the expected columns.
4. Replace YOUR_SUPPORT_TEAM_EMAIL with your team inbox address in the detractor alert email step.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
