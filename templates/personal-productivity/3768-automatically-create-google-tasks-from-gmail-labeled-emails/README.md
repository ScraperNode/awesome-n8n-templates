# ⚡ Automatically create Google Tasks from Gmail labeled emails

> ⚡ **1,281 views** · ⚡ [Personal Productivity](../)

## Description

### Automatically create Google Tasks from new Gmail emails labeled "To-Do".

**Who is this for?**
- This template is perfect for individuals and teams who want to boost their productivity by automatically converting important emails into actionable tasks in Google Tasks.

**What problem is this workflow solving**?
- Manually managing emails and creating tasks can be tedious. This workflow ensures you never miss a follow-up by instantly turning important emails into tasks without switching between apps.

**What this workflow does?**
- Watches for new emails in Gmail with the label "To-Do".
- Creates a new Google Task with the email subject as the task title and the email snippet as notes.
- Sets the task due date to 24 hours after the email is received.

**Setup**
- Create a label "To-Do" in your Gmail account if it doesn't already exist.
- Connect your Gmail and Google Tasks accounts to n8n using OAuth2 credentials.
- Import the workflow into n8n and activate it.

**How to customize this workflow to your needs?**
- Change the Gmail label to a different one (e.g., "Important", "Follow-up").
- Modify the due date logic in the expression if you want more/less time to complete tasks:
{{ $now.add(2, 'days').toISOString() }}
- Add additional Gmail filters (like only unread emails) to refine which emails create tasks.

## 🔗 Nodes Used

Google Tasks, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
