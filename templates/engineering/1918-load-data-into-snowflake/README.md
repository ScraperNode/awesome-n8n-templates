# ⚒️ Load data into Snowflake

> ⚡ **2,811 views** · ⚒️ [Engineering](../)

## Description

This workflow automatically downloads a CSV from the web, and parses it in a format that n8n can access. It then ensures that the data from the CSV is matched to the names of the columns in the database, and inserts this data as new rows in Snowflake.

Prerequisites:
- A CSV with data
- A Snowflake account and credentials
- A Snowflake database to upload your CSV to

Nodes:
- A HTTP Request node to download the CSV file
- A Spreadsheet File node to access the data from the CSV
- A Set node to ensure the data from the CSV is mapped to the column names of the Snowflake database
- A Snowflake node to insert these new rows into the database.

## 🔗 Nodes Used

HTTP Request, Spreadsheet File, Snowflake

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
