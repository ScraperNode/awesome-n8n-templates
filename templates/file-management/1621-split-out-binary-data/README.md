# 📁 Split out binary data

> ⚡ **8,078 views** · 📁 [File Management](../)

## Description

This workflows helps with processing binary data.

You'll often have binary objects with keys such as `attachment_0`, `attachment_1`, `attachment_2`, etc. attached to your items, for example when reading an incoming email.

This binary data is hard to process because it's not an array you can simply loop through.

This workflow solves this problem by providing a Function node that takes all incoming items and all their binary data and then returning a single item for each file with a `data` key containing your binary file.

Incoming binary data:
![image.png](fileId:635)

Processed binary data:
![image.png](fileId:636)

## 🔗 Nodes Used

Function, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
