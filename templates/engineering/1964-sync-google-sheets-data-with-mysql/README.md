# ⚒️ Sync Google Sheets data with MySQL

> ⚡ **9,352 views** · ⚒️ [Engineering](../)

## Description

This workflow performs several data integration and synchronization tasks between Google Sheets and a MySQL database.

Here is a step-by-step description of what this workflow does:

1. Manual Trigger: The workflow starts when the user clicks "Execute Workflow."
2. Schedule Trigger: This node schedules the workflow to run at specific intervals on weekdays (Monday to Friday) between 6 AM and 10 PM. It ensures regular data synchronization.
3. Google Sheet Data: This node connects to a specific Google Sheets document and retrieves data from the "Form Responses 1" sheet, filtering by the "DB Status" column.
4. SQL Get inquiries from Google: This node retrieves data from a MySQL database table named "ConcertInquiries" where the "source_name" is "GoogleForm."
5. Rename GSheet variables: This node renames the columns retrieved from Google Sheets and transforms the data into a format suitable for MySQL, assigning a value for "source_name" as "GoogleForm."
6. Compare Datasets: This node compares the data retrieved from Google Sheets and the MySQL database based on timestamp and source_name fields. It identifies changes and updates.
7. No reply too long?: This node checks if there has been no reply within the last four hours, using the "timestamp" field from the Google Sheets data.
8. DB Status assigned?: This node checks if the "DB Status" field is not empty in the compared dataset.
9. Update GSheet status: If conditions are met in the previous nodes, this node updates the "DB Status" field in Google Sheets with the corresponding value from the MySQL dataset.
10. DB Status in sync?: This node checks if the "source_name" field in Google Sheets is not empty.
11. Sync MySQL data: If conditions are met in the previous nodes, this node updates the "source_name" field in the MySQL database to "GoogleFormSync."
12. Send Notifications: If conditions are met in the "No reply too long?" node, this node sends notifications or performs actions as needed.
13. Sticky Notes: These nodes provide additional information and documentation links for users.

## 🔗 Nodes Used

Google Sheets, MySQL, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
