# 🎫 Create and triage support tickets with HubSpot, reCAPTCHA and Gmail

> ⚡ **11 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick Overview
This webhook-based workflow validates form submissions with Google reCAPTCHA, creates or updates a contact in HubSpot, checks for an existing open ticket, and either creates a new HubSpot ticket or flags it as a duplicate, then emails support and returns an HTML response to the requester.

## How it works
1. Receives a POST request via a webhook containing the customer and complaint details.
2. Verifies the request using Google reCAPTCHA and stops processing if the verification fails.
3. Creates or updates the contact in HubSpot and retrieves any tickets associated with that contact.
4. Looks up the pipeline stage of associated tickets and detects whether an open ticket already exists.
5. If an open ticket exists, emails the support team with the duplicate details and returns an “already logged” HTML response.
6. If no open ticket exists, creates a new HubSpot ticket, patches the ticket to set the city property, and returns a “ticket submitted” HTML response.
7. After returning the webhook response for a new ticket, sends a confirmation email to the customer and a detailed notification email to the support team via Gmail.

## Setup
1. Add a HubSpot App Private Token credential and ensure the configured ticket pipeline ID, stage ID, and ticket owner ID match your HubSpot account.
2. Replace the reCAPTCHA secret in the Google reCAPTCHA request and ensure your form sends the g-recaptcha-response field to the webhook.
3. Configure the webhook URL in your form or source system to POST to /hubspot-ticket-webhook with the expected fields (email, first_name, last_name, phone, city, remarks, order_no).
4. Set up Gmail credentials for the customer and CS team emails, and update sender/recipient addresses (for example, support@example.com and no-reply@example.com).
5. Update placeholder values in the HTML/email content (YOUR_HUBSPOT_PORTAL_ID, example.com tracking URL, and YOUR_SUPPORT_PHONE) to match your environment.

## 🔗 Nodes Used

Send Email, HTTP Request, Webhook, HubSpot, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
