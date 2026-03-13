# 🎣 Extract LinkedIn search results into a Google Sheet with SourceGeek

> ⚡ **11 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

**How is works**
This template makes it possible to extract Search Results from LinkedIn and import them into a Google Sheet. 

It determines from where the url is coming from (LinkedIn Basic, Sales Navigator or Recruiter) and selects which node needs to be used. 

The node returns a Run ID while in the background the list is being exported. Run going through a loop the workflow waits untill the job is done. When the export is ready, the response is being transformed into a workable object which then can be used to append the data into a Google Sheet.

**How to use**

- Connect with a Google Sheet and have the correct columns in place
- Go to your LinkedIn platform and do a People search. That can be done either in the LinkedIn Basic, Sales Navigator or Recruiter environment.
- Copy the url of the results page and within the workflow, click on Form Submission
- Paste in the url and click on Sumbit to start the workflow

**Requirements**
- A LinkedIn Search Results page url
- A Google Sheet 
- The [https://support.sourcegeek.com/en/articles/12441230-n8n-integration](verified SourceGeek node)

## 🔗 Nodes Used

Google Sheets, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
