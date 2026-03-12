# ⚙️ Send n8n automation errors to a Monday.com board

> ⚡ **1,649 views** · ⚙️ [DevOps & CI/CD](../)

## Description

This template is an error handler that will log n8n workflow errors to a Monday.com board for troubleshooting and tracking.

Prerequisites
- Monday account and Monday credential
- Create a board on Monday for error logging, with the following columns and types:
	- Timestamp (text)
	- Error Message (text)
	- Stack Trace (long text)
- Determine the column IDs using Monday's [instructions](https://support.monday.com/hc/en-us/articles/360000225709-Board-item-column-and-automation-or-integration-ID-s) 

Setup
- Edit the Monday nodes to use your credential
- Edit the node labeled **CREATE ERROR ITEM** to point to your error log board and group name
- Edit the column IDs in the "Column Values" field of the **UPDATE** node to match the IDs of the fields on your error log board
- To trigger error logging, select this automation as the error workflow on any automation
	- For more detailed logging, add **Stop and Error** nodes in your workflow to send specific error messages to your board.

## 🔗 Nodes Used

Monday.com

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
