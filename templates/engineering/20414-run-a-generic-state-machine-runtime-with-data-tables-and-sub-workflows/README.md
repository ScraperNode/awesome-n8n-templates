# ⚒️ Run a generic state machine runtime with Data Tables and sub-workflows

> ⚡ **2 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow acts as a generic state-machine runtime in n8n, replaying a case from an event stream stored in Data Tables, validating and appending new events, and optionally dispatching an entered-state task by starting a bound n8n sub-workflow asynchronously.

## How it works
1. Receives an execution request from another workflow and validates the input event (or an inspect-only request) and its identifiers.
2. Loads and validates state-machine definitions from an n8n Data Table catalog.
3. Reads the case’s existing events from an n8n Data Table, replays them to reconstruct the current state, and checks whether the requested transition is allowed (or returns the current status for inspect).
4. If the event is accepted and not a duplicate, appends the new event to the case event stream Data Table with the next sequence number and resolved correlation/causation details.
5. If the entered target state declares a task, looks up the machine/version/task binding in a Data Table and prepares a task invocation payload.
6. If a binding is available, starts the bound n8n workflow asynchronously and returns the applied transition result along with dispatch status, otherwise returns the applied transition result with an “unavailable” dispatch reason.

## Setup
1. Create and connect three n8n Data Tables for machine definitions, the case event stream, and task bindings, and update the Data Table IDs in the corresponding Data Table nodes.
2. Populate the machine definitions table with JSON definitions that include matching machine/version columns and exactly one default flag in the catalog.
3. Populate the task bindings table with one row per machine + version + task that maps to a published n8n workflowId to run for that task.
4. Call this workflow from an adapter workflow using Execute Workflow and pass either {"caseId":"...","operation":"inspect"} or an event envelope including caseId, eventId, type, payload, and (for new cases) machine and machineVersion.

## 🔗 Nodes Used

Execute Sub-workflow, Execute Workflow Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
