# 🤝 Optimize dead shelf products with Google Sheets, Google Gemini and Slack

> ⚡ **1 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/iDW5lD-AHxM

This workflow runs daily to analyze planogrammed prime eye-level SKUs using Sheets catalog, sales, and inventory data, then uses Gemini to validate recommended actions and writes a store action queue and run audit log back to Google Sheets while posting a summary digest to Slack.

## How it works
1. Runs at 01:00 each day (or via manual trigger) and loads configuration thresholds like stagnation days, expiry limits, and AI batch size.
2. Reads Catalog_Master, Sales_Rollup, Inventory_Snapshot, and Planogram tabs from Google Sheets and joins them into a per-store per-SKU dataset with category cohort stats and a replacement SKU candidate.
3. Computes key risk and performance metrics such as days unsold, days to expiry, price index vs category median, run rate, days to clear, and capital at risk.
4. Filters to prime eye-level SKUs that have been in the zone long enough, have stock on hand, and have low sales in the last 30 days, then assigns a recommended action using a rule matrix (liquidate, delist, price test, relocate, or monitor).
5. Ranks suspects by capital at risk, sends the top N items to Google Gemini for a structured merchandising decision, and applies deterministic guardrails to clamp pricing and enforce delist and replacement-SKU rules.
6. Creates actionable tickets (including movement, facings, pricing, ERP flags, and review date) and upserts them into the Action_Queue tab in Google Sheets.
7. Posts a Slack digest summarizing the queued actions and upserts a one-row Run_Log audit record in Google Sheets with counts and scope metrics.

## Setup
1. Create a Google Sheets workbook with the required tabs (Catalog_Master, Sales_Rollup, Inventory_Snapshot, Planogram, Action_Queue, and Run_Log) and ensure the columns used by the workflow exist (store_id, sku_id, zone_tier, units_30d, total_on_hand, earliest_batch_expiry, and related fields).
2. Add a Google Sheets Service Account credential in n8n, share the workbook with the service account email, and update the sheet ID in the configuration values.
3. Add a Google Gemini (Google PaLM) API credential for the Gemini chat model used to review and return structured actions.
4. Add a Slack credential and set the target channel for the digest message.
5. Review and adjust the thresholds in the configuration (for example t_stagnant_days, expiry_critical_days, price_index_limit, and max_ai_items) before activating the schedule.

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger, Filter, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
