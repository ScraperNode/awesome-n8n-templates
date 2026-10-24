# 🔬 Create purchase orders from Google Sheets using Groq AI and Gmail

> ⚡ **45 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs every 15 minutes to read approved, new requisitions from Google Sheets, validate supplier and policy rules, call an LLM risk-assessment API via HTTP, then create a purchase order record, update requisition status, write audit logs, and notify the procurement team via Gmail.

## How it works
1. Runs every 15 minutes on a schedule.
2. Reads requisitions from Google Sheets and keeps only rows where ApprovalStatus is "Approved" and ProcessingStatus is "New".
3. Looks up each requisition’s supplier in a Google Sheets supplier master sheet and merges the supplier details into the requisition.
4. Stops processing for items that don’t meet the duplicate/eligibility criteria, and validates supplier status, contract status, compliance, and max spend limit.
5. For validated requisitions, sends the requisition and supplier details to an LLM risk-assessment endpoint via HTTP and parses the JSON decision, risk score, and reason.
6. Generates a purchase order number, appends the purchase order to a Google Sheets Purchase_Orders sheet, updates the requisition to "Processed", logs the outcome to an Audit_Logs sheet, and emails the procurement team via Gmail.
7. For failed validations, appends a failure event to the Audit_Logs sheet and updates the requisition status in Google Sheets to "Rejected".

## Setup
1. Connect Google Sheets OAuth2 credentials and ensure your spreadsheet contains the Requisitions, Suppliers, Purchase_Orders, and Audit_Logs sheets with the expected column names (for example ReqID, SupplierID, ApprovalStatus, ProcessingStatus, MaxLimit, ComplianceStatus).
2. Configure the HTTP Request credential (header-based auth) and set the AI risk-assessment endpoint URL to your LLM provider (the workflow is formatted for a Groq/OpenAI-compatible chat-completions API).
3. Connect Gmail OAuth2 credentials and set the recipient address in the Gmail send step.
4. Confirm the Supplier master data uses matching SupplierID values and includes fields like Status, ContractActive, ComplianceStatus, and MaxLimit so validation can run correctly.

## Additional info
## How To Customize Nodes

### Schedule - Procurement Scan

Adjust polling frequency:

* Every 5 minutes
* Every hour
* Daily
* Weekly

### Filter - Approved & New Requests

Modify approval requirements.

Examples:

* Approved only
* Department-specific approvals
* Multi-stage approval statuses

### Code - Procurement Validation

Add custom procurement rules such as:

* Department budgets
* Vendor category restrictions
* Preferred supplier enforcement
* Spending thresholds by department
* Country-specific compliance checks

### AI - Risk Assessment

Customize the prompt to evaluate:

* Fraud risk
* Vendor performance
* Cost anomalies
* Procurement policy adherence
* Budget risk

You can also switch to any compatible AI provider.

### Purchase Order Generation

Customize PO numbering formats.

Example:

```text
PO-2025-00001
```

or

```text
PO-FINANCE-00001
```

### Gmail Notification

Add:

* Finance notifications
* Department manager alerts
* Supplier notifications
* Executive reporting emails

## Add-ons

You can extend this workflow with additional capabilities such as:

### ERP Integration

Push approved purchase orders into:

* SAP
* Oracle
* Microsoft Dynamics
* NetSuite

### Slack Notifications

Send procurement updates directly to Slack channels.

### Microsoft Teams Alerts

Notify procurement teams in Teams.

### PDF Purchase Orders

Automatically generate PDF purchase orders and store them in cloud storage.

### Approval Escalation

Route high-value purchases for additional approval.

### Vendor Performance Scoring

Track supplier reliability and performance over time.

### Digital Signatures

Add electronic approval and signature workflows.

### Budget Management

Validate requests against department budgets before PO creation.


## Use Case Examples

### 1. Office Supply Procurement

Automatically create purchase orders for approved office supply requests after validating supplier compliance and spending limits.

### 2. IT Equipment Purchases

Process approved laptop, monitor, and hardware requests with AI-supported risk evaluation and automatic PO creation.

### 3. Manufacturing Material Procurement

Generate purchase orders for approved raw material requests while enforcing supplier contracts and procurement policies.

### 4. Multi-Department Purchasing

Allow HR, Finance, Operations, and IT teams to submit requisitions through a shared procurement process.

### 5. Vendor Compliance Automation

Prevent procurement requests from being processed when vendors are inactive, non-compliant, or outside approved spending limits.


## Additional Possibilities

This workflow can also be adapted for:

* Construction procurement
* Healthcare purchasing
* Educational institutions
* Retail inventory replenishment
* Facilities management procurement
* Professional services procurement

And many other purchasing and procurement automation scenarios.


## Troubleshooting Guide

| Issue                            | Possible Cause                                     | Solution                                                      |
| -------------------------------- | -------------------------------------------------- | ------------------------------------------------------------- |
| No requisitions are processed    | Requisition status does not meet filter conditions | Verify ApprovalStatus is Approved and ProcessingStatus is New |
| Supplier validation fails        | Supplier record missing from Suppliers sheet       | Verify SupplierID exists and matches exactly                  |
| Contract validation fails        | ContractActive value is not Yes                    | Update supplier master data                                   |
| Compliance validation fails      | Supplier marked as non-compliant                   | Update supplier compliance status                             |
| Amount exceeds limit             | TotalAmount is higher than MaxLimit                | Increase supplier limit or adjust requisition                 |
| AI node fails                    | API URL or authentication incorrect                | Verify endpoint URL and credentials                           |
| Purchase order not created       | AI response format invalid                         | Ensure AI returns valid JSON structure                        |
| Gmail notification fails         | Gmail credentials invalid                          | Reconnect Gmail OAuth credentials                             |
| Audit logs not generated         | Audit sheet mapping incorrect                      | Verify Audit_Logs sheet columns                               |
| Requisition processed repeatedly | ProcessingStatus not updated successfully          | Verify update permissions and matching columns                |
| Empty notification recipient     | Recipient logic not configured                     | Configure dynamic or static recipient mapping                 |


## Need Help?

If you need assistance setting up, customizing or extending this workflow, our [n8n workflow developers at WeblineIndia](https://www.weblineindia.com/hire-n8n-developers/) can help.

Services include:

* n8n workflow implementation
* Procurement automation consulting
* ERP integrations
* AI-powered business process automation
* Custom approval workflows
* Google Workspace automation
* Enterprise workflow development
* Workflow optimization and support

Whether you need minor customizations or a fully tailored procurement automation platform, WeblineIndia can help design, build and deploy solutions that fit your business processes.

Need custom enhancements or additional integrations? Reach out to WeblineIndia for professional assistance with implementation, support and advanced workflow development.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
