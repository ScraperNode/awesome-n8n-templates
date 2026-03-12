# 🔬 Listen on new emails on a IMAP mailbox

> ⚡ **8,273 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Listen on new emails on a given IMAP mailbox. Converts the binary XML attachment to a stringified `xml`property on the `$data` object and converts it to JSON. The `Set`node could be replaced with `Function` nodes for example to do a conversion/mapping/transformation.

![workflow-screenshot](fileId:21)

The JSON is ultimately sent to a HTTP Endpoint via POST.

> This could be a starter for EDI purposes like receiving or transmitting XML data and conversion via JSON object property mapping.

## 🔗 Nodes Used

Email Trigger (IMAP), HTTP Request, Convert to/from binary data

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
