# 📊 Predict SEO traffic impact scenarios with Postgres and OpenAI GPT-4.1

> ⚡ **3 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow exposes a header-authenticated webhook API that simulates the SEO traffic impact of merging, creating, or removing pages using baseline metrics from Postgres, then generates a validated strategy narrative with OpenAI and logs the run back to Postgres.

## How it works
1. Receives a POST request on the /seo-what-if-simulate webhook using header authentication.
2. Validates the request body (tenant/site, horizon, and merge/new/remove actions) and returns a structured 400 response if any rules fail.
3. Queries Postgres for the latest per-page SEO metrics snapshot for the provided tenantId and siteId, then returns a structured 404 if no snapshot exists.
4. Builds a baseline site model (totals, clusters, CTR calibration, and existing cannibalization) and runs merge, new-page, and removal simulations in parallel to calculate per-action deltas and risk flags.
5. Aggregates all simulation results into a month-by-month forecast with expected/low/high click bands, verdict, confidence, per-action breakdown, and warnings.
6. Uses OpenAI (via a LangChain LLM chain) to turn the computed forecast into an executive narrative and validates the LLM JSON output with a deterministic fallback if needed.
7. Inserts the simulation run and full result into Postgres for auditing and responds to the webhook with a 200 JSON payload containing the forecast and narrative.

## Setup
1. Create and configure the Postgres tables used by the workflow (seo_page_metrics as the source snapshot and seo_simulation_runs for logging).
2. Add Postgres credentials in n8n that can read from seo_page_metrics and insert into seo_simulation_runs.
3. Add an OpenAI credential (or compatible OpenAI API key) for the GPT-4.1 chat model used to generate the strategy narrative.
4. Configure the webhook’s header-auth authentication in n8n and pass the same header from your calling application when invoking /seo-what-if-simulate.
5. Ensure your seo_page_metrics snapshot data includes the expected columns (url, clicks, impressions, avg_position, backlinks, word_count, cluster_id, primary_keyword, internal_links_in) and is populated per tenantId/siteId before calling the API.

## 🔗 Nodes Used

Postgres, Webhook, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
