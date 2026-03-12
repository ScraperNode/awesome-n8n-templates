# 🔒 Monitor Zoho CRM changes & alert on suspicious activity with Google Sheets

> ⚡ **84 views** · 🔒 [SecOps & Security Automation](../)

## Description

# 📄 **Zoho CRM Change Tracking & Automated Suspicious Activity Alerts Workflow**

This n8n workflow automatically monitors selected Zoho CRM modules for record changes, identifies suspicious modification patterns, logs all activity into a Google Sheet, generates an audit JSON file for each record and sends immediate email alerts for suspicious events. It runs incrementally using a time window so only recent changes are processed, keeping monitoring continuous and accurate.

### ⚡ Quick Start — “Implement in 5 Steps”

1. Import the workflow JSON into n8n.
2. **Connect credentials:** Zoho CRM OAuth2, Gmail OAuth2, Google Sheets.
3. Update Google Sheet ID + recipient email if needed.
4. Review modules being monitored (`Leads`, `Contacts`, `Accounts`, `Deals`).
5. **Activate the workflow** — n8n begins tracking CRM changes instantly.

## What It Does

This workflow acts as an automated security and audit layer for Zoho CRM. It fetches updated records from selected CRM modules within a calculated time window, extracts critical change details, and enriches them with timestamps, ownership, field change counts, and metadata. Based on defined rules, it identifies unusual or high-risk patterns such as deletions, ownership updates, email modifications or bulk field changes.

Every record that is processed is output in two ways:

* **Structured logging** into a Google Sheet (appended or updated).
* **Binary JSON audit file** generated for robust audit storage.

When suspicious patterns are detected, the workflow immediately generates a rich HTML email alert to your security team, ensuring fast response. The `lastRun` value is maintained to avoid duplicate processing.

## Who’s It For

This workflow is ideal for:

* **CRM Administrators** needing automated monitoring.
* **Security Teams** tracking unauthorized modifications.
* **Data Compliance Officers** requiring audit trails.
* **Organizations with high CRM usage**, especially sales operations.
* **Teams looking to automate change logs without manual review.**

## Prerequisites

To run this workflow successfully, ensure you have:

* **n8n instance** (cloud or self-hosted).
* **Zoho CRM OAuth2 credentials** with access to modules & search APIs.
* **Google Sheets OAuth2 credentials** + an existing sheet.
* **Gmail OAuth2 credentials** for sending alerts.
* **Correct timezone settings** in your CRM & workflow environment.
* Ability to edit function nodes if you need deeper customization.

## How to Use & Setup

### Step 1 — Import Workflow

Upload the provided JSON file inside n8n.

### Step 2 — Connect Credentials

Configure nodes:

* `Zoho List Modules` → Zoho OAuth2
* `Zoho Search (module)` → Zoho OAuth2
* `Append or update row in sheet` → Google Sheets
* `Email Security Team` → Gmail OAuth2

### Step 3 — Setup Google Sheet

Your sheet should contain at least these columns:

* Timestamp
* Record Id
* Module
* Field Changes Count
* Is Suspicious
* Company Name
* Email
* User Name

Update the sheet ID in the node if needed.

### Step 4 — Validate Modules List

By default, the workflow monitors:

* Leads
* Contacts
* Accounts
* Deals

This is defined in two nodes:
`Modules list (from API)` and `Filter unsupported modules`.

### Step 5 — Activate Workflow

Once activated, it calculates a time window using:

* The last successful run (`lastRun`)
* Current timestamp
* A polling range of 5 minutes

Only changes within this window are processed.

## How To Customize Nodes

### 1. Compute Time Window

* Modify polling time via `pollMinutes = 5` if desired.
* The node stores `lastRun` so it never processes duplicate events.

### 2. Modules list (from API)

Update the `requiredModule` array to include or remove CRM modules.

### 3. Suspicious Logic (as implemented)

In **Detect Unusual Patterns**, a record is flagged suspicious if:

- The event contains **"delete"**
- Changed fields include:
	- **owner**, **assigned_to**, **owner_id**
	- **email**, **contact_email**
	- **role**, **is_admin**, **profile**
- More than **10 fields** were modified in one update
- Reasons are stored in `suspicious_reasons`
- A boolean flag `suspicious = true/false`

These rules can be modified directly inside the function code.

### 4. Email Template

Edit subject, HTML body, or recipients in the `Email Security Team` (Gmail) node.

### 5. Google Sheets Mapping

Column mapping can be modified or extended directly in the `Append or update row` node.

## Add-Ons (Optional Enhancements)
These Add-Ons align *strictly* with the workflow’s existing structure:

### ✔ Add more Zoho CRM modules
Expand `requiredModule` arrays in two function nodes.

### ✔ Adjust suspicious detection rules
Customize keywords, field names, or thresholds in `Detect Unusual Patterns`.

### ✔ Add more fields to the Google Sheet
Extend mapping in the Google Sheets node.

### ✔ Change alert recipients or message style
Modify the Gmail node’s HTML and toList fields.

### ✔ Increase audit retention by storing JSON files
Forward binary audits to Drive, Dropbox, or S3 using an additional node.

## Use Case Examples

This workflow can support several practical business scenarios:

- Unauthorized Access Monitoring
Detects if users modify sensitive fields like email, owner, or permissions.

- Mass Data Manipulation Alerts
Spot bulk changes where more than 10 fields were modified at once.

- Sales Pipeline Integrity Checks
Track Deal or Lead ownership changes that may affect reporting accuracy.

- Contact Data Security
Email changes in Contacts or Leads are flagged immediately.

- Audit Log Maintenance
Creates JSON audit files + logs in Google Sheets for compliance.

There can be many more use cases depending on your CRM setup and security policies.

## Troubleshooting Guide

| Issue                              | Possible Cause                         | Solution                                               |
| ---------------------------------- | -------------------------------------- | ------------------------------------------------------ |
| No data being captured             | Zoho OAuth issue or wrong modules list | Reconnect OAuth & verify module API names              |
| Suspicious emails not sent         | Gmail OAuth not connected              | Re-authenticate Gmail credentials                      |
| Duplicate rows in Google Sheet     | Matching column misconfigured          | Check “Record Id” mapping in Google Sheet node         |
| Workflow processes too few records | Time window too small                  | Increase `pollMinutes` in `Compute from/to`            |
| Missing fields in Google Sheet     | Mapping not defined                    | Extend mapping under Sheets → Columns                  |
| Audit file not generated           | Binary property overwritten            | Ensure no node clears binary data before file creation |
| Workflow doesn’t resume continuity | `lastRun` not updating                 | Check `Update lastRun` node execution path             |

## Need Help?

If you need assistance customizing:

* Suspicious logic
* Module lists
* Google Sheet structure
* Email templates
* Or building more advanced CRM security automations

The **n8n Team** at WeblineIndia can help extend, optimize or deploy this workflow professionally.

Feel free to reach out for setup, enhancements or complete automation solutions.

## 🔗 Nodes Used

Function, Google Sheets, HTTP Request, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
