# 🔧 Send Onfleet driver signup messages in Slack

> ⚡ **476 views** · 🔧 [Miscellaneous](../)

## Description

**Summary**

Onfleet is a last-mile delivery software that provides end-to-end route planning, dispatch, communication, and analytics to handle the heavy lifting while you can focus on your customers.

This workflow template listens to Onfleet **driver sign-up events** and automatically **notifies you on Slack**.

**Configurations**

- Update the Onfleet node with your own Onfleet credentials, to register for an **Onfleet API key**, please visit https://onfleet.com/signup to get started
- Update the Slack node with your own Slack credentials
- Update the Slack channel to something that exists in your Slack workspace, the default is set to `#new-driver-signup` in this example which may not apply to your workspace
- Update the Slack message to something customized, ideally with driver information such as phone number and name

## 🔗 Nodes Used

Slack, Onfleet Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
