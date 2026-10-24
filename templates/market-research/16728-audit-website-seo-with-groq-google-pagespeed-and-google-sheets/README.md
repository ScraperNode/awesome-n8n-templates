# 📊 Audit website SEO with Groq, Google PageSpeed and Google Sheets

> ⚡ **34 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow audits a submitted website URL by extracting on-page SEO signals from the HTML, pulling Google PageSpeed Insights scores, and using Groq (Llama 3.3 70B) to generate a scored SEO report, then logs the results to Google Sheets and returns the audit via webhook.

## How it works
1. Receives a POST webhook request containing a JSON body with a target `url` to audit.
2. Fetches the page HTML for the provided URL and stops with an error response if no HTML is returned.
3. Extracts on-page SEO signals from the HTML (title, meta description/keywords, headings, image alt coverage, links, canonical, robots, viewport, Open Graph/Twitter tags, schema, word count, and language).
4. Calls the Google PageSpeed Insights API for mobile to retrieve performance, accessibility, SEO, and best-practices results.
5. Combines the extracted on-page data with the PageSpeed results and sends it to Groq via a LangChain agent to produce a strict, structured JSON audit with scores, findings, fixes, and top priorities.
6. Parses and validates the AI JSON output, appends/updates the audit record in Google Sheets, and returns the final audit JSON to the webhook caller (or returns a 400 error if parsing fails).

## Setup
1. Create a Groq API credential in n8n and select it for the Groq Chat Model used by the SEO analysis agent.
2. Add Google Sheets OAuth2 credentials, then set the target Google Sheet document and sheet tab in the Google Sheets append/update step.
3. Ensure your spreadsheet has columns to store the returned fields (for example: url, overall_score, summary, top_3_fixes, categories, timestamp).
4. Copy the webhook URL from the Webhook trigger and send POST requests with `Content-Type: application/json` and a body like `{ "url": "https://example.com" }`.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, AI Agent, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
