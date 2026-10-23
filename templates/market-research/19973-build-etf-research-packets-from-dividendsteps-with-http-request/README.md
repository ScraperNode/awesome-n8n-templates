# 📊 Build ETF research packets from DividendSteps with HTTP Request

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
Manually search the [DividendSteps website](https://dividendsteps.com/) page API for an ETF topic, retrieve matched Markdown records via HTTP Request, and produce an attributed research packet with source links, dates to review, empty-result handling, and explicit errors.

## How it works
1. Runs when you trigger the workflow manually.
2. Sends an HTTP GET request to the DividendSteps page search API using your query and result limit.
3. Validates the search response and either stops with an explicit no-results/error payload or prepares requests for each matched page.
4. Fetches each matched page from the DividendSteps page API and keeps HTTP status and failures as structured errors.
5. Extracts outbound source links and unclassified date mentions from each page’s Markdown.
6. Outputs a single Markdown “ETF research packet” that lists sources, includes the original page content, and records limitations and any retrieval errors.

## Setup
1. Update the query term and page limit (1–20) used for the DividendSteps search request.
2. Ensure your n8n instance can reach the [DividendSteps API documentation](https://dividendsteps.com/openapi.json) and its public HTTPS endpoints. No credentials or paid services are required.
3. Run the workflow and use the final output Markdown field as your research reading packet.

## Additional info
The public API indexes published pages rather than live market quotes. An empty match does not establish that a fund or payment does not exist. Retrieval time is not the underlying financial-data date; check each source page and issuer before quoting figures. The original [DividendSteps website](https://dividendsteps.com/) explains the calculator assumptions separately.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
