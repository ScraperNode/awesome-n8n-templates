# 🧾 Parse WhatsApp invoice images with Gemini and sync payments to HubSpot and Slack

> ⚡ **50 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/KwK7vf58WZs

This workflow captures invoice images/documents from WhatsApp, extracts structured invoice data with Google Gemini, and syncs the result to HubSpot by creating vendor-payment tasks or closing matching deals, while sending confirmations back on WhatsApp and raising exceptions to Slack.

## How it works
1. Triggers when a new WhatsApp message is received.
2. Checks that the message contains an image or document, then fetches the media URL and downloads the attachment.
3. Converts the downloaded file to base64 and sends it to the Google Gemini API to extract structured invoice details as JSON.
4. Validates that the attachment is an invoice and routes it based on the extracted invoice direction and status.
5. For Payable invoices that are not marked as paid, searches HubSpot for a matching contact by WhatsApp phone number, creates a HubSpot task associated with that contact, sends a confirmation back via WhatsApp, and posts the invoice details to Slack.
6. For Receivable invoices, searches HubSpot for deals linked to the contact and matching the extracted invoice_id, then closes the deal as won and thanks the sender on WhatsApp when a match is found.
7. Posts alerts to Slack when the invoice status is unknown or when no HubSpot deal is found for a receivable invoice.

## Setup
1. Connect WhatsApp Business credentials for the WhatsApp Trigger and WhatsApp send actions, and set the correct phone number ID.
2. Add Google Gemini (Google PaLM) API credentials and update the prompt/company name (currently "blankarray") to match your business.
3. Connect HubSpot OAuth2 credentials and ensure your deals include an invoice_id property and your associations/contact phone fields support the workflow’s searches.
4. Connect Slack credentials and select the target channel IDs for the Slack notification steps.

## 🔗 Nodes Used

HTTP Request, Slack, HubSpot, WhatsApp Business Cloud, Extract from File, WhatsApp Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
