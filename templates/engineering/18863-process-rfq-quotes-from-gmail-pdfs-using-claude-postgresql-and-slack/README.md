# ⚒️ Process RFQ quotes from Gmail PDFs using Claude, PostgreSQL, and Slack

> ⚡ **22 views** · ⚒️ [Engineering](../)

## Description

## Quick Overview
This workflow monitors a Gmail inbox for RFQ emails with PDF drawings, extracts specifications with Anthropic Claude, enriches and scores suppliers from PostgreSQL, generates costed quote options and a PDF, emails the quote back via Gmail, and notifies engineering in Slack while logging outcomes to PostgreSQL.

## How it works
1. Triggers every minute when a new RFQ email arrives in Gmail and loads default quoting thresholds and routing settings.
2. Checks for PDF attachments and uses Anthropic Claude to extract key specifications, then validates completeness and confidence and posts a Slack message for manual review if confidence is too low.
3. Normalizes the extracted specifications, calculates a complexity score, estimates material utilization, and pulls historical pricing and matching supplier capabilities from PostgreSQL.
4. Merges enrichment data, scores and ranks suppliers, and sends the top matches to Anthropic Claude to produce structured cost estimates for multiple pricing tiers.
5. Aggregates supplier quote metrics, builds a supplier comparison matrix, and uses Anthropic Claude to draft a customer-ready quote.
6. Generates a PDF (as a binary attachment), emails the quote to the original sender via Gmail, and routes the RFQ by complexity to notify the engineering team in Slack.
7. Logs RFQ processing details and supplier performance to PostgreSQL and updates supplier capacity based on the selected/processed supplier.

## Setup
1. Connect Gmail credentials for the Gmail Trigger and Gmail Send nodes, and ensure the trigger mailbox receives RFQ emails with PDF attachments.
2. Add an Anthropic (Claude) credential and confirm the configured model ID is available for both extraction and quote/cost generation.
3. Add PostgreSQL credentials and create/verify the required tables (for example: suppliers, historical_pricing, rfq_processing_log, and supplier_performance_log) with fields referenced by the workflow queries.
4. Add Slack credentials, set the target channel (for example #engineering-rfq-alerts), and update the channel setting in the workflow configuration if needed.
5. If you need a true PDF renderer, replace the placeholder HTML-to-PDF logic with a supported PDF generation method (such as an API call or a library available in your n8n environment).

## 🔗 Nodes Used

Postgres, Slack, Gmail, Gmail Trigger, Anthropic

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
