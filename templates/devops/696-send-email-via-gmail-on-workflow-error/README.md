# ⚙️ Send email via Gmail on workflow error

> ⚡ **8,963 views** · ⚙️ [DevOps & CI/CD](../)

## Description

![workflow-screenshot](fileId:261)

Send an email via Gmail when a workflow error occurs.

The email subject line will contain the workflow name; the message body will contain the following information:

- Workflow name
- Error message
- Last node executed
- Execution URL
- Stacktrace

Error workflows do not need to be activated in order to be used, but they do need to be selected in the Settings menu of whatever workflows you want to use it.

To use this workflow, you'll need to:
- Create and select credentials in the Gmail node
- Choose the email recipient(s) in the Gmail node
- Save and select the created workflow as the "Error Workflow" in the Settings menu of whatever workflows you want to email on error

## 🔗 Nodes Used

Start, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
