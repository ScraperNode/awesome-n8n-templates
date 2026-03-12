# 📋 Check dependencies before completing Awork tasks (workaround)

> ⚡ **196 views** · 📋 [Project Management](../)

## Description

Awork currently does not support a check for open subtasks or open dependencies when setting a task status to done. This workflow offers you a simple workaround to add this functionality to Awork and notifies users when triggered. Multiple configuration options available.

**How it works**
* Triggered via Awork Webhook call on status change of tasks
* If task is marked as done, subtasks and/or dependent tasks are checked for their status
* If unfinished tasks are found, a status rollback to previous status is performed and user gets notified 

**Set up steps**
* Add webhook call to Awork
* Configure Awork API credentials
* Set up workflow configuration via setup node, e.g. user notification text, restrict to subtasks/dependency checks etc.

## 🔗 Nodes Used

HTTP Request, Webhook, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
