# 📋 Orchestrate sequential Notion task execution for participants with webhooks

> ⚡ **0 views** · 📋 [Project Management](../)

## Description

## Quick overview
This workflow retrieves all child blocks from a Notion page or block ID, handling Notion API pagination by recursively calling itself until all content is collected.

## How it works
1. Receives an input containing the Notion page or block ID (and optional accumulated results and cursor for pagination).
2. Calls the Notion API to fetch up to 100 child blocks for the given block ID, using the provided cursor when present.
3. Checks the Notion response field `has_more` to determine whether additional pages of blocks exist.
4. If more blocks exist, re-runs the same workflow with `next_cursor` and the blocks accumulated so far to continue pagination.
5. When no more pages exist, merges all retrieved blocks into a single `results` array and outputs the consolidated content.

## Setup
1. Add a Notion API credential and ensure it has access to the target page or block.
2. Create an n8n variable named `Notion_Version` and set it to the Notion API version you want to use.
3. In the “Buscar Próxima Página” step, select this same workflow so it can call itself recursively.

## 🔗 Nodes Used

HTTP Request, Webhook, Execute Sub-workflow, Execute Workflow Trigger, Filter, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
