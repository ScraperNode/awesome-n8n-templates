# 📁 Evaluate counters and key-value storage with the KeyValue community node

> ⚡ **29 views** · 📁 [File Management](../)

## Description

## Quick overview
This workflow demonstrates the n8n KeyValue community node by using a counter to run one-time initialization logic per workflow, storing a per-day execution flag to allow the main logic only once per day, and showcasing basic directory, record, and counter operations.

## How it works
1. Starts when you manually execute the workflow.
2. Reads a KeyValue counter named after the current n8n workflow ID and runs a one-time “first execution” branch only when the counter does not yet exist.
3. Sets the workflow-ID counter in KeyValue to mark that the one-time initialization logic has been executed.
4. Reads a KeyValue record (keyed by workflow ID) from the businessprocess directory and compares its stored date with today’s date.
5. If today’s date is already stored, it stops in a “logic already executed” branch; otherwise it runs the main logic branch.
6. Writes today’s date back to KeyValue (businessprocess directory) to enforce “run once per day” behavior on subsequent executions.

## Setup
1. Install the KeyValue community node (n8n-nodes-keyvalue) in n8n under Settings → Community nodes.
2. Ensure your n8n instance has persistent filesystem storage for the KeyValue root directory (so counters and records survive restarts/containers).
3. If needed, update the directory names used for records (for example, businessprocess and dir1) to match your environment and naming conventions.

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
