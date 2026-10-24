# 🔬 Validate procurement records and learn error patterns with Gemini and Data Tables

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow receives procurement line-item data via a webhook, validates and normalizes it, checks for known recurring error patterns in an n8n Data Table, and uses Google Gemini to detect semantic anomalies when needed, returning an immediate JSON accept/reject response and learning new error patterns.

## How it works
1. Receives a procurement record as a POST request via a webhook.
2. Applies configurable rules to normalize fields (including unit aliases) and run deterministic checks for required fields, quantity/price validity, subtotal math, and tax calculations.
3. Builds a pattern signature from key fields and looks it up in the n8n Data Table to see if the same error pattern has been seen before.
4. If a trusted recurring pattern is found (high confidence and enough occurrences), reuses the stored correction details and skips AI review.
5. If no trusted pattern is found, sends the record and deterministic results to Google Gemini to identify contextual anomalies (for example category, coding, supplier-item, or unit inconsistencies) and suggested corrections.
6. Combines deterministic errors, historical pattern matches, and Gemini findings into a single decision and returns a JSON response indicating whether the record is accepted along with any detected issues.
7. When issues are detected, upserts the error pattern (including counts, confidence, and summary) into the n8n Data Table to improve future detections.

## Setup
1. Create an n8n Data Table named `procurement_error_patterns` with columns such as pattern_key, supplier, item_code, error_type, incorrect_value, suggested_value, reason, occurrence_count, confidence, first_seen, last_seen, source, and issue_summary.
2. Add a Google Gemini (PaLM) credential and select it in the Google Gemini Chat Model node.
3. Review and adjust the defaults in the workflow (required fields, default currency and tax rate, subtotal/tax tolerances, and AI/pattern confidence and recurring thresholds) to match your procurement rules.
4. Send JSON records to the webhook endpoint (copy the production URL from the webhook node), using fields like supplier, item_code, description, category, quantity, unit, unit_price, subtotal, tax_rate, tax_amount, and currency.

## 🔗 Nodes Used

Webhook, Basic LLM Chain, Google Gemini Chat Model, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
