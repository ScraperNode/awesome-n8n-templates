# 🔧 Form with dynamic dropdown field

> ⚡ **7,740 views** · 🔧 [Miscellaneous](../)

## Description

This workflow creates a customizable form with a dynamic dropdown field that automatically updates its options from an external data source. 

### How it works

- The workflow polls an external data source (Google Sheets in this example) at regular intervals
- New values are processed and formatted for the dropdown
- The form automatically updates with the new dropdown options

### Set up steps

**Configure your data source:**

- Default setup uses Google Sheets 
	- replace with credentials for your sheet
	- set up the update frequency
- Or modify to use any other data source (API, database, etc.)

**Adjust the form configuration:**

- Customize the form title and description
- Add or modify form fields as needed
- The template includes the dropdown field by default

**Connect form submissions:**

- Use the "Execute Workflow" node to process form submissions

This template provides a foundation for creating dynamic forms that stay synchronized with your data sources, making it ideal for situations where dropdown options need to reflect current data.

## 🔗 Nodes Used

Google Sheets, Execute Sub-workflow, n8n, Google Sheets Trigger, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
