# 🤝 Score Shopify customer churn risk and sync results to Klaviyo, Slack, and Gmail

> ⚡ **47 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow runs weekly to fetch customers from the Shopify Admin GraphQL API, calculate churn risk based on each customer’s median reorder interval, and then sync at-risk customers to Klaviyo while sending a CSV report and summary to Slack and/or Gmail.

## How it works
1. Runs weekly on a schedule and loads your Shopify domain, thresholds, and toggles for Klaviyo, Slack, and Gmail alerts.
2. Queries the Shopify Admin GraphQL API in pages of 100 customers filtered by minimum order count and an order-date window that excludes very recent purchasers.
3. Calculates each customer’s median days between recent orders, computes days since last order, and labels customers as MEDIUM or HIGH risk based on the days-since-last vs. median interval ratio.
4. Stores at-risk customers across pagination and continues fetching until Shopify reports there are no more pages.
5. Retrieves the full at-risk customer list, clears stored data for the next run, and stops if no at-risk customers are found.
6. If enabled, updates each at-risk customer profile in Klaviyo by writing `churn_risk` and `days_since_last_order` via the Klaviyo API.
7. Generates a dated CSV of at-risk customers, aggregates counts and revenue-at-risk totals, and sends the summary with the CSV attached to Slack and/or Gmail.

## Setup
1. Add Shopify Admin API credentials (Header Auth) and set your `shopifyDomain` value in the workflow configuration.
2. Add a Klaviyo Private API key (HTTP Header Auth) if you want to sync profile properties to Klaviyo.
3. Connect your Gmail OAuth2 credential and set the recipient email address if you want email alerts.
4. Connect your Slack credential and set the target Slack channel ID if you want Slack alerts and error notifications.
5. In the workflow configuration, enable or disable `emailAlert`, `slackAlert`, and `klaviyoEvent`, and adjust `minimumOrderRequired`, `customerActiveDays`, and `safeDays` to match your store’s buying cycles.

## Requirements
- Shopify store with Admin API access (GraphQL endpoint).
- Klaviyo account for profile updates.
- Slack workspace and Gmail account for reporting.

## 🔗 Nodes Used

HTTP Request, Slack, GraphQL, Gmail, Schedule Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
