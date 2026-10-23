# 📊 Audit page schema and AI citation signals with GPT-4o-mini and Google Sheets

> ⚡ **18 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow reads page URLs from Google Sheets, fetches each page to extract schema and SEO freshness signals, uses OpenAI GPT-4o-mini to assess entity consistency and generate recommended JSON-LD, then writes an audit row with scores and prioritized gaps back to Google Sheets.

## How it works
1. Runs manually to start an audit of all rows in the Google Sheets `pages` tab.
2. Fetches each `page_url` over HTTP and parses the HTML to extract JSON-LD schema types, dates, author signals, canonical/robots tags, title/H1 query match, and a short content excerpt.
3. Sends the extracted signals and excerpt to OpenAI (gpt-4o-mini) to score entity consistency, rank the biggest citation-impact gaps, and (when needed) generate a paste-ready JSON-LD block using placeholders for unknown values.
4. Combines a deterministic technical checklist score with the OpenAI entity score into a weighted overall audit score and formats the top gaps and issues.
5. Appends the full audit result (including scores, gaps, and recommended JSON-LD) to the Google Sheets `audit` tab with the run date.

## Setup
1. Create an OpenAI HTTP Header Auth credential with `Authorization: Bearer <YOUR_API_KEY>` for calls to the Chat Completions API.
2. Add a Google Sheets OAuth2 credential and set the Google Sheets document ID in both the read (`pages`) and append (`audit`) steps.
3. Create a spreadsheet with a `pages` tab containing at least `page_id`, `brand`, `target_query`, and `page_url` columns, and an `audit` tab with columns to capture the appended audit fields (for example: run_date, scores, top_gaps, recommended_jsonld, and issues).

## Requirements
- OpenAI account for the entity assessment and JSON-LD generation (gpt-4o-mini)
- Google Sheets for page input and audit logging

## Customization
- Add a second fetch of the domain root to check homepage Organization schema, sameAs profile links, and llms.txt.
- Adjust the technical checklist weights in the Parse & Score Audit node to match your own prioritization.
- Pair it with a content citability scorer: when two pages score equally on prose quality but cite unequally, this audit usually explains the gap.

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
