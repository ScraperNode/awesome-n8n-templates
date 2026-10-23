# 📊 Generate fact-checked research reports with Bright Data, OpenAI and Gemini

> ⚡ **7 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow collects a research question via an n8n form, uses OpenAI and Google Gemini to draft and fact-check a cited report, gathers sources with Bright Data SERP API and Web Unlocker, then emails the verified report via Gmail and logs the run to Google Sheets.

## How it works
1. Receives a research request from an n8n form with a question, depth level, and destination email.
2. Uses OpenAI (gpt-5.6-luna) to break the question into 4–6 focused search queries.
3. Searches each query with the Bright Data SERP API, then extracts, deduplicates, and caps the resulting source URLs based on the selected depth.
4. Fetches each source with Bright Data Web Unlocker as markdown and cleans/crops the text to build a compact reading corpus.
5. Uses Google Gemini (gemini-3.5-flash) to write a structured report using only the provided corpus and inline citations.
6. Uses OpenAI (gpt-5.6-terra) to audit every factual claim against the cited source text and produces supported/unsupported/contradicted verdicts with quoted evidence.
7. Assembles a verified markdown report with a confidence score and flagged claims, then sends it via Gmail and appends run details to a Google Sheets log.

## Setup
1. Create a Bright Data account and set up both a SERP API zone and a Web Unlocker zone.
2. Add an HTTP Header Auth credential for Bright Data (Authorization: Bearer <YOUR_KEY>) and attach it to the two Bright Data HTTP requests, then set your zone names in Set Research Parameters.
3. Add an OpenAI API credential for the planner and auditor models and a Google Gemini credential for the writer model.
4. Add Gmail credentials for sending email and set up a Google Sheets credential, then replace the spreadsheet URL/ID and ensure a sheet/tab named “Research Log” exists.

## Requirements
- Bright Data account with a SERP API zone and a Web Unlocker zone (the free tier includes 5,000 credits per month)

## Customization
- Depth maps to source count (quick 6, standard 12, exhaustive 24) in Set Research Parameters; swap the auditor to a cheaper model to cut cost, or point the SERP node at Bing or Yandex without changing anything downstream.

## Additional info
The distinguishing stage is the claim-level audit: rather than scoring source credibility, a second independent model re-reads every claim in the draft against the raw source text and returns a per-claim verdict (supported, unsupported, contradicted) with the source it checked. Unsupported claims stay in the report, flagged, instead of being silently removed, so the reader can see where the model overreached. Note that Bright Data can answer HTTP 200 with a rate-limit notice in the body instead of the page, which means n8n retries never fire; the Clean HTML and Prepare Text node detects that body and reports it rather than returning an empty corpus.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Basic LLM Chain, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
