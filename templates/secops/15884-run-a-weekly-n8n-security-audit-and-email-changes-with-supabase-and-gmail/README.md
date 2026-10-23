# 🔒 Run a weekly n8n security audit and email changes with Supabase and Gmail

> ⚡ **46 views** · 🔒 [SecOps & Security Automation](../)

## Description

### How it works

If your main Error Diagnosis workflow fails for any reason, this backup workflow sends an alert email to the workflow owner.

For a (main) advanced and automated error diagnosis workflow check: ++[flowcheckers.com](www.flowcheckers.com)++

Node 1 - **Backup Error Trigger**
No configuration needed. Fires automatically when the main workflow encounters an unhandled error.

Node 2 - **Internal alert notification**
Sends an alert email to the workflow owner when the main diagnosis workflow fails. The email contains the error details, the workflow name, and a link to the failed execution in n8n so the owner can investigate immediately.

### Setup
- Import `backup-error-workflow.json` into your n8n instance
- Connect the Resend credential inside the Resend node (Important: the From address must be a domain verified in Resend, otherwise the send will be rejected)
- Link this workflow as the Error Workflow of the main diagnosis workflow
- Confirm the workflow is saved

## 🔗 Nodes Used

Gmail, Supabase, n8n, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
