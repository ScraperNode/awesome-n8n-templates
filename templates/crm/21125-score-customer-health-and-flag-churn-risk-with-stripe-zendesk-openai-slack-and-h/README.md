# 🤝 Score customer health and flag churn risk with Stripe, Zendesk, OpenAI, Slack and HubSpot

> ⚡ **0 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
Customer success teams at SaaS companies, agencies managing retainers, and founders who discover churn when the cancellation email arrives. If your team has ever said "we didn't see it coming", this workflow is the early-warning system you were missing.

## How it works
1. Every morning at 8 AM the workflow fuses three signal arms into one explainable 0-100 health score per account.
2. The Stripe arm penalizes failed payments and open invoices.
3. The Zendesk arm runs AI sentiment classification over every ticket, then scores volume, anger rate, and open bugs.
4. The usage arm scores active days and key-feature adoption from your product API.
5. An account mapping sheet links each account across all three systems: identity resolution is the step every basic template skips, and the reason real health scoring is hard.
6. The fusion left-joins the arms, computes the weighted score, names the two biggest risk drivers in plain language, and compares against yesterday's snapshot for trend deltas.
7. Tiered response keeps it quiet but complete: below the critical threshold the account alerts Slack and creates a HubSpot task; below the watch threshold it joins one digest email to the CS lead; everything is logged to the HealthLog sheet.

## Setup
1. Create two Google Sheets. Mapping columns: account_key, account_name, stripe_customer_id, zendesk_org_id, product_account_id, hubspot_company_id, csm_owner, csm_email. HealthLog columns: date, account_key, score, payment, support, usage, drivers, action.
2. Fill the Workflow Configuration node: subscore weights, critical and watch thresholds, lookback days, sheet IDs, Slack channel, CS lead email, and your usage API base URL plus key.
3. Connect Stripe, Zendesk, OpenAI, Slack, HubSpot, Gmail, and Google Sheets credentials, then activate. Use the manual trigger to test immediately.

## Requirements
- Stripe with invoices and subscriptions, Zendesk with tickets, an OpenAI API key, a product usage API (or swap the HTTP node for PostHog, Mixpanel, or Segment), Slack, HubSpot, Gmail, and two Google Sheets. Works on n8n Cloud and self-hosted.

## Customization
- Reweight the subscores, add a fourth arm (NPS surveys, contract renewal dates), write scores back to HubSpot company properties instead of Sheets, route critical alerts to PagerDuty, or feed the HealthLog into a BI dashboard for cohort trend analysis.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, HubSpot, Zendesk, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
