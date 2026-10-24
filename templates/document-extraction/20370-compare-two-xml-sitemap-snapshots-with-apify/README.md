# 🔬 Compare two XML sitemap snapshots with Apify

> ⚡ **3 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
For website operators comparing complete saved XML sitemaps of the same scope before and after a release. Returns added, removed and metadata-changed URLs plus unchanged counts. No sitemap or page URLs are fetched.

## How it works
1. Starts when you run the workflow manually.
2. Checks nonempty XML text, the 2,000,000 UTF-8 byte limit per snapshot, and prohibited DTD/custom entities. New runs require explicit paid consent. The Actor validates urlset structure and the 5,000-entry limit.
3. Reads the selected existing run when existingRunId is set. Otherwise starts one capped run of ecomopskits/sitemap-snapshot-diff with the supplied XML pair. Recovery never starts a replacement run.
4. Polls the same Apify run until it finishes successfully or stops with an error if it fails or does not complete within the allowed checks.
5. Reads the original run INPUT and confirms both XML strings exactly match the selected snapshots before accepting either a new or recovered report.
6. Reads the run SUMMARY and result dataset from Apify, validates consistency, and outputs the final comparison report with counts and per-URL changes.

## Setup
1. Create an HTTP Header Auth credential in n8n: name Authorization, value Bearer YOUR_APIFY_TOKEN. Select that credential on all five HTTP Request nodes; keep the token out of workflow JSON.
2. In Your snapshots and spending consent, paste complete beforeXml and afterXml urlsets of the same scope into their separate String fields. Each accepts up to 2,000,000 UTF-8 bytes and 5,000 URL entries. Sitemap indexes, gzip, DTDs and custom entities are unsupported.
3. Review the Actor pricing and set acknowledgePaidRun to true for a new run. The platform cap is USD0.005; each completed comparison, including no-change results, is billable.
4. After interruption, inspect Apify Console. Put that run ID in existingRunId and retain its original XML pair to read it without starting another paid run. Failed, unfinished or inconsistent results stop with an error.

## Requirements
- An n8n instance and an Apify account/token with access to this Actor and its run storage. The template uses built-in nodes. Apify usage and n8n hosting are separate from the free template.

## Additional info
Built by EcomOpsKits, the Actor publisher: https://apify.com/ecomopskits/sitemap-snapshot-diff

Current price: USD0.005 per completed comparison, including no-change reports. Each new completed run charges again; no automatic paid retry. Invalid-input or insufficient-budget runs produce no comparison event. Platform storage/read costs may apply to saved-run reads.

Removed means absent from the supplied later snapshot, not a deleted page. Exact decoded/trimmed loc strings match; lastmod, changefreq and priority compare as strings. Other sitemap extensions are ignored. No crawling, schedule, alerts, indexing or SEO-health verdict; this is not full sitemap protocol validation.

Only supply data you are authorized to process; omit credentials, private URLs and sensitive query parameters. Inputs/results remain in Apify run storage under its retention/access settings and in n8n execution history.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
