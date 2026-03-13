# 🎣 AI web researcher for sales

> ⚡ **77,834 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who is this for?
This workflow is for all sales reps and lead generation manager who need to prepare their prospecting activities, and find relevant information to personalize their outreach.

## Use Case
This workflow allows you to do account research with the web using AI.

It has the potential to replace manual work done by sales rep when preparing their prospecting activities by searching complex information available online.

## What this workflow does
The advanced AI module has 2 capabilities: 
- Research Google using SerpAPI
- Visit and get website content using a sub-workflow


From an unstructured input like a domain or a company name. 

It will return the following properties: 
- domain
- company Linkedin Url
- cheapest plan
- has free trial
- has entreprise plan
- has API
- market (B2B or B2C)


The strength of n8n here is that you can adapt this workflow to research whatever information you need.

You just have to precise it in the prompt and to precise the output format in the "Strutured Output Parser" module.

Detailed instructions + video guide can be found [by following this link](https://lempire.notion.site/AI-Web-research-with-n8n-a25aae3258d0423481a08bd102f16906).

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser, SerpApi (Google Search)

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
