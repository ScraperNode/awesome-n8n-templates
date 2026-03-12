# 📁 Compress binary files to zip format

> ⚡ **2,278 views** · 📁 [File Management](../)

## Description

This workflow allows you to compress binary files to zip format.

![Screenshot_20210127 n8n  ▶️3.png](https://f000.backblazeb2.com/file/n8n-website-images/a88b80ff0abc46e3adfd1fc68388ddd8.png)


**HTTP Request node:** The workflow uses the HTTP Request node to fetch files from the internet. If you want to fetch files from your local machine, replace it with the **Read Binary File** or **Read Binary Files** node.

**Compression node:** The Compression node compresses the file into a zip. If you want to compress the files to gzip, then select the gzip format instead.

Based on your use-case, you may want to write the files to your disk or upload it to Google Drive or Box. If you want to write the compressed file to your disk, replace the **Dropbox node** with the **Write Binary File node**, or if you want to upload the file to a different service, use the respective node.

## 🔗 Nodes Used

Dropbox, HTTP Request, Start

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
