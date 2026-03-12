# 🎣 Enrich new accounts in Pipedrive using Datagma API

> ⚡ **882 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

This workflow enriches new accounts in Pipedrive using Datagma API by adding data about ICP (ideal customer profile). Instead of Pipedrive, you can use any other CRM. In this example, ideal buyers are heads of sales/business development.

## Prerequisites
- Pipedrive account and [Pipedrive credentials](https://docs.n8n.io/integrations/builtin/credentials/pipedrive/)

## How it works
1. Pipedrive trigger node starts the workflow when a new company is created.
2. HTTP Request node queries data from Datagma.
3. Pipedrive node updates Pipedrive contact with new data from Datagma.
4. The Item Lists node simplifies returned data from Datagma that contain lists (arrays), enabling you to easily modify the structure for further processing without the need to use Function nodes and write custom JavaScript.
5. IF node identifies if the lead corresponds ICP.
6. HTTP Request node searches for emails in Datagma.
7. Set node prepares data for further merging.
8. Merge node combines data from multiple streams.
9. Pipedrive node adds a new person in Pipedrive.

## 🔗 Nodes Used

HTTP Request, Pipedrive, Pipedrive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
