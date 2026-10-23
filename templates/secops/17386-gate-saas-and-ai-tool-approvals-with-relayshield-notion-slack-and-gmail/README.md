# 🔒 Gate SaaS and AI tool approvals with RelayShield, Notion, Slack, and Gmail

> ⚡ **2 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
This workflow receives vendor and AI-tool approval requests via webhook, runs RelayShield risk checks (including an MCP registry check for AI tools), then logs outcomes to Notion, alerts a security Slack channel for risky requests, and emails the requester an approved or pending-review decision.

## How it works
1. Receives a POST request via webhook containing the requester details and either a SaaS vendor domain or an AI tool/server URL.
2. Routes the request based on whether `request_type` is `ai_tool` or a standard SaaS request.
3. For SaaS requests, uses RelayShield to assess supply-chain risk for the vendor domain, scan public repositories for exposed secrets tied to that domain, and check the requester’s email for OAuth/token exposure.
4. For AI-tool requests, runs the same three RelayShield checks and also calls RelayShield’s MCP registry risk endpoint to evaluate the submitted MCP server URL or package name.
5. If any check returns a HIGH/CRITICAL risk signal (or a positive match for secret/OAuth exposure), logs the request as pending review in Notion, posts an alert to the configured Slack security channel, and emails the requester that the request is under review.
6. If no risks are found, logs an approved result to Notion and emails the requester that the request passed automated checks.

## Setup
1. Create or reuse a request intake form/ITSM ticket action that sends a POST to this workflow’s webhook URL with fields like `request_type`, `requester_email`, `vendor_name`, `vendor_domain`, and (for AI tools) `server_url` or `package_name`.
2. Add RelayShield credentials: a RelayShield API credential for the RelayShield nodes and an HTTP Header Auth credential with `X-RS-API-KEY` for the three HTTP Request calls.
3. Add and authorize Notion OAuth2, Slack OAuth, and Gmail OAuth2 credentials in n8n.
4. Set the `notionVendorGateDbId` and `slackSecurityChannelId` variables in n8n to point to your Notion database and Slack channel.
5. Ensure your Notion database has properties matching the workflow’s writes (for example, Requester, Department, Request Type, Vendor, and Status).

## Requirements
- A RelayShield API key (metered per-call billing) — get one at api.relayshield.net/developers
- Notion, Slack, and Gmail accounts with OAuth apps configured in n8n
- An intake form or ITSM system able to POST to the workflow's webhook

## Customization
- Broaden the risk threshold (e.g. include MEDIUM, not just HIGH/CRITICAL) if you want a stricter gate
- Add more RelayShield checks (ransomware risk, identity graph) for wider coverage
- Route Slack alerts to different channels per department, or swap Gmail for another provider

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Gmail, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
