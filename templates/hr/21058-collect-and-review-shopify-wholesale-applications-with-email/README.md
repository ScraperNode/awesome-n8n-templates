# 👥 Collect and review Shopify wholesale applications with email

> ⚡ **0 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow collects wholesale applications via an n8n Form, looks up and updates the applicant as a customer in Shopify (tagging them as pending and appending the application to the customer note), then emails the application to you and optionally sends a confirmation email to the applicant.

## How it works
1. Receives a wholesale application submission through an n8n Form.
2. Loads configurable values like your Shopify subdomain, tags, and email addresses.
3. Searches Shopify for an existing customer matching the submitted email via the Shopify Admin GraphQL API.
4. Creates or updates the Shopify customer by adding a pending wholesale tag and appending the application answers to the customer note while preserving existing tags and notes.
5. Sends you an email with the application details and a link to open the customer record in Shopify, using the applicant’s email as the reply-to address.
6. Optionally sends the applicant a confirmation email acknowledging receipt of their application.

## Setup
1. Create and connect a Shopify OAuth2 API credential with the `read_customers` and `write_customers` scopes, and select it in the Shopify HTTP Request steps.
2. Add an SMTP email credential and select it in both email-sending steps.
3. Update the Settings values (Shopify subdomain, pending/approved tags, notification recipient, from address, store name, and whether to send applicant confirmations).
4. Copy the n8n Form production URL and link it from your Shopify storefront (for example, an “Apply for wholesale” page or menu item).

## Requirements
- A Shopify store (any plan) and an SMTP account. One execution per application.

## Customization
- Add Slack or Google Sheets after the owner email, or approve applicants automatically by creating a B2B company with companyCreate.

## 🔗 Nodes Used

Send Email, HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
