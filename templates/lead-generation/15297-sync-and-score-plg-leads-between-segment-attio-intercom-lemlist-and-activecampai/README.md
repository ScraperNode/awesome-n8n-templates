# 🎣 Sync and score PLG leads between Segment, Attio, Intercom, Lemlist and ActiveCampaign with Claude and OpenAI

> ⚡ **45 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## AI-Powered PLG Revenue Engine: Segment, Attio & Outreach Sync

This workflow bridges the gap between raw product data and revenue sales tools. It automates the entire Product Qualified Lead (PQL) lifecycle—from real-time intent routing to churn prevention—reducing SalesOps overhead by 80%.

## Who’s it for
* **B2B SaaS Teams** looking to automate PQL outreach based on product usage.
* **Revenue Ops** needing to sync Attio CRM, ActiveCampaign, and Lemlist.
* **Growth Teams** requiring real-time AI classification of user intent.

## How it works
* **Real-Time Intent Routing:** Segment webhooks trigger Claude AI to classify PQLs. High-intent users are instantly moved to Lemlist for outreach.
* **Deal Progression Sync:** Changes in Attio deal stages automatically update ActiveCampaign nurture lists and Segment profiles.
* **Intercom Revenue Signals:** AI scans Intercom conversations for buying signals or churn risks, creating Attio deals or churn prevention tasks.
* **Daily PQL Scoring:** Every morning at 7 AM, the workflow scores trial users across 5 dimensions, enrolling "Hot" leads into conversion sequences.

## How to set up
1. **Node Configuration:** Manually enter your specific **Campaign IDs** in the Lemlist nodes and **List IDs** in the ActiveCampaign nodes.
2. **Credentials:** Set up official n8n credentials for Attio, Segment, Anthropic (Claude), Lemlist, Intercom, and ActiveCampaign.
3. **Webhook Mapping:** Connect your Segment and Intercom webhook URLs to the respective Trigger nodes.
4. **Attio Schema:** Ensure your Attio workspace includes custom attributes for `pql_score`, `pql_tier`, and `churn_risk_score`.

## Requirements
* **n8n version:** 1.0+
* **AI Credits:** Anthropic (Claude) and OpenAI (for Intercom analysis).
* **Tech Stack:** Segment, Attio CRM, ActiveCampaign, Lemlist, and Intercom.

## Results
* **65% Increase** in trial-to-PQL conversion rates.
* **Outreach speed** improved from 3 days to under 10 minutes.
* **80% reduction** in manual SalesOps and Revenue Ops overhead.

## 🔗 Nodes Used

HTTP Request, Webhook, Schedule Trigger, OpenAI, Anthropic

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
