# 📊 Parse Ycombinator news page

> ⚡ **3,163 views** · 📊 [Market Research & Insights](../)

## Description

Extract data from a webpage (Ycombinator news page) and create a nice list using itemList node. It seems that current version in n8n (0.141.1) requires to extract each variable one by one. Hopefully in a futute it will be possible to create the table using just one itemList node.

Another nice feature of the workflow is an automatically generated file name with the resulting table. Check out the "fileName" option of the Spreadsheet File node:
 ```
"Ycombinator_news_{{new Date().toISOString().split('T', 1)[0]}}.{{$parameter[\"fileFormat\"]}}"

```

The resulting table is saved as .xls file and delivered via email

![workflow-screenshot](fileId:543)

## 🔗 Nodes Used

Send Email, HTTP Request, Spreadsheet File, Start, HTML Extract

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
