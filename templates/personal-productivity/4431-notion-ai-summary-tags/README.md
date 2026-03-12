# ⚡ Notion AI summary & tags

> ⚡ **1,968 views** · ⚡ [Personal Productivity](../)

## Description

**What This Workflow Does:**

This n8n workflow automatically generates an AI-powered summary and relevant tags whenever a new row is added to your Notion database. 

Simply save any URL to your Notion database using the [Notion Web Clipper] Chrome extension or [Save to Notion]—on both desktop and mobile. 

This keeps all your saved content organized in one place instead of scattered across different platforms.

**How it works:**

1. The workflow is triggered when a new row is added to your Notion database (it checks for updates every minute).

2. It retrieves the content from the saved URL.

3. An AI agent analyzes the content to generate a summary and relevant tags.

4. The AI output is then formatted properly.

5. Finally, the formatted summary and tags are saved into the appropriate columns in your Notion database.


**Notes:**

Make sure your Notion database includes the following columns:

URL – Stores the content URL you want to summarize.

AI Summary – Where the AI-generated summary will be added.

Tags – Where the AI-generated tags will be saved.

## 🔗 Nodes Used

HTTP Request, Notion, Notion Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
