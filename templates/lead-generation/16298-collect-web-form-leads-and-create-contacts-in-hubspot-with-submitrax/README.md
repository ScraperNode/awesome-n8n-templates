# 🎣 Collect web form leads and create contacts in HubSpot with SubmitraX

> ⚡ **780 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick Overview
This workflow creates a SubmitraX-hosted HTML contact form, serves it via an n8n webhook, and syncs each submission to HubSpot as a create-or-update contact.

## How it works
1. Starts manually to fetch your SubmitraX workspace ID and create a new SubmitraX form with custom HTML and an email notification address.
2. Outputs the generated form ID so you can reuse it in the form display and submission trigger steps.
3. Receives a request on an n8n webhook URL, fetches the form definition from SubmitraX, and returns a styled HTML page that renders the form.
4. Triggers when a new SubmitraX form submission is created and extracts the submitted name, email, company, and website fields.
5. Creates or updates the corresponding contact in HubSpot using the submission email as the unique identifier.

## Setup
1. Add SubmitraX API credentials in n8n and ensure you have access to a SubmitraX workspace.
2. Add HubSpot credentials in n8n with permission to create and update contacts.
3. Run the manual start once to create the form, then copy the returned form ID into both the “Get a form” step and the SubmitraX submission trigger.
4. Update the notification email address and/or the embedded HTML in the SubmitraX form configuration to match your needs.
5. Activate the workflow and use the production webhook URL from the form viewer endpoint to load and test the form.

## 🔗 Nodes Used

Webhook, HubSpot

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
