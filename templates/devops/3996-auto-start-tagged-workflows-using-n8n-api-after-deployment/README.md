# ⚙️ Auto-start tagged workflows using n8n API after deployment

> ⚡ **199 views** · ⚙️ [DevOps & CI/CD](../)

## Description

**Auto Starter**

On importing workflows these will not be auto started, even if the old version was running. To fix this we created this workflow that can be run after n8n starts. It fits in our auto deploy pipeline and modified n8n container that will import workflows, start n8n and start the tagged workflows.

- Start this workflow after n8n starts.
- It will get all workflows in the running n8n instance.
- If the files have a tag **'Auto start'** the workflow will be started.

Check our *Export workflows with readable names* workflow for autostarting workflows after deployment.

**Configuration**
- You need a a **n8n api key** configured.

## 🔗 Nodes Used

n8n

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
