# 🎬 Generate client-ready workflow diagrams from sales call transcripts with Claude

> ⚡ **50 views** · 🎬 [Content Creation & Video](../)

## Description

## Who it's for

This workflow is for automation agencies and n8n consultants who conduct discovery calls with prospects and want to instantly turn conversation transcripts into polished, client-ready workflow diagrams — without manual canvas work.

## How it works

1. A consultant pastes a sales call transcript into a form trigger.
2. A first AI agent (Claude) parses the transcript and extracts structured workflow briefs — one per identified business process — with titles, tools, logic, and step-by-step descriptions.
3. A code node splits the output into individual workflow items, one per identified process.
4. A second AI agent generates a complete n8n workflow JSON for each brief, using French business-oriented node names and proper canvas positioning.
5. A code node validates and parses the generated JSON to ensure structural integrity.
6. A third AI agent clusters nodes into logical business groups and generates canvas layout coordinates and sticky note annotations.
7. A fourth AI agent renames all nodes with clear, descriptive French labels following a consistent naming convention.
8. All renames and layout changes are applied, and the finalized workflow is published directly to an n8n instance via the API.

## How to set up

- [ ] Add Anthropic API credentials to all four Claude model nodes
- [ ] Set your n8n instance URL in the `Create Workflow via n8n API` node
- [ ] Add your n8n API key to the HTTP Request node for authentication
- [ ] Customize the form title and description field to match your intake process

## Requirements

- Anthropic API account (Claude Sonnet)
- Self-hosted n8n instance with API access enabled
- n8n API key

## How to customize

- Swap the form trigger for a webhook to integrate with your CRM or meeting note tool (e.g. Notion, HubSpot)
- Adjust the system prompts in each AI agent to change the node naming language, visual style, or number of nodes generated
- Add a Slack or email notification step after workflow creation to alert the team when a new client diagram is ready

## 🔗 Nodes Used

HTTP Request, AI Agent, Anthropic Chat Model, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
