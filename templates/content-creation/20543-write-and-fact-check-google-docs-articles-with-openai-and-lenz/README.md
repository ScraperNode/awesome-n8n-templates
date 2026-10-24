# 🎬 Write and fact-check Google Docs articles with OpenAI and Lenz

> ⚡ **20 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
Fact-check AI-written articles before they go live. Type a topic into an n8n form: OpenAI researches and writes the draft as a Google Doc, Lenz checks the factual claims against independent sources, and the form shows the report with Approve, Keep as draft and Edit.

## How it works
1. A form asks for the topic.
2. An AI agent searches the web with OpenAI's built-in search and writes only from what it found, with sources.
3. If it finds too few good sources, the run stops and the form says so.
4. Lenz Extract (free) lists the factual claims, and Lenz Assess rates them.
5. Red flags get a Lenz Verify deep check. If it confirms an error, the AI rewrites only those sentences.
6. The article becomes a Google Doc with headings, lists and links, and the form shows the report with Approve, Keep as draft and Edit.
7. Before Approve or Edit, the workflow reads the document again and Lenz checks anything you changed by hand. Edit rewrites the article from your note, and Lenz re-checks the changed parts.

## Setup
1. Install the Lenz node when n8n offers it and add your Lenz API key.
2. Connect Google Docs and Google Drive with your Google account.
3. On self-hosted n8n, add an OpenAI API key to the three AI model nodes. On n8n Cloud they run on n8n credits, so no key is needed.
4. Publish the workflow and open the form's Production URL.
5. Type a topic and keep the tab open. In a few minutes the form shows the report and a link to the document.

## Requirements
- A Lenz API key (free plan available) and the Lenz node 0.6.0 or newer, a verified community node for n8n Cloud and self-hosted
- A Google account with Google Docs and Google Drive
- On self-hosted n8n: an OpenAI API key (on n8n Cloud the AI runs on n8n credits)

## Customization
- In Set your options, change the article length, the minimum number of sources and the Drive folder (My Drive by default).
- Set how many claims Lenz checks (15 by default) and how many red flags get a deep check (3).
- Costs: Assess takes about 1 Lenz credit per claim, a deep check 5 credits at Low depth.

## Additional info
Who's it for: content teams, writers and marketers who want the first draft of their AI-assisted blog post they can trust, especially on health and finance topics.

## 🔗 Nodes Used

Google Drive, Google Docs, AI Agent, Basic LLM Chain, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
