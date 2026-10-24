# 🔬 Validate US property request scope with CivicDataForge and HTTP Request

> ⚡ **2 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
Validate a US property request before a separately authorized evidence purchase. This manual workflow checks the free quote response, expiry and allowed purchase destination, then returns a typed result. It retrieves no permit evidence and makes no purchase.

## How it works
1. Runs when triggered manually.
2. Builds a JSON payload with the task, public property address (address, city, state), purpose, and retention settings.
3. Sends the payload to the CivicDataForge free quote API endpoint over HTTP and captures the full response.
4. Checks HTTP status, JSON contract, the charged=false flag, quote ID format, issue and expiry times, and the expected purchase URL. Invalid responses produce no purchase handoff.
5. Outputs a typed result indicating whether the scope is ready for a separate purchase handoff, or returns a rejected state when the response is invalid, expired, or failed.

## Setup
1. Import the workflow into n8n. Open Choose input and replace the public Orlando sample address, city and state with the public property you want to check. Do not enter private records or credentials.
2. Ensure your n8n instance can make outbound HTTPS requests to https://civicdataforge.pages.dev.
3. Run manually and inspect the final JSON in Inspect result without purchasing. A scope_ready_not_evidence result confirms request scope only, not permit status or compliance. Re-run whenever the input changes or the quote expires. Any purchase requires separate, explicit authorization.

## Requirements
- Standard n8n nodes and outbound HTTPS access. No API key or paid CivicDataForge plan is required for this scope check; your own n8n hosting may have costs.

## Customization
- Replace the input fields or connect an upstream source while preserving the request shape. Keep purchase authorization outside this workflow. There is no automatic purchase, background schedule or automatic retry.

## Additional info
This is a bounded client workflow, not the CivicDataForge evidence engine. It returns the locally submitted scope because the quote response does not echo the address; it does not claim server-echoed address verification. Setup documentation: https://civicdataforge.pages.dev/connect-agent

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
