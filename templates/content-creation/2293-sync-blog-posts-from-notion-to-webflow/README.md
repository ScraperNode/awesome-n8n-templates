# 🎬 Sync blog posts from Notion to Webflow

> ⚡ **3,232 views** · 🎬 [Content Creation & Video](../)

## Description

## Who is this for?
This template is for everyone who manages their blog entries in Notion and want to have an easy way to transform them to Webflow.

## What this workflow does
This workflow syncs your blog posts saved in a Notion Database once a day to Webflow.
- Sync Notion properties, rich text and cover image with your collection.
- Works with most elements: H1, H2, H3, normal text, bold text, italic text, links, quotes, bulleted lists, numbered lists, and images (under 4MB).

## Set up steps
- Connect your accounts.
- Add a "slug" field in Notion.
- Add a "Sync to Webflow?" checkbox in Notion.
- Run a test and map your collection data.

Whenever the workflow runs, all the checked posts will be updated in the Webflow collection, whether it's a new post or an existing one.

## 🔗 Nodes Used

Slack, Webflow, Notion, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
