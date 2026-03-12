# 💬 AI-powered WooCommerce Support-Agent

> ⚡ **20,000 views** · 💬 [Support Chatbots](../)

## Description

With this workflow you get a fully automated AI powered Support-Agent for your WooCommerce webshop. It allows customers to request information about things like:
- the status of their order
- the ordered products
- shipping and billing address
- current DHL shipping status

**How it works**

The workflow receives chat messages from an in a website integrated chat. For security and data-privacy reasons, does the website transmit the email address of the user encrypted with the requests. That ensures that user can just request the information about their own orders.

An AI agent with a custom tool supplies the needed information. The tool calls a sub-workflow (in this case, in the same workflow for convenience) to retrieve the required information. This includes the full information of past orders plus the shipping information from DHL.
If otherr shipping providers are used it should be simple to adjust the workflow to query information from other APIs like UPS, Fedex or others.

## 🔗 Nodes Used

HTTP Request, Webhook, WooCommerce, DHL, Execute Workflow Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
