# ⚒️ Compare SQL datasets

> ⚡ **2,978 views** · ⚒️ [Engineering](../)

## Description

This workflow compares 2 datasets from a single database.

Two SQL nodes create a slightly different summary report based on the payments table.

Both reports have the same structure, but different time periods. In addition to that, output from the "Orders from 2004 and 2005" node has an extra manipulation on the ordercount variable.

This makes Compare Datasets node to produce four outputs: data in A Only Branch, in B Only Branch, Same Branch records and Different Branch records.

Please refere to the MySQL Tutorial website and download the example database: https://www.mysqltutorial.org/mysql-sample-database.aspx

## 🔗 Nodes Used

MySQL

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
