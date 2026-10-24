# 🎫 Send Jira high priority issue alerts to Slack, Google Chat and email

> ⚡ **252 views** · 🎫 [Ticket Management & Triage](../)

## Description

## How it works
- Triggered via Jira webhook when a HIGH priority issue is created in your project
- Simultaneously sends alerts to Slack, Google Chat, and an escalation email to the configured manager(s)

## Set up steps
- Configure the **ON JIRA ISSUE CREATED** node with your `Jira project key`
- Fill in the **CONFIGURATION** node: `JIRA_DOMAIN`, `MANAGER_EMAILS`
- Connect credentials: Jira API, Gmail (OAuth2), Slack (OAuth2), Google Chat (Service Account)
- Watch tutorial to configure google chat node properly

## 🔗 Nodes Used

Slack, Jira Trigger, Gmail, Google Chat

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
