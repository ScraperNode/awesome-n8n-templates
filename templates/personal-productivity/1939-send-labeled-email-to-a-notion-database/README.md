# ⚡ Send labeled email to a Notion database

> ⚡ **7,639 views** · ⚡ [Personal Productivity](../)

## Description

This workflow sends the contents of an email to a Notion database. The email must be labeled with a specific label for the workflow to trigger. The email subject will be the title of the Notion page, and a snippet of the email body will be the content of the Notion page. The email link will be added to the Notion page as a property.

## Prerequisites

Notion account and [Notion credentials](https://docs.n8n.io/integrations/builtin/credentials/notion/).
Google account and [Google credentials](https://docs.n8n.io/integrations/builtin/credentials/google/).

## How it works

On scheduled intervals, find all emails with a specific label. For each email, check if the email already exists in the Notion database. If it does not exist, create a new page in the Notion database, otherwise do nothing. When the task in the Notion database is checked off, the label will be removed from the email.

### Setup

This workflow requires that you set up a Notion database or use an existing one with at least the following fields:

- Title (title)
- Thread ID (text)
- Email thread (URL)

Additionally, create a label that will be used to trigger the workflow in Gmail. In this workflow, the label is called "Notion".

## 🔗 Nodes Used

HTTP Request, Gmail, Notion, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
