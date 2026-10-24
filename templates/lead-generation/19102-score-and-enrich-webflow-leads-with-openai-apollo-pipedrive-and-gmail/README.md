# 🎣 Score and enrich Webflow leads with OpenAI, Apollo, Pipedrive and Gmail

> ⚡ **5 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow receives Webflow form submissions, enriches the lead with Apollo data, scores it with OpenAI, and creates a Person, Lead, and qualification note in Pipedrive; only leads with a validated score of exactly 100 also trigger a notification email via Gmail.

## How it works
1. Receives a Webflow form submission via a webhook endpoint.
2. Normalizes and validates the submission data, builds an Apollo match query, and loads your Pipedrive subdomain, ideal customer profile, and notification inbox settings.
3. Looks up the person and company in Apollo and combines any matched business enrichment with the submitted lead details.
4. Sends the lead evidence to OpenAI to produce an evidence-based 0–100 score, breakdown, summary, next step, and missing-information list, then validates the response and marks failures as UNSCORED.
5. Creates a Person in Pipedrive, creates a Lead in Pipedrive Leads Inbox for every submission, and attaches a pinned note containing the original form data, enrichment, and scoring details.
6. Sends a Gmail email alert to your configured internal inbox only when the validated OpenAI score is exactly 100.

## Setup
1. Configure Webflow to send form-submission webhooks to this workflow’s production webhook URL.
2. Add an Apollo API key as an HTTP Header Auth credential and an OpenAI API key as an HTTP Header Auth credential.
3. Add a Pipedrive API credential and set your Pipedrive subdomain, ideal customer profile, and notification email in the workflow configuration values.
4. Add a Gmail OAuth2 credential and verify the sender account and internal recipient inbox used for 100-point lead notifications.

## 🔗 Nodes Used

HTTP Request, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
