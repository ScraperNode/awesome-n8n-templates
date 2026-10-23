# 💬 Draft AI follow-up email drafts for stale estimates with Claude and Google Sheets

> ⚡ **61 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow runs daily to read estimates from Google Sheets, identify stale items that need a follow-up, generate a personalized email draft with Anthropic Claude, save it as a Gmail draft, and update the source sheet with the latest follow-up date and status.

## How it works
1. Runs daily on a schedule.
2. Loads all estimate rows from a Google Sheets document.
3. Filters for open/pending estimates where the last follow-up (or estimate date) is older than the configured threshold and a customer name and email are present.
4. Sends each stale estimate to the Anthropic Messages API (Claude) to generate a JSON follow-up email subject and body using the customer and estimate details.
5. Parses the JSON response and prepares the final email fields, falling back to a default message if parsing fails.
6. Creates a Gmail draft addressed to the customer using the generated subject and body.
7. Updates the matching row in Google Sheets to set the status to followup_drafted and record the new last_followup_date.

## Setup
1. Create a Google Sheet (e.g. a tab named “Estimates”) with columns such as customer_name, customer_email, service_requested, estimate_amount, estimate_date, status, last_followup_date, and notes.
2. Add Google Sheets credentials in n8n and replace REPLACE_WITH_YOUR_SHEET_ID with your spreadsheet ID in both Google Sheets nodes.
3. Add an HTTP Header Auth credential for Anthropic (x-api-key) and attach it to the HTTP Request node, and ensure the anthropic-version header remains set.
4. Add Gmail credentials for creating drafts in your mailbox.
5. Update the configuration values (staleThresholdDays, businessName, senderName, and emailSignature) and adjust the scheduled run time as needed.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
