# 🔬 Run legal conflict checks with Clio, Google Sheets, and email

> ⚡ **14 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow runs two webhooks to perform name-based conflict checks by fuzzy-matching submitted party names against Clio contacts and matters, logging each check in Google Sheets, emailing a formatted report with Clear/Escalate links, and recording the selected decision back to the audit log.

## How it works
1. Receives a conflict check request via a POST webhook, parses the submitted client/adverse party names, and rejects the request if no names are provided.
2. Fetches up to 200 contacts and up to 200 matters from Clio using the configured base URL.
3. Fuzzy-matches each submitted name against Clio contact names and matter client names/descriptions using a configurable threshold and flags whether any potential conflicts are found.
4. Generates a unique conflict check ID, appends a pending-review audit row to a Google Sheets “conflict check” sheet, and builds a styled email report with decision links.
5. Sends the conflict report email (and triggers a separate compliance/audit workflow), then responds to the original webhook with the check ID.
6. Receives a conflict decision via a GET webhook from the email link, validates the check ID/action, updates the matching Google Sheets audit row with the decision and timestamp, and returns a confirmation or error page.

## Setup
1. Create a Clio OAuth2 credential in n8n, set CLIO_BASE_URL, and ensure the contact/matter endpoints are reachable for your tenant.
2. Add Google Sheets credentials, set CONFLICT_LOG_SHEET_ID, and create a sheet named “conflict check” with columns matching the workflow’s appended fields (for example: status, check_id, decision, checked_at, decided_at, names_checked, matter_description, requested_by_email, matches_found_count).
3. Add an email-sending credential, set FIRM_FROM_EMAIL (and optionally FIRM_EMAIL/FIRM_NAME), and confirm the recipient logic matches your internal routing.
4. Activate the workflow and copy the Production URL of the decision webhook into CONFLICT_DECISION_WEBHOOK_URL so the email links resolve correctly.
5. Configure the source system to POST to the request webhook path (conflict-check-request) with new_client_name, adverse_party_names, matter_description, and requested_by_email, and optionally set CONFLICT_MATCH_THRESHOLD and GUARDRAIL_WORKFLOW_ID.

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Webhook, Execute Sub-workflow

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
