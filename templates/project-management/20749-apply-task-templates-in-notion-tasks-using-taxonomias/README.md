# 📋 Apply task templates in Notion tasks using Taxonomias

> ⚡ **0 views** · 📋 [Project Management](../)

## Description

## Quick overview
This workflow receives a webhook request and duplicates related task templates in Notion into new tasks, rebuilding subtask and dependency relations between the copies and optionally updating the task owner based on required “Função” taxonomies.

## How it works
1. Receives a webhook request containing the source Notion task page and the Notion data sources to use.
2. Queries the Notion “Taxonomias” data source to identify the taxonomy entry that marks pages as “Modelos de tarefa”.
3. Calls a helper workflow to load the task’s related templates (including nested subitems) and flattens them into a deduplicated list to avoid repeated or circular references.
4. Creates a new Notion task page for each template in the “Tarefas” data source, copying allowed properties while removing model-only taxonomy tags and clearing reverse-reference relations.
5. Uses the saved template→copy mapping to rebuild relations (Subitem, Bloqueando, and ✅ Tarefas Relacionadas) so the newly created tasks link to each other correctly, and updates the new pages in Notion.
6. For each created task, loads its taxonomies and current assignee taxonomies and, when the task requires a “Função”, iterates through assignee candidates (and their nested group members) to assign the first participant whose function taxonomy matches.

## Setup
1. Create a Notion integration, share access to your “Tarefas” and “Taxonomias” databases, and add the integration token as an HTTP Bearer Auth credential in n8n.
2. Ensure the Notion properties referenced by the workflow exist and match these names: 🏷️ Taxonomia, 👥 Responsável, Integrantes, Subitem, Bloqueando, and ✅ Tarefas Relacionadas.
3. Import and publish the sub-workflow “Enriquecer Página do Notion”, then select its workflow ID in each Execute Workflow step.
4. Copy the webhook URL from the Webhook trigger and configure the source system to POST the expected payload, including a tarefa (page object) and data_sources entries titled “Tarefas” and “Taxonomias”.

## 🔗 Nodes Used

HTTP Request, Webhook, Execute Sub-workflow

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
