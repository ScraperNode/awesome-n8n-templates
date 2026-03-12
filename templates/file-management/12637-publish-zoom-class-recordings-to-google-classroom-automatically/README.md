# 📁 Publish Zoom class recordings to Google Classroom automatically

> ⚡ **47 views** · 📁 [File Management](../)

## Description

## About
This flow is ideal for online schools that use Zoom to teach classes and Google Classroom for storing materials and homework.

It listens for Zoom webhooks that come after each recorded call is uploaded to Zoom Cloud (you'll need Zoom paid plan).
When new meeting comes, it filters out calls that last less than 30 mins. 
After duration check, it checks if there is a Google Class that matches the call name. Your call must be named exactly as the Google Class you want the call to be uploaded to. 
If the class is found, it will extract the Class ID. This flow assumes that you have a specific topic used for storing class recordings and materials, so it will look for this topic and upload the material. If topic is not found, you'll get an email.

## Requirements
You'll need a:
- Zoom paid plan that supports Zoom Cloud
- Google cloud console to set up Classroom API and Gmail API
- OpenAI API key or any other provider

## 🔗 Nodes Used

HTTP Request, Webhook, Gmail, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
