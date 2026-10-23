# 📋 Create recurring Notion tasks from schedules using a task template

> ⚡ **0 views** · 📋 [Project Management](../)

## Description

## Quick Overview
This workflow receives a webhook request, queries Notion for active schedules due today or earlier, and creates new task pages in a Notion Tasks data source using the “Aderir ao modelo” template, then looks up the task’s responsible participant and triggers an n8n Orchestrator subworkflow.

## How it works
1. Receives a POST request via a webhook containing the Notion data source IDs for “Tarefas” and “Agendamentos”.
2. Calls the Notion API to list templates for the “Tarefas” data source and selects the template named “Aderir ao modelo”.
3. Queries the “Agendamentos” data source in Notion to fetch items with Status = “Ativo” and “Próxima execução” on or before today.
4. Iterates through each returned schedule and creates a new Notion page in “Tarefas” from the selected template, copying the “✅ Tarefas” relation into “✅ Tarefas Relacionadas” and setting Status to “Por Fazer”.
5. Aggregates the created tasks, waits briefly to allow Notion to apply template properties, and then retrieves the created task page.
6. Fetches the linked “👥 Responsável” page from Notion and passes that participant payload into an n8n “Orquestrador” workflow via an Execute Workflow call.

## Setup
1. Create a Notion integration, add its bearer token as an n8n HTTP Bearer Auth credential, and share access to the “Tarefas” and “Agendamentos” data sources with the integration.
2. Ensure the “Tarefas” data source has a template named “Aderir ao modelo” and that tasks created from it populate the “👥 Responsável” relation.
3. Verify the workflow’s Notion property names and status values match your workspace (for example “Status”, “Próxima execução”, “✅ Tarefas”, and “✅ Tarefas Relacionadas”, with statuses “Ativo” and “Por Fazer”).
4. Configure the webhook caller to send `body.data_sources` with entries titled exactly “Tarefas” and “Agendamentos” (each including the data source `id`).
5. Select or replace the referenced “Orquestrador” workflow in the Execute Workflow step and ensure it accepts a `participante` input.

## 🔗 Nodes Used

HTTP Request, Webhook, Execute Sub-workflow

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
