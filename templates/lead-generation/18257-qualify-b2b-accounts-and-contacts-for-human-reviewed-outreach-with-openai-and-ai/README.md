# 🎣 Qualify B2B accounts and contacts for human-reviewed outreach with OpenAI and Airtable

> ⚡ **78 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow accepts B2B targeting criteria via webhook or manual input, discovers matching companies and contacts via external APIs, uses OpenAI to score fit and build an evidence-based outreach brief, and stores qualified results in Airtable for human review.

## How it works
1. Receives a research request via a POST webhook (or runs from a manual test) and normalizes the targeting criteria.
2. Validates required fields and returns a 400 webhook response when the criteria are incomplete.
3. Calls a configurable company-discovery HTTP API, removes excluded companies, and uses OpenAI to evaluate fit and generate evidence that is converted into a weighted account score.
4. Filters out low-scoring accounts, checks Airtable to avoid duplicates, and creates a “Qualified” account record for new matches.
5. Calls a configurable contact-discovery HTTP API for each qualified account, then uses OpenAI to score each contact’s relevance and filters out low-scoring or duplicate contacts using Airtable.
6. Uses OpenAI to generate an evidence-based outreach brief and creates an Airtable queue item with status “Needs Human Review”, then returns a compact JSON result for webhook requests.
7. Runs daily on a schedule to load “Needs Human Review” items from Airtable, identify stale reviews, and optionally email a summary via Gmail.

## Setup
1. Create an Airtable base with Accounts, Contacts, and Outreach Queue tables (with fields referenced by the workflow such as Company_Name, Company_Domain, Review_Status, and Created_At) and add an Airtable personal access token credential.
2. Provide your company-discovery API URL/token and contact-discovery API URL/token in the configuration values used by the workflow.
3. Add an OpenAI credential and confirm the selected model (gpt-5-mini) is available in your account.
4. (Optional) Add a Gmail credential, set the notification email address, and enable the disabled “Email Review Queue Summary” step if you want daily reporting.
5. If using the webhook trigger, copy the production webhook URL and configure the calling system to POST the required criteria fields (target_market, target_industries, and target_roles).

## 🔗 Nodes Used

Airtable, HTTP Request, Webhook, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
