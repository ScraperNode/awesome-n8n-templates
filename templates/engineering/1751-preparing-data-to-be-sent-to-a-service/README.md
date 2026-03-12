# ⚒️ Preparing data to be sent to a service

> ⚡ **64,760 views** · ⚒️ [Engineering](../)

## Description

**Task:**
Make sure that data is in the right format before injecting it into a database/spreadsheet/CRM/etc.

**Why:**
Spreadsheets and databases require the incoming data to have the same fields as the headers of the destination table. You can decide which fields you would like to send with the database and rename them by using the set node

**Main use cases:**
- Change fields names to match a database or a spreadsheet table structure
- Keep only the fields that are needed at the destination table

## 🔗 Nodes Used

Google Sheets, Customer Datastore (n8n training)

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
