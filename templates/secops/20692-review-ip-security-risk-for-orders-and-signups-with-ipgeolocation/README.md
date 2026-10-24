# 🔒 Review IP security risk for orders and signups with IPGeolocation

> ⚡ **2 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
This workflow receives an order or signup event via webhook, validates the request, checks the IP address against IPGeolocation’s Security API, and returns a structured JSON risk assessment (including recommendation, severity, and signals) to help you decide whether to allow, verify, or manually review the event.

## How it works
1. Receives a POST webhook request containing an IP address (and optional order/signup metadata).
2. Validates the payload format (including a basic IPv4/IPv6 syntax check) and returns a 400 response with validation details if the request is invalid.
3. Calls IPGeolocation’s getIpSecurityInfo endpoint to retrieve security signals such as threat score, VPN/proxy/Tor flags, and related indicators.
4. Converts the IPGeolocation response into a workflow risk score with human-readable signals and a recommendation (allow, additional verification, or manual review).
5. Returns the full assessment as JSON to the webhook caller, or returns a 502 “lookup failed” response if the IP security lookup cannot be completed.

## Setup
1. Create an IPGeolocation API key and select it in the IPGeolocation node credential field.
2. Activate the workflow and copy the production webhook URL, then configure your store/app to send a POST request to it with a JSON body that includes an ip field.
3. Update your client payload mapping (optional) to include eventType, orderId/customerId, amount, currency, and source if you want them reflected in the response.

## 🔗 Nodes Used

Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
