# ⚒️ Xml to SQL database import

> ⚡ **2,828 views** · ⚒️ [Engineering](../)

## Description

This is an example workflow that imports an XML file into an SQL database.
- The ReadBinaryFiles node loads the XML file from the server.
- Then the Code node extracts the file content from the binary buffer.
- Afterwards, an XML node converts the XML string into a JSON structure.
- Finally, in the MySQL node inserts the data records into the SQL table.

In the upper part of the workflow there is another MySQL node that is disabled. This node creates a new table with all the required variables based on the sample SQL database: https://www.mysqltutorial.org/mysql-sample-database.aspx

## 🔗 Nodes Used

Read Binary Files

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
