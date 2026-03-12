# 🔬 Track Excel 365 changes and approvals with Telegram and Google Sheets logging

> ⚡ **21 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# Track changes and approvals in Excel 365

## 📌 Overview

This workflow monitors an Excel 365 sheet every minute and detects new, updated, and deleted rows using a unique ID column. It compares the current dataset with the previous snapshot and identifies field-level differences.

When changes are detected, the workflow filters rows that require approval (Status = “Waiting Approval”), sends structured notifications, and optionally logs every field-level change into an audit sheet (Excel or Google Sheets).

The configuration layer allows you to define the ID column, ignored fields, and audit logging behavior without modifying the comparison logic.

This template is suitable for approval tracking, operational monitoring, and lightweight compliance logging.

## How it works
1. Runs every minute using a schedule trigger
2. Reads rows from Excel 365
3. Normalizes and stores a snapshot
4. Compares with the previous state
5. Detects new, updated, and deleted rows
6. Filters rows with “Waiting Approval” status
7. Sends structured notifications
8. Logs changes if audit logging is enabled

## Setup steps
1. Configure Microsoft Excel credentials
2. Ensure your sheet contains a unique ID column
3. Update the Environment Config node
4.(Optional) Configure Google Sheets credentials for audit logging
5. Activate the workflow

## 🚀 Features

### ⏱ Scheduled Monitoring
- Runs automatically every 1 minute
- Near real-time Excel monitoring
- Prevents unnecessary execution when no changes are detected

### 🔍 Row-Level Change Detection

### Detects:
- ✅ New rows
- ✏️ Updated rows
- ❌ Deleted rows

Uses a unique ID field per row for accurate tracking.

⸻

### 🧠 Field-Level Comparison
- Compares previous vs current values
- Identifies exactly which fields changed
- Outputs structured change data
- Prevents false positives via data normalization

⸻

## ⚙️ Environment Configuration Layer

Centralized configuration node allows easy customization without modifying core logic.

## Configurable options include:
- idField
- ignoreFields
- monitorOnly
- firstRunSilent
- enableAuditLog

No hardcoded logic required.

⸻

## 🛑 Approval Validation Layer
- Filters rows where Status = "Waiting Approval"
- Sends notifications only for relevant approval cases
- Prevents unnecessary alerts

⸻

## 🔔 Smart Notification System
- Sends formatted change notifications
- Includes:
- Change Type (NEW / UPDATED / DELETED)
- Row ID
- Field-level old → new values

Fully customizable message formatting.
⸻
## 📊 Optional Audit Logging

If enabled in the Environment Config:
- Converts each field-level change into structured audit rows
- Appends logs to:
- Excel 365 (Audit Sheet)
- Google Sheets (External Log)

Audit Log Structure

| Timestamp | ChangeType | RowID | Field | OldValue | New Value |
|-------------|--------------|--------|------|----------|------------|

Designed for compliance and tracking purposes.

## 📦 Use Cases
- Internal approval tracking
- Financial data monitoring
- Sales pipeline control
- Procurement workflows
- Excel-based compliance systems
- SME automation systems

## 🧩 Requirements
- Microsoft 365 (Excel Online – Business)
- n8n (Cloud or Self-hosted)
- Microsoft credentials configured in n8n
- Telegram Bot
- (Optional) Google Sheets credentials for audit logging

## 🔧 Configuration Guide
All system behavior is controlled from the Environment Config node.

Example configuration structure:

```
{
  CONFIG: {
    idField: "ID",
    ignoreFields: ["UpdatedAt", "LastModified"],
    monitorOnly: null,
    firstRunSilent: true,
    enableAuditLog: true
  }
}
```

You can customize:
- Which column acts as unique ID
- Which fields to ignore
- Which fields to monitor exclusively
- Whether to enable audit logging
- Whether first run should be silent

## 🟢 First Run Behavior
On first execution:
- The workflow initializes internal snapshot storage
- No mass notification is sent (if firstRunSilent = true)

This prevents false “NEW row” alerts during setup.
## 🏢 Who Is This For?
- Operations teams
- Finance departments
- SMEs using Excel as core system
- Automation consultants
- Businesses requiring lightweight audit tracking

⸻

## 💡 Why This Workflow?

Unlike simple Excel polling workflows, this solution:
- Tracks changes at field level
- Supports approval-based filtering
- Includes structured audit logging
- Avoids duplicate alerts
- Is fully configurable
- Designed for production usage

This is not just an Excel notifier — it is a structured Change Tracking & Approval Monitoring System built on n8n.```language

```

## 🔗 Nodes Used

Google Sheets, Telegram, Microsoft Excel 365, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
