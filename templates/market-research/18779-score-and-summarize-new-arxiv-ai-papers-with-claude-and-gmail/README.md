# 📊 Score and summarize new arXiv AI papers with Claude and Gmail

> ⚡ **4 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs weekly to fetch recent AI papers from arXiv, scores each paper’s relevance with Anthropic Claude, logs scoring results to Google Sheets, summarizes relevant papers, and emails a formatted digest via Gmail.

## How it works
1. Runs weekly on a schedule.
2. Queries the arXiv API for the 30 most recent papers in cs.AI, cs.CL, and cs.LG, then parses the XML response into individual paper entries.
3. Extracts key fields (title, abstract, URL, published date) and sends each paper to Anthropic Claude to return a 0–10 relevance score with a short reason.
4. Attaches the score and metadata, appends the scoring run details (including prompt/model info and token usage) to a Google Sheets “Runs” tab, and filters out papers scoring below 6.
5. Uses Anthropic Claude to generate a structured markdown summary for each remaining paper, including the relevance score and reason.
6. Combines all paper summaries into a single digest, converts the markdown to HTML, and emails it using Gmail.

## Setup
1. Add an Anthropic credential and confirm the Claude model IDs used for scoring and summarization match your Anthropic account access.
2. Connect Google Sheets OAuth credentials and replace YOUR_GOOGLE_SHEET_ID (and ensure the “Runs” sheet/tab exists with matching columns).
3. Connect Gmail credentials and replace YOUR_EMAIL@example.com with the recipient address for the digest.
4. Optionally adjust the arXiv query parameters (categories, max_results, and the relevance threshold of 6) to fit your research interests and digest size.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Markdown, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
