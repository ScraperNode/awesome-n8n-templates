# 🔬 Qualify, score and track supplier applications with Google Sheets and Gmail

> ⚡ **5 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow collects supplier qualification applications via an n8n form, validates and scores them, checks for duplicates in Google Sheets, logs outcomes to Google Sheets, and notifies applicants of the decision via Gmail.

## How it works
1. Receives a supplier application submission through an n8n form.
2. Normalizes the submitted fields, generates an application ID, and validates that required data is present and correctly formatted.
3. Looks up the supplier in a Google Sheets “Supplier_Master” sheet by Registration / Tax Number and emails the applicant if the supplier already exists.
4. Checks mandatory requirements (tax registration must be available and required documents cannot be “Not Available”) and, if they fail, logs the failure to a Google Sheets evaluation log and emails the supplier.
5. Converts capability selections and years in business into numeric scores, calculates a weighted qualification score, and assesses risk based on compliance status and missing supporting information.
6. Determines the final outcome (Approved, Conditionally Approved, Manual Review, or Rejected), appends the supplier record to Google Sheets, logs the evaluation for audit purposes, and emails the decision details to the supplier.

## Setup
1. Add Google Sheets OAuth credentials and replace `YOUR_SUPPLIER_QUALIFICATION_SHEET_ID` with your spreadsheet ID in all Google Sheets steps.
2. Ensure your spreadsheet contains the sheets “Supplier_Master” and “Supplier_Evaluation_Log” with columns that match the fields being written (for example, “Registration / Tax Number”, “Supplier Status”, “Weighted Score”, and “Decision Reason”).
3. Add Gmail credentials and confirm the sender mailbox is allowed to send emails to applicants.
4. Review and adjust the approval thresholds, conditional thresholds, scoring weights, and risk rules in the workflow configuration to match your supplier policy.

## 🔗 Nodes Used

Google Sheets, Gmail, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
