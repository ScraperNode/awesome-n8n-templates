# 📋 Sync Monday.com board groups and tasks to Airtable using a sub-workflow

> ⚡ **28 views** · 📋 [Project Management](../)

## Description

## Quick Overview
This workflow manually fetches all Monday.com boards, retrieves each board’s groups and tasks, and syncs the task details into Airtable using a delegated sub-workflow pattern.

## How it works
1. Starts manually to initiate the sync.
2. Fetches all boards from Monday.com and iterates through them in batches.
3. For each board, pulls all board groups from Monday.com and enriches each group with board context (ID, name, state, owners, and metadata).
4. Sends the group list to an execute-workflow trigger as a sub-workflow and waits for it to finish processing.
5. In the sub-workflow, flattens the incoming groups into individual group records and iterates through them.
6. For each group, fetches all Monday.com items in that group, formats key fields (owner, status, type, and story points), and upserts them into an Airtable table using “Monday Task ID” as the unique key.
7. Returns a success message to the parent workflow and aggregates per-board sub-workflow results into a combined output.

## Setup
1. Add Monday.com API credentials with permission to read boards, groups, and items.
2. Add an Airtable Personal Access Token and select the target base and table for upserts.
3. Ensure your Airtable table has fields that match the mapped columns (including a unique “Monday Task ID” field) and update the base/table IDs and option values (Project/Status/Type) to match your workspace.

## 🔗 Nodes Used

Airtable, Execute Sub-workflow, Monday.com, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
