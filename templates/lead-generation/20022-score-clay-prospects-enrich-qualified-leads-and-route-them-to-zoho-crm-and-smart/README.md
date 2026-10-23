# 🎣 Score Clay prospects, enrich qualified leads, and route them to Zoho CRM and Smartlead

> ⚡ **18 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow receives prospect rows from Clay, scores and tiers them, enriches only qualified A/B prospects with Apollo, verifies emails with MillionVerifier, upserts eligible leads into Zoho CRM, routes verified prospects into Smartlead campaigns, and optionally posts a run summary to a team webhook.

## How it works
1. Receives a prospect row from a Clay HTTP API webhook (or runs with built-in demo prospects via manual trigger).
2. Normalizes Clay fields into a consistent prospect record, derives seniority/persona, and calculates a fit score, tier (A/B/C/Reject), recommended action, and in-run duplicates.
3. Selects only A/B prospects missing an email for enrichment (highest score first, capped by an enrichment budget) and enriches them via Apollo people/match or a demo enrichment fallback.
4. Verifies emails for non-duplicate A/B prospects using MillionVerifier (or marks them unverified when no verifier key is provided) and holds anything not confirmed as deliverable.
5. Routes prospects into batches: upserts A/B/C prospects with non-invalid emails to Zoho CRM, sends only verified A/B prospects to their tier’s Smartlead campaign, and collects everyone else as held with reasons.
6. Executes the Zoho Leads upsert (or outputs the prepared payload in preview/test mode), pushes leads to Smartlead (or outputs the prepared payload in preview/test mode), and builds a run summary with tier counts and credit usage.
7. Posts the summary to an incoming webhook (Slack/Teams/Google Chat) when configured, otherwise returns the summary in the workflow output.

## Setup
1. In Clay, add an HTTP API column that POSTs each row to this workflow’s production webhook URL and ensure your column keys match the CLAY_FIELDS mappings.
2. In the config node, replace the example scoring rules (SCORING, DISQUALIFY, TIERS, PERSONAS, thresholds, and ENRICH_BUDGET) and set TEST_RUN/TEST_CAMPAIGN_ID for your rollout.
3. Add an Apollo API key (people/match) and a MillionVerifier API key in config if you want paid enrichment and deliverability verification.
4. Create Zoho CRM OAuth “Self Client” credentials (client ID/secret/refresh token), confirm the correct Zoho region bases, and map any custom Zoho Lead field API names and duplicate-check fields in config.
5. Add your Smartlead API key and set campaign IDs for A and B tiers in SMARTLEAD_CAMPAIGNS, and optionally set a NOTIFY_WEBHOOK_URL to post the run summary to your team channel.

## Customization
- Part 1 of 2 parts Clay Outbound Scoring Engine.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
