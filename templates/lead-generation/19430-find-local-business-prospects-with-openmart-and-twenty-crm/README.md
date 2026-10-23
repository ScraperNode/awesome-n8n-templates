# 🎣 Find local business prospects with OpenMart and Twenty CRM

> ⚡ **15 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow runs manually to search OpenMart for local businesses in a chosen niche and location, then imports only new companies into Twenty CRM based on website domain matching and creates a follow-up review task for each newly created prospect.

## How it works
1. Runs when you manually trigger the workflow and defines the search query, location, result limit, and review-task due date.
2. Validates the search settings and stops with an error message if required fields or limits are invalid.
3. Searches OpenMart for local businesses with contact info and valid websites, then normalizes the results and keeps only entries with a usable website domain.
4. Deduplicates the prospects by domain and stops early with a “no usable businesses” report if nothing qualifies.
5. Loads all existing companies from Twenty CRM and compares each candidate’s domain to the existing company website domain.
6. Creates a new company in Twenty CRM for candidates that do not already exist and adds a review task with the search context and due date.
7. Produces a final import summary showing how many prospects were created versus already existed, including per-company outcomes.

## Setup
1. Add an OpenMart API credential to the OpenMart node used to search for businesses.
2. Add a Twenty CRM API credential to the Twenty CRM nodes used to list companies and create companies and tasks.
3. Update the search parameters (query, city, state, country, limit, and reviewTaskDueInDays) in the prospect search configuration step.
4. Confirm your Twenty CRM company records store the website under the domain field used for matching (domainName.primaryLinkUrl) so domain deduplication works as expected.

## 🔗 Nodes Used

Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
