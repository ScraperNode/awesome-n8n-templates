# 🎬 Run a multi-agent research and publishing pipeline with GPT-4o, Tavily and Notion

> ⚡ **195 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
Three specialized AI agents: Researcher, Writer, and Reviewer, collaborate autonomously to research a topic, draft content, and quality-check it through a self-correcting review loop with a circuit breaker. Approved content is published directly to Notion with full audit metadata.

## How it works
1. A form submission captures the research topic, content format (blog post, exec summary, or LinkedIn post), target audience, and maximum revision cycles allowed before the circuit breaker fires.
2. The Researcher Agent uses GPT-4o and Tavily Search to gather authoritative sources, extract key facts and contradictions, and produce a validated research brief. Search depth and result count are automatically scaled to the requested format.
3. The Writer Agent receives the research brief and produces a structured draft in the correct format. On revision cycles it also receives the Reviewer's specific rejection notes and must address them directly.
4. A Circuit Breaker sits between the Writer and Reviewer. If the number of Reviewer rejections reaches the user-defined maximum, the draft is force-approved and the pipeline proceeds to publishing without another LLM call.
5. The Reviewer Agent evaluates the draft against the original sources on three axes — accuracy, clarity, and completeness — each scored 0–10. All three must score 7 or above for approval. On rejection, detailed revision notes are injected back into the Writer's next prompt.
6. Once approved (or circuit-broken), the pipeline builds a full Notion block structure including a metadata callout with scores and revision stats, then creates the Notion page and appends content blocks in rate-limited batches of 25.
7. After the batch loop completes, a post-loop aggregation step checks for any failed batches and appends a warning callout to the Notion page if needed. A separate Error Trigger path logs any pipeline failures to a Notion monitoring database.

## Setup
1. Open the Initialize State Variables code node and replace the two placeholder constants at the top: NOTION_CONTENT_DB_ID with your content database ID and NOTION_MONITORING_DB_ID with your monitoring database ID.
2. Add your OpenAI API credential to all three chat model nodes: OpenAI GPT-4 Agent 1 (Researcher), OpenAI GPT-4 Agent 2 (Writer), and OpenAI GPT-4 Agent 3 (Reviewer).
3. Add your Tavily API credential to the Perform Tavily Search tool node inside the Researcher Agent.
4. Add your Notion API credential to the Generate Notion Page and Log to Notion on Error nodes. The two HTTP Request nodes that append blocks (Append Blocks to Notion, Add Warning Notification) use the same Notion credential type and will prompt you on first run.
5. In your Notion workspace, share both databases (content and monitoring) with your Notion integration. The content database needs at minimum a Title property. The monitoring database needs Title, and optionally text properties for Failed Node, Error Message, and Execution ID.

## Requirements
- OpenAI API key (GPT-4o)
- Tavily API key
- Notion API integration with access to a content database and a monitoring database

## Customization
- Swap GPT-4o for any other n8n-compatible chat model by replacing the three OpenAI Chat Model nodes
- Adjust the Reviewer's approval threshold (currently 7/10 on all three axes) inside the Reviewer Agent prompt
- Change the circuit breaker limit at form submission — no code changes needed, it's a form field
- Modify batch size (default 25 blocks) or rate-limit wait (default 350ms) in Prepare Notion Block Batches and Wait 350ms nodes
- Edit agent system prompts and format requirements to support additional content types beyond blog post, exec summary, and LinkedIn post

## 🔗 Nodes Used

HTTP Request, Notion, AI Agent, OpenAI Chat Model, n8n Form Trigger, HTTP Request Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
