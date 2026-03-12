# 🤝 Create Salesforce accounts based on Excel 365 data

> ⚡ **3,315 views** · 🤝 [CRM & Sales Operations](../)

## Description

This workflow shows a no code approach to creating Salesforce accounts and contacts based on data coming from Excel 365 (the online version of Microsoft Excel). For a version working with regular Excel files check out [this workflow](https://n8n.io/workflows/1794-create-salesforce-accounts-based-on-excel-file-data/) instead.

![image.png](fileId:672)

To run the workflow:

1. Make sure you have both Excel 365 and Salesforce authenticated with n8n.
2. Have a Microsoft Excel workbook with contacts and their account names ready:
![image.png](fileId:670)
3. Select the workbook and sheet in the Microsoft Excel node of the workflow, then configure the range to read data from:
![image.png](fileId:671)
4. Hit the **Execute Workflow** button at the bottom of the n8n canvas:
![image.png](fileId:669)

Here is how it works:

The workflow first searches for existing Salesforce accounts by name. It then branches out depending on whether the account already exists in Salesforce or not. If an account does not exist yet, it will be created. The data is then normalised before both branches converge again. Finally the contacts are created or updated as needed in Salesforce.

## 🔗 Nodes Used

Rename Keys, Start, Microsoft Excel 365, Salesforce

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
