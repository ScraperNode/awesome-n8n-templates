# 📊 Collect and validate supplier price comparisons with Apify

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This manual workflow starts or resumes an Apify Supplier Catalog Comparison actor run, polls until it succeeds, then downloads SUMMARY, REVIEW, and COMPARISON.csv outputs and exports a validated CSV plus a DIAGNOSTICS.json report.

## How it works
1. Runs manually and loads comparison settings, defaulting to resuming an existing Apify actor run ID.
2. Validates the settings and either starts a single new Apify Supplier Catalog Comparison run (when explicitly confirmed) or continues with the provided existing run ID.
3. Polls the Apify actor run status up to 18 times, waiting 10 seconds between checks while the run is still in progress.
4. When the run succeeds, fetches SUMMARY and REVIEW JSON records and the COMPARISON.csv file from the run’s Apify key-value store.
5. Validates the downloaded outputs (status codes, row counts, required CSV headers, CSV formatting, and size limits) and flags common data risks.
6. Outputs COMPARISON.csv and a DIAGNOSTICS.json file as binary attachments for download and downstream processing.

## Setup
1. Create an Apify HTTP Header Auth credential in n8n (for example, `Authorization: Bearer <APIFY_TOKEN>`) and select it in all Apify HTTP Request steps.
2. To resume, paste the 17-character Apify run ID into the settings and run the workflow manually.
3. To start a new comparison, set `mode` to `start`, provide two public HTTPS PDF URLs (before/after), set currency/number format/page limits and budget, and set `confirmation` to `START_ONE_COMPARISON` to allow the chargeable run start.

## Requirements
- An Apify account and protected API credential; Apify usage charges may apply. New comparisons require two authorized, publicly accessible HTTPS text-based supplier PDFs with visible table borders. Scanned PDFs and borderless layouts are not supported.

## Customization
- Adjust currency, number format, page limit and budget in the settings node. Default resume mode collects an existing run. No automatic schedule, durable duplicate prevention, or destination write is included.

## Additional info
Setup guide and workflow download: https://supplier-pdf-to-csv.maag8484.chatgpt.site/price-changes?utm_source=n8n&utm_medium=referral&utm_campaign=price_changes

The template is free; Apify usage is separately billed. Never retry an uncertain chargeable start: reconcile the run in Apify Console and resume by run ID. Inspect DIAGNOSTICS.json for partial output and review flags before using results. Tested with n8n 2.40.5 import and local fictional HTTP fixtures; those tests do not demonstrate live Apify billing or customer outcomes.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
