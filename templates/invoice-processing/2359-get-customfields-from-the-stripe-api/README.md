# 🧾 Get custom_fields from the Stripe API

> ⚡ **1,027 views** · 🧾 [Invoice Processing](../)

## Description

The Stripe API does not provide custom fields in invoice or charge data. So you have to get it from the [**Checkout Sessions**](https://docs.stripe.com/api/checkout/sessions) endpoint.

But that endpoint is not easy for begginners. It has dictionary parameters and pagination settings.

This workflows solves that problem by having a preconfigured GET request that gets **all the checkout sessions from the last 7 days**.

It then transforms the data to make it easier to work with and allows you to **filter by the custom_fields** you want to get.

### Want to generate Stripe invoices automatically?

Open 👉 [**this workflow**](https://n8n.io/workflows/2675)
.

### Check out my other templates
[**https://n8n.io/creators/solomon/**](https://n8n.io/creators/solomon/)

## 🔗 Nodes Used

HTTP Request, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
