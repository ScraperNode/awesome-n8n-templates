# 🤝 Send wholesale and B2B order email alerts with Shopify and SMTP

> ⚡ **1 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick Overview
This workflow triggers on new Shopify orders, checks whether they match your wholesale/B2B criteria using the Shopify Admin GraphQL API, and sends an HTML email alert via SMTP when a qualifying order is detected.

## How it works
1. Triggers in Shopify when a new order is created.
2. Loads configurable settings such as shop subdomain, wholesale tag, minimum order value, and alert email addresses.
3. Queries the Shopify Admin GraphQL API to fetch the customer’s tags and (for B2B) the purchasing company and location details that aren’t included in the order webhook.
4. Evaluates the order against the wholesale rules (B2B company order and/or matching wholesale tags, plus the minimum order value) and generates a formatted HTML email with order details and a Shopify admin link.
5. Sends the email alert via SMTP only when the order qualifies as wholesale/B2B.

## Setup
1. Create and install a Shopify app with `read_orders` and `read_customers` scopes, and connect it to n8n using a Shopify OAuth2 API credential.
2. Add an SMTP credential for sending mail and select it in the email-sending step.
3. Update the Settings values (shop subdomain, wholesale tag, minimum order value, and to/from email addresses) before activating the workflow.

## 🔗 Nodes Used

Send Email, HTTP Request, Shopify Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
