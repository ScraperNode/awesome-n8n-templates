# 🎣 Search for people on LinkedIn using the TexAU API

> ⚡ **27 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

This workflow performs automated LinkedIn people search using the TexAU API. It is ideal for prospecting, recruitment, lead generation, and workflows where structured people-search results from LinkedIn are needed.

**How it Works**

1. The workflow is triggered manually or by another automation.
2. Search inputs such as name, role, keywords, or location are sent to TexAU’s People Search automation.
3. TexAU starts a background job that executes the search on LinkedIn.
4. The workflow waits a short period to allow TexAU to finish processing.
5. It then polls TexAU’s results endpoint and retrieves the completed dataset.
6. The workflow outputs a structured list of matching profiles, typically including name, headline, job title, profile URL, and relevance indicators.

**Setup Steps**

* Add your TexAU API key to the HTTP Request node.
* Supply search parameters manually or dynamically.
* Adjust wait time based on TexAU’s queue load.
* Route results to your CRM, AI agent, or lead pipeline.

**Good to Know**
Search results depend on publicly visible LinkedIn data. TexAU processing time varies by query complexity.

## 🔗 Nodes Used

HTTP Request, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
