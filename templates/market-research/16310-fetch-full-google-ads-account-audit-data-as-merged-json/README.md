# 📊 Fetch full Google Ads account audit data as merged JSON

> ⚡ **24 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
Runs manually to pull read-only Google Ads reporting for one account: campaign, ad group, keyword, ad and search-term performance over a chosen date range, plus a current-state snapshot of negative keywords, ad group targeting and campaign assets. Returns everything as one merged JSON object.

## How it works
1. Starts when you manually execute the workflow.
2. Loads your Google Ads customer ID, developer token, API version and reporting date range from a Set node.
3. Queries the Google Ads API (searchStream) for campaign performance, settings and bidding strategy over the date range.
4. Queries ad groups, keywords (including Quality Score fields) and the top 300 search terms by spend for the same date range.
5. Queries ads (including RSA headlines/descriptions and approval status) over the date range.
6. Pulls current-state data not bound by the date range: campaign-level negative keywords, ad group targeting criteria, and campaign assets (call, callout, sitelink).
7. Merges all eight datasets into a single JSON object, keyed by section.

## Setup
1. Create a Google Ads OAuth2 credential in n8n with access to the target customer account and attach it to the HTTP Request nodes.
2. Get a Google Ads developer token from your Google Ads Manager (MCC) account → Tools → API Center, and set it in the .env node.
3. Set the customer ID (sub-account, no dashes) and api_version (v23 tested).
4. Set DATE_FROM and DATE_TO using fixed dates or the provided expressions to control the reporting period. Note: the negative keyword, audience and asset queries return current state and ignore this range.

## Requirements
- Google Ads account with API access enabled
- Google Ads OAuth2 credential configured in n8n
- Google Ads developer token

## Customization
- Edit the GAQL queries to add/remove fields or change filters (e.g. include REMOVED entities).
- Change the Search Terms ORDER BY/LIMIT (currently top 300 by cost).
- Add segments.date to the negative keyword, audience or asset queries to date-bound them too.

## Additional info
Read-only, every node is a SELECT query; the workflow makes no changes to the account.
The "Audience Segments" node returns all ad group targeting criteria, not only audience segments.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
