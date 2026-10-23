# 🔬 Route purchase requisition approvals with Google Sheets and Gmail

> ⚡ **37 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow collects purchase requisitions via an n8n form, validates cost center budgets in Google Sheets, routes approvals by spend thresholds, and uses Gmail to request decisions and notify employees while logging approved and rejected requests back to Google Sheets.

## How it works
1. Receives a purchase requisition submission through an n8n form.
2. Standardizes the submitted fields, generates a requisition ID, calculates the estimated total cost, and rejects the request if required data is missing or invalid.
3. Looks up the selected cost center in Google Sheets and rejects the request if the cost center status is not Active.
4. Compares the requisition total against the cost center’s available budget from Google Sheets and rejects the request if funds are insufficient.
5. Determines the required approval level and approver email based on configured spend thresholds, then sends an approval email via Gmail with approve/reject links.
6. Waits for the approver’s decision and, if rejected, logs the rejection to Google Sheets and emails the employee the outcome.
7. If approved, updates the cost center’s used/available budget in Google Sheets, appends the approved requisition to a requisition log sheet, and emails the employee an approval confirmation.

## Setup
1. Connect Google Sheets credentials and set the Google Sheets document ID plus the sheet/tab IDs for the Budget_Master and Requisition_Log sheets.
2. Ensure your Budget_Master sheet includes columns for Cost Center, Status, Annual Budget, Used Budget, Available Budget, and Budget Owner Email with values that match your requisition form’s cost center entries.
3. Connect Gmail credentials and replace the default finance/procurement email addresses and approval thresholds in the configuration step to match your organization’s routing rules.
4. Publish the form trigger and share the form URL with employees who submit requisitions.

## 🔗 Nodes Used

Google Sheets, Gmail, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
