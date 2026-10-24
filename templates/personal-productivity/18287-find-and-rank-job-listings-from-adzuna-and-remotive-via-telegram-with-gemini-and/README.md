# ⚡ Find and rank job listings from Adzuna and Remotive via Telegram with Gemini and Sheets

> ⚡ **28 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/v4NwIVS0GfA

This workflow listens for Telegram messages with a job domain, uses Google Gemini to generate a search query, fetches matching roles from Adzuna and Remotive, ranks the best results with Gemini, replies in Telegram, and appends the top jobs to Google Sheets.

## How it works
1. Triggers when a Telegram message is received and extracts the chat ID and job domain text.
2. Validates that the domain is at least two characters long and sends a usage/help message in Telegram if it is not.
3. Uses Google Gemini to turn the domain into a structured search plan including a broad-but-relevant API search query and keywords.
4. Calls the Adzuna Jobs API and the Remotive API with the generated search query, then normalizes both responses into a single common job format.
5. Combines candidates from both sources, and if no jobs are found sends a “no matching jobs” reply in Telegram.
6. Uses Google Gemini to select and rank the top jobs, formats a readable report, and sends the ranked list back to the user in Telegram.
7. Splits the ranked jobs into individual items and appends them as rows in a Google Sheets spreadsheet for tracking.

## Setup
1. Connect Telegram Bot credentials for the Telegram trigger and message-sending steps.
2. Add Google Gemini (Google PaLM) API credentials for both Gemini model steps.
3. Configure Adzuna access by setting your Adzuna App ID in the workflow and adding the Adzuna App Key as HTTP Query Auth credentials used by the Adzuna request.
4. Connect Google Sheets credentials (Service Account or OAuth) and select the target spreadsheet and sheet tab where job rows are appended.
5. Review and adjust defaults such as Adzuna country, results per source, max days old, and the number of top jobs returned to Telegram.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
