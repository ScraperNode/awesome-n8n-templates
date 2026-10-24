# 📋 Escalate overdue and blocked Jira tickets with Gmail and Google Chat

> ⚡ **38 views** · 📋 [Project Management](../)

## Description

# How it works
- Fetches all open sprint tickets daily from your Jira project
- Analyzes each ticket for overdue days and blocked status
- Routes to the right escalation level: assignee email → team Google Chat alert → manager escalation

# Set up steps
- Add your Jira Software Cloud credentials in n8n
- Add your Gmail OAuth2 credentials in n8n
- Open the ⚙️ CONFIG node and fill in your 4 values (Jira domain, project key, manager email, Google Chat webhook)
- Test with the Manual Trigger, then enable the Schedule Trigger

## 🔗 Nodes Used

HTTP Request, Jira Software, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
