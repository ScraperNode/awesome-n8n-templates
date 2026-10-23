# ⚒️ Check www, https and query redirects with Apify

> ⚡ **0 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
Manually check HTTP/HTTPS, WWW/non-WWW and query redirects for up to 10 existing site paths using Apify. Start one capped paid run or recover an existing run’s results, then receive completeness-checked observations and pass/review/fail/unknown counts.

## How it works
1. Runs when you trigger the workflow manually and reads your target HTTPS origin, paths, and optional Apify run ID.
2. Validates the origin and paths, enforces limits, and blocks execution until you acknowledge the capped paid Apify run.
3. Either reads and waits for the specified existing Apify run, without restarting it, or starts one new run of ecomopskits/www-https-query-redirect-checker with a USD0.16 maximum total charge cap.
4. Polls the Apify Run API until the run succeeds or stops with an error if the run does not complete within the allowed attempts.
5. If resuming, fetches the original Apify run input and confirms it matches the currently provided origin and paths.
6. Reads the Apify run SUMMARY and dataset items, verifies the result set is complete and consistent, and returns the detailed redirect observations plus verdict counts.

## Setup
1. Create an Apify API token and add it to an n8n HTTP Header Auth credential (header name `Authorization`, value `Bearer YOUR_APIFY_TOKEN`) used by all Apify HTTP Request steps.
2. Update `canonicalOrigin` and `paths` in the workflow input to the public HTTPS domain and 1–10 existing site paths you want to test.
3. Review the Actor pricing and set acknowledgePaidRun to true for a new run. To recover results after interruption, copy the original run ID from Apify Console into existingRunId and keep the original origin and paths; recovery does not start another run.

## Additional info
The template is free; Apify usage and n8n hosting are separate. The Actor charges USD0.002 per non-unknown check, up to USD0.016 per path at this price, with a USD0.16 run cap. Observed failures can be billable. Each new execution can start another chargeable run; no automatic paid retry is configured. Review current pricing: https://apify.com/ecomopskits/www-https-query-redirect-checker

Use only public URLs without secrets or personal information. Incomplete results stop the workflow; unknown checks never count as passes. Results remain in your Apify storage and n8n execution history. HTTP GET observations only: no JavaScript rendering, indexing, SEO-health or analytics-attribution guarantee. Built by EcomOpsKits, the Actor publisher.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
