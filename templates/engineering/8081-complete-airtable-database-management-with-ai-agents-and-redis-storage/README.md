# ⚒️ Complete Airtable database management with AI agents and Redis storage

> ⚡ **237 views** · ⚒️ [Engineering](../)

## Description

## What this workflow does
Complete Airtable database management system using MCP (Model Context Protocol) for AI agents. Create bases, tables with complex field types, manage records, and maintain state with Redis storage.

## Setup steps
1. Add your Airtable Personal Access Token to credentials
2. Configure Redis connection for ID storage
3. Get your workspace ID from Airtable (starts with wsp...)
4. Connect to MCP Server Trigger
5. Configure your AI agent with the provided instructions

## Key features
- Create new Airtable bases and custom tables
- Support for all field types (date, number, select, etc.) 
- Full CRUD operations on records
- Rename tables and fields
- Store base/workspace IDs to avoid repeated requests
- Generic operations work with ANY Airtable structure

## Included operations
- create_base, create_custom_table, add_field
- get_table_ids, get_existing_records  
- update_record, rename_table, rename_fields
- delete_record
- get/set base_id and workspace_id (Redis storage)

## Notes
Check sticky notes in workflow for ID locations and field type requirements.

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Redis Chat Memory, Chat Trigger, MCP Client Tool, MCP Server Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
