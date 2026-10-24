# 🔬 Monitor contractor licences weekly and send Slack digests with Apify

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs every Monday, checks a contractor roster against 17 US state licensing portals using Apify actors, and posts a single Slack digest highlighting expired licences, status changes, expiring licences within 30 days, and lookup issues.

## How it works
1. Runs every Monday at 06:00 on a schedule.
2. Loads your contractor roster (company, state, optional licence number, and optional previously known status).
3. Maps each contractor’s state to the correct Apify licence-lookup actor and builds the actor input, while labeling contractors in unsupported states as unverifiable.
4. Runs the Apify actor for each covered state to retrieve licence status and expiry details.
5. Classifies each result into alert tiers such as expired, status-changed, expiring within 30 days, lookup failed, ambiguous match, not found, or no expiry published.
6. Creates one grouped digest for all non-OK items and sends it to a Slack channel, otherwise produces no alert.

## Setup
1. Use a self-hosted n8n instance and install the `@apify/n8n-nodes-apify` community node.
2. Add an Apify API token credential and ensure the Apify actors used for the supported states are available to your Apify account.
3. Replace the sample roster with your real data source (for example Google Sheets, Airtable, or a database) and provide `company`, 2-letter `state`, and optionally `license_number` and `known_status`.
4. Add a Slack credential, set the target channel, and enable the Slack node to deliver the digest.

## 🔗 Nodes Used

Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
