# 🔬 Log errors and audit events with n8n Data Tables

> ⚡ **93 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How it works

This workflow provides a reusable error handling, audit logging, and observability pattern for n8n workflows using two n8n custom Data Tables: `AuditLog` and `ErrorLog`.

It is designed to be used across multiple workflows as a central logging workflow.

At a high level, it:

• Captures unhandled workflow errors using the n8n Error Trigger  
• Stores technical error details in an `ErrorLog` Data Table  
• Allows other workflows to write business/audit events into an `AuditLog` Data Table  
• Adds useful observability metadata such as workflow name, workflow ID, execution ID, error message, failed node, severity, and correlation ID  
• Redacts sensitive values such as passwords, tokens, API keys, and authorization headers before logging  
• Includes scheduled cleanup logic to purge old log records after a configurable retention period  

This template is useful for production-grade n8n setups where multiple workflows need a consistent and reusable logging approach.

## Set up steps

Setup should take around 10–15 minutes.

Before using this template:

• Create two n8n Data Tables named `AuditLog` and `ErrorLog`  
• Make sure the table columns match the expected structure described below
• Import this workflow into n8n  
• Re-select your actual Data Tables in the Data Table nodes after import  
• Set the retention period, for example 90 days, in the configuration node  
• Activate the workflow  
• In other workflows, select this workflow as the Error Workflow in Workflow Settings  
• For audit logging, call this workflow using the Execute Workflow node  

No hardcoded API keys are used in this template.

## Data Tables used

This template expects two n8n Data Tables.

### AuditLog

| Column | Type |
|---|---|
| logID | String |
| logType | String |
| logDate | Date & Time |
| WorkflowName | String |
| WorkflowID | String |
| logData | String / JSON text |

### ErrorLog

| Column | Type |
|---|---|
| ErrorLogID | String |
| ErrorLogDate | Date & Time |
| ErrorMessage | String |
| WorkflowID | String |
| WorkflowName | String |
| BusinessData | String / JSON text |

Use **Date & Time** for `logDate` and `ErrorLogDate`.

The workflow writes ISO-8601 timestamps, for example:

2026-04-28T10:30:00.000Z

This allows the purge logic to delete records older than the configured retention period, for example 90 days.

# Call from any workflow

Add **Execute Workflow** node and select this workflow. Send for audit logging:

```json
{
  "logType": "START | SUCCESS | WARNING | BUSINESS_ERROR",
  "workflowName": "={{ $workflow.name }}",
  "workflowId": "={{ $workflow.id }}",
  "correlationId": "={{ $execution.id }}",
  "businessKey": "invoice-123",
  "message": "Invoice extracted successfully",
  "payload": { "invoiceNo": "INV-123", "amount": 100 }
}
```

For automatic failures, configure each workflow setting: **Error Workflow = this workflow**.

## 🔗 Nodes Used

Execute Workflow Trigger, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
