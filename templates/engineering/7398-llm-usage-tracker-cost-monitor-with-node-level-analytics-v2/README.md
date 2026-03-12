# ⚒️ LLM usage tracker & cost monitor with node-level analytics (v2)

> ⚡ **1,400 views** · ⚒️ [Engineering](../)

## Description

# LLM Cost Monitor & Usage Tracker for n8n

&gt; v2: Now it can read multiple types of LLM usages. Better dynamic approach for reading model usage. 

## 🎯 What This Workflow Does

This workflow provides comprehensive monitoring and cost tracking for all LLM/AI agent usage across your n8n workflows. It extracts detailed token usage data from any workflow execution and calculates precise costs based on current model pricing. 

### The Problem It Solves
When running LLM nodes in n8n workflows, the token usage and intermediate data are not directly accessible within the same workflow. This monitoring workflow bridges that gap by:
- Retrieving execution data using the execution ID
- Extracting all LLM usage from any nested structure
- Calculating costs with customizable pricing
- Providing detailed analytics per node and model
- WARNING: it works after the full execution of the workflow (i.e. you can't get this data before completion of all tasks in the workflow)

## ⚙️ Setup Instructions

### Prerequisites
1. **Experience Required**: Basic familiarity with n8n LLM nodes and AI agents
2. **Agent Configuration**: In your monitored workflows, go to agent settings and enable **"Return Intermediate Steps"** 
3. For getting execution data, you need to set upthe  n8n API in your instance (also available onthe  free version) 


### Installation Steps
1. Import this monitoring workflow into your n8n instance
2. Go to Settings &gt;&gt; select n8n API from left bar &gt;&gt; define an API. Now you can add this as the credential for your "Get an Execution" node
3. Configure your model name mappings in the **"Standardize Names"** node
4. Update model pricing in the **"Model Prices"** node (prices per 1M tokens)
5. To monitor a workflow:
   - Add an **"Execute Workflow"** node at the end of your target workflow
   - Select this monitoring workflow
   - **Important**: Turn OFF "Wait For Sub-Workflow Completion"
   - Pass the execution ID as input

## 🔧 Customization

### When You See Errors
If the workflow enters the error path, it means an undefined model was detected. Simply:
1. Add the model name to the **standardize_names_dic** 
2. Add its pricing to the **model_price_dic**
3. Re-run the workflow

### Configurable Elements
- **Model Name Mapping**: Standardize different model name variations (e.g., "gpt-4-0613" → "gpt-4")
- **Pricing Dictionary**: Set costs per million tokens for input/output
- **Extraction Depth**: Captures tokens from any nesting level automatically

## 📊 Output Data

### Per LLM Call
- **Cost Breakdown**: Prompt, completion, and total costs in USD
- **Token Metrics**: Prompt tokens, completion tokens, total tokens
- **Performance**: Execution time, start time, finish reason
- **Content Preview**: First 100 chars of input/output for debugging
- **Model Parameters**: Temperature, max tokens, timeout, retry count
- **Execution Context**: Workflow name, node name, execution status
- **Flow Tracking**: Previous nodes chain

### Summary Statistics
- Total executions and costs
- Breakdown by model type
- Breakdown by node
- Average cost per call
- Total execution time

## ✨ Key Benefits

- **No External Dependencies**: Everything runs within n8n
- **Universal Compatibility**: Works with any workflow structure
- **Automatic Detection**: Finds LLM usage regardless of nesting
- **Real-time Monitoring**: Track costs as workflows execute
- **Debugging Support**: Preview actual prompts and responses
- **Scalable**: Handles multiple models and complex workflows

## 📝 Example Use Cases

- **Cost Optimization**: Identify expensive nodes and optimize prompts
- **Usage Analytics**: Track token consumption across teams/projects
- **Budget Monitoring**: Set alerts based on cost thresholds
- **Performance Analysis**: Find slow-running LLM calls
- **Debugging**: Review actual inputs/outputs without logs
- **Compliance**: Audit AI usage across your organization

## 🚀 Quick Start

1. Import workflow
2. Update model prices (if needed)
3. Add monitoring to any workflow with the Execute Workflow node
4. View detailed cost breakdowns instantly

---

*Note: Prices are configured per million tokens. Default includes GPT-4, GPT-3.5, Claude, and other popular models. Add custom models as needed.*

## 🔗 Nodes Used

Stop and Error, n8n, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
