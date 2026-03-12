# 🤝 Create Salesforce accounts based on Google Sheets data

> ⚡ **19,265 views** · 🤝 [CRM & Sales Operations](../)

## Description

This workflow shows a no code approach to creating Salesforce accounts and contacts based on data coming from Google Sheets.

![image.png](fileId:667)

To run the workflow:

1. Make sure you have both Google Sheets and Salesforce authenticated with n8n.
2. Have a Google Sheet with contacts and their account names ready, copy the respective sheet ID from the URL:
![image.png](fileId:666)
3. Add the sheet ID to the Google Sheet node of the workflow:
![image.png](fileId:668)
4. Hit **Execute Workflow**

Here is how it works:

The workflow first searches for existing Salesforce accounts by name. It then branches out depending on whether the account already exists in Salesforce or not. If an account does not exist yet, it will be created. The data is then normalised before both branches converge again. Finally the contacts are created or updated as needed in Salesforce.

## 🔗 Nodes Used

Google Sheets, Rename Keys, Start, Salesforce

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
