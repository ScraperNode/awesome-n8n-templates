# 📊 Generate vendor negotiation strategies from pricing data with GPT-4 and SendGrid

> ⚡ **23 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow ingests vendor pricing via a webhook or a weekly schedule, analyzes variance against historical and market benchmarks, uses OpenAI to draft negotiation strategies for high-priority cases, then emails recommendations through SendGrid and appends the analysis to a Google Sheets tracker.

## How it works
1. Receives vendor pricing data from a POST webhook endpoint or runs every Monday at 8:00 to process a scheduled input.
2. Normalizes incoming fields (vendor, pricing, benchmarks, volume, currency, renewal date, and notes) into a consistent schema.
3. Calculates price variance versus historical and market benchmarks, estimates potential savings, derives a confidence score, and flags whether the opportunity is high priority.
4. Filters to only high-priority opportunities and waits briefly to help manage API rate limits.
5. Uses OpenAI to generate a structured, under-300-word negotiation strategy including tactics, target and walk-away prices, projected savings range, and risk flags.
6. Formats the AI output into a report, emails it via the SendGrid API, and appends the analyzed record to a Google Sheets tab for tracking.

## Setup
1. Add an OpenAI API credential for the OpenAI Chat Model used to generate negotiation strategies.
2. Create a SendGrid API key and configure the HTTP request with an Authorization header (Bearer token), then replace the sender and recipient email addresses.
3. Enable the Google Sheets API and provide OAuth/access configuration, then replace YOUR_SHEET_ID and ensure the spreadsheet has a VendorNegotiations sheet with matching columns.
4. If using the webhook trigger, copy the production webhook URL for vendor-pricing-inbound and configure your source system to POST the expected fields (for example vendorName, currentUnitPrice, historicalAvgPrice, marketBenchmarkPrice, contractVolume, and renewalDate).

## 🔗 Nodes Used

HTTP Request, Webhook, Schedule Trigger, Filter, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
