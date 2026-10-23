# 🔬 Fetch Telr payment reports to SQL and send daily email summaries

> ⚡ **62 views** · 🔬 [Document Extraction & Analysis](../)

## Description

#### Description 

This workflow automates the full cycle of fetching, processing, and storing Telr payment gateway reports — and then notifying your team by email. It runs on a schedule, calls the Telr API twice (once for the raw file, once filtered by date), decompresses and extracts data from an XLS file, transforms it with JavaScript, inserts it into a SQL database, and sends a success email notification.


#### Who it's for

Merchants, developers, and finance analysts using the Telr payment gateway who want to automate transaction report collection, transform the raw XLS data, persist it to a database, and receive automated email confirmations — all without manual intervention.


#### How it works:

1. Schedule Trigger fires the workflow at your defined interval.
2. Telr API fetches the raw transaction report.
3. XML is converted to JSON for processing.
4. Logic for Date calculates the relevant date range.
5. Edit Fields maps and renames fields manually.
6. Telr API with Date refetches with the computed date filter.
7. Compression node decompresses the downloaded file.
8. Extract from File reads the XLS content.
9. Data Formation shapes the records for SQL.
10. Code in JavaScript3 applies custom business logic.
11. Data Insert SQL writes records to your database.
12. Success Condition checks if the insert succeeded.

13. Send Email dispatches a success notification.


#### Setup requirements

• Telr API credentials — add your Telr store ID and API key as n8n credentials (HTTP Header Auth).
• Database credentials — configure a MySQL or PostgreSQL credential and update the table name in the SQL node.
• Email credentials — set up SMTP or Gmail credentials for the Send Email node.
• Schedule — adjust the cron expression in the Schedule Trigger to match your reporting frequency.
• JavaScript node — review the Code in JavaScript3 node and adapt any field names or business logic to match your Telr account's XLS format.

## 🔗 Nodes Used

Send Email, HTTP Request, Microsoft SQL, Schedule Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
