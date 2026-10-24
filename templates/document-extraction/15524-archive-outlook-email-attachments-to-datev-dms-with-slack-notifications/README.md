# 🔬 Archive Outlook email attachments to DATEV DMS with Slack notifications

> ⚡ **62 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How it works

This workflow takes new Outlook emails with attachments and helps archive the relevant files in DATEV DMS.

When an email arrives, the workflow checks the attachments, tries to match the email to a DATEV client, uploads each archiveable file to DATEV DMS, creates the matching document entry, and then marks the email as archived in Outlook.

A short Slack notification can be sent after a successful run. The message is intentionally minimal and only includes the document count and n8n execution ID.

Emails that cannot be matched clearly, or that do not contain useful document attachments, are marked for manual review instead.

## Set up steps

1. Connect your Microsoft Outlook credentials.
2. Connect your DATEVconnect credentials.
3. Connect Slack credentials if you want notifications.
4. Select the Slack channel in the Slack node.
5. Update `Template - Configure variables` with your Outlook categories, DATEV DMS metadata, and client matching defaults.
6. Replace the demo client matching with your own client lookup logic.
7. Review the DATEV DMS document fields and adapt them to your DMS setup.
8. Adjust the Outlook archive and review actions to match your internal process.

Before using this in production, add duplicate checks, monitoring, error handling, and a proper manual review queue.

## 🔗 Nodes Used

Slack, Microsoft Outlook, Microsoft Outlook Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
