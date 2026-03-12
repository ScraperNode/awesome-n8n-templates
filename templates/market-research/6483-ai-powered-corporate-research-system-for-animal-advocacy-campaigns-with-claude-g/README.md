# 📊 AI-powered corporate research system for animal advocacy campaigns with Claude & Gemini

> ⚡ **331 views** · 📊 [Market Research & Insights](../)

## Description

## Who’s it for 🎯  
This workflow is designed for **animal advocacy campaigners, strategists, and researchers** who need detailed intelligence on corporate targets and their key stakeholders like executives, investors, and suppliers.

## How it works / What it does ⚙️  
It uses the [Multi-tool Research Agent](https://n8n.io/workflows/5588-multi-tool-research-agent-for-animal-advocacy-with-openrouter-serper-and-open-paws-db/) subworkflow to research a target company, extract relevant sub-targets, and then runs focused research on each sub-target. It compiles all findings into a detailed HTML report outlining tailored campaign tactics.

## How to set up 🛠️  
1. Import this workflow and the [Multi-tool Research Agent subworkflow](https://n8n.io/workflows/5588-multi-tool-research-agent-for-animal-advocacy-with-openrouter-serper-and-open-paws-db/).  
2. Configure API credentials in n8n.  
3. Set the target company and campaign details.  
4. Test the workflow to verify multi-level research and report generation.

## Requirements 📋  
- n8n instance with internet access  
- Valid API keys 
- The Multi-tool Research Agent subworkflow installed and linked  
- Optional email node for sending reports

## How to customize 🔧  
- Modify target inputs and sub-target extraction for different industries.  
- Adjust research prompts in the subworkflow for style or focus.  
- Customize the HTML report template for branding.  
- Attach an email node to send reports automatically or route output as needed.  
- Add error handling or branching for campaign specifics.

---

Use this template to generate strategic, research-driven campaigns with actionable intelligence on complex corporate targets.

## 🔗 Nodes Used

Execute Sub-workflow, Execute Workflow Trigger, Basic LLM Chain, Information Extractor, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
