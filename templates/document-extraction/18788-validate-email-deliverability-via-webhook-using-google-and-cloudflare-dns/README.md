# 🔬 Validate email deliverability via webhook using Google and Cloudflare DNS

> ⚡ **17 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow exposes a webhook that validates an email’s deliverability by checking whether its domain has DNS MX records, using Google DNS-over-HTTPS with an automatic fallback to Cloudflare, and returns a JSON verdict with the reason and resolver source.

## How it works
1. Receives an HTTP request on a webhook endpoint with the email provided as a query parameter or JSON body.
2. Extracts and normalizes the email address and domain, then rejects malformed inputs with a 400 response.
3. Queries Google DNS-over-HTTPS to resolve MX records for the extracted domain.
4. Returns a 200 JSON response marking the email as valid when MX records are present, or invalid when no MX records are returned.
5. If the Google DNS lookup errors or times out, queries Cloudflare DNS-over-HTTPS for the same MX records.
6. Returns a 200 JSON response from the Cloudflare result indicating whether MX records exist and which resolver produced the verdict.

## Setup
1. Import the workflow and copy the production webhook URL from the webhook trigger to use in your form, app, or API client.
2. Send requests using `?email=` (GET) or a JSON body containing `email` to test the endpoint and confirm you receive JSON responses.
3. Activate the workflow after verifying any firewall or allowlist rules permit outbound HTTPS requests to `dns.google` and `cloudflare-dns.com`.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
