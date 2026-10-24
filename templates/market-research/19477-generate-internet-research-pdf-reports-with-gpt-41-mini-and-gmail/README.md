# 📊 Generate internet research PDF reports with GPT-4.1-mini and Gmail

> ⚡ **5 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow accepts a research topic via webhook, uses OpenAI to generate search queries and summarize web articles found via Serper/Google Search and Jina Reader, then compiles insights into an HTML report, converts it to PDF, and emails it via Gmail.

## How it works
1. Receives a POST webhook request containing a `topic` field and returns an error response if the topic is missing.
2. Uses OpenAI to generate five detailed Google search queries for the provided topic and parses them into individual query items.
3. For each query, searches the web using the Serper Google Search API, extracts the top organic results, and limits processing to 10 articles.
4. Fetches each article’s full text via a Jina Reader URL, cleans and truncates the content, and sends it to OpenAI to produce a structured JSON summary with key insights, tools, trends, and a conclusion.
5. Aggregates all article summaries and uses OpenAI to analyze them for common trends, compared findings, repeated insights, important tools/platforms, and overall research conclusions.
6. Formats the analysis into a Markdown-style report, converts it to HTML, sends it to a PDF-generation HTTP API, downloads the resulting PDF, and emails it as an attachment via Gmail before responding to the webhook with a success message.

## Setup
1. Add OpenAI API credentials (used for query generation, article summarization, and cross-article analysis) and confirm the selected model is available to your account.
2. Set up a Serper (Google Search) API key and replace `YOUR_GOOGLE_SERPER_API` and the `X-API-KEY` header value in the search request.
3. Configure a PDF conversion service endpoint by replacing `YOUR_CREATE_PDF_URL_HERE` and `YOUR_API_KEY` in the PDF request.
4. Connect Gmail credentials and update the recipient address in the email step to your target inbox.
5. Copy the production webhook URL for the `research-agent` path and send a POST body like `{ "topic": "..." }` from your calling app or tool.

## 🔗 Nodes Used

HTTP Request, Webhook, Gmail, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
