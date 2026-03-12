# 🔧 Send a Discord message when a certain Onfleet event happens

> ⚡ **1,034 views** · 🔧 [Miscellaneous](../)

## Description

**Summary**

Onfleet is a last-mile delivery software that provides end-to-end route planning, dispatch, communication, and analytics to handle the heavy lifting while you can focus on your customers.

This workflow template listens to an Onfleet event and communicates via a Discord message. You can easily streamline this with your Discord servers and users.

**Configurations**

- Update the Onfleet trigger node with your own Onfleet credentials, to register for an Onfleet API key, please visit https://onfleet.com/signup to get started
- You can easily change which Onfleet event to listen to. Learn more about Onfleet webhooks with [Onfleet Support](https://support.onfleet.com/hc/en-us/articles/360045763852-Webhooks)
- Update the Discord node with your Discord server webhook URL, add your own expressions to the `Text` field

## 🔗 Nodes Used

Discord, Onfleet Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
