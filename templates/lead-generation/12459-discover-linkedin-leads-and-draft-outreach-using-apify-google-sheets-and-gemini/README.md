# 🎣 Discover LinkedIn leads and draft outreach using Apify, Google Sheets, and Gemini

> ⚡ **13 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# LinkedIn Lead Discovery & AI Outreach System

This n8n template helps you discover LinkedIn profiles using Google Search, enrich them with public data, and generate personalized  outreach messages — all without unsafe browser automation.

---

## What this template demonstrates

- Safe LinkedIn lead discovery without direct scraping
- Scalable batch processing using Split In Batches
- Google Sheets as a lightweight lead database
- Responsible AI usage with strict prompt constraints
- Clear separation between data collection and messaging

---

## Use cases

- B2B lead research for agencies and consultants  
- Founder-led outbound without expensive SaaS tools  
- Market research and prospect list building  
- Personal LinkedIn outreach systems  
- Pre-sales research workflows  

---

## How it works

1. Role and location keywords are generated automatically  
2. Apify runs Google searches to find LinkedIn profile URLs  
3. Results are stored in Google Sheets  
4. Profiles are enriched one-by-one  
5. AI generates a connection message  
6. A follow-up message is generated after connection  
7. Lead status is updated to avoid duplicates  

---

## How to use

1. **Make a copy of the Google Sheet**  
   👉 https://docs.google.com/spreadsheets/d/1UXwFkCGgQKrfOiDgohQLy7WsqUw5TL3unPBgRi4npBQ/copy

2. Add your **Apify API token**  
3. Connect your **Google Sheets credentials**  
4. Review or customise role keywords  
5. Run the workflow in test mode  
6. Monitor results inside Google Sheets  

---

## Requirements

- n8n (Cloud or Self-hosted)
- Apify account (free tier works for testing)
- Google Sheets access
- Gemini / LLM API key (for messaging)

---

## Customising this workflow

- Change target roles or locations in the query generator
- Replace Google Sheets with a database if needed
- Adjust AI prompts to match your brand tone
- Disable follow-up generation if not required
- Add rate limits or delays for larger runs

---

## Good to know

- This template does NOT send LinkedIn messages automatically  
- It focuses on research, enrichment, and message drafting  
- Designed to be compliant, stable, and production-ready  
- Ideal foundation for custom outreach systems  

---

## Who this is for

- n8n users building lead generation systems  
- Freelancers and agencies avoiding expensive SaaS tools  
- Founders running manual or semi-automated outreach  
- Anyone who wants control, transparency, and ownership

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
