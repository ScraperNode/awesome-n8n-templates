# 🔒 Send TheHive alerts using SIGNL4

> ⚡ **1,012 views** · 🔒 [SecOps & Security Automation](../)

## Description

This sample workflow allows you to forward alerts from TheHive 5 to SIGNL4 in order to send reliable alerts to your team.

There are two nodes for testing the TheHive connection ("TheHive Read Alerts" and "TheHive Create Alert").

The node "TheHive Webhook Request" will receive requests for new alerts from TheHive. You need to configure the webhook and the notifications in TheHive accordingly.

The node "SIGNL4 Send Alert" sends the alert to SIGNL4 and the node "SIGNL4 Resolve Alert" will close the alert in SIGNL4 in case it has been closed in TheHive.

## 🔗 Nodes Used

Start, Webhook, SIGNL4, TheHive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
