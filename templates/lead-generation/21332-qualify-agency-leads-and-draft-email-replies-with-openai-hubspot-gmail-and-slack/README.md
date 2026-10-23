# 🎣 Qualify agency leads and draft email replies with OpenAI, HubSpot, Gmail and Slack

> ⚡ **0 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow receives agency enquiries via an authenticated webhook, uses OpenAI to extract a structured brief and draft reply (optionally enriching with an approved company homepage), deduplicates by searching HubSpot deals, then creates or updates HubSpot records, saves a Gmail draft, and notifies the owner in Slack.

## How it works
1. Receives a POST request on an authenticated webhook with lead details (requestId, name, email, company, website, message).
2. Validates and normalises the payload, then searches HubSpot Deals for an existing deal with the same deterministic deal name to prevent duplicate processing.
3. If the enquiry already exists, returns the existing HubSpot deal ID to the caller without creating a new deal or Gmail draft.
4. If the website domain is allowlisted, fetches the company homepage and extracts bounded plain text to use as research evidence.
5. Uses OpenAI to extract a structured lead brief and reply draft, then applies deterministic scoring and assigns a HubSpot owner based on budget, service fit, urgency, and verified website evidence (falling back to a manual-review payload if AI fails).
6. Upserts the contact in HubSpot, creates an associated HubSpot deal with the qualification details, saves a personalised Gmail reply draft, posts a review notification to Slack, and returns the deal ID and score to the webhook response.

## Setup
1. Add credentials for Webhook Header Auth, OpenAI, HubSpot (App Token with contacts and deals read/write scopes), Gmail OAuth2, and Slack.
2. Update the Settings values for your agency name, supported services, scoring weights, budget threshold/currency, HubSpot owner IDs, pipeline ID and deal stage ID, Slack channel ID, and OpenAI model.
3. If you want website enrichment, populate enrichmentAllowedDomains with the exact domains you approve for fetching; leave it as an empty array to skip research.
4. Configure your website or form backend to POST JSON fields (requestId, name, email, company, website, message) to the webhook URL and reuse the same requestId for retries so deduplication works.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, HubSpot, Gmail, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
