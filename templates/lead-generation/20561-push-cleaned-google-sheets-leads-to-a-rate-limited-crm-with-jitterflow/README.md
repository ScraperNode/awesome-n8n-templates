# 🎣 Push cleaned Google Sheets leads to a rate-limited CRM with Jitterflow

> ⚡ **0 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow runs on two schedules to read new leads from Google Sheets, validate and normalize email addresses, and queue each lead to a rate-limited CRM via Jitterflow, then writes queue status, job IDs, and CRM rejection errors back to the sheet.

## How it works
1. Runs every hour and reads all rows from the Google Sheets “Leads” sheet.
2. Keeps only rows with an empty Status, then trims fields and normalizes the email to lowercase.
3. Validates the email format and marks the row as “Invalid email” in Google Sheets when it fails validation.
4. Sends valid leads to Jitterflow as webhook jobs (using the email as an idempotency key) so Jitterflow can deliver them to the CRM at the configured rate limit.
5. Updates the originating Google Sheets row as “Queued”, stores the Jitterflow job ID, and notes if the email was already queued.
6. Runs every morning at 8:00, lists unresolved jobs from the Jitterflow dead-letter queue, and filters to only entries created by this sheet import.
7. Marks matching rows in Google Sheets as “Rejected by CRM” and writes the HTTP status/error reason into the Note column.

## Setup
1. Install and configure the community node n8n-nodes-jitterflow (required for the Jitterflow nodes).
2. Create a Jitterflow API credential in n8n, create a Jitterflow endpoint that targets your CRM’s create-contact API (with auth and pacing), and paste the endpoint key into the workflow.
3. Create a Google Sheet with a “Leads” tab and columns Email, First name, Last name, Company, Status, Jitterflow job, and Note.
4. Add your Google Sheets OAuth credential in n8n and update the Google Sheet document ID on the Google Sheets nodes.

## Requirements
- A Jitterflow account (the free Developer plan works; replaying CRM-rejected leads needs Pro), the verified n8n-nodes-jitterflow community node, and a Google Sheets account.

## Customization
- Reshape the Payload on Queue lead for the CRM to match your CRM's field names, or run the intake every 15 minutes instead of hourly.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
