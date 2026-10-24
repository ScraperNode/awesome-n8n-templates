# 🔬 Intake and triage NCRs with forms, Google Sheets and Gmail

> ⚡ **6 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow collects Non-Conformance Reports (NCRs) via an n8n Form, calculates an RPN-based risk level, checks Google Sheets for duplicates, logs valid NCRs to a master sheet, and sends Gmail notifications to the reporter, QA team, and QA manager for high-risk escalations.

## How it works
1. Receives an NCR submission through an n8n Form.
2. Applies configured RPN thresholds and QA notification emails, then normalizes the submission and generates a unique NCR ID.
3. Calculates the RPN score (Severity × Occurrence × Detectability) and assigns a Low/Medium/High/Critical risk level.
4. Validates the submission by rejecting reports where the “Date Detected” is in the future and emails the reporter via Gmail with the rejection reason.
5. Searches the NCR master Google Sheet for existing records with the same Department and Issue Title and, if found, emails the reporter a duplicate warning.
6. Appends non-duplicate, valid NCRs to Google Sheets and sends Gmail notifications to both the reporter and the QA team.
7. If the risk level is High or Critical, updates the Google Sheets record with an escalation level and emails the QA manager to trigger immediate review.

## Setup
1. Add Google Sheets credentials and set the target spreadsheet ID and sheet/tab name in the QA configuration values.
2. Create a Google Sheets tab named exactly as configured (default: NCR_Master) with the required column headers so the append/update mappings work.
3. Add Gmail credentials for sending notifications.
4. Update the QA team email and QA manager email values in the configuration.
5. Adjust the Medium/High/Critical RPN thresholds to match your quality policy and risk scoring rules.

## 🔗 Nodes Used

Google Sheets, Gmail, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
