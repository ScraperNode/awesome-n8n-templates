# 🔧 Send Wazuh security alerts as Gemini-enriched email reports and notifications

> ⚡ **64 views** · 🔧 [Miscellaneous](../)

## Description

## Quick Overview
This workflow queries Wazuh Indexer on a schedule or manually, summarizes alert activity, uses Google Gemini to generate structured security insights, and sends role-based HTML email reports or immediate alert notifications via SMTP, optionally attaching PDFs rendered by Gotenberg and logging deliveries in n8n Data Tables.

## How it works
1. Runs manually or on schedules (every 5 minutes for urgent alerts, weekly, or monthly) and sets the run mode for the execution.
2. Loads enabled delivery profiles from an n8n Data Table and builds a time-bounded Wazuh Indexer search query appropriate to the selected run mode.
3. Queries Wazuh Indexer for alerts and aggregations, then derives severity counts, use-case coverage, top rules/agents, MITRE context, and an evidence sample.
4. Stops early if there is nothing to deliver (no eligible report run or no high-severity events for immediate mode).
5. Sends the minimized summary to Google Gemini, validates the structured JSON response, and uses it to generate role-based HTML reports and per-event immediate alert emails.
6. Sends reports by email as HTML (and optionally converts the HTML to a PDF via Gotenberg and attaches it) and logs each successful report delivery to an n8n Data Table.
7. For immediate alerts, suppresses duplicates using the delivery log, emails each previously unseen high/critical event to eligible recipients, and logs each successful notification.

## Setup
1. Add credentials for Wazuh Indexer HTTP Basic Auth (read-only access to `wazuh-alerts*`), Google Gemini (PaLM) API, and an SMTP account for email delivery.
2. Create and populate an n8n Data Table for delivery profiles (ID `x2D4WxDNA6gIdbNN`) with fields like `organizationKey`, `profileKey`, `recipientEmail`, `audienceProfile`, `enabled`, report cadence, and immediate alert severity settings.
3. Create an n8n Data Table for the delivery log (ID `eFRljEojwfT812EE`) with the columns used by the workflow to record sent reports/alerts and to suppress duplicate immediate notifications.
4. Update deployment-specific values in the configuration step, including `organizationName`, `organizationKey`, `wazuhIndexerUrl`, sender name/email, severity thresholds, lookback windows, and `technicalEvidenceLimit`.
5. If you enable `generatePdf=true`, deploy a reachable Gotenberg service and set `gotenbergUrl` so the workflow can render and attach PDFs.

## 🔗 Nodes Used

Send Email, HTTP Request, Schedule Trigger, Basic LLM Chain, Structured Output Parser, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
