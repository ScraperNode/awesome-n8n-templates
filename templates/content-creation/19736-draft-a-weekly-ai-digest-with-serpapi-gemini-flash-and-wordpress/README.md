# 🎬 Draft a weekly AI digest with SerpAPI, Gemini Flash, and WordPress

> ⚡ **3 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow runs every Friday, searches Google via SerpAPI for the past week, uses Google Gemini to write a source-grounded AI digest in Markdown, converts it to HTML, and creates a draft post in WordPress.

## How it works
1. Runs every Friday at 07:00 on a schedule trigger.
2. Builds two distinct search queries and a freshness window from a single configuration step.
3. Calls SerpAPI’s Google Search endpoint twice to fetch recent results for both queries.
4. Merges and de-duplicates the search results by URL and formats them into a numbered findings block for citation.
5. Sends the collated findings to Google Gemini with strict instructions to write a weekly digest that only cites the provided URLs and returns structured fields (title, excerpt, body, tags).
6. Enforces title and excerpt character limits, fails the run if the model returns an empty body, and normalizes tags.
7. Converts the Markdown body to HTML and creates a draft WordPress post with the generated title and content.

## Setup
1. Add a SerpAPI credential and assign it to both search requests.
2. Add Google Gemini (Google AI) credentials for the chat model used to write the digest.
3. Add WordPress Basic Auth credentials and ensure the account can create posts.
4. Edit the queries, audience, and output limits in the Config step to match your digest topic and WordPress needs.

## 🔗 Nodes Used

HTTP Request, Wordpress, Markdown, Schedule Trigger, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
