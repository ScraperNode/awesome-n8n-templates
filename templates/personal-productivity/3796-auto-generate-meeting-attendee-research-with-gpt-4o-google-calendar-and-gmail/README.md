# ⚡ Auto-generate meeting attendee research with GPT-4o, Google Calendar, and Gmail

> ⚡ **8,411 views** · ⚡ [Personal Productivity](../)

## Description

### How it works:

Whenever a new event is scheduled on your Google Calendar, this workflow generates a Meeting Briefing email, giving an overview of each person on the call and the company they work for.

It makes use of the [web search](https://platform.openai.com/docs/guides/tools-web-search?api-mode=responses) tool on the OpenAI Responses API to make lookups.

The workflow triggers when a new event is added to the calendar, loops over each attendee, generating reports on each person and their company, collates the results, and sends the briefing as an email.

### Set up steps:

- Add your credentials for Google Calendar (for viewing events) and Gmail (to send the email)
- Add your OpenAI credentials as a Header Auth on the Company Search and Person Search nodes.
	- Name: Authorization
	- Value: Bearer {{ YOUR_API_KEY }}
- Edit the "Edit Fields" node with the email that you want to send the briefing to, and a short bit of context about yourself.

## 🔗 Nodes Used

HTTP Request, Gmail, Google Calendar Trigger, Markdown, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
