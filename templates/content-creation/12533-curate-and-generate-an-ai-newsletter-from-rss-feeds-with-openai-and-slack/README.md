# 🎬 Curate and generate an AI newsletter from RSS feeds with OpenAI and Slack

> ⚡ **91 views** · 🎬 [Content Creation & Video](../)

## Description

## Who’s it for
This workflow is for content creators, newsletter editors, and AI enthusiasts who want to automate the heavy lifting of news gathering. It acts as an autonomous research agent that monitors industry sources and drafts high-quality summaries for your review.

## How it works
This workflow serves as a "human-in-the-loop" publishing agent:
1. **Ingestion & Normalization:** It monitors 15+ sources including RSS feeds (TechCrunch), Reddit (r/OpenAI), and company blogs (Anthropic, Google). It normalizes these diverse inputs into a standard format.
2. **Filtering & Curating:** Using OpenAI (GPT-4o), it filters out noise to identify only high-impact stories. It then selects the top 4 stories based on relevance to a tech-savvy audience.
3. **Drafting:** It writes a complete newsletter, including a catchy subject line, an intro hook, deep-dive summaries, and a "quick hits" list. It even generates viral short-form video scripts based on the news.
4. **Slack Approval:** The draft is sent to Slack. You can approve it immediately or reply with feedback (e.g., "Make the tone punchier"), prompting the AI to revise the draft before generating the final file.

## How to set up
1. **Credentials:** Connect your OpenAI, Anthropic, Google Sheets, and Slack accounts in n8n.
2. **Google Sheets:** Create a sheet with columns for `Title`, `URL`, `Source`, `Published`, and `Content`. Paste the **Sheet ID** into the "Log to Google Sheets" and "Get_Stories" nodes.
3. **Slack:** Update the Slack nodes with your specific **Channel ID** where you want to receive drafts.

## Requirements
* **n8n version:** 1.0+ (requires LangChain nodes).
* **LLM API Keys:** OpenAI and Anthropic.
* **Google Sheets:** For logging processed history.
* **Slack:** For the approval interface.

## How to customize
* **Change Sources:** Edit the RSS Trigger nodes to track Finance, SaaS, or Crypto news instead of AI.
* **Adjust Tone:** Open the `stories_prompt` node to change the persona of the AI editor (e.g., from "Professional" to "Witty").
* **Publishing:** Connect the final output to a CMS like WordPress or Ghost to publish automatically upon approval.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Execute Sub-workflow, Reddit, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
