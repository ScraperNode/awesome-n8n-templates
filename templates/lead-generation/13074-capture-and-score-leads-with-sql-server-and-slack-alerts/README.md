# 🎣 Capture and score leads with SQL Server and Slack alerts

> ⚡ **8 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

Store leads in a SQL Server database via REST API with automatic scoring and Slack notifications.

This workflow receives leads from web forms, validates email addresses, normalizes data from multiple formats (Typeform, Webflow, custom forms), and stores contacts in SQL Server via REST API. It calculates a lead score from 0-100 based on data completeness and engagement signals, then routes high-scoring leads (70+) to Slack for immediate follow-up.

WORKFLOW PATHS:
Valid lead: Webhook receives data → Normalize and validate → Store in SQL Server → Calculate score → Send Slack alert if hot → Return success response with contact ID
Invalid email: Webhook receives data → Validation fails → Return 400 error response
Workflow error: Any node fails → Error trigger → Send Slack alert with details

SETUP REQUIREMENTS:
HTTP Header Auth credential with API key and base URL
Slack credential for notifications (optional)
SQL Server database with provided schema (3 tables, 6 stored procedures)
Webhook URL added to your forms

CUSTOMIZATION:
Lead scoring algorithm is editable in the "Calculate Lead Score" code node. Adjust points for email (10), full name (10), phone (10), company (10), high-value source (30), medium source (15), detailed message (15), and repeat visitor (15).

Slack message format is customizable in the "Format Slack Alert" code node.

This workflow is designed for teams that need to capture leads from multiple sources, store data in their own database, automatically qualify leads, and alert sales teams when high-quality leads arrive.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
