# ⚙️ Scan workflows for 3.0-breaking nodes and OpenAI model shutdowns with email alerts

> ⚡ **0 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick Overview
This workflow runs manually to fetch all workflows from your n8n instance via the n8n API, scans them for node types removed in n8n 3.0 and for OpenAI model IDs with published shutdown dates, and emails you a single plain-text report.

## How it works
1. Starts when you manually execute the workflow.
2. Sets the “from” and “to” email addresses used for sending the report.
3. Uses the n8n API to retrieve every workflow definition from your n8n instance.
4. Scans each workflow’s nodes and parameters for known n8n 3.0 removals and patterns like AI Agent v1, deprecated Execute Sub-workflow sources, and usage of the removed $getPairedItem helper.
5. Detects OpenAI model IDs mentioned in node parameters and flags any that match a built-in shutdown-date list.
6. Builds a single text summary and sends it by email using SMTP.

## Setup
1. Create an n8n API key and add it to the n8n credential used to read workflows.
2. Configure an SMTP email credential for the email-sending step.
3. Update the From and To email addresses in the Settings step to match your mailbox and recipient.
4. Run the workflow manually to generate and email the report.

## 🔗 Nodes Used

Send Email, Google Sheets, Slack, n8n, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
