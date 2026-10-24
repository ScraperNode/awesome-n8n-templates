# 🔬 Summarize web pages from URLs to Notion with OpenAI GPT-4o

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow collects a URL via an n8n form, fetches and extracts the page text, uses OpenAI (GPT-4o-mini) to generate a 5-bullet summary and 3 suggested tags, and saves the result as a new page in a Notion database.

## How it works
1. Receives a URL submission through an n8n form.
2. Fetches the web page HTML from the submitted URL.
3. Extracts the page title and main article/body text from the HTML.
4. Sends the extracted text to OpenAI (GPT-4o-mini) to produce a structured output containing summary bullets and topic tags.
5. Creates a new page in a Notion database using the extracted title and the AI-generated summary data.

## Setup
1. In n8n, configure the form trigger (or share its public form link) so users can submit URLs.
2. Add your OpenAI API credentials for the Chat OpenAI model used by the summarization step.
3. Add your Notion credentials and replace the Notion database URL/ID with your target database in the Notion create-page step.

## 🔗 Nodes Used

HTTP Request, Notion, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
