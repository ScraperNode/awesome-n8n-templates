# 📁 Respond with file download to incoming HTTP request

> ⚡ **6,151 views** · 📁 [File Management](../)

## Description

This simple workflow demonstrates how to get an end user's browser to download a file. It makes use of the [Content-Disposition](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition) header to set a filename and control the browser behaviour.

![image.png](fileId:709)

A use case could be the download of a PDF file at the end of an application process or to export data from a database without replacing the current page content in the browser.

With this approach, the current page remains open and the file is simply downloaded instead:

![image.png](fileId:710)

The original idea was first present [here](https://community.n8n.io/t/webhook-to-excel-file/11059/24?u=mutedjam) by @dickhoning in the n8n community.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
