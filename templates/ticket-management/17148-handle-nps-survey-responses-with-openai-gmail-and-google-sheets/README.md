# 🎫 Handle NPS survey responses with OpenAI, Gmail, and Google Sheets

> ⚡ **25 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick Overview
This workflow runs every 6 hours to read new NPS survey responses from Google Sheets, generates a personalized reply with OpenAI, and sends the email via Gmail. It then routes promoters, passives, and detractors for follow-up actions and marks each response as processed.

## How it works
1. Runs on a schedule every 6 hours.
2. Reads NPS responses from a Google Sheets tab and keeps only rows where Status equals "new".
3. Validates required fields, parses the 0–10 NPS score, and classifies each response as Promoter, Passive, or Detractor.
4. Sends the response context to OpenAI (Chat Completions) to generate a concise, personalized email body and builds a segment-specific subject line.
5. Sends the personalized reply to the respondent using Gmail.
6. For promoters, appends the comment as a quote to a separate Google Sheets testimonials tab and updates the original row’s Status to "Processed".
7. For passives, updates the original Google Sheets row’s Status to "Processed", and for detractors, emails an alert to a support inbox via Gmail and then updates Status to "Processed".

## Setup
1. Add credentials for Google Sheets, Gmail, and OpenAI in n8n.
2. Replace YOUR_NPS_SHEET_ID with your Google Sheets document ID in all Google Sheets steps.
3. Ensure your spreadsheet has an "nps-responses" tab with a Status column (values "new" and "Processed") and a "promoter-quotes" tab with the expected columns.
4. Replace YOUR_SUPPORT_TEAM_EMAIL with the inbox that should receive detractor alerts.
5. Review the OpenAI prompt and the Gmail sender name/formatting to match your brand voice before activating the workflow.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
