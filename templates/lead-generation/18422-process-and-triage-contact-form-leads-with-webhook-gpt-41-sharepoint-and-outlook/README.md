# 🎣 Process and triage contact form leads with Webhook, GPT-4.1, SharePoint and Outlook

> ⚡ **9 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow receives website contact form submissions via a webhook, logs each submission to Microsoft SharePoint, generates a branded HTML email, and sends a notification through Microsoft Outlook.

## How it works
1. Receives a POST webhook request when a contact form is submitted.
2. Sets workflow-level values such as the internal notification recipient email address.
3. Creates a new item in a Microsoft SharePoint list using the submitted contact name as the item title.
4. Builds a branded HTML email from the submitted fields (name, email, phone, date/time, and message) with fallback values for missing data.
5. Sends an HTML notification email via Microsoft Outlook to the configured recipient and sets the Reply-To address to the submitter’s email.

## Setup
1. Copy the webhook URL from n8n and configure your contact form to POST submissions to it.
2. Add Microsoft SharePoint credentials in n8n and update the Site ID and List ID used to create the list item.
3. Add Microsoft Outlook credentials in n8n and set the notification recipient email address in the workflow settings.
4. Update the email branding values in the code step (logo URL, brand name, website, and colors) to match your organization.

## Requirements
- n8n instance running
- Microsoft SharePoint account and API credentials
- Microsoft Outlook account and API credentials
- Access to your contact form’s HTML or backend code

## Customization
- Change the email branding or content in the “Generate Branded Email HTML” Code node.
- Add extra fields to be logged in SharePoint in the corresponding node’s configuration.
- Adjust notification recipient(s) in the Outlook “Send Email Notification” node.
- Add or remove workflow steps to support additional form fields or other systems.

## Additional info
For support, contact support@ais.email (AI Solutions, Inc.)

## 🔗 Nodes Used

Webhook, Microsoft Outlook, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser, Microsoft SharePoint

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
