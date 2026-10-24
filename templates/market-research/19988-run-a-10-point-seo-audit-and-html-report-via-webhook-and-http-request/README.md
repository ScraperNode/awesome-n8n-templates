# 📊 Run a 10-point SEO audit and HTML report via webhook and HTTP request

> ⚡ **20 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow exposes a GET webhook that accepts a website URL, fetches the page, runs a 10-point SEO checklist with a score out of 100, and returns a ready-to-share HTML audit report in the webhook response.

## How it works
1. Receives a GET webhook request on the `site-check` endpoint with a `url` query parameter.
2. Validates and normalizes the input to allow only public domain URLs (no IPs, localhost, or internal TLDs).
3. Fetches the target page via an HTTP request using a custom User-Agent and an 8-second timeout.
4. Parses the returned HTML to evaluate 10 checks (reachability/response time, HTTPS, title length, meta description, viewport tag, single H1, image alt text coverage, Open Graph image, HTML lang attribute, and page size) and computes a score out of 100.
5. Builds a simple HTML report summarizing the score and pass/fail results for each check.
6. Responds to the webhook with the generated HTML report and a `text/html` content type.

## Setup
1. Activate the workflow and copy the production webhook URL for the `site-check` endpoint.
2. Call the webhook with `?url=yourdomain.com` (or `?url=https://yourdomain.com`) and ensure the target site is publicly reachable from your n8n instance.
3. Optionally adjust the scoring thresholds, checks, timeout, and User-Agent in the workflow code and HTTP request configuration to match your audit criteria.

## Requirements
- An n8n instance (Cloud or self-hosted). No credentials or API keys are needed.

## Customization
- Change thresholds or add checks in the "Audit & build report" Code node, send the report by email with a Gmail node, or log every checked domain in Google Sheets to collect leads.

## Additional info
Live example: https://worknull.app.n8n.cloud/webhook/site-check?url=n8n.io

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
