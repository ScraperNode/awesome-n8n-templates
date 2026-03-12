# ⚙️ Automated error handling with email alerts & smart workflow deactivation

> ⚡ **866 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## How it works

This workflow **automatically handles errors** in your n8n workflows by:

1. Detecting when an error occurs and capturing the error details
2. Sending an email notification with the error message and affected node
3. Allowing you to deactivate the workflow or ignore the error via email response
4. Optionally rerouting the error notification to another user for approval

The workflow includes two templates: a **basic version** with simple deactivate/ignore options, and an **advanced version** that allows error rerouting to a second user.

## Set up steps

**Estimated time: 5-10 minutes**

You'll need to configure **SMTP credentials** for sending emails, set up **n8n API** access for workflow management, and update email addresses and workflow URLs throughout the nodes. Choose which template (basic or reroute logic) fits your needs, then activate the workflow to start monitoring for errors.

## 🔗 Nodes Used

Send Email, n8n

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
