# 🔬 AI-powered Loom video Q&A with Gemini-2.5 and Slack notifications

> ⚡ **999 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How to use the workflow
This workflow takes a Loom link, extracts the video ID, uses the Loom API to download the video, then sends it to Gemini along with your question. Finally, it sends the output to Slack. 

To use it, you just need to add your own [API key for Gemini](https://aistudio.google.com/app/apikey) and Slack connection. 

Click the link above to get your Gemini API key, then add a generic "Query auth" type credential in n8n. The name will be "key" and the value will be your API key.

One way to customize this workflow would be to make the trigger any received email, extract the Loom link, and run an auto-prompt like "Describe this video in detail".

## 🔗 Nodes Used

HTTP Request, Slack, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
