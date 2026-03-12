# ⚙️ Meraki packet loss and latency alerts to Microsoft Teams

> ⚡ **5,297 views** · ⚙️ [DevOps & CI/CD](../)

## Description

This Template gives the ability to monitor all uplinks for your Meraki Dashboard and then alert your team in a method you prefer. This example is a Teams notification to our Dispatch Channel

![image.png](fileId:777)

Setup will probably take around 30 minutes to 1h provided with the Template. Most time intensive steps are getting a Meraki API key which I go over and setting up the Teams node which n8n has good documentation for.

Tutorial & explanation https://www.youtube.com/watch?v=JvaN0dNwRNU

## 🔗 Nodes Used

HTTP Request, Redis, Microsoft Teams, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
