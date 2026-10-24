# 🔧 Answer Gmail support emails from your docs with Gemini and Slack

> ⚡ **3 views** · 🔧 [Miscellaneous](../)

## Description

## Quick Overview
This workflow indexes your documentation from a sitemap into an n8n Data Table using Google Gemini embeddings, then monitors a Gmail support label to draft grounded replies from the closest passages or escalate gaps to Slack and log them for documentation follow-up.

## How it works
1. Runs manually to fetch your documentation sitemap (handling both sitemapindex and flat sitemap formats) and collects eligible page URLs.
2. Downloads each documentation page, extracts the main article content, splits it into overlapping text passages, and batch-embeds those passages with the Google Generative Language (Gemini) embeddings API.
3. Normalizes the embedding vectors and upserts each passage (text, URL, title, vector, and run ID) into the n8n Data Table, then deletes older rows from previous indexing runs.
4. Triggers every few minutes when an unread email arrives in Gmail with the specified Support label, extracts the new question text (removing quoted history), and embeds the question with Gemini.
5. Loads the stored passage index from the Data Table, computes cosine similarity to find the top matching passages, and stops early if the best match is below the configured minimum score.
6. If coverage is sufficient, uses Google Gemini to draft a JSON reply strictly from the retrieved passages and runs a second Gemini pass to audit the draft’s claims against those same passages.
7. If the audit passes, creates a Gmail draft reply in the original thread and logs the answered question to the support_questions Data Table; otherwise, posts a gap report to Slack and logs the question as “not covered” or “unsupported.”

## Setup
1. Add a Google AI Studio / Gemini API key as an HTTP Header Auth credential (x-goog-api-key) for the two embeddings HTTP requests and a Google Gemini credential for the chat model.
2. Connect Gmail credentials, create/apply a Gmail label (for example, “Support”), and update the label filter if your label name differs.
3. Connect Slack credentials and set the target channel (for example, #support-gaps) in the Answer Settings.
4. Create an n8n Data Table named docs_index with columns chunk_key, url, title, text, vec, and run_id.
5. Create an n8n Data Table named support_questions with columns asked_on, question, status, best_score, and note.
6. Update the sitemap URL, URL filter, page cap, chunk size, embedding dimensions, and min_score in Indexing Settings/Answer Settings, run the indexing branch once, then enable the Gmail trigger.

## 🔗 Nodes Used

HTTP Request, Slack, Gmail, Gmail Trigger, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
