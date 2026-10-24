# 🤝 Log Gumroad and Payhip sales and refunds in a unified Google Sheet

> ⚡ **1 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
Every Gumroad and Payhip sale and refund lands automatically in one Google Sheet, one row per order with product, buyer, gross, fees and net. Refunds update the original sale, webhook retries never create duplicates, and you get one live sales ledger with no CSV exports to merge.

## How it works
1. Two webhooks receive Gumroad's Ping and Payhip's paid / refunded events.
2. Each request is verified: Gumroad by your seller_id, Payhip by its signature (SHA-256 of your API key). Anything else is ignored.
3. Both payloads are mapped to one schema: order ID, platform, status, date, product, quantity, currency, gross, fees, net, buyer email.
4. Rows are appended or updated by order ID, so webhook retries never duplicate and refunds update the original sale. Payhip fees are included, so net is calculated.

## Setup
1. Create a Google Sheet with a Sales tab and the header row listed in the workflow's main sticky note.
2. Put your Gumroad seller ID and the SHA-256 hash of your Payhip API key into the two check nodes.
3. Connect Google Sheets and paste your sheet URL.
4. Publish, then paste the production webhook URLs into Gumroad (Settings > Advanced > Ping) and Payhip (Settings > Developer > Webhooks).

## Requirements
- Gumroad and/or Payhip account, Google account, a publicly reachable n8n instance (Cloud or self-hosted).

## Customization
- Add columns in the two Normalise code nodes.

## 🔗 Nodes Used

Google Sheets, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
