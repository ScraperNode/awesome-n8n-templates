# 🎣 Intake and route web form leads with Airtable and Slack

> ⚡ **3 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow receives lead submissions via a secured webhook, validates and de-duplicates them against Airtable, stores new leads in an Airtable base, and notifies the appropriate Slack channel based on programme, returning clear HTTP responses for created, duplicate, invalid, and failure cases.

## How it works
1. Receives a POST request on the `/lead-intake` webhook using header-based authentication.
2. Normalizes incoming fields (from `body` or root), validates required lead details, and rejects invalid submissions with an HTTP 400 response describing the errors.
3. Searches Airtable for an existing lead where the Email field matches the submitted email.
4. Returns an HTTP 200 “duplicate” response and stops if an Airtable record already exists for that email.
5. Creates a new lead record in Airtable with the submitted details and routing metadata.
6. Routes “Computer Science” enquiries to a priority Slack channel and all others to a general Slack channel, then returns an HTTP 200 “created” response.
7. If the Airtable lookup or create fails, posts an alert to a Slack failure/monitoring channel and returns an HTTP 500 response.

## Setup
1. Create and configure the header-auth token for the webhook, then copy the production webhook URL into your form/app that submits leads.
2. Add an Airtable Personal Access Token credential and update the base/table IDs to your own Leads table.
3. Ensure your Airtable table includes fields for Name, Email, Phone, Country, Programme, Route, Submitted At, and Source.
4. Add a Slack credential and replace the Slack channel IDs for the priority, general, and failure/monitoring channels.

## Additional info
Contact
Email: salmanmehboob1947@gmail.com
Linkedin: https://www.linkedin.com/in/salman-mehboob-pro/

## 🔗 Nodes Used

Airtable, Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
