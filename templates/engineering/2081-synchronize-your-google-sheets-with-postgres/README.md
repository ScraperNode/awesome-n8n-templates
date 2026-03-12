# ⚒️ Synchronize your Google Sheets with Postgres

> ⚡ **6,839 views** · ⚒️ [Engineering](../)

## Description

Sync your Google Sheets Data with your Postgres database table, requiring minimal adjustments. Follow these steps:

1. **Retrieve Data**: Pull data from Google Sheets and PostgreSQL.
2. **Compare Datasets**: Identify differences, focusing on new or updated entries.
3. **Update PostgreSQL**: Apply changes to ensure both platforms mirror each other.

Automate this process to regularly synchronize data. 

Before starting, grant necessary access to both Google Sheets and PostgreSQL, and specify the data details for synchronization. This streamlined workflow enhances data consistency across platforms.

This example is a one-way synchronization from Google Sheets into your Postgres. With small adjustments, you can make it the other way around, or 2-way.

## 🔗 Nodes Used

Google Sheets, Postgres, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
