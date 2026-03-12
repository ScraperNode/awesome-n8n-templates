# 🎣 Enrich contacts with Wiza and sync results to Airtable and HubSpot

> ⚡ **44 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## What it does

Receives contact details via form, routes to appropriate Wiza API endpoints (email, phone, LinkedIn, or all), enriches data with verification, calculates quality scores (0-100), and stores results in both Airtable and HubSpot.

## Who's it for

Sales teams, recruiters, and marketing ops professionals who need to transform minimal contact info into complete, verified profiles at scale.

## Requirements

- n8n (self-hosted or cloud)
- Wiza API Key (with Email/Phone/LinkedIn Finder access)
- Airtable API Key (optional)
- HubSpot API Key (optional)

## How to set up

1. Import workflow JSON into n8n
2. Configure Wiza, Airtable, and HubSpot credentials
3. Set up Airtable base with required columns (Full Name, Email, Phone, LinkedIn, Data Quality Score)
4. Activate workflow and share the form URL

## How to customize

- Adjust quality scoring weights in the Code node
- Add custom fields to the form trigger
- Modify Airtable/HubSpot field mappings
- Change deduplication logic for emails

## 🔗 Nodes Used

Google Sheets, HubSpot, n8n Form Trigger, n8n Form, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
