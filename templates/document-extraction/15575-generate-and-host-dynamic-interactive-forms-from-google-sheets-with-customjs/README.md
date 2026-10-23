# 🔬 Generate and host dynamic interactive forms from Google Sheets with CustomJS

> ⚡ **29 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
Host and deploy custom HTML lead forms for any CRM instantly with [CustomJS](https://customjs.space). This workflow generates responsive Tailwind CSS webforms, hosts them on custom domains, and routes submissions via an n8n webhook directly into HubSpot, Salesforce, Pipedrive, or databases.

## How it works
1. **Trigger & Content Prep:** The workflow triggers to compile your custom HTML form structure and any dynamic CRM fields or tracking tokens.
2. **Instant Deployment:** The HTML (styled with Tailwind CSS) is sent to the CustomJS node, which instantly deploys and hosts the live page.
3. **Lead Capture:** When a user submits the form, the data is securely sent to the built-in n8n Webhook node.
4. **CRM Syncing:** n8n processes the payload and maps the fields directly into your preferred CRM, creating or updating contacts automatically.

## Setup
1. **Customize the Form:** Open the CustomJS HTML template node and adjust the input fields to match your CRM properties (e.g., First Name, Email).
2. **Link the Webhook:** Ensure the n8n Webhook URL is set as the submission action in your form HTML.
3. **Connect Your CRM:** Add your CRM node (e.g., HubSpot, Pipedrive, or Airtable) directly after the Webhook node to automatically map and save incoming leads.
4. **Go Live:** Run the workflow to host the form on CustomJS, and optionally connect your custom brand domain.

## Requirements
- A [CustomJS](https://customjs.space) account to host the static HTML page and manage domains.
- A CRM account (like HubSpot, Pipedrive, Salesforce) or a database connected to your n8n instance to store form submissions.

## Customization
- Tailwind & Alpine.js: The template includes a ready-to-use modern layout, but you can paste any custom HTML/CSS framework into the CustomJS node.
- Dynamic Content: You can inject dynamic data from previous n8n nodes directly into the HTML code before it gets deployed.

## Additional info
Custom Domains: CustomJS allows you to mask the hosted form URL with your own branded domain (e.g., forms.yourcompany.com) with just a single click.
Security: Since submissions go straight from the client browser to your private n8n webhook, no lead data is stored on third-party form servers.

## 🔗 Nodes Used

Google Sheets, Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
