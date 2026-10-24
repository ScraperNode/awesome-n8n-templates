# 📊 Build a source-diverse web evidence pack from Google and Bing with SearchCans

> ⚡ **2 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs manually to search Google via the SearchCans API, fetches and extracts the top web pages with SearchCans Reader, and outputs a citation-ready research pack as structured JSON plus a Markdown report with source URLs and excerpts.

## How it works
1. Starts when you manually execute the workflow in n8n.
2. Sets the research parameters (query, country, language, and maximum number of sources).
3. Sends the query to the SearchCans Search API (Google) and retrieves organic results.
4. Selects up to two unique HTTP(S) result URLs from the organic results list.
5. Calls the SearchCans Reader API for each selected URL to extract the page content as clean Markdown.
6. Compiles successful extractions and any failures into a citation-ready Markdown research pack and returns it along with source metadata.

## Setup
1. Create a SearchCans account, generate an API key, and add an n8n HTTP Header Auth credential with `Authorization: Bearer YOUR_SEARCHCANS_API_KEY`.
2. Attach the same Header Auth credential to both SearchCans HTTP Request steps (Search API and Reader API).
3. Update the query, country, language, and maxSources values to match your research needs (note the template caps extraction at two sources).

## Requirements
- A SearchCans account with an API key, plus an n8n instance that supports HTTP Request and Code nodes.

## Customization
- Replace the Manual Trigger, adjust the query, country, or language, or send researchPackMarkdown to an LLM, vector database, Google Docs, Notion, or a human review queue.

## Additional info
SearchCans API documentation: https://www.searchcans.com/apis/

The workflow caps Reader extraction at two sources to stay within the two Parallel Lanes available to free users. It preserves every source URL and lists failed extractions for manual review. Verify quotations and time-sensitive claims before publishing.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
