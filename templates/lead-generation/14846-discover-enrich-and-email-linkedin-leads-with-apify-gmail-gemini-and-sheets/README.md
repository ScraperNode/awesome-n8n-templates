# 🎣 Discover, enrich, and email LinkedIn leads with Apify, Gmail, Gemini, and Sheets

> ⚡ **136 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Automate LinkedIn lead discovery, enrichment, and email follow-ups using Apify and Google Sheets

---

## What this template demonstrates

- End-to-end lead pipeline (discovery → enrichment → outreach)  
- Google Search–based LinkedIn discovery (safe approach)  
- Batch processing with controlled loops  
- AI-generated cold emails and follow-ups  
- Google Sheets as a structured lead database  

---

## Use cases

- B2B outbound lead generation  
- Recruitment sourcing workflows  
- Founder-led sales outreach  
- Building verified prospect lists  
- Automated follow-up systems  

---

## How it works

- Reads role + location inputs from Google Sheets  
- Uses Apify to find LinkedIn profiles via Google Search  
- Stores raw leads and filters valid profiles  
- Enriches profiles with additional data  
- Generates personalized email sequences using AI  
- Sends emails and tracks responses  
- Updates lead status to prevent duplicates  

---

## How to use

- Add `{{APIFY_API_TOKEN}}`  
- Connect Google Sheets and Gmail  
- Prepare input sheet (Keyword, Location)  
- Run workflow in test mode  
- Verify outputs in Google Sheets  
- Activate workflow  

---

## Requirements

- n8n (cloud or self-hosted)  
- Apify account  
- Google Sheets  
- Gemini / LLM API key  

---

## Good to know

- No direct LinkedIn automation (safe and compliant)  
- Email follow-ups include response tracking  
- Uses batching to handle large datasets  
- Google Sheets acts as the system state  

---

## Customising this workflow

- Change target roles and locations  
- Improve AI prompts for personalization  
- Add email verification tools  
- Replace Sheets with a database  
- Add retry logic and rate limits  

---

## What this template demonstrates

- Multi-step automation architecture  
- API orchestration using HTTP nodes  
- AI integration in workflows  
- Conditional logic and batching  
- Scalable lead processing design

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
