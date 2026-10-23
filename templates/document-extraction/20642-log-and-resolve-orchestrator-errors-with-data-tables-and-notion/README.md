# 🔬 Log and resolve orchestrator errors with data tables and Notion

> ⚡ **3 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This error-handling workflow triggers on a failed n8n execution, looks up related execution logs in n8n Data Tables, and updates Notion by creating a task report, marking each task as done or blocked, and setting the participant status based on whether tasks exist.

## How it works
1. Triggers when another workflow execution fails via the n8n Error Trigger.
2. Searches Notion for available data sources and keeps only sources with titles so it can locate the “Relatórios” data source.
3. Looks up the participant execution record in n8n Data Tables using the failed execution ID, then fetches the associated task log entries.
4. Loops through each non-empty task log entry, retrieves the corresponding Notion task page, and creates a Notion report page in the “Relatórios” data source with the error message and a link to the n8n execution.
5. If the task log indicates an error, updates the Notion task to “Bloqueada”, writes the blocker reason with a mention of the report page, and clears the responsible relation.
6. If the task log does not indicate an error, updates the Notion task to “Feita” and clears the responsible relation.
7. After all tasks are processed, updates the Notion participant page status to “Revisando” when tasks exist or “Ativo” when no tasks are found.

## Setup
1. Configure a Notion Bearer token (HTTP Bearer Auth) and ensure the integration has access to the databases/pages used, keeping the Notion-Version header set to 2026-03-11.
2. Select and populate the required n8n Data Tables and fields: a participant log table with executionId and participante, and a task log table with logParticipanteId, tarefa, message, and a boolean erro.
3. In Notion, ensure you have a data source titled “Relatórios” with the expected properties (Nome, Resumo, ✅ Tarefas relation, 👥 Participantes relation, Minutos number, Resultado select) and that the target task/participant pages have compatible Status/relations.
4. Set this workflow as the Error Workflow for your orchestrator (or target) workflow and test scenarios with no participant record, no tasks, and tasks with both success and failure outcomes.

## 🔗 Nodes Used

HTTP Request, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
