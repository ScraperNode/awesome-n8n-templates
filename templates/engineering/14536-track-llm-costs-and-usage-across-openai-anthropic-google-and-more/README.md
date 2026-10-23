# ⚒️ Track LLM costs and usage across OpenAI, Anthropic, Google and more

> ⚡ **76 views** · ⚒️ [Engineering](../)

## Description

##  Installation Steps

1. Go to **Settings → n8n API** and create an API key
2. Add it as credential for the **Get Execution Data** node
3. Review model mappings in **Standardize Names** node
4. Review pricing in **Model Prices** node

##  To Monitor a Workflow

1. Add **Execute Workflow** node at the end of your target workflow
2. Select this monitoring workflow
3. **Turn OFF** "Wait For Sub-Workflow Completion"
4. Pass `{ "executionId": "{{ $execution.id }}" }` as input

##  Prerequisites

Enable **"Return Intermediate Steps"** in your AI Agent settings for best results.

##  Supported Providers 

**OpenAI** · **Anthropic** · **Google** · **DeepSeek** · **Meta** · **Mistral** · **xAI** · **Cohere** · **Alibaba Qwen** · **Moonshot Kimi**

### 120+ Model Variations Mapped
Includes all versioned variants (e.g., gpt-4o-2024-08-06 → gpt-4o)

Prices sourced from official provider pages (March 2026)

##  Output Data

### Per LLM Call
- Cost Breakdown (prompt, completion, total USD)
- Token Metrics (prompt, completion, total)
- Performance (execution time, finish reason)
- Content Preview (first 100 chars I/O)
- Model Parameters (temp, max tokens, timeout)
- Execution Context (workflow, node, status)
- Flow Tracking (previous nodes chain)

### Summary Statistics
- Total executions and costs
- Breakdown by model type
- Breakdown by node
- Average cost per call
- Total execution time



## 💡 You can do anything with this data!

- Store in a database for historical tracking
- Send to Teams as a cost alert
- Build dashboards with the summary data
- Set budget thresholds and trigger warnings
- Export to Google Sheets for reporting

## 🔗 Nodes Used

n8n, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
