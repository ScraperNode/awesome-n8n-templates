# ⚡ Sync Outlook calendar events to Notion

> ⚡ **3,787 views** · ⚡ [Personal Productivity](../)

## Description

This workflow syncs Outlook Calendar events to a Notion database. The Outlook Calendar event must be within a specific time frame (default of within next year) for the workflow to pick up the event. The event subject will be the title of the Notion page, and the event link will be added to the Notion page as a property.

## Prerequisites

- Notion account and [Notion credentials](https://docs.n8n.io/integrations/builtin/credentials/notion/).
- Microsoft account and [Microsoft credentials](https://docs.n8n.io/integrations/builtin/credentials/microsoft/).

## How it works

On scheduled intervals, find all Outlook Calendar events within a specific time frame. For each event, check if the event already exists in the Notion database. If it does not exist, create a new page in the Notion database, otherwise update the existing page.

## Setup

This workflow requires that you set up a Notion database or use an existing one with at least the following fields:

- Title (title)
- Date (date)
- Event ID (text)
- Link (URL)

## 🔗 Nodes Used

HTTP Request, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
