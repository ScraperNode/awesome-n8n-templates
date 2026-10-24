# 📊 Screen contact activity from CSV with MCP client and OpenAI gpt-4o-mini

> ⚡ **9 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow manually processes a contacts CSV, fetches website/Facebook/Instagram page text via an MCP browser endpoint, then uses OpenAI to classify each contact as active, inactive, or uncertain and writes the results to an output CSV.

## How it works
1. Starts manually and reads a contacts CSV file from the local filesystem.
2. Parses the CSV into individual contact records and processes them in batches.
3. For each contact, builds browser automation steps to visit the provided website, Facebook, and Instagram URLs (when present) and extract visible page text through an MCP Client endpoint.
4. Cleans and aggregates the scraped text per channel and constructs an evidence-based screening prompt.
5. Sends the prompt to OpenAI (gpt-4o-mini) to return a JSON verdict (active/inactive/uncertain) with confidence and reasoning.
6. Formats one output row per contact (including evidence excerpts and timestamps) and writes all results to a CSV file, aborting if an unexpected runaway loop produces too many rows.

## Setup
1. Add your OpenAI API credentials and confirm the model selection in the OpenAI node.
2. Set up and run an MCP endpoint reachable at the configured URL (default: http://localhost:8931/mcp) and ensure it supports the browser_navigate, browser_wait_for, and browser_evaluate tools.
3. Update the input CSV path and output CSV path to valid locations for your n8n host, and ensure the input columns match the expected fields (e.g. name, website_url, facebook_url, instagram_url).
4. Adjust the maximum expected row limit in the safety check code if you plan to process larger batches.

## 🔗 Nodes Used

Read/Write Files from Disk, Convert to File, Extract from File, OpenAI, MCP Client

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
