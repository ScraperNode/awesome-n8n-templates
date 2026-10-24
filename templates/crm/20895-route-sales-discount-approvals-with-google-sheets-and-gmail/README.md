# 🤝 Route sales discount approvals with Google Sheets and Gmail

> ⚡ **1 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow collects sales deal and discount requests via n8n Forms, validates them against a pricing policy stored in Google Sheets, routes each deal to auto-, manager-, or senior-approval, logs the audit trail to Google Sheets, and sends approval and outcome emails through Gmail.

## How it works
1. Receives a sales deal submission through an n8n Form and normalizes the input by generating a deal ID, timestamps, and calculated discount values.
2. Looks up the applicable product/service pricing policy in Google Sheets and logs the deal as a policy exception if no active policy is found.
3. Compares the requested discount and expected gross margin to the policy thresholds to determine whether the deal is auto-approved, requires manager approval, or requires senior approval.
4. Appends the deal and its required approval level to a Google Sheets deal log to create a centralized control record.
5. Sends an approval request email via Gmail to the assigned approver for manager/senior routes, or sends an auto-approval confirmation email to the salesperson for auto-approved deals.
6. Receives the approver’s decision through a second n8n Form, updates the matching deal row in Google Sheets as approved or rejected, and emails the final decision and remarks to the salesperson via Gmail.

## Setup
1. Create a Google Sheets spreadsheet with a Pricing_Policy sheet (including fields like Product_Service, Policy_Status, Max_Auto_Discount_Pct, Manager_Approval_Max_Discount_Pct, Min_Gross_Margin_Pct, Manager_Email, and Senior_Approver_Email) and a Deal_Log sheet with the columns mapped in the workflow.
2. Add a Google Sheets credential in n8n and replace YOUR_GOOGLE_SHEET_ID, YOUR_PRICING_POLICY_SHEET_GID, and YOUR_DEAL_LOG_SHEET_GID in all Google Sheets nodes.
3. Add a Gmail credential in n8n and ensure the approver email fields in your pricing policy sheet contain valid addresses for routing.
4. After activating the workflow, use the generated n8n Form URLs for both the deal submission form and the approval decision form and share them with the appropriate users.

## 🔗 Nodes Used

Google Sheets, Gmail, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
