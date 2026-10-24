# 🎣 Sort website contact emails into role vs personal with Apify and Google Sheets

> ⚡ **1 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow reads domains from Google Sheets, uses Apify’s Verified Website Contact Finder to extract published contact details, and updates the sheet by routing each domain into role-email results, personal-only results for review, no-contact outcomes, or retryable errors.

## How it works
1. Starts when you manually run the workflow.
2. Reads rows from Google Sheets where the status column is empty to get the next domains to process.
3. Batches the domains into a single list and sends them to the Apify Verified Website Contact Finder actor to retrieve emails, phones, and social links.
4. Classifies each Apify result based on success, presence of role emails vs personal emails, and specific error codes.
5. Updates the matching Google Sheets row with role emails, phones, socials, and a "role_found" status when role-based addresses exist.
6. Updates the matching Google Sheets row with personal emails and a "personal_only_review" status when only personal addresses are found.
7. Marks domains as "no_contact_published" when the site publishes no contacts, or clears the status to retry later when the site is unreachable or errors.

## Setup
1. Install the community node package @apify/n8n-nodes-apify in your n8n instance and add an Apify OAuth2 credential.
2. Add a Google Sheets OAuth2 credential and update the spreadsheet ID and sheet/tab name in every Google Sheets step to point to your own file.
3. Ensure your Google Sheet has at least a domain column (used for matching) and a status column (left empty to queue rows for processing), plus any optional output columns like role_emails, personal_emails, phones, and socials.

## Requirements
- An Apify account (pay-per-result, no subscription — the free account includes $5/month of platform credit to start) and a Google account for Sheets access. This template uses the community node @apify/n8n-nodes-apify — install it from the nodes panel (search "Apify") before running. Verified and Cloud-installable, works self-hosted too.

## Customization
- Adjust the switch node's branch conditions, or add more output columns to match your CRM's schema.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
