# 🎣 Find ICP-matched companies or decision-makers with Agent Jesse

> ⚡ **41 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
Old lead lists go stale fast. This workflow uses Agent Jesse to search the live internet for companies or people that match your ICP, right now. Just describe who you're looking for in plain English, and get a fresh, scored lead list as a CSV.

## How it works
1. Receives a submission from an n8n form with the search type (Companies or People), your company URL, product description, ICP description, and the desired number of prospects.
2. Creates a new search in Agent Jesse using the submitted company URL and product description.
3. Starts an Agent Jesse research job for that search with your ICP description and requested prospect count.
4. Polls Agent Jesse every 30 seconds until the job completes or a 3-hour safety cap is reached.
5. Stops with an error if the research fails or does not complete within the polling cap.
6. When complete, fetches all paginated result pages from Agent Jesse and merges them into a single normalized list of companies or people with relevance scores and rationales.
7. Converts the merged results into a timestamped CSV file and returns both the structured output and the CSV.

## Setup
1. Create an Agent Jesse API key and add it to n8n as an HTTP Bearer Auth credential.
2. Ensure the HTTP Request steps are configured to use your Agent Jesse credential for the create, research, status polling, and paginated fetch requests.
3. Open the generated n8n form and share its URL with users who should submit lead searches.

## 🔗 Nodes Used

HTTP Request, Stop and Error, n8n Form Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
