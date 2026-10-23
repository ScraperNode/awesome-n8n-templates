# 🔬 Summarize webpage content with OpenAI GPT-5-mini and 24h caching

> ⚡ **33 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow summarizes the content of a webpage from a provided URL. It can optionally target a specific part of the page using a CSS selector, then uses an AI summarization chain to generate a concise summary. To improve performance and reduce repeated requests, the workflow caches summaries for 24 hours and returns the cached result when available.

## Setup
Before using this workflow, configure your OpenAI credential and make sure the workflow is called by another workflow with the required input values.

You need to provide:
- url: the webpage to summarize
- css_selector: optional CSS selector to extract a specific section of the page; if left empty, the workflow uses body


Review these nodes before publishing:
- `When Executed by Another Workflow`: expects url and css_selector as workflow inputs
- `GET URL`: fetches the webpage content from the provided URL
- `Extract HTML Content`: extracts the content using the provided CSS selector or defaults to body
`OpenAI Chat Model`: connect your OpenAI credential and confirm the selected model
Summarization Chain: generates the final summary
- `Check Cache and Write to Cache`: store and retrieve cached summaries for 24 hours

## How it works
This workflow is triggered by another workflow and receives a webpage URL plus an optional CSS selector. It first checks workflow static data to see whether a summary for that URL is already cached and still valid within the 24-hour time-to-live period.

If cached data exists, the workflow immediately returns the stored summary. If not, it fetches the webpage content from the provided URL, extracts the relevant HTML content using the CSS selector, and sends the extracted text to an AI summarization chain.

After the summary is generated, the workflow writes the result to the cache with a timestamp so future requests for the same URL can be served faster. The workflow then returns the final output.

## Usecases
Use this workflow to summarize webpage content from a URL so it can be reused in downstream automations, agents, or AI-powered workflows. It is especially useful when you want to extract the main content of a page, reduce it into a concise summary, and avoid repeated processing by caching the result for 24 hours.

This workflow can also be used as a tool for **LLM chain models**. For example, you can call it from an agent or another workflow to let an LLM retrieve and summarize webpage content before answering a question, generating a report, enriching research, or providing context-aware responses. This makes it useful for AI assistants, retrieval workflows, research agents, support bots, and content analysis pipelines.

## 🔗 Nodes Used

HTTP Request, Execute Workflow Trigger, Summarization Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
