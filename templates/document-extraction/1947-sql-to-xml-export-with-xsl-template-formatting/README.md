# 🔬 Sql to XML export with XSL template formatting

> ⚡ **2,144 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow demonstrates how to export SQL to XML and present the data nicely formatted using an XSL Template.

The upper part of the workflow starts with a webhook. Then it gets several random records from the SQL table and converts them into an XML string. Then a final XML file is created that contains a link to the XML Stylesheet file.

The lower part of the workflow contains a helper Webhook that reads an XSL Template from the GitHub gist and serves it back via the Respond to Webhook node. This is required to comply with the CORS rules of modern browsers. These rules dictate that both XML data and a stylesheet file should come from the same domain.

## 🔗 Nodes Used

HTTP Request, Webhook, Convert to/from binary data, MySQL

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
