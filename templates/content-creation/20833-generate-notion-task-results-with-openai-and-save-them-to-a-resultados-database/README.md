# 🎬 Generate Notion task results with OpenAI and save them to a Resultados database

> ⚡ **0 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick Overview
This workflow receives a Notion task (via webhook or as a sub-workflow input), enriches it with related Notion context, uses OpenAI to generate one or more task results, and then creates a separate page for each result in a Notion “Resultados” database.

## How it works
1. Receives a POST request via webhook or is triggered as a sub-workflow with `tarefa`, `data_sources`, and `participante` inputs.
2. Calls a separate n8n workflow (“Enriquecer Página do Notion”) to fetch the task’s expanded context from Notion, including parent items, projects, taxonomies, notes, and knowledge pages.
3. Normalizes the Notion content into structured context fields (function rules, task details, project, taxonomies, notes, and knowledge) to guide generation.
4. Sends the structured context to OpenAI (GPT model with a JSON schema) to generate an array of results, each with a title, content, and emoji.
5. Splits the generated results into individual items and iterates through them.
6. Creates a new page in the Notion “Resultados” database for each result, linking it back to the task (and parent task), and relating the referenced taxonomies, notes, and knowledge items.

## Setup
1. Add OpenAI credentials and select the model you want to use in the OpenAI node.
2. Add a Notion bearer token (HTTP Bearer Auth) with access to the databases/pages referenced by the workflow and sub-workflow.
3. Import and configure the “Enriquecer Página do Notion” workflow and select its workflow ID in the execute-workflow step.
4. Ensure your Notion workspace includes a database named “Resultados” in `data_sources` and that it has the expected properties/relations (Nome, Conteúdo, ✅ Tarefas, 📝 Anotações, 📚 Conhecimentos, 🏷️ Taxonomias).
5. If using the webhook trigger, copy the webhook URL and send a POST body containing `tarefa`, `data_sources`, and `participante` from the calling system or workflow.

## 🔗 Nodes Used

HTTP Request, Webhook, Execute Sub-workflow, Execute Workflow Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
