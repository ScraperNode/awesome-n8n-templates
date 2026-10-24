# 🔬 Fetch website content with HTTP request and Apify Web Fetch

> ⚡ **54 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow fetches web page content by trying a direct HTTP request first and falling back to Apify Web Fetch when needed, then normalizes the outputs and aggregates the results into a single dataset.

## How it works
1. Starts when you run the workflow manually.
2. Sets an input URL list and an Apify API token to use for fetching.
3. Fetches URL via n8n’s HTTP Request 
4. If the HTTP request fails, calls Apify Web Fetch to retrieve the page content.
5. Normalizes the response into a consistent {url, content} structure for both HTTP and Apify results.
6. Aggregates all fetched results into a single combined output.

## Setup
1. Generate an Apify API token in the Apify Console and replace <YOUR_APIFY_TOKEN> in the input parameters.
2. Update the Url List array in the input parameters with the URLs you want to fetch (the workflow currently fetches only the first item in the list).
3. If you expect redirects, anti-bot blocks, or non-HTML responses, adjust the HTTP Request options or rely on the Apify fallback accordingly.

## Customization
- Provide target URLs via webhook or Google Sheets

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
