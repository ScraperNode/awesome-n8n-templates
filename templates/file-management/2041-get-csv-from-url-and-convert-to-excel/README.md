# 📁 Get CSV from URL and convert to Excel

> ⚡ **10,644 views** · 📁 [File Management](../)

## Description

This workflow demonstrates the conversion of a CSV file to Excel format.

First, an example CSV file is downloaded via a direct link. The source file is taken from the European Open Data Portal:
[https://data.europa.eu/data/datasets/veranstaltungsplaetze-potsdam-potsdam?locale=en](https://data.europa.eu/data/datasets/veranstaltungsplaetze-potsdam-potsdam?locale=en)

The binary data is then imported via the Spreadsheet File node and converted to Excel format.

N.B. Note that as of version 1.23.0 n8n, the Spreadsheet File node has been redesigned and is now called Convert to File node. Learn more on the release notes page: [https://docs.n8n.io/release-notes/#n8n1230](https://docs.n8n.io/release-notes/#n8n1230)

## 🔗 Nodes Used

HTTP Request, Spreadsheet File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
