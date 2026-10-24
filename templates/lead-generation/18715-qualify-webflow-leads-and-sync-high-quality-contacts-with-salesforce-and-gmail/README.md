# 🎣 Qualify Webflow leads and sync high-quality contacts with Salesforce and Gmail

> ⚡ **1 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick Overview
This workflow receives Webflow form submissions via a webhook, normalizes and validates lead data, and syncs accepted leads to Salesforce by updating or creating a Lead record. It then scores the lead and sends high-quality submissions to a selected team inbox using Gmail.

## How it works
1. Receives a Webflow form submission through a POST webhook endpoint.
2. Normalizes common field names (name, email, phone, company, message) and blocks invalid, honeypot, or disposable-email submissions by returning an HTTP error or quarantine response.
3. Looks up an existing Lead in Salesforce by the submitted email address and returns a CRM error response if the lookup fails.
4. Updates the matching Salesforce Lead or creates a new Lead when none exists, and returns a CRM error response if the write fails.
5. Scores the synced lead based on email domain, company, phone, and message detail, and selects an SDR/CS/Sales notification inbox.
6. Sends an email notification via Gmail only for high-quality leads and responds to the webhook with a JSON success payload including the Salesforce record ID and quality status.

## Setup
1. Add a Salesforce OAuth credential and apply it to the Salesforce nodes used for lookup, update, and create.
2. Add a Gmail OAuth credential and set the sender/access in the Gmail email node.
3. Copy the production webhook URL into your Webflow form integration (or custom form script) so submissions POST to this workflow.
4. Update the scoring script constants to choose the notification team (sdr/cs/sales) and replace the example inbox addresses with real recipients.
5. Ensure your Webflow form submits an email field (and optionally name, phone, company, and message) so the workflow can normalize and score the lead correctly.

## 🔗 Nodes Used

Webhook, Salesforce, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
