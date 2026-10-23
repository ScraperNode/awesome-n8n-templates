# 📊 Monitor AWS WAF-protected product prices with CapSolver, schedule, and webhook

> ⚡ **11 views** · 📊 [Market Research & Insights](../)

## Description

### How it works

1. Triggers at a regular interval or via a webhook request.
2. Solves AWS WAF challenge then makes a request to fetch the product page.
3. Extracts product data from the retrieved HTML page.
4. Compares the current and previously stored data to detect any changes.
5. Sends an alert if data has changed; else logs no change.
6. Returns results if triggered via webhook.

### Setup steps

- [ ] Configure schedule settings in 'Every 6 Hours' node.
- [ ] Set up AWS WAF credentials in 'Solve AWS WAF' nodes.
- [ ] Input target URL in 'Fetch Product Page' nodes.
- [ ] Configure webhook URL in 'Receive Monitor Request' node.

### Customization

Adjust the target site URL in 'Fetch Product Page' and related nodes to match different sites or specific pages.

## 🔗 Nodes Used

HTTP Request, Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
