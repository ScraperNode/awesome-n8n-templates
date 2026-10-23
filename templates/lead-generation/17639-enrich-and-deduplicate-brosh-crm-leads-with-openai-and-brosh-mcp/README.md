# 🎣 Enrich and deduplicate BROSH CRM leads with OpenAI and BROSH MCP

> ⚡ **1 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow receives lead data via a webhook, validates and normalizes the payload, then uses OpenAI web search and the BROSH MCP API to enrich the lead and create or reuse matching Account and Contact records in BROSH CRM, returning a structured JSON response.

## How it works
1. Receives a POST request containing lead details through an n8n webhook endpoint inside BROSH AI CRM.
2. Validates that the payload includes at least one contact identifier (email, phone, or name) and one account identifier (company name or website), then normalizes fields into a consistent contact/account structure.
3. Uses an OpenAI chat model with web search plus the BROSH MCP API tools to enrich company and contact attributes and to check for duplicate Accounts and Contacts in BROSH CRM.
4. Creates new or reuses existing BROSH CRM Account and Contact records (both typed as Lead) and links the Contact to the Account based on the duplicate-check results.
5. Parses and verifies the agent’s JSON output to confirm Account and Contact IDs were returned and flags any validation warnings.
6. Responds to the webhook caller with a 200 success JSON payload when both records are present, or a 422 error JSON payload when validation fails or insertion is incomplete.

## Setup
1. Configure an OpenAI API credential in the OpenAI chat model node, a free openai account is also avilable.
2. Create an HTTP Bearer Auth credential for BROSH MCP node and select it in the BROSH MCP client tool node, keeping the endpoint set to https://mcp.brosh.io. To do that create new credential click on the BORSH n8n node, click the oauth2 > create new credentials> follow the login /signup steps> click approve n8n access> done
3. Activate the workflow, copy the production webhook URL, and configure your lead source to send POST requests with JSON lead fields to that URL.

## 🔗 Nodes Used

HTTP Request, Webhook, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
