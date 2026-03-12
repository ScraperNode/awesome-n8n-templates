# 🎬 Generate AI research papers with Claude, arXiv, Google Scholar and DOCX export

> ⚡ **28 views** · 🎬 [Content Creation & Video](../)

## Description

## How It Works
This workflow streamlines academic paper development through a multi-agent AI architecture that collects references, drafts individual sections autonomously, compiles the manuscript, and exports a professionally formatted DOCX file. Tailored for researchers, faculty members, and postgraduate students, it reduces the effort required to plan, write, and format scholarly articles from the ground up. Upon receiving a paper title and abstract, the system initiates web-based literature retrieval and reference extraction, handled by a Research Agent leveraging tools such as Google Scholar. A central Orchestration Agent then coordinates six dedicated writing agents, covering the Introduction, Related Work, Methodology, Results, Discussion, and Conclusion. The generated sections are consolidated with an automatically formatted bibliography, converted into a DOCX document via a document automation script, and prepared for download.

## Setup Steps
1. Configure Research Paper Input node with topic, keywords, and paper parameters.
2. Add Anthropic (Claude) API credentials to all Claude Model nodes.
3. Set up Google Scholar Search Tool credentials or API key for literature retrieval.
4. Connect Google Docs Script node with service account for DOCX generation.
5. Configure workflow output path for DOCX file download or Drive storage.
 
## Prerequisites
- Google Scholar API or search tool access
- Google Docs Script or DOCX generation service
## Use Cases
- Automated first-draft generation for academic journal submissions
## Customization
- Swap Claude for OpenAI GPT-4 or NVIDIA NIM across writing agents
## Benefits
- Generates complete, structured research papers fully automatically

## 🔗 Nodes Used

HTTP Request, AI Agent, Anthropic Chat Model, Structured Output Parser, SerpApi (Google Search), n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
