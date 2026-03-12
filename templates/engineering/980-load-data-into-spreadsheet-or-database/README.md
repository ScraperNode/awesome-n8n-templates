# ⚒️ Load data into spreadsheet or database

> ⚡ **4,326 views** · ⚒️ [Engineering](../)

## Description

This workflow is a generic example of how to load data from your workflow into a destination that stores tabular data. For example, a **Google Sheets** or **Airtable** sheet, a **.CSV** file, or any relational database like **MySQL**. 

Generally, you need to ensure that you send well-formatted data into the Spreadsheet or Database node. You can use the [Set](https://docs.n8n.io/nodes/n8n-nodes-base.set/#set) or [Function](https://docs.n8n.io/nodes/n8n-nodes-base.function/#function) node to transform data into the correct format for your destination.

![key_to_table.png](fileId:435)

## Key concepts
- Spreadsheets and databases have columns, like "Name" and "Email". The data you send into a Spreadsheet/ Database node needs to match these column names for each row of data that you want to insert. Data points need to be represented as key-value pairs. Specifically, each item of data needs to have a JSON key for each column in the sheet. For a spreadsheet with "Name" and "Email" columns, it would look like: **{"Name" : "Karla", "Email" : "karla@email.com"}**

- Before appending or inserting data to a spreadsheet or database, you might need to transform it into the correct format. You can preprocess the data with a [Set](https://docs.n8n.io/nodes/n8n-nodes-base.set/#set) or [Function](https://docs.n8n.io/nodes/n8n-nodes-base.function/#function) node. The Set node allows you to perform simple transforms when the data you want to load into spreadsheet rows is already represented as items. Use the Function node when you need to map nested data (like arrays) inside a single item to their own top-level items ([Example in community forums](https://community.n8n.io/t/getting-all-items-from-trello-api-call/4567/8)).
- Spreadsheet and database nodes in n8n perform their configured action (like **Append**, **Create Row**, **Write to File**) on each item of input data. 



## Workflow walkthrough

[![homepage](https://cdn.loom.com/sessions/thumbnails/eb87068f35a14af095f7b0f020b62211-with-play.jpg)](https://www.loom.com/share/eb87068f35a14af095f7b0f020b62211)

## 🔗 Nodes Used

Function, Start

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
