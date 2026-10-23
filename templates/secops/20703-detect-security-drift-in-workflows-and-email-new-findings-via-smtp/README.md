# 🔒 Detect security drift in workflows and email new findings via SMTP

> ⚡ **1 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
Weekly read-only security audit of all workflows on your n8n instance. It checks for hardcoded secrets, unauthenticated webhooks, broken error handling and setting drift, and emails you only the findings that are new since the last run.

## How it works
1. A schedule trigger runs every Monday at 07:30 and loads all workflows through the n8n API. Archived workflows are skipped.
2. A Code node checks every workflow for hardcoded secrets, including inactive ones, because templates get cloned and exported.
3. For active workflows it also checks webhooks without authentication, active test or temp workflows, missing or broken error workflows, and webhook auth headers stored in the execution log.
4. Execution-data protection and MCP access are compared with the strictest value seen before, so a lowered setting is reported instead of becoming the new normal.
5. The result is compared with the last run. Only new findings go out by email.
6. The baseline is saved after the email was sent, so nothing gets lost if sending fails.

## Setup
1. Create an n8n API key under Settings > n8n API and add it as an n8n API credential in Fetch All Workflows.
2. Add an SMTP credential to Dispatch Alert Email.
3. Fill in notifyTo and notifyFrom in Set Configuration Values.
4. Set your own error workflow in the workflow settings, then run once manually and activate. n8n stores the baseline only in production runs, so the first scheduled run reports all findings once.

## Requirements
- n8n API key with access to the public API 
- SMTP account for sending email

## Customization
- Add a finding key from the email to acceptedKeys to accept it on purpose.
- Adjust testNamePattern to your naming for test or temp workflows.
- Change the schedule in Weekly Monday Trigger.

## 🔗 Nodes Used

Send Email, n8n, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
