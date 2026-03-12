# ⚙️ Watchdog: Update All Workflows With Default Error Workflow

> ⚡ **1,204 views** · ⚙️ [DevOps & CI/CD](../)

## Description

Do you consistently *forget* to set a Default Error Workflow when creating new workflows?  Then this helper workflow is for you!

When activated, this helper workflow will:
* Scan ALL other workflows every 4 hours
* Make sure ALL workflows have a default error workflow set (based on what Workflow ID you provide)
* This helper will SKIP OVER any workflows that have the `default_error:false` tag set (make sure your default error workflow has the `default_error:false` tag set, so that you don't end up with recursive loops during errors)

Setup Nodes:
* Once imported, edit the `Set Vars` node with your `default_error_workflow_id` value.
* If you want to change the `default_error:false` tag to some other tag name, you can do so here as well.
* You need to update the `Set Default Error Workflow` node with your PostgreSQL credentials to access the `n8n` database.

## 🔗 Nodes Used

Postgres, n8n, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
