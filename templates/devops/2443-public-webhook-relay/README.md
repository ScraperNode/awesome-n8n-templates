# ⚙️ Public webhook relay

> ⚡ **1,545 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Disclaimer
This template only works on n8n local instances!

## How it Works
This workflow allows you to to receive webhooks from the public web and have your local workflow catch them, without any remote proxy. It is very useful for running quick tests without exposing your dev server. All you have to do is activate the workflow and use the public address as defined below.

## Set up steps
If you use the default key-value storage, there are only three steps:
1. Install the *@horka.tv/n8n-nodes-storage-kv* community node
2. Put your n8n workflow address in **Local Webhook Address**
3. Activate the workflow and, from *Executions*, note down your public webhook token from the inputs to **Get Latest Requests**. 

You can now use https://webhook.site/[YOUR TOKEN] as a webhook destination, to receive webhook requests from the public web.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
