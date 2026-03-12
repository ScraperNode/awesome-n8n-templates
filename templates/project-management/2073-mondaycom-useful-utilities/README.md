# 📋 Monday.com useful utilities

> ⚡ **3,490 views** · 📋 [Project Management](../)

## Description

This template is a set of building blocks to access Monday.com in ways not supported by the official Monday node.

Prerequisites
- Monday account and Monday credentials.

Included are setups to:
- Find a column value by the column's name (instead of a numerical index which can change when board structure is changed)
- Find a column value by the column's ID (again, instead of using a numerical index)
- Pull a board relation column, and get all the related pulses
- Pull an items subitems and split them out
- Upload a file to an item's files field

Setup
- Create a Monday.com credential
- Update the nodes in the template to use your credential
- Copy/Paste the nodes you need from this template into any other workflow
- To retreive a column by name:
	- Route a Monday.com node that gets an item to the **COLUMN BY NAME** node
	- Edit the **COLUMN BY NAME** node, and enter the name in the first line of code.
- To retreive a column by its ID:
	- Follow Monday.com's [instructions](https://support.monday.com/hc/en-us/articles/360000225709-Board-item-column-and-automation-or-integration-ID-s) to locate the column's ID
	- Route a Monday.com node that gets an item to the **COLUMN BY ID** node
	-Edit the **COLUMN BY ID** node, and enter the ID in the first line of code.
- To retreive all linked pulses from a Board Relation column:
	- Route a Monday.com node that gets an item to the **GET BOARD RELATION** node
	- Edit the **GET BOARD RELATION** node to specify the column name.
	- All linked pulses will be retrieved by the subsequent **PULL LINKEDPULSE** node
- To pull all subitems from an item:
	- Route a Monday.com node that gets an item to the **PULL SUBITEMS** node
	- All subitems will be retrieved by the subsequent **GET EACH SUBITEM** node
- To upload a File:
	- Repalce the **Convert to File** node with whatever node you are using to output your binary file data
	- Enable the **MONDAY UPLOAD** node
	- If the destination column is named anything other then the default of "file" - edit the **MONDAY UPLOAD** node and change column_id:"file" in the first Value field to match the name of your file column

## 🔗 Nodes Used

HTTP Request, Monday.com

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
