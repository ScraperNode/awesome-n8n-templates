# 📊 Filter and deduplicate AI news with Google Sheets, OpenAI, and Hugging Face

> ⚡ **7 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
Reads your RSS feeds daily, kills obvious noise with free keyword rules, then groups outlets covering the same story using cheap embeddings, so the AI judge never rules on a story twice. Approved story packages, plus a kept-or-rejected reason for every article, land in Google Sheets.

## How it works
1. Runs on a manual trigger or on a daily schedule and loads configuration such as keywords, thresholds, RSS feeds, and model choices.
2. Optionally clears the Google Sheets “Articles” ledger and “Approved Package” output tabs, then reads source articles from Google Sheets and (if enabled) pulls additional items from the configured RSS feeds.
3. Removes any articles whose URLs already exist in the Google Sheets “Articles” ledger and records the remaining URLs in the ledger with a pending status.
4. Scores each remaining article using configurable keyword and source-domain weights, immediately rejecting low-scoring items and passing the rest to semantic deduplication.
5. Generates embeddings for the surviving articles with either Hugging Face Inference API or OpenAI Embeddings, then clusters articles by cosine similarity to keep one primary story per cluster with corroborating links.
6. Sends non–hard-win primary stories to an OpenAI chat model to judge niche relevance, then assembles one row per approved story (including corroborating sources and run metrics) and appends it to the Google Sheets “Approved Package” tab.
7. Updates the Google Sheets “Articles” ledger for every processed URL with its final status (approved, corroborating, rejected by rules, or rejected by judge) plus the rules score, cluster ID, and reason.

## Setup
1. Create Google Sheets OAuth2 credentials and point the workflow to your spreadsheet by updating `sheetDocumentId` and the tab names in “Configure context”.
2. Provide an embedding credential by adding either a Hugging Face API token or an OpenAI API key (depending on `embeddingProvider`) and set the corresponding embedding model values.
3. Add an OpenAI API key for the judge step and confirm the chat model ID in `judgeModel` matches a model available in your OpenAI account.
4. Prepare your spreadsheet tabs: “Source Articles” (or your chosen name) with the expected columns and an “Articles” ledger tab where URL is used for deduplication.
5. If using live fetching, update `rssFeedUrls` with your feed list and keep `useLiveFetch` enabled, then adjust keyword weights, source weights, and thresholds to fit your niche.

## 🔗 Nodes Used

Google Sheets, HTTP Request, RSS Read, Schedule Trigger, Filter, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
