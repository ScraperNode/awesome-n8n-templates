# ⚒️ Track AI agent token usage and estimate costs in Google Sheets

> ⚡ **16,706 views** · ⚒️ [Engineering](../)

## Description

![image.png](fileId:1659)
### This n8n template demonstrates how to obtain token usage from AI Agents and places the data into a spreadsheet that calculates the estimated cost of the execution.

Obtaining the token usage from AI Agents is tricky, because it doesn't provide all the data from tool calls. This workflow taps into the workflow execution metadata to extract token usage information.

Works well with OpenAI, Google and Anthropic. Other LLM providers might need small tweaks.

### How it works
1. The AI Agent executes and then calls a subworkflow to calculate the token usage.
2. The data is stored in Google Sheets
3. The spreadsheet has formulas to calculate the estimated cost of the execution.

### How to use
- The AI Agent is used as an example. Feel free to replace this with other agents you have.
- Call the subworkflow AFTER all the other branches have finished executing.

### Requirements
- LLM account (OpenAI, Gemini...) for API usage.
- Google Drive and Sheets credentials
- n8n API key of your instance

## 🔗 Nodes Used

Google Sheets, Execute Sub-workflow, n8n, Execute Workflow Trigger, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
