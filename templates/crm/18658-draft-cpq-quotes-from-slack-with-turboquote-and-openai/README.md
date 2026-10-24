# 🤝 Draft CPQ quotes from Slack with TurboQuote and OpenAI

> ⚡ **3 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow listens for Slack @mentions, uses OpenAI to map the request to TurboQuote (TurboDocx) catalog products, creates a priced draft quote for an existing customer, and posts a review link back to the originating Slack channel.

## How it works
1. Triggers when someone mentions the bot in a Slack channel (app_mention event).
2. Loads your TurboQuote product catalog from TurboDocx and provides it to an OpenAI-powered agent.
3. Uses OpenAI to extract the customer name and requested items from the Slack message and to look up matching TurboQuote products via catalog search.
4. Joins the selected product IDs back to the catalog to attach authoritative list prices, calculate totals, and track any unmatched or unpriced items.
5. If there are priced items, searches TurboQuote for the customer company and retrieves its primary contact.
6. Creates a draft TurboQuote quote, adds the priced line items, and posts the quote number, total, and internal review link to Slack (or posts an error if nothing is priced or the customer is not found).

## Setup
1. Use a self-hosted n8n instance and install the @turbodocx/n8n-nodes-turbodocx community node.
2. Add Slack credentials and configure your Slack app to receive app_mention events and allow chat:write, then set the trigger channel (or leave it to listen in your intended channel).
3. Add an OpenAI API credential for the OpenAI Chat Model node.
4. Add TurboDocx/TurboQuote credentials and ensure your TurboQuote workspace has a populated product catalog with list prices plus existing companies with at least one contact.
5. Update the quote defaults (appBaseUrl, currency, termDays, and validDays) to match your TurboQuote environment and quoting policy.

## 🔗 Nodes Used

Slack, AI Agent, OpenAI Chat Model, Structured Output Parser, Slack Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
