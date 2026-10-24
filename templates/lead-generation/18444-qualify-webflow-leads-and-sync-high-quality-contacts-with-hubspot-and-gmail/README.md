# 🎣 Qualify Webflow leads and sync high-quality contacts with HubSpot and Gmail

> ⚡ **0 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick Overview
This workflow receives Webflow form submissions via webhook, normalizes and validates lead data, upserts accepted contacts into HubSpot by email, and emails only high-quality leads to a chosen team inbox via Gmail.

## How it works
1. Receives a Webflow form submission through a POST webhook.
2. Normalizes common field names (name, email, phone, company, message) and rejects, quarantines, or accepts the lead based on email validity, honeypot fields, and disposable-email domains.
3. Returns an HTTP error/accepted response for rejected or quarantined submissions so low-quality leads never reach the CRM.
4. Creates or updates the contact in HubSpot using the email address as the unique identifier.
5. Scores the synced lead and selects an SDR, CS, or Sales notification inbox based on configured rules.
6. Sends an email notification via Gmail only when the lead score meets the high-quality threshold, then returns a JSON webhook response confirming the HubSpot sync (or a 502 JSON response if HubSpot sync fails after retries).

## Setup
1. Add a HubSpot App Token credential and ensure it has permission to create/update contacts.
2. Add a Gmail credential for sending notification emails.
3. Copy the production webhook URL into your Webflow form integration or custom form script and ensure it submits via POST.
4. Review the normalization and validation expectations (email, name, phone, company, message, and any honeypot field like website/url) to match your Webflow field names.
5. Update the lead scoring constants (team selection, inbox addresses, and score threshold logic) in the scoring code to match your routing requirements.

## 🔗 Nodes Used

Webhook, HubSpot, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
