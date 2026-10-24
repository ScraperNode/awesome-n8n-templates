# 📊 Monitor AI search visibility with Talordata SERP, OpenAI, and Google Sheets

> ⚡ **72 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs on demand to crawl Google SERP pages via Talordata, aggregates organic results and related searches, uses OpenAI to produce a structured AI Search Visibility report with GEO recommendations and a score, and appends or updates the results in Google Sheets.

## How it works
1. Starts when you manually execute the workflow and sets the target query, search engine (Google), and initial page.
2. Calls the Talordata MCP Search API to fetch the first SERP page, then extracts pagination metadata and builds a list of pages to crawl.
3. Loops through each SERP page and requests additional results from Talordata using the corresponding page/start value.
4. Normalizes each page into structured datasets for organic results and related searches, and aggregates all page data into a single consolidated SERP payload.
5. Sends the consolidated SERP dataset to OpenAI to generate a structured AI Search Visibility report (metrics, domain categorization, opportunities, recommendations, executive summary, and score).
6. Parses the model output into JSON and appends or updates a matching row in Google Sheets keyed by the SERP link.

## Setup
1. Add a Talordata Bearer Auth credential and confirm access to the MCP endpoint (https://mcp.talordata.net/mcp).
2. Add an OpenAI API credential and ensure the selected chat model (gpt-4.1-mini) is available in your account.
3. Add a Google Sheets OAuth2 credential, select the destination spreadsheet and sheet, and make sure it has columns for `link` and `ai_visibility_response`.
4. Update the workflow input values (query, engine, and starting page) to match the brand/keyword you want to monitor.

## Requirements
- Make sure to sign up for Talordata and OpenAI to get the API keys

## 🔗 Nodes Used

Google Sheets, OpenAI Chat Model, Information Extractor, MCP Client

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
