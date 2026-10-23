# 🎣 Qualify and route free signups with Twain, Claude, Slack, HubSpot and Gmail

> ⚡ **125 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow receives free-signup events via webhook, enriches the contact with Twain research (and optional Findymail LinkedIn lookup), uses Anthropic Claude to score ICP fit, then routes outcomes to Slack and, for high-fit leads, to HubSpot and Gmail.

## How it works
1. Receives a POST webhook request for a new signup and authenticates it via a required header.
2. Normalizes the signup fields (uid, email, name, LinkedIn URL) and deduplicates records across runs to avoid reprocessing the same user.
3. If the signup has no LinkedIn URL but has an email, optionally calls Findymail reverse-email lookup to resolve a LinkedIn profile URL and merges it back into the contact.
4. If the lead has neither a work email nor a LinkedIn URL, posts a “skipped” message to Slack and stops.
5. Sends the contact to the Twain Generate/Research API to create research and add the contact to the specified Twain campaign, and posts a Slack alert if the research request fails.
6. If Twain flags a hard disqualification (persona mismatch or incomplete profile), posts a disqualification message to Slack; otherwise, Anthropic Claude evaluates the research against the defined ICP tiers and returns a structured fit verdict.
7. If the verdict is Tier 1 or Tier 2, posts a high-fit alert to Slack, upserts the contact into HubSpot with fit properties, and emails the owning AE via Gmail; otherwise, posts a “NO FIT” message to Slack.

## Setup
1. Configure the Webhook header authentication credential and copy the production webhook URL into your signup source so it sends uid/email/displayName (and optional linkedin_url) to this endpoint.
2. Create a Twain workspace and “signup-triage” campaign, then set the correct Twain campaign_id in the normalization step and add your Twain API key as an HTTP Header Auth credential (X-Api-Key).
3. Add an Anthropic API credential for the Claude Sonnet model used to generate the fit verdict.
4. Add a Slack bot token credential and set the target channel name/ID where the workflow posts skipped, disqualified, error, high-fit, and no-fit notifications.
5. Add HubSpot OAuth2 credentials and ensure your portal has the custom contact properties twain_fit_tier and twain_fit_reason.
6. Add Gmail OAuth2 credentials and replace REPLACE_WITH_AE_EMAIL@yourcompany.com with the recipient who should receive high-fit signup emails.

## Requirements
- User should have credits in Twain

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, HubSpot, Gmail, Google Cloud Firestore

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
