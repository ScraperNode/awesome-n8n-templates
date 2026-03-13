# 🎣 Enrich LinkedIn profiles with Apollo and display candidate pages in the browser

> ⚡ **29 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

## 📊 Description
Automate LinkedIn profile enrichment and transform raw URLs into beautifully formatted candidate profile pages using n8n and the Apollo.io API 🔍. This workflow receives a LinkedIn URL via webhook, fetches enriched person and company data, normalizes the response, and generates a fully styled HTML profile card in real time. Perfect for recruiters, sales teams, and automation builders who want instant profile intelligence without manual research. Deliver structured contact insights, company details, and tech stack data directly in the browser 🤖.

## ⚙️ What This Template Does
📥 Receives a LinkedIn profile URL via a Webhook trigger.
🌐 Sends the URL to the Apollo People Match API to fetch enriched person and organization data.
🧹 Cleans and normalizes the raw API response into structured fields.
🖼️ Dynamically generates styled HTML profile cards with candidate and company details.
🚀 Returns a fully rendered HTML page as the webhook response for instant viewing in a browser.

## ✅ Key Benefits
✅ Instantly enrich LinkedIn profiles with verified business data
✅ Generate clean, structured candidate summaries automatically
✅ Deliver zero-manual research workflow for recruiters & sales teams
✅ Create branded HTML profile pages dynamically
✅ Streamline lead qualification and prospect research
✅ Reliable API-based enrichment with structured output

## 🧩 Features
- Webhook-triggered automation workflow
- Integration with Apollo.io People Match API
- Real-time LinkedIn profile enrichment
- JavaScript-based data normalization
- Dynamic HTML & CSS profile card generation
- Browser-rendered webhook response
- Graceful error handling when no profile data is found

## 🔐 Requirements
- Apollo.io API key
- Active n8n instance (Cloud or Self-Hosted)
- Webhook endpoint enabled
- Basic understanding of POST requests

## 🎯 Target Audience
- Recruitment agencies & talent acquisition teams
- B2B sales teams & SDRs
- Lead generation agencies
- Automation developers building AI-powered prospecting tools

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
