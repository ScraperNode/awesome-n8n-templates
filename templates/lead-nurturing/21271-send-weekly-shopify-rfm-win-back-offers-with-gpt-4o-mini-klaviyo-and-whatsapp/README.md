# 💬 Send weekly Shopify RFM win-back offers with GPT-4o-mini, Klaviyo and WhatsApp

> ⚡ **0 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow runs every Monday to pull the last 24 months of Shopify orders, calculate RFM segments per customer, generate segment-specific win-back copy with OpenAI, create unique Shopify discount codes, sync reachable customers into Klaviyo lists, send WhatsApp template messages, and post a weekly performance report to Slack.

## How it works
1. Runs every Monday at 10 AM (cron schedule).
2. Fetches the last 24 months of Shopify orders via the Shopify Admin REST API and loads the previous week’s customer segments from Google Sheets.
3. Calculates each customer’s recency, frequency, and monetary scores, assigns an RFM segment, marks a deterministic 10% holdout per segment, and computes basic segment stats and week-over-week movement.
4. For each configured target segment above the minimum size, uses OpenAI (gpt-4o-mini) to draft email and WhatsApp offer copy, applies discount cap guardrails, and creates a segment-specific Shopify discount code via the Shopify Admin GraphQL API.
5. Bulk-imports non-holdout, email-consented customers into the matching Klaviyo list with the offer details stored as profile properties, and posts a Slack alert if a Klaviyo import fails.
6. Sends an approved WhatsApp Business Cloud template message (prioritized by segment and capped per day) to non-holdout, opted-in customers and logs send results to a Google Sheets win-back log.
7. Upserts the current week’s customer segments (including offer code and holdout flag) back to Google Sheets and posts a formatted weekly RFM and lift report to Slack.

## Setup
1. Create a Shopify custom app with `read_orders`, `read_customers`, and `write_discounts`, then add an HTTP Header Auth credential for Shopify using `X-Shopify-Access-Token` and update the store domain and GraphQL endpoint values.
2. Add a Klaviyo API key as HTTP Header Auth (Authorization header), create one Klaviyo list per segment you plan to target, and paste the list IDs into the configuration.
3. Connect WhatsApp Business Cloud credentials in n8n, set your WhatsApp Phone Number ID, and ensure the `winback_offer` template is approved and matches the workflow’s parameter placeholders.
4. Connect Google Sheets credentials and set the spreadsheet ID, ensuring it contains a “Customer Segments” sheet for upserts and a “Winback Log” sheet for WhatsApp send logging.
5. Connect Slack credentials and set the target channel ID for the weekly report and failure alerts, then update the values in the RFM configuration (discount caps, min order value, holdout %, WhatsApp daily cap) before activating.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
