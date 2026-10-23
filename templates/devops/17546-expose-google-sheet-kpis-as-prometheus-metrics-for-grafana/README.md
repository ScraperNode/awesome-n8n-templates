# ⚙️ Expose Google Sheet KPIs as Prometheus metrics for Grafana

> ⚡ **22 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow exposes KPI values stored in a Google Sheet as a Prometheus text exposition endpoint via an n8n webhook, so Grafana can scrape and chart them, with caching, validation, and built-in exporter health metrics.

## How it works
1. Receives a Prometheus scrape request via an n8n webhook secured with header authentication.
2. Checks an in-workflow cache and immediately returns the cached Prometheus exposition text if it is still within the configured TTL.
3. If the cache is stale, reads metric rows from a specified Google Sheets document and tab.
4. Validates and normalizes each row (metric name, type, numeric value, and labels), dropping malformed, duplicate, or over-limit series and tracking reasons as comments/metadata.
5. Renders the valid rows into Prometheus 0.0.4 text format, saves the result back into the cache, and appends exporter self-metrics (including up status, cache hit/age, and row/series counts).
6. Returns the final metrics body as plain text to Prometheus, optionally serving a stale cached body and/or a configurable HTTP status code if the sheet read fails.

## Setup
1. Add a Google Sheets credential and ensure the target spreadsheet has columns named metric_name, help, type, value, and labels.
2. In the exporter configuration, set the Google Sheet ID and tab name (and adjust cache_ttl_seconds, max_series, exporter_prefix, and error behavior as needed).
3. Configure webhook header authentication (Authorization: Bearer <token>) and change the webhook path from metrics-CHANGEME to an unguessable value.
4. Activate the workflow, copy the production webhook URL, and add it as a scrape target in Prometheus (and then Grafana) using the same bearer token.

## Requirements
- A Google account with a Google Sheets credential connected in n8n, either OAuth2 or a service account. Read-only access to the single spreadsheet is enough.
- An n8n Header Auth credential to hold the scrape token. The webhook is publicly reachable once the workflow is active, so this is the only thing standing between the internet and your business numbers.
- A Prometheus server, Grafana Alloy, or any agent that can reach the n8n webhook URL over the network. Grafana itself never scrapes this endpoint; it queries Prometheus, which does.
- n8n with the JavaScript Code node available. No community nodes, no AI model, and no paid API: the whole workflow is deterministic and runs on free tiers.

## Customization
- serve_stale_on_error: turn on to keep serving the last good body through a Google Sheets outage instead of reporting sheet_exporter_up 0. Off by default, because a frozen flat line is harder to notice than a gap.
- fail_status_code: set to 503 if your team alerts on a target going down rather than on a metric value. The default 200 follows the exporter convention, where up stays 1 and the failure is carried by sheet_exporter_up 0 alongside the meta-metrics that explain it.
- cache_ttl_seconds: raise it to protect the Google Sheets read quota when several Prometheus servers or scripts hit the same endpoint, or set it to 0 to disable caching and read the sheet on every scrape.
- exporter_prefix: renames every self-metric from one field, so this feed can sit next to another exporter without colliding on names like up or series.
- Swap the data source: Google Sheets can be replaced with Airtable, Excel, or a database query without touching the validation or rendering logic, as long as rows still arrive with metric_name, help, type, value and labels.

## Additional info
This is built for slow-moving values a person maintains, things like SLO targets, license counts, contracted headcount or a manually counted backlog, rather than for high-frequency telemetry, and the recommended scrape_interval is 60s rather than the usual 15s: a human-edited spreadsheet does not change faster than that, and at 15s the endpoint runs 5,760 executions a day, which on n8n Cloud consumes a plan's monthly allowance in under a day and stops every other workflow on the account. Two behaviours are worth knowing before building dashboards on it. Prometheus renames any job or instance label coming from the sheet to exported_job and exported_instance under the default honor_labels setting, so the sheet can look correct while your PromQL matches nothing; the workflow flags this through sheet_exporter_warnings rather than rejecting the row. And keep high-cardinality values such as user IDs out of the labels column, since every distinct label set becomes its own series in Prometheus memory.

## 🔗 Nodes Used

Google Sheets, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
