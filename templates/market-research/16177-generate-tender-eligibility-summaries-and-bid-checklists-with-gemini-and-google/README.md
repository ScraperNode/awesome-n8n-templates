# 📊 Generate tender eligibility summaries and bid checklists with Gemini and Google Sheets

> ⚡ **128 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This scheduled workflow ingests tender records, checks Google Sheets and Supabase for duplicates, uses Google Gemini to generate an eligibility summary, match score, and bid checklist, then stores the tender and checklist data and alerts the team via Slack and Gmail.

## How it works
1. Runs on a schedule and loads a tender dataset into a normalized list of tender records.
2. Enriches each tender with a duplicate key and default status fields, then looks up existing records in Google Sheets and Supabase.
3. Consolidates the lookup results and continues only when the tender does not already exist in either storage system.
4. Sends the tender details to Google Gemini to generate a JSON response with eligibility requirements, a bid-prep summary, a match score, and checklist tasks.
5. Stores the combined tender source data and AI analysis in a Google Sheets “Tender Master” sheet and a Supabase `tenders` table.
6. Expands the AI checklist items into individual tasks and saves them to a Google Sheets “Bid Checklist” sheet and a Supabase `tender_checklists` table.
7. Composes a formatted tender alert and sends it to a Slack channel and to a Gmail recipient.

## Setup
1. Connect credentials for Google Sheets, Supabase, Google Gemini (PaLM API), Slack, and Gmail in your [n8n account](https://n8n.partnerlinks.io/om1efg2qgvwi).
2. Create (or update) the Google Sheets spreadsheet with “Tender Master” and “Bid Checklist” sheets and ensure the columns used in the workflow exist (including `duplicate_key`).
3. Create Supabase tables `tenders` and `tender_checklists` with matching fields (including `duplicate_key` in `tenders`) and update the table names if yours differ.
4. Update the Google Sheets document ID/sheet references, Supabase project settings, Slack channel, and the Gmail “sendTo” address to match your environment.
5. Replace the dummy tender dataset step with your real tender source (API, scraping, or database) while keeping the same output field structure.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Supabase, Schedule Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
