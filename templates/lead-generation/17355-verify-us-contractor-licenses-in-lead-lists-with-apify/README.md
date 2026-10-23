# 🎣 Verify US contractor licenses in lead lists with Apify

> ⚡ **11 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow verifies contractor licenses for leads across 17 supported US states by routing each lead to the correct Apify license-lookup actor, matching returned license records back to the lead, and labeling each lead as verified, expired, review, not found, or unverifiable.

## How it works
1. Runs manually when you click Execute and loads a list of leads containing a company name, state code, and optional license number.
2. Maps each lead’s state to the correct Apify actor and builds the actor input using the appropriate search field (or labels the lead as unverifiable if the state is not supported).
3. For covered states, runs the selected Apify actor to search the state licensing portal and return up to five candidate license records.
4. Matches the returned license records back to each lead using an exact license-number match when available or a normalized name comparison otherwise.
5. Assigns a verification verdict and details such as license number, status, expiry date, matched name, and source URL, or labels the lead as not-found when no portal match is returned.
6. Splits results so verified-active leads are separated from leads that need review or have other non-active/unverifiable outcomes.

## Setup
1. Self-host n8n and install the community node `@apify/n8n-nodes-apify`.
2. Create an Apify account, add your Apify API token as an Apify credential, and select it in the Apify step that runs the actor.
3. Replace the sample lead generator with your real data source (for example Google Sheets, a CRM, or CSV) and ensure each item includes `company` and a 2-letter `state` (optionally `license_number`).
4. If needed, customize the state-to-actor mapping to add or change supported states and adjust the name-matching strictness used to decide between `verified-active` and `review`.

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
