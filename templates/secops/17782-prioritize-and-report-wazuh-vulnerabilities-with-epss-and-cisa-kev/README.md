# 🔒 Prioritize and report Wazuh vulnerabilities with EPSS and CISA KEV

> ⚡ **226 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
This workflow runs daily (or manually) to pull vulnerability findings from Wazuh Indexer, enriches CVEs with FIRST EPSS and the CISA KEV catalog, calculates a priority score, tracks finding lifecycle in n8n Data Tables, and emails an executive security report while logging run metrics.

## How it works
1. Runs on a daily schedule at 07:00 UTC (or via manual trigger) and loads configuration values like the Wazuh Indexer URL, scoring weights, thresholds, and email settings.
2. Queries the Wazuh vulnerability inventory from the Wazuh Indexer/OpenSearch API using Basic Auth and paginated search-after to retrieve all findings.
3. Normalizes the Wazuh results into a consistent finding record (including a stable finding key) and deduplicates CVEs into batches.
4. Fetches EPSS scores from the FIRST EPSS API in batches and downloads the CISA Known Exploited Vulnerabilities (KEV) catalog once per run.
5. Enriches each finding with EPSS and KEV context and computes an explainable priority score based on CVSS, EPSS probability, and KEV presence.
6. Loads prior lifecycle history from an n8n Data Table, classifies findings as new/ongoing/reopened/resolved, and upserts the updated lifecycle records.
7. Builds a run summary, logs it to an n8n Data Table for auditing, and sends an HTML executive email with key counts and the top prioritized findings.

## Setup
1. Create two n8n Data Tables named `wazuh_vulnerability_lifecycle` and `wazuh_vulnerability_runs` with the columns used by the upsert and run-log steps.
2. Add Wazuh Indexer/OpenSearch HTTP Basic Auth credentials and set the correct `wazuhIndexerUrl`, ensuring your n8n host trusts the Wazuh Indexer TLS certificate.
3. Add SMTP credentials for the email step and set `reportRecipient`, `senderName`, and `senderEmail` in the configuration.
4. Review and adjust the scoring weights, thresholds, top findings limit, and the 07:00 UTC schedule to match your vulnerability triage process.

## 🔗 Nodes Used

Send Email, HTTP Request, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
