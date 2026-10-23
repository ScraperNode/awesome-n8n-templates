# ⚒️ Track AI agent token costs and store receipts with the n8n API and Data Tables

> ⚡ **224 views** · ⚒️ [Engineering](../)

## Description

Ever wondered how much your AI Agent is costing you per run?

I had no idea. You build an agent, it works great, but behind the scenes tokens are burning. And you just see the API-key cost as an aggregated value on Stripe, right? 

One workflow costs you $0.002. Another one quietly racks up $2.00 every time it fires. Without tracking, you're flying blind.

This workflow fixes that.

## Who is this for

Anyone running AI agents in n8n who wants to know what they actually cost before the bill surprises you.

## What it does

Every hour, it scans all your tagged (triggers on worklow TAGS) AI agent workflows and extracts the exact token usage per model, calculates the estimated cost in USD, and stores a receipt in an DataTable.

## Setup
- [ ] Create a DataTable called `execution_receipts` with columns: `workflowid` (text), `executionid` (text), `receipt` (text), `created_at` (text), `units` (number) — or import the CSV template
- [ ] Set your n8n API credential to your own instance on "Get AI Agent Workflows" and "Get Workflow Executions"
- [ ] Select your Data Table in "Save Receipt to Data Table"
- [ ] Tag your workflows you want to track with `agent`
- [ ] Try-out the workflow

## How it works

1. **Hourly Trigger** kicks off the workflow on a schedule
2. **Get AI Agent Workflows** fetches all workflows tagged with `agent` via the n8n API
3. **Loop Workflows** iterates through each workflow one by one
4. **Get Workflow Executions** pulls all execution data for the current workflow
5. **Extract Token Usage & Cost** parses each execution, detects which AI model was used, extracts token counts (input/output/total), and calculates the estimated USD cost using a built-in pricing table
5. **Save Receipt to DataTable** stores the receipt with workflow ID, execution ID, full token breakdown, cost, and timestamp

## Supported providers

- **Anthropic Claude**: claude-3 through claude-opus-4-7
- **OpenAI**: gpt-3.5 through gpt-4.1, o1/o3/o4 reasoning models
- **Google Gemini**: 1.5 through 2.5
- **Perplexity**: sonar family

New models are auto-detected. To add pricing for a newly released model, add one line to the `MODEL_RATES` table inside the code node.

## What each receipt contains

- Workflow ID and Execution ID
- Model(s) used
- Token breakdown (prompt, completion, total)
- Estimated cost in USD
- Timestamp

Self-hosted users may need to enable Data Tables with `N8N_ENABLED_MODULES=data-table` in their environment.

---

Like this workflow? Let me know! [Follow me on LinkedIn](https://www.linkedin.com/in/ben-van-steenbergen-9006b37/) for more n8n automation and AI agent builds.

Cheers,
Ben

## 🔗 Nodes Used

n8n, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
