# 📁 Deliver photography galleries after payment with Razorpay, Airtable, and Gmail

> ⚡ **9 views** · 📁 [File Management](../)

## Description

## Quick overview
This workflow collects proof selections via an n8n Form, logs orders in Airtable, creates Razorpay payment links, and delivers a final gallery link by Gmail only after Razorpay confirms payment and the gallery link has been added.

## How it works
1. Receives a client’s proof selection submission from an n8n Form.
2. Calculates the package total, generates an order reference, creates an order record in Airtable, and creates a Razorpay payment link.
3. Sends the client a Gmail message with the Razorpay payment link.
4. Receives a Razorpay payment webhook, verifies the webhook signature, and looks up the matching order in Airtable.
5. Marks the Airtable order as paid and, if a gallery link is already present, emails the gallery link via Gmail and marks the order as delivered.
6. Runs daily on a schedule, finds Airtable orders that are paid, not delivered, and have a gallery link, then emails the gallery link via Gmail and marks them as delivered.

## Setup
1. Create an Airtable base/table (for example, “Orders”) with fields for order_reference, client_name, client_email, package, selected_proof_ids, total_amount, paid, delivered, and gallery_link, and add an Airtable Personal Access Token credential in n8n.
2. Add a Gmail OAuth2 credential in n8n for sending the payment request and delivery emails.
3. Create a Razorpay HTTP Basic Auth credential in n8n (Key ID as username and Key Secret as password) and set your Razorpay webhook secret in the configuration values.
4. Copy the Razorpay payment webhook URL from the workflow and configure Razorpay to send the payment.captured event to it.
5. Update the configuration values (studio name, Airtable base/table identifiers, and Razorpay settings) and keep the gallery_link field updated in Airtable when editing is complete.

## 🔗 Nodes Used

Airtable, HTTP Request, Webhook, Gmail, Schedule Trigger, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
