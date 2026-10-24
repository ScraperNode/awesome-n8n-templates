# ⚡ Groom Nirvana GTD inbox tasks with MCP and OpenAI GPT-5-nano

> ⚡ **14 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow runs manually to fetch inbox tasks from Nirvana (via its MCP API), uses OpenAI to rewrite each task title and clean up the notes into a consistent GTD format, and updates the tasks back in Nirvana with the revised name, note, and a "work" tag.

## How it works
1. Starts when you click “Execute workflow” in n8n.
2. Retrieves up to 10 tasks from the Nirvana inbox using the Nirvana MCP API and includes each task’s notes.
3. Processes tasks one by one and sends each task name and note to OpenAI with instructions to generate a structured suggested name and a cleaned note.
4. Validates and auto-fixes the AI response to match the required JSON structure (current_name, suggested_name, cleaned_note).
5. Maps the structured output into Nirvana’s task update fields (id, name, note).
6. Updates each task in Nirvana via the MCP API, setting the new name and note, adding the "work" tag, and recording a progress message.

## Setup
1. Add an OpenAI API credential and select the model in the OpenAI chat model configuration.
2. Generate a Nirvana MCP bearer token (https://mcp.nirvanahq.com/tokens) and set up an HTTP Bearer Auth credential for the Nirvana MCP Get and Update steps.
3. Confirm the Nirvana MCP endpoint URL (https://mcp.nirvanahq.com/mcp) and adjust the get_tasks parameters (limit, state, include_notes, etc.) to match what you want to process.
4. Optionally edit the structured output schema and the OpenAI instructions if you want different naming rules, note-cleaning behavior, or tags applied during updates.

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Structured Output Parser, MCP Client

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
