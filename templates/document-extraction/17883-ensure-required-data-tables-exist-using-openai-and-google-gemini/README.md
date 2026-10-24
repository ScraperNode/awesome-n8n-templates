# 🔬 Ensure required data tables exist using OpenAI and Google Gemini

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow is called by another n8n workflow to ensure a specific n8n Data Table exists, checking existing tables first and creating the table with an OpenAI-powered agent and Data Table tools when it is missing.

## How it works
1. Receives inputs from an Execute Workflow trigger containing a target Data Table name and a desired table structure.
2. Lists all existing n8n Data Tables and iterates through them to look for a table with the requested name.
3. When a matching table is found, it records a flag in execution data to indicate the table already exists.
4. If no matching table is found, it sends the requested table name and columns to an OpenAI chat model via an AI agent.
5. The AI agent selects an appropriate n8n Data Table tool (1–5 columns supported) and creates the new Data Table with the generated column names.

## Setup
1. Add an OpenAI API credential for the OpenAI Chat Model used by the AI agent.
2. Ensure the workflow is executed by another workflow that passes `table_name` and `table_structure` as inputs to the Execute Workflow trigger.
3. Confirm the n8n instance has Data Tables enabled and that the executing user has permission to list and create tables.

## Requirements
- Master Workflow providing `table_name` and `table_structure`

## Additional info
Automatically create table if not exists from a SubNode

## 🔗 Nodes Used

Execute Workflow Trigger, AI Agent, Simple Memory, Google Gemini Chat Model, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
