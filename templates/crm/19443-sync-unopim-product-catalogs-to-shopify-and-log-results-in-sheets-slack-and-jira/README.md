# 🤝 Sync UnoPim product catalogs to Shopify and log results in Sheets, Slack and Jira

> ⚡ **13 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
The UnoPim Trigger fires the moment a product is saved, so a Shopify storefront updates within seconds. Products that are ready are published, incomplete ones open a Jira ticket naming the missing fields, and every run is logged to Google Sheets and announced in Slack.

## How it works
1. The UnoPim Trigger listens for product.updated, so there is no polling interval and the store reacts within seconds of an edit in the PIM.
2. A code node flattens each attribute out of the correct UnoPim scope, reading the common value first, then the locale specific one, then the channel and locale specific one.
3. An IF node decides whether the product is ready to publish. It needs a name, a description, a price and an active status; the rule lives in one place so you can change it.
4. Ready products go to Shopify. If the UnoPim record already carries the store product id the node updates that product, otherwise it creates one, so the same run handles both cases.
5. Every publish is appended to a Google Sheet and announced in Slack. Anything not ready opens a Jira ticket naming the exact missing fields and posts a short warning instead, so nothing is dropped silently.

## Setup
1. Install the community node n8n-nodes-unopim from Settings, Community nodes. This template is self-hosted only, because n8n Cloud cannot install community nodes.
2. In UnoPim open Configuration, Integrations, API Keys and create a key. All four credential values come from that row. Add the UnoPim API credential using the application root as the URL, not the admin address, then connect Shopify, Google Sheets, Slack and Jira.
3. In the Settings node set the locale, the channel and storeIdAttribute, the UnoPim attribute that holds the Shopify product id. Then run a queue worker on the n8n queue, because UnoPim queues the webhook rather than sending it from the web request.

## Requirements
- Self-hosted n8n, UnoPim 3.0 or newer with the connector package installed, a queue worker running on the n8n queue, and Shopify, Google Sheets, Slack and Jira accounts.

## Customization
- Swap Shopify for WooCommerce or a plain HTTP request, swap Jira for Linear or Asana, and change the readiness rule in the IF node to the fields your storefront cannot ship without.

## Additional info
Point it at a staging store first. The Jira branch is deliberate: an export that silently skips a half finished product is the usual failure of a sync built by hand.

## 🔗 Nodes Used

Google Sheets, Slack, Jira Software, Shopify

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
