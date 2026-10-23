# 🎣 Score real estate leads with Anthropic Claude and Google Sheets

> ⚡ **3 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow receives real estate inquiries via a webhook, uses Anthropic to extract key lead details from the message, applies a rules-based 0–100 scoring matrix, and appends the scored lead with priority and next action to Google Sheets before returning the result in the webhook response.

## How it works
1. Receives a POST request on a webhook containing a lead message and optional contact details.
2. Normalizes the incoming payload into consistent fields (message, name, phone, and channel).
3. Uses Anthropic (Claude) to extract structured lead attributes such as intent, area, property type, budget, timeline, financing, language, and visit availability.
4. Calculates a deterministic lead score (0–100) using a configurable rules matrix, assigns a priority tier, and generates a recommended next action and missing-data list.
5. Appends the enriched and scored lead record to a Google Sheets spreadsheet.
6. Responds to the webhook request with the scored lead data.

## Setup
1. Add an Anthropic API credential for the Claude chat model used for information extraction.
2. Add a Google Sheets credential, select the target spreadsheet and sheet in the append step, and ensure the sheet has columns that match the output fields for auto-mapping.
3. Review and adjust the scoring CONFIG block (budget range, covered areas, property types, weights, and tier thresholds) to match your agency rules.
4. Activate the workflow, copy the webhook URL, and configure your form/CRM to POST leads to the /lead-qualifier endpoint (or test by sending a sample JSON payload).

## 🔗 Nodes Used

Google Sheets, Webhook, Anthropic Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
