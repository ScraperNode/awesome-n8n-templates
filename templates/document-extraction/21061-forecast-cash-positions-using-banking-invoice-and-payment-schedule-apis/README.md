# 🔬 Forecast cash positions using banking, invoice, and payment-schedule APIs

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow exposes a POST webhook that gathers banking balances, outstanding invoices, and upcoming payment schedules via HTTP APIs, then combines the results into a day-by-day cash-position forecast (optionally including FX enrichment) and returns the forecast JSON with a data-source status audit trail.

## How it works
1. Receives a cash-forecast request via a POST webhook.
2. Validates the request inputs (such as horizon days and base currency) and prepares the endpoint URLs and parameters used for downstream API calls.
3. Calls a banking API over HTTP to retrieve current balances and recent transaction context for the requested accounts.
4. Calls an accounts-receivable API over HTTP to retrieve outstanding invoices and expected collection timing within the forecast horizon.
5. Calls a payment-schedules API over HTTP to retrieve upcoming outflows (such as AP, payroll, taxes, and recurring payments) and optionally calls an FX/enrichment API.
6. Aggregates the collected data into a daily cash-position projection, computes summary metrics, and returns the forecast as the webhook response with an HTTP status that indicates full or partial data availability.

## Setup
1. Configure the webhook endpoint in the calling system by copying the production webhook URL for the `cash-forecast` path and sending forecast requests to it via POST.
2. Replace the placeholder httpbin.org URLs with your real banking, invoicing/accounts-receivable, payment-schedule, and (optional) FX API endpoints.
3. If your APIs require authentication, add the necessary credentials/headers (for example OAuth2 or API keys) in the HTTP requests.
4. Adjust defaults such as base currency, timeout, and forecast horizon (and align request body fields like `accounts`, `asOfDate`, and `horizonDays`) to match your data sources’ schemas.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
