# 🤝 Upload leads from a CSV file to Pipedrive CRM

> ⚡ **3,113 views** · 🤝 [CRM & Sales Operations](../)

## Description

This workflow gets leads' contacts from a CSV file and adds it to the Pipedrive CRM by creating an organization and a person. The CSV file in this workflow serves as a universal connector allowing you to export contacts from any platform like LinkedIn, Facebook, etc.

## Prerequisites
- Google account and [Google credentials](https://docs.n8n.io/integrations/builtin/credentials/google/)
- Pipedrive account and [Pipedrive credentials](https://docs.n8n.io/integrations/builtin/credentials/pipedrive/)

## How it works
1. The Google Drive Trigger node starts the workflow when a new CSV file is uploaded to a specific folder in Google Drive.
2. Google Drive node downloads the CSV file.
3. Spreadsheet File node reads data from the CSV file and sends the output to the Merge node. This Spreadsheet File's output becomes the input 1 for the Merge node.
4. Meanwhile, the Pipedrive node gets the same list of contacts from the CSV file.
5. IF node checks if Pipedrive has these contacts already created previously and sends the checked results to the Merge node. These results arrive at the Merge node as input 2.
6. Merge node compares two inputs via email and removes the matches. 
7. Pipedrive node creates new contacts based on the data provided by the Merge node with necessary details such as organization and notes.

## 🔗 Nodes Used

Pipedrive, Spreadsheet File, Google Drive, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
