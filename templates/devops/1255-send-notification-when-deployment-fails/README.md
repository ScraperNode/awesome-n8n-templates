# ⚙️ Send notification when deployment fails

> ⚡ **1,161 views** · ⚙️ [DevOps & CI/CD](../)

## Description

This workflow sends a message on Slack when site deployment fails.

![workflow-screenshot](fileId:546)

**Netlify Trigger node:** This node triggers the workflow when the site deployment fails.

**Slack node:** This node sends a message on Slack alerting the team about the failed deployment. If you want to send a message to a different platform, replace the Slack node with the node of the respective platform.

## 🔗 Nodes Used

Slack, Netlify Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
