# 🤝 Sync SAP sales project fields between Microsoft SQL and Asana

> ⚡ **36 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow runs hourly to sync project records from a Microsoft SQL Server staging table into matching Asana projects, updating Asana custom fields and writing back sync status, errors, and the Asana project ID to the database.

## How it works
1. Runs every hour and queries Microsoft SQL Server for up to 100 project records that are not yet synced (or previously failed) and have fewer than three sync attempts.
2. Marks each selected record as “Processing” in SQL Server to prevent duplicate handling during the sync.
3. Calls the Asana API to list projects in a specific portfolio and matches the SQL ProjectName to an Asana project name.
4. If no Asana project matches, updates the SQL record to a “Waiting for Project ID” state with a message for manual project creation.
5. If a match is found, retrieves the Asana project’s custom fields and builds an update payload mapping SQL values (manager, margin, revenue, costs, and dates) to Asana custom fields.
6. Updates the Asana project via the Asana API and then marks the SQL record as “Completed” with the Asana project ID, or logs the error and marks the record as “Failed” while incrementing the attempt counter.

## Setup
1. Create Microsoft SQL Server credentials in n8n and ensure the Projects_Asana_Staging table (and columns like SyncedToAsana, SyncAttempts, LastSyncDate, LastSyncError, and AsanaProjectID) exists and matches the queries.
2. Provide an Asana personal access token and set the ASANA_PAT and ASANA_PORTFOLIO_GID workflow variables to a portfolio that contains the projects you want to sync.
3. Ensure the target Asana projects have custom fields with the expected names (for example, “Project Manager”, “Actual Margin”, “Revenue”, and the onsite dates) so the workflow can map and update them.
4. Review the hourly schedule and adjust the interval, record limit, or retry threshold in the SQL query if needed for your environment.

## 🔗 Nodes Used

HTTP Request, Microsoft SQL, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
