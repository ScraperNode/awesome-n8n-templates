# ⚙️ Use Redis to rate-limit your low-code API

> ⚡ **2,505 views** · ⚙️ [DevOps & CI/CD](../)

## Description

This workflow demonstrates how to can use Redis to implement rate limits to your API.

![workflow-screenshot](fileId:538)

The workflow uses the incoming API key to uniquely identify the user and use it as a key in Redis. Every time a request is made, the value is incremented by one, and we check for the threshold using the IF node.

Duplicate the following Airtable to try out the workflow: https://airtable.com/shraudfG9XAvqkBpF

## 🔗 Nodes Used

Airtable, Function, Redis, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
