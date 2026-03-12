# 🤝 Import CSV contacts to Notion database from Google Drive

> ⚡ **971 views** · 🤝 [CRM & Sales Operations](../)

## Description

## How to use
1. Get a .csv file with your contacts (you can download this from any contact manager app)
2. Set API key for Google Drive API, and Notion (you need to create a "connection" in Notion)
3. Create Database for your contacts in Notion
4. Choose which properties to extract from the .csv and pass it in to the Notion database. Right now, it transfer 4 pieces of information: full name, email, phone, and company.

## 🔗 Nodes Used

Google Drive, Notion, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
