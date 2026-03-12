# ⚙️ Create an automated workitem(incident/bug/userstory) in azure devops

> ⚡ **0 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Who is this template for?

This template can be used by any automator who wants to **create a workitem(incident/user story/bugs)** in **azure devops** whenever an alert raised by systems.

## How it works

- Each time an alert raised in system( for ex: Elastic raises an alert for missing host or domain).
- Workflow reads an alert and creates a workitem in **azure devops**
- Workflow can be customized to send any required information as possible in **azure devops**

## Setup Instructions
- **Azure DevOps Organization and Project:** Make sure you have access to an Azure DevOps organization and a project where the work item will be created.
- **Personal Access Token (PAT):** You need a Personal Access Token with permissions to create work items. You can generate a PAT from the Azure DevOps user settings.

## 🔗 Nodes Used

Cron, HTTP Request, Elasticsearch

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
