# 📁 Download and compress folder from S3 to ZIP file

> ⚡ **1,727 views** · 📁 [File Management](../)

## Description

This workflow downloads all files from a specific folder in a S3 Bucket and compresses them so you can download it via n8n or do further processings.

Fill in your **Credentials and Settings** in the Nodes marked with _"*"_.

Might serve well as Blueprint or as manual Download for S3 Folders. 

Since I found it rather tricky to compress all binary files into one zip file I figured might it be an interesting Template. 

**Hint:**
This is the expression to get every binary key to compress them dynamically. 
```{{ Object.keys($binary).join(',') }}```
(used in the "Compress"-Node)

![Image](https://cloud.let-the-work-flow.com/logo-64.png)
Enjoy the Workflow! ❤️ 
https://let-the-work-flow.com
Workflow Automation & Development

## 🔗 Nodes Used

AWS S3

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
