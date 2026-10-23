# 🎣 Enrich HubSpot companies with multi-source B2B data from Coresignal

> ⚡ **99 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Every time a new company is added to your HubSpot CRM, this workflow automatically enriches it with multi-source company data from Coresignal - no manual research required. It detects the creation event, fetches the company domain, queries Coresignal's database, and writes structured data (headcount, URL, city, and description) back into the HubSpot record within seconds. Ideal for sales and VC teams who need clean, complete company data the moment a record is created.

## **How it works**
- Receives a payload containing the HubSpot company ID from the Company Created trigger.
- Waits a short buffer to ensure the company instance is fully created and accessible in HubSpot.
- Fetches the company record from HubSpot to retrieve the company ID and domain.
- Uses the company domain to enrich the record with multi-source company data via the Coresignal Enrich node.
- Uses the company ID from the Get company node to locate the correct HubSpot record and update it with Coresignal's data by mapping the required fields.

## Tools used
|Tool / Node|What it does in the workflow|Free / credentials needed?|
|-|-|-|
|HubSpot Trigger Node|Triggers the workflow and provides the company ID|HubSpot account is free, however, prior setup within HubSpot is required|
|Wait Node|Provides a buffer since sometimes the trigger arrives quicker than the company can be accessed on HubSpot|Free n8n node|
|HubSpot Get Company Node|Gets created company info, such as company domain that will be used in Enrich node|HubSpot account is free, however, prior setup within HubSpot is required|
|Coresignal Enrich Company by Website URL|Gets company data by using company domain as identifier|Requires API key to be provided|
|HubSpot Update Company Node|Identifies a company to be updated with ID from Get Company node. Updates company data with data from Enrich Company by Website URL node. Requires mapping.|HubSpot account is free, however, prior setup within HubSpot is required|

## How to set up

1. First of all, a set up of HubSpot app is required. 
Here’s an n8n guide on how to set it up. https://docs.n8n.io/integrations/builtin/credentials/hubspot/
2. Then, create a webhook within the app on HubSpot. 
3. Once the webhook is created, test the workflow and the trigger within n8n must should return the payload after the company has been created on HubSpot (you can also click test). 
4. Open the get company node and choose the company ID to be the identifier. Connect the id value from previous node to the ID field in Get company node. 
5. In Coresignal node: Find the company domain in the payload from the get a company node and connect it to website URL field in Coresignal node. 
6. In HubSpot update company node, connect the company ID from the Get a company node to the company id field and then map the fields to be updated with Coresignal’s data. 
7. Publish workflow and try creating a company to see if it works. 

## Why use this workflow?

Sales and VC teams spend hours researching companies before outreach - headcount, industry, location, professional network presence. This workflow removes that entirely. The moment a company lands in your HubSpot CRM, Coresignal's data is already written into the record, so your team opens a fully populated profile every time.

It's especially valuable for teams with high inbound volume (from form fills, integrations, or imports) where manual enrichment just doesn't scale. With Coresignal covering millions of companies globally, coverage is broad enough to handle most real-world pipelines without gaps

### Customization options
- **Add more enrichment fields** - Coresignal returns additional data beyond the defaults. Add fields like industry, founded_year, or annual_revenue to the Update company node with minimal effort.
- **Adjust the wait time** - The default is 10 seconds. In high-latency HubSpot environments, increase this to 20–30 seconds to avoid the Get company node firing before the record is ready.
- **Add a Slack or email notification** - Insert a Slack or Gmail node at the end to alert your team whenever a company is enriched.
- **Filter by company size or type** - Add an IF node after Get company to only enrich records that meet certain criteria (e.g. skip companies with no domain).

### Need help or want to customize this?
Reach out directly: artur@coresignal.com 
Follow for more on linkedin: https://www.linkedin.com/in/artur-mulagalijev/

## 🔗 Nodes Used

HubSpot, HubSpot Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
