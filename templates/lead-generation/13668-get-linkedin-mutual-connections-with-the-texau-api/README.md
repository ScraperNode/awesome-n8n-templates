# 🎣 Get LinkedIn mutual connections with the TexAU API

> ⚡ **5 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

This workflow automates the process of retrieving mutual LinkedIn connections using the TexAU API. It is ideal for enrichment, lead qualification, and relationship-mapping tasks where understanding shared connections provides valuable context.

**How it Works**

1. The workflow is triggered manually for testing or can be linked to other workflows.
2. A request is sent to TexAU’s LinkedIn Mutual Connections automation, passing the target LinkedIn profile URL or ID.
3. TexAU begins processing the task in the background.
4. The workflow waits briefly to allow TexAU to complete the job.
5. A follow-up request retrieves the final results from TexAU’s results endpoint.
6. The mutual-connection data is returned in structured form for downstream use such as enrichment, CRM updates, scoring, or AI workflows.

**Setup Steps**

* Add your TexAU API key to the HTTP Request node headers.
* Specify the input LinkedIn profile URL.
* Adjust wait duration depending on TexAU’s processing speed.
* Connect any downstream CRM, database, or AI components as needed.

**Good to Know**
TexAU execution time varies based on task queue load. Returned fields may include connection names, profile URLs, job titles, and shared links.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
