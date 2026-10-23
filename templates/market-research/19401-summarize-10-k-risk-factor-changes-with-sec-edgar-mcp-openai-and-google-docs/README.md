# 📊 Summarize 10-K risk factor changes with SEC EDGAR MCP, OpenAI, and Google Docs

> ⚡ **1 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
Compares Item 1A (Risk Factors) between the two most recent 10-K filings for each ticker using a SEC EDGAR MCP server, summarizes the material changes with OpenAI, records what was already reported in a Data Table, and writes a weekly report to Google Docs.

## How it works
1. Runs every Monday morning (or manually) and loads the MCP server URL, ticker list, SEC User-Agent string, and reporting limits from workflow settings.
2. Calls the SEC EDGAR MCP server to verify it exposes the required tools, then reads the existing `risk_factor_watch` Data Table to avoid re-reporting the same accession number per ticker.
3. For each ticker, requests the three most recent 10-K filings from the MCP server and selects the newest and prior filing, skipping companies with no new filing since the last run.
4. Fetches both filings’ HTML from SEC EDGAR using the configured User-Agent and extracts Item 1A Risk Factors into cleaned, comparable paragraph lists.
5. Compares this year vs last year paragraphs using token-overlap matching to classify additions, removals, and material rewrites, then keeps only the changed excerpts up to the configured cap.
6. Saves the counts for tickers with changes back to the `risk_factor_watch` Data Table and sends the changed paragraphs to OpenAI to produce a short, themed explanation.
7. Creates a new Google Doc and appends a single combined report covering all tickers with meaningful risk-factor changes, including links to the filings.

## Setup
1. Start the SEC EDGAR MCP server (for example: `npx -y edgar-mcp@1.1.0 --http --host 0.0.0.0 --port 8932`) and set `mcp_url` in Settings to the reachable `/mcp` endpoint.
2. Update `sec_user_agent` in Settings to include your own contact email to avoid SEC 403 responses when fetching filing HTML.
3. Create an n8n Data Table named `risk_factor_watch` with columns `ticker`, `accession`, `filed_on`, `added`, `removed`, and `rewritten`.
4. Add an OpenAI API credential (Chat model) and a Google Docs credential, then set your target `docs_folder` and the comma-separated `tickers` list in Settings.

## 🔗 Nodes Used

HTTP Request, Google Docs, Schedule Trigger, Filter, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
