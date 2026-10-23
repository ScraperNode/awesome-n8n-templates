# ⚙️ Shut down nightly active workflows with the n8n API and data tables

> ⚡ **1 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow runs nightly at 22:30 and uses the n8n API to list all active workflows on your n8n instance, exclude specified IDs, log them to an n8n Data Table, and deactivate the remaining workflows for maintenance.

## How it works
1. Runs every day at 22:30 on a schedule.
2. Calls the n8n API to fetch up to 250 workflows that are currently active.
3. Splits the API response into one item per workflow.
4. Skips the current workflow and any workflow IDs listed in the excluded list.
5. For each remaining workflow, writes its ID, name, and deactivation timestamp to an n8n Data Table.
6. Calls the n8n API to deactivate each logged workflow.

## Setup
1. Create an n8n API credential (Settings → n8n API) and select it in both n8n API HTTP requests.
2. Update the base_url value to your n8n instance URL and fill excluded_workflow_ids with any workflow IDs you never want to deactivate.
3. Create or select an n8n Data Table (for example, maintenance_log) with columns workflow_id (string), workflow_name (string), and deactivated_at (date/time), and set it in the Data Table step.
4. Adjust the schedule time if needed, and add pagination to the “list active workflows” request if you have more than 250 active workflows.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
