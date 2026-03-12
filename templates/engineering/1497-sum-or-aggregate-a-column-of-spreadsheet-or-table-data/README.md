# ⚒️ Sum or aggregate a column of spreadsheet or table data

> ⚡ **1,451 views** · ⚒️ [Engineering](../)

## Description

This workflow shows how to sum multiple items of data, like you would in Excel or Airtable when summing up the total of a column. It uses a Function node with some javascript to perform the aggregation of numeric data. 

The first node is simply mock data to avoid needing a credential to run the workflow. The second node actually performs the summation - the javascript has various comments in case you need to edit the JS. For example, to sum multiple items of data.

Below is an example of the type of data this workflow can sum - so anything that is in a tabular form (Airtable, GSHeets, Postgres etc).
![Screenshot 20220228 at 18.31.25.png](fileId:618)

## 🔗 Nodes Used

Function, Start

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
