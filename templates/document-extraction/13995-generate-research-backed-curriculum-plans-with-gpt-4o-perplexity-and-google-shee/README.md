# 🔬 Generate research-backed curriculum plans with GPT-4o, Perplexity and Google Sheets

> ⚡ **153 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How It Works
This workflow automates end-to-end curriculum planning using a multi-agent AI architecture in n8n. Designed for educators, instructional designers, and academic institutions, it eliminates the manual effort of researching, structuring, and assessing curriculum content. A Curriculum Supervisor Agent orchestrates three specialised sub-agents: a Research Agent (using Google Search, Perplexity, and Wikipedia), a Content Creation Agent (using GPT for drafting), and an Assessment Agent (using a calculator and code tools). Planning memory persists context across agent interactions. Once all agents complete their tasks, the Prepare Curriculum Data node formats the output, which is then stored in Google Sheets. This pipeline ensures coherent, research-backed, assessment-ready curriculum plans are generated and stored automatically with minimal human intervention.

## Setup Steps
1. Connect OpenAI credentials to Supervisor, Research, Content, and Assessment model nodes.
2. Add Google Custom Search API key to the Google Search Tool node.
3. Configure Perplexity API key in the Perplexity Research Tool node.
4. Authenticate Google Sheets with OAuth2; set target sheet in Store Curriculum Plan node.
5. Verify Planning Memory node is linked to the Supervisor Agent for context persistence.
 
## Prerequisites
- Google Custom Search API key
- Perplexity API key
- Google Sheets OAuth2 credentials
## Use Cases
- University course redesign aligned to industry trends
## Customisation
- Add email output via Gmail node post-storage
## Benefits
- Cuts curriculum planning time by 70%+

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Calculator, Code Tool, SerpApi (Google Search)

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
