# 🎬 Research AI agent team with auto citations using OpenRouter and Perplexity

> ⚡ **4,748 views** · 🎬 [Content Creation & Video](../)

## Description

**Purpose of workflow:**
This AI-powered workflow is designed to automatically generate comprehensive, well-researched articles on any given topic. It utilizes a team of AI agents to streamline the research and writing process, producing high-quality content with proper citations and credible sources.

**How it works**

Multi-agent team:

1. Research Leader: Plans and conducts initial research, creating a table of contents.
2. Project Planner: Breaks down the table of contents into manageable sections.
3. Research Assistants: Multiple agents that conduct in-depth research on assigned sections.
4. Editor: Compiles and refines the final article, ensuring coherence and proper citations.

**Key features:**
- Utilizes Perplexity AI for internet search and citation capabilities
- Produces well-structured articles with proper citations
- Customizable parameters (topic, tone, word count, number of sections)


**Step by step setup:**

1. Get account from OpenRouter.ai to access Perplexity API
2. Set API key in the Perplexity API node
3. Credential key name : Authorization and key value Bearer &lt;api-key value&gt;

## 🔗 Nodes Used

HTTP Request, Ghost, Execute Workflow Trigger, AI Agent, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
