# 📋 Send alert when data is created in app/database

> ⚡ **2,994 views** · 📋 [Project Management](../)

## Description

This template shows how you can take any event from any service, transform its data and send an alert to your desired app. 

Specifically, this example monitors a **Linear project** for new bug submissions. Then it only sends a **Slack notification** to a channel if a new bug is urgent. You can swap the Linear trigger for another Task Management app such as Jira or Asana; or an entirely different usecase.

Setup instructions are located inside the workflow template.

## 🔗 Nodes Used

Slack, Linear Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
