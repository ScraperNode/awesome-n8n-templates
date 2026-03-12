# 🔧 Get Slack notifications when new product published on WooCommerce

> ⚡ **1,561 views** · 🔧 [Miscellaneous](../)

## Description

This workflow let's a bot in Slack notify a specific channel when a new product in WooCommerce is published and live on the site. 

## Prerequisites

[WooCommerce](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.woocommercetrigger/) account
[Slack](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.slack/) and a [Slack bot](https://slack.com/help/articles/115005265703-Create-a-bot-for-your-workspace)

## How it works

1. Listen for WooCommerce product creation
2. If permalink starts with https://[your-url-here].com/product/
3. Slack bot notifies channel that a new product has been added. 

Please note, you must update the URL in the IF node to match your url. If your WooCommerce doesn't use the slug /product/, that will need to be updated too.

## 🔗 Nodes Used

Slack, Start, WooCommerce Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
