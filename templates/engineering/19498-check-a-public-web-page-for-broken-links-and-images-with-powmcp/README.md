# ⚒️ Check a public web page for broken links and images with PowMCP

> ⚡ **1 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow runs on demand to check a specified public webpage for broken links and images by calling the PowMCP hosted broken-link checker, returning both a human-readable report and structured evidence of failures.

## How it works
1. Runs when you manually start the workflow.
2. Sets the target public page URL to check.
3. Sends the URL to PowMCP’s broken-link-check MCP endpoint to scan the page and test discovered link and image targets.
4. Outputs a readable report plus structured evidence (for example broken targets, timeouts, and rate-limit/refused results) for review in n8n.

## Setup
1. Import this workflow into an n8n version with the built-in MCP Client node, version 1.1. No AI model, model API key, or community node is required.
2. Open Set public page URL and replace https://example.com/ with the public page you are permitted to share and check. Do not include credentials, private tokens, or sensitive query parameters.
3. Run the workflow manually, then open Read findings and evidence. Review confirmed failures, timeouts, rate limits, refused targets, and truncation separately. Fix confirmed problems on your site, deploy the changes, and rerun the workflow.

## Requirements
- Available PowMCP guest allowance and an n8n version supporting the built-in MCP Client node version 1.1. Guest access has 50 lifetime requests per resolved network identity; callers sharing an egress address share that allowance. Stop if it is exhausted. This template does not establish account-linked access in n8n. n8n hosting costs are separate.

## Additional info
The supplied URL is sent to PowMCP, which fetches the page and up to 100 unique link/image targets. This checks one page, not a whole site. A high score can still include unassessed targets; results do not establish future availability, accessibility compliance, or overall launch readiness. No scheduling or notifications are configured. The workflow passed isolated local execution in n8n 2.38.7; production verification remains blocked by the submitting network's exhausted guest allowance. Checker and scope: https://powmcp.com/apps/broken-link-check/ | Privacy: https://powmcp.com/privacy/ | Terms: https://powmcp.com/terms/ | Created by PowMCP.

## 🔗 Nodes Used

MCP Client

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
