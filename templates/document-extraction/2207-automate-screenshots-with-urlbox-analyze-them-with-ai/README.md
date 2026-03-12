# 🔬 Automate screenshots with URLbox & analyze them with AI

> ⚡ **4,360 views** · 🔬 [Document Extraction & Analysis](../)

## Description

In this automation we first make a screenshot with a screenshot API called URLbox and then send this screenshot into the OpenAI API and analyze it.

You can extend this automation by the way you want to ingest the website url's & names into this workflow. 

Options as data source:
- Postgres
- Google Sheets
- Your CRM
- ...

**Setup:**
- Replace Website & URL in Setup Node
- Put in your URLbox API Key
- Put in your OpenAI credentials


[**Click here for a blog article with more information on the automation.**](https://n8n-automation.com/2024/01/11/open-ai-vision-api/)

## 🔗 Nodes Used

HTTP Request, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
