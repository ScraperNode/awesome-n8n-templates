# 📋 Retrieve a Monday.com row and all data in a single node

> ⚡ **4,059 views** · 📋 [Project Management](../)

## Description

This workflow is a building block designed to be called from other workflows via an **Execute workflow** node. When called from another workflow, and given the JSON input of a "**pulse**" field with the ID to pull from monday, this workflow will return:

- The items name and ID
- All column data, indexable by the column name
- All column data, indexable by the column's ID string
- All board relation columns, with their data and column values
- All subitems, with their data and column values

For example:
![image.png](fileId:736)

++Prerequisites++
- A monday.com account and credential
- A workflow that needs to get detailed data from a monday.com row
- The pulse id of the monday.com row to retreive data from.

++Setup++
- Import the workflow
- Configure all monday nodes with your credentials and save the workflow
- Copy the workflow ID from it's URL
- In a different workflow, add an **Edit Fields** node, to output the field "**pulse**", with the monday item you want to retrieve.
- Feed the **Edit Fields** node with your pulse into an **Execute workflow** node, and paste the workflow ID from above into it
	- This "pulse" field will tell the workflow what pulse to retreive. This can be populated by an expression in your workflow
	- There is an example of the **Edit Fields** and **Execute Workflow** nodes in the template

## 🔗 Nodes Used

Execute Sub-workflow, Monday.com, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
