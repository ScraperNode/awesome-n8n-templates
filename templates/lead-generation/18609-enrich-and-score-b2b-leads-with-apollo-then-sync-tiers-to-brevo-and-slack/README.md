# 🎣 Enrich and score B2B leads with Apollo, then sync tiers to Brevo and Slack

> ⚡ **2 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow receives inbound lead webhooks, validates and filters them, enriches B2B contacts with Apollo.io, scores leads for ICP fit, and syncs segmented contacts into Brevo lists, sending Slack alerts for Tier-1 leads and pipeline errors.

## How it works
1. Receives an inbound POST webhook with lead/contact data.
2. Validates the request signature (when configured) and blocks circular syncs and payloads missing an email address.
3. Classifies the email domain and routes consumer/free email providers directly to a standard Brevo list without calling Apollo.
4. Calls the Apollo.io People Match API for corporate domains to enrich the contact and company details.
5. Normalizes the enrichment results, calculates a 100-point ICP score, assigns a lead tier, and selects the target Brevo list ID.
6. Upserts the contact into Brevo with the enriched attributes and list assignment, and posts a Slack alert for Tier-1 Enterprise leads.
7. Sends any request, enrichment, or sync errors to a DLQ-style error handler that posts an error alert to Slack.

## Setup
1. Configure the webhook source to send lead data to this workflow’s webhook URL and (optionally) set an HMAC secret via the APOLLO_WEBHOOK_SECRET environment variable to enable signature verification.
2. Add your Apollo.io API key as the APOLLO_API_KEY environment variable.
3. Add your Brevo API key as the BREVO_API_KEY environment variable and ensure the target Brevo list IDs exist (set BREVO_TIER_1_LIST_ID, BREVO_TIER_2_LIST_ID, and BREVO_STANDARD_LIST_ID as needed).
4. Create a Slack incoming webhook and set its URL in the SLACK_WEBHOOK_URL environment variable for Tier-1 lead and error notifications.

## Requirements
- • Apollo.io Account (Free or Paid tier with API access)
- • Brevo (Sendinblue) Account with API v3 enabled
- • Slack Workspace with Incoming Webhooks app installed

## Customization
- • Adjust the ICP scoring weights inside the Code node to match your specific target market and ideal company headcount.
- • Swap the Slack alert node with Microsoft Teams, Telegram, or Discord webhooks depending on your team's internal communication stack.
- • Replace Brevo with HubSpot, Salesforce, or Pipedrive if your organization uses an alternate CRM.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
