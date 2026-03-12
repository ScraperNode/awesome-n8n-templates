# 🎬 Qwen-Max: journal paper generation from title/abstract

> ⚡ **671 views** · 🎬 [Content Creation & Video](../)

## Description

## Introduction
Generates complete scientific papers from title and abstract using AI. Designed for researchers, automating literature search, content generation, and citation formatting.
## How It Works
Extracts input, searches academic databases (CrossRef, Semantic Scholar, OpenAlex), merges sources, processes citations, generates AI sections (Introduction, Literature Review, Methodology, Results, Discussion, Conclusion), compiles document.
## Workflow Template
Webhook → Extract Data → Search (CrossRef + Semantic Scholar + OpenAlex) → Merge Sources → Process References → Prepare Context → AI Generate (Introduction + Literature Review + Methodology + Results + Discussion + Conclusion via OpenAI) → Merge Sections → Compile Document
## Workflow Steps
1. **Input & Search:** Webhook receives title/abstract; searches CrossRef, Semantic Scholar, OpenAlex; merges and processes references
2. **AI Generation:** OpenAI generates six sections with in-text citations using retrieved references
3. **Assembly:** Merges sections; compiles formatted document with reference list
## Setup Instructions
1. **Trigger & APIs:** Configure webhook URL; add OpenAI API key; customize prompts
2. **Databases:** Set up CrossRef, Semantic Scholar, OpenAlex API access; configure search parameters
## Prerequisites
OpenAI API, CrossRef API, Semantic Scholar API, OpenAlex API, webhook platform, n8n instance
## Customization
Adjust reference limits, modify prompts for research fields, add citation styles (APA/IEEE), integrate databases (PubMed, arXiv), customize outputs (DOCX/LaTeX/PDF)
## Benefits
Automates paper drafting, comprehensive literature integration, proper citations

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
