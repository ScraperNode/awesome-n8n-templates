# 🎬 Filter and summarise RSS news with OpenRouter and Google Sheets

> ⚡ **0 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow reads multiple RSS feeds, uses OpenRouter to filter for Indonesia “hukum” (legal) topics and rewrite each relevant article in two editorial styles (with Browserless page fetching), then appends the results to a Google Sheets digest.

## How it works
1. Runs manually to start the workflow.
2. Reads the latest items from AntaraNews, SindoNews, and Viva.co.id RSS feeds and merges them into a single list.
3. Uses OpenRouter to filter the merged RSS items down to articles relevant to “hukum” in Indonesia and returns the selected titles and GUIDs in a structured JSON format.
4. Matches the filtered GUIDs back to the original RSS items to carry forward the full RSS metadata (link, dates, categories, snippets).
5. For each retained article, uses Browserless to fetch the full web page content and OpenRouter to rewrite the story into two distinct editorial styles using a structured output schema.
6. Appends or updates a row in Google Sheets (matched by GUID) with the original RSS fields plus the two rewritten titles and story bodies.

## Setup
1. Add an OpenRouter API credential and select it for both OpenRouter chat model steps (filtering and summarization).
2. Add a Browserless API credential so the workflow can fetch full article pages during summarization.
3. Connect your Google Sheets OAuth2 credential and update the target spreadsheet, sheet tab, and column mapping to match your digest layout.
4. (Optional) Replace or add RSS feed URLs and adjust the filtering prompt text to match the topic you want to keep.

## 🔗 Nodes Used

Google Sheets, RSS Read, AI Agent, Structured Output Parser, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
