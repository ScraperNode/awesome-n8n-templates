# 🎬 Generate research proposals with GPT-4o, web search, and quality control agents

> ⚡ **466 views** · 🎬 [Content Creation & Video](../)

## Description

## How It Works
This workflow automates academic and professional research proposal generation using a multi-agent AI pipeline. It targets researchers, academics, grant writers, and R&D teams who need structured, high-quality proposals efficiently. The core problem it solves: manually drafting proposals is time-consuming, inconsistent, and prone to missing key elements like ethics, impact, and funding alignment. A Supervisor Agent orchestrates three specialist sub-agents, Research Content, Strategic Planning, and Ethics/Impact, each powered by dedicated AI models. A Funding Agency Research Tool and Web Search Tool supply real-time context. The generated proposal is parsed, then evaluated by a Quality Control Agent. Proposals meeting the quality threshold are formatted and stored; those falling short are flagged for human revision, ensuring only polished outputs reach storage.

## Setup Steps
1. Add OpenAI (or compatible) API credentials to all AI model nodes.
2. Configure Supervisor, Research Content, Strategic Planning, and QC Agent system prompts.
3. Set up Funding Agency Research Tool with target agency endpoints or search parameters.
4. Connect Web Search Tool credentials (e.g., SerpAPI or Tavily).
5. Configure storage node (Google Sheets/database) with target schema.
6. Set quality score threshold in the Check Quality Score node.
## Prerequisites
- Web search API key (SerpAPI/Tavily)
- Google Sheets or database credentials
## Use Cases
- Grant proposal drafting for research institutions
## Customisation
- Swap AI models per agent for cost/performance balance
## Benefits
- Cuts proposal drafting time by 70–80%

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Structured Output Parser, SerpApi (Google Search), AI Agent Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
