# 🎣 Qualify leads and send personalized outreach with OpenAI, Outlook and Sheets

> ⚡ **94 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow runs daily to read leads from Google Sheets, research company websites, score and qualify them with OpenAI, and draft or send personalized initial and follow-up emails via Gmail while writing statuses, scores, drafts, and send results back to Google Sheets.

## How it works
1. Runs every day on a schedule and loads configuration values (sheet, thresholds, limits, email copy, and dry-run mode).
2. Reads lead rows from Google Sheets, normalizes emails, suppresses opt-outs/duplicates, and routes each row to either initial outreach or follow-up eligibility checks.
3. For new leads, fetches the company website via HTTP, extracts usable text, and sends it to OpenAI to produce a grounded company analysis with a 0–100 fit score.
4. Updates the lead row in Google Sheets with the analysis, evidence quotes, score breakdown, and a QUALIFIED/UNQUALIFIED (or error) status.
5. For qualified new leads, asks OpenAI to draft a personalized first-contact email, validates it, and either saves an OUTREACH_PREVIEW (dry run) or reserves the row and sends the email through Gmail.
6. Records Gmail message/thread IDs, timestamps, and follow-up due date in Google Sheets after a successful initial send (or flags SEND_REVIEW on uncertain outcomes).
7. For contacted leads that are due, reads the original Gmail thread to detect replies, drafts a single follow-up with OpenAI when no reply is found, and either saves a FOLLOWUP_PREVIEW (dry run) or sends the follow-up via Gmail and updates Google Sheets with the result.

## Setup
1. Create a Google Sheets spreadsheet with a tab named “Leads” and the expected columns (including lead_id, status, contact_allowed, do_not_contact, website, and the outreach/follow-up fields), ensuring each non-empty row has a unique lead_id.
2. Add and select Google Sheets credentials and set the spreadsheet ID and sheet name in the configuration step.
3. Add and select an OpenAI API credential for the OpenAI HTTP requests and choose the model name you want to use in the configuration.
4. Add and select Gmail OAuth2 credentials, set sender_name and sender_email to match the connected Gmail account, and start with dry_run=true to review drafts before sending live.
5. Set your timezone in the workflow settings and adjust the schedule time, qualification threshold, follow-up delay, and per-run limits to match your outreach process.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
