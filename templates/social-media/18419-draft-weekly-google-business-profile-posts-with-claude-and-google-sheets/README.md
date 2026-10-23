# 📱 Draft weekly Google Business Profile posts with Claude and Google Sheets

> ⚡ **17 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick Overview
This workflow runs every Monday and turns queued ideas from Google Sheets into a Google Business Profile post using Anthropic Claude, then emails staff a ready-to-paste draft or a review alert and updates the queue status while logging outcomes to a separate compliance workflow.

## How it works
1. Runs every Monday at 9am (server timezone) on a schedule.
2. Reads all rows from a Google Sheets “Content Queue” and selects the first row with a blank or “Queued” status.
3. If no queued content is found, sends an email alert to staff indicating the queue is empty.
4. If a queued item exists, builds a prompt from the row content and firm variables and sends it to the Anthropic Claude Messages API to generate JSON containing a proposed Google Business Profile post.
5. Parses Claude’s response, validates it with a second keyword-based safety scan, enforces Google Business Profile’s 1,500-character limit, and prepares formatted email content.
6. If the post is safe, updates the Google Sheet row to “Drafted,” calls a separate n8n workflow for compliance logging, and emails staff the ready-to-paste post.
7. If the post is not safe, updates the Google Sheet row to “Needs Review,” calls the compliance workflow to log the exception, and emails staff the flag reason and original content.

## Setup
1. Connect Google Sheets OAuth2 credentials, set the GBP_CONTENT_QUEUE_SHEET_ID variable, and ensure your sheet has a “Content Queue” tab with columns like content, status, practice_area (optional), posted_at, and notes.
2. Add an Anthropic API key as an HTTP Header Auth credential (x-api-key) and ensure the workflow can reach https://api.anthropic.com/v1/messages.
3. Configure SMTP credentials and set firm/staff email variables (FIRM_EMAIL, FIRM_FROM_EMAIL, and optionally FIRM_STAFF_EMAIL) for the notification emails.
4. Set the required firm variables (at least FIRM_NAME) and optionally set FIRM_GBP_CTA_URL, FIRM_GBP_CTA_TYPE, and FIRM_GBP_DASHBOARD_URL.
5. Provide a compliance sub-workflow and set GUARDRAIL_WORKFLOW_ID to its workflow ID so drafted and flagged outcomes are logged.

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Execute Sub-workflow, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
