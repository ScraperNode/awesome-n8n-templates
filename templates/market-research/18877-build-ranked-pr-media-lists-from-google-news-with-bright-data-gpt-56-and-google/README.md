# 📊 Build ranked PR media lists from Google News with Bright Data, GPT-5.6 and Google Docs

> ⚡ **3 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow collects recent Google News coverage for a topic and comparable companies using Bright Data, extracts bylines from the full article HTML, then uses OpenAI (GPT-5.6) to rank the best journalists and draft pitch opening angles, saving the resulting media list to Google Docs.

## How it works
1. Receives a form submission with your subject/beat, comparable companies, one-line story, and target region.
2. Runs two Bright Data SERP requests to Google News in parallel (one for the subject and one for the comparable companies) and combines the results.
3. Deduplicates and filters out wire services/social sources, then prioritizes articles from outlets appearing in both searches and selects the top results.
4. Re-searches each chosen headline via Bright Data to resolve a fetchable article URL, then loads each article page as raw HTML through Bright Data Web Unlocker.
5. Extracts the author/byline (or falls back to outlet-level attribution) and compiles excerpts for the shortlisted articles.
6. Sends the candidates to OpenAI GPT-5.6 in a single prompt to rank the list and generate a tailored opening angle and “why” note for each entry.
7. Creates a Google Doc with the ranked media list and shows the formatted results on the form completion page (or returns a “no coverage” message when nothing usable is found).

## Setup
1. Add a Bright Data Header Auth credential and set the SERP and Web Unlocker zone names in the workflow settings.
2. Add an OpenAI credential (configured for the gpt-5.6-terra model) for the ranking and angle-writing step.
3. Add a Google Docs OAuth credential and set the target Google Drive folder ID (or keep the default root) for saving the document.
4. Open the n8n form trigger URL and use it as the entry point to submit your beat, comparables, story line, and region.

## 🔗 Nodes Used

HTTP Request, Google Docs, Basic LLM Chain, OpenAI Chat Model, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
