# 🔧 Qualify Lusha leads and send AI emails with Google Sheets and Claude

> ⚡ **16 views** · 🔧 [Miscellaneous](../)

## Description

## Quick overview
This workflow collects ICP criteria via an n8n form, searches and enriches matching contacts in Lusha, scores each lead with Claude (via OpenRouter), writes results to Google Sheets, then drafts (or sends) personalized Gmail outreach and follow-ups on daily schedules.

## How it works
1. Receives ICP criteria from an n8n form submission (industry, seniority, location, company size, minimum score, and an optional ICP description).
2. Converts the form inputs into Lusha filter IDs and builds a Lusha contact search request payload.
3. Searches Lusha for matching contacts and, if results exist, enriches the returned contact IDs to fetch full contact and company details.
4. Uses Claude 3.5 Sonnet via OpenRouter to score each enriched lead (1–10), label it Qualified/Unqualified based on the minimum score, and return a short reason and recommended action.
5. Appends or updates the lead details and AI scoring fields in Google Sheets, or shows a “No Leads Found” completion page when the search returns zero matches.
6. Runs daily at 9 AM to read the sheet, select qualified leads that haven’t been emailed, generate a personalized cold email with Claude, create a Gmail draft (or send), and update the sheet with outreach tracking fields.
7. Runs daily at 10 AM to find leads due for follow-up, generate a follow-up email with Claude, create a Gmail draft, and update follow-up dates/counts in Google Sheets with pacing limits.

## Setup
1. Create an HTTP Header Auth credential for Lusha with header name `api_key` and your Lusha API key, and apply it to the Lusha contact search/enrich HTTP requests.
2. Connect Google Sheets OAuth credentials and update the spreadsheet/document ID and sheet/tab selection to point to your Leads sheet.
3. Ensure your Google Sheet includes the required outreach and follow-up tracking columns used by the workflow (for example: Email Sent, Email Sent Date, Email Subject, Email Body, Outreach Status, Follow-up Date, Follow-up Count, and last follow-up fields).
4. Add an OpenRouter credential (for Claude 3.5 Sonnet) and adjust the “YOUR VALUE PROPOSITION” text in the email and follow-up prompts to match your offering.
5. Connect Gmail OAuth credentials and choose whether to keep using Gmail drafts (default) or switch to the Gmail send action for production outreach.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
