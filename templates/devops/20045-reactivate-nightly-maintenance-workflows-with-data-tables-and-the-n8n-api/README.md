# ⚙️ Reactivate nightly maintenance workflows with Data Tables and the n8n API

> ⚡ **2 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow runs every morning and reads a Data Table log of workflows previously disabled for maintenance, then reactivates each one via the n8n REST API and clears the log so the next maintenance cycle starts clean.

## How it works
1. Runs every day at 08:45 on a Schedule trigger.
2. Sets the n8n instance base URL used to build API requests.
3. Reads all rows from an n8n Data Table that contains the workflow IDs to restore.
4. Iterates through the logged workflow IDs and calls the n8n REST API to activate each workflow.
5. After the loop completes, deletes all rows from the Data Table to reset the maintenance log.

## Setup
1. Create or select the n8n Data Table used as the maintenance log and ensure it contains a `workflow_id` column (and any other fields you want, such as name and timestamp).
2. Add an n8n API credential (Settings → n8n API) and select it for the HTTP Request that activates workflows.
3. Update the `base_url` value to your n8n instance URL and select the correct Data Table ID in both the read and delete steps.
4. Ensure the companion “Maintenance ON” workflow writes deactivated workflow IDs into the same Data Table and does not disable this workflow.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
