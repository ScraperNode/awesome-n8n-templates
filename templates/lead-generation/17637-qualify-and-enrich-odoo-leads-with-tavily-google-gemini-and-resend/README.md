# 🎣 Qualify and enrich Odoo leads with Tavily, Google Gemini, and Resend

> ⚡ **43 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow receives web leads via a secured webhook, enriches them with Tavily search results, scores and formats them using Google Gemini, then creates a lead in Odoo and sends a personalized email via Resend only when the lead meets the qualification threshold.

## How it works
1. Receives a POST request on a header-authenticated webhook and returns 400 if required fields like email and name are missing.
2. Immediately responds with HTTP 202 to confirm receipt, then normalizes and cleans the incoming lead data (budget, company/domain, technologies) and prepares targeted Tavily search queries.
3. Enriches the lead by searching Tavily for both the person and the company/domain, then compiles the results into a single context summary.
4. Sends the lead data plus Tavily context to Google Gemini using a structured schema to generate a score, justification, Odoo-ready HTML notes, and a personalized email subject/body.
5. Compares the Gemini score to the configured threshold to classify the lead as hot or cold and selects the corresponding Odoo tag/priority.
6. Creates a new lead record in Odoo CRM with the AI-generated description and lead fields, and for hot leads sends the generated email to the lead via Resend.

## Setup
1. Configure webhook header authentication (shared secret/header) and register the webhook URL in your lead capture form or source system.
2. Add credentials for Tavily (Bearer token), Google Gemini/PaLM (API key), Resend (Bearer token), and an Odoo API connection.
3. Update the ⚙️ Config values (score threshold, company name/website, from/reply-to email addresses, and Tavily search depth) to match your environment.
4. Verify your Odoo CRM has access to the crm.lead model and that the workflow’s stage/tag IDs and field mappings match your Odoo configuration.

## Requirements
- Tavily API key
- Gemini API Key
- Resend API Key with verified domain.
- Odoo account

## Additional info
Use any email provider such as SendGrid, Brevo, Resend...

## 🔗 Nodes Used

HTTP Request, Webhook, Odoo, Basic LLM Chain, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
