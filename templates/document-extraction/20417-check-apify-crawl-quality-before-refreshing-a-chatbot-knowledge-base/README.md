# 🔬 Check Apify crawl quality before refreshing a chatbot knowledge base

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
Check a completed Apify crawl before refreshing a chatbot or knowledge base. This manual workflow verifies the source run, audits its export for missing required pages and other quality failures, then routes PASS or BLOCK without writing to your destination.

## How it works
1. Runs when triggered manually in n8n.
2. Reads your configured Apify crawl run ID, namespace, expected URLs, and the explicitly reviewed failed-request count, then stops if any required configuration is missing or indicates crawl failures.
3. Calls the Apify API to verify the specified actor run finished successfully and has an available dataset to audit.
4. Starts an Apify Crawl Quality Gate actor run with the dataset ID and your URL expectations, waiting briefly for it to finish.
5. Fetches the audit REPORT from the Apify key-value store and validates that it matches the expected schema and source run.
6. Routes to PASS (connect your refresh here) when the report gate passes, or to BLOCK to keep the current knowledge base when it fails.

## Setup
1. Create an Apify API token and add it to n8n as an HTTP Header Auth credential (Authorization: Bearer <token>) used by all Apify HTTP requests.
2. In the Configure source step, set your finished Apify run ID, a stable namespace, and a list of required expected URLs (and optionally a previous manifest).
3. Review the crawl’s failed-request count in Apify and enter it as upstreamFailedRequests (must be 0 for the workflow to proceed).
4. Attach your knowledge base/chatbot refresh workflow only to the PASS branch, and persist the returned report.manifest only after a successful refresh.

## Requirements
- n8n and an Apify account with access to a completed crawler run and its dataset. The workflow template is free. Each real completed Crawl Quality Gate audit, including a BLOCK result, costs $0.10. This workflow caps the audit charge at $0.10 and does not retry automatically. Other platform costs may apply.

## Customization
- Set the required URLs and stable namespace for your source. Optionally supply a manifest saved after a previous successful refresh. Connect only PASS to your destination update; keep existing data on BLOCK or errors. Scheduling, destination writes and persistent manifest storage are not included.

## Additional info
For agencies and developers refreshing chatbots or knowledge bases from existing Apify crawls. A free synthetic demo and setup guide are available at https://apify.com/obeying_laureate/crawl-quality-gate. The audit checks supplied rules, including required-page coverage, duplicates, recorded failures and short text; PASS does not prove whole-site completeness or authorize deletion. Test BLOCK by adding an absent required URL before connecting a destination. Verified on n8n 2.6.4.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
