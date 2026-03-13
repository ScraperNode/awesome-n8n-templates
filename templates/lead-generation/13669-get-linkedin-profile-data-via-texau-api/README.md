# 🎣 Get LinkedIn profile data via TexAU API

> ⚡ **1 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

This workflow automates the extraction of detailed LinkedIn profile information through the TexAU API. It is designed for lead enrichment, prospect research, hiring workflows, and any automation requiring structured profile data from LinkedIn.

**How it Works**

1. The workflow is triggered manually or through another workflow.
2. A request is sent to TexAU’s LinkedIn Profile Scraper task, providing the target LinkedIn profile URL or ID.
3. TexAU starts a profile-scraping job in the background.
4. The workflow waits briefly to allow processing time.
5. A follow-up request retrieves the completed results from TexAU’s results endpoint.
6. The workflow outputs a structured JSON representation of the profile, typically including name, headline, role, location, experience, skills, and education.

**Setup Steps**

* Add your TexAU API key to the HTTP Request node.
* Supply the LinkedIn profile URL dynamically or manually.
* Adjust the wait time depending on TexAU’s queue speed.
* Connect your CRM, database, or AI logic to process the profile results.

**Good to Know**
Data availability depends on what is publicly visible. Processing time varies based on TexAU queue load.

## 🔗 Nodes Used

HTTP Request, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
