# 📱 Create LinkedIn posts from web pages using Airtable, Dumpling AI, Claude and PostPulse

> ⚡ **48 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### How it Works 
This workflow takes web URL's from Airtable, extract URL data with Dumpling AI, creates attention grabbing LinkedIn post with Claude, and schedules post in PostPulse.

Set up steps
- **Airtable Trigger**: Triggers our workflow via the **URL Link** field in our base.
- **HTTP Node**: 3rd party API call to Dumpling AI's extract endpoint to extract website data. web URL is sourced from Airtable base. 
- **Anthropic’s Claude**: Creates LinkedIn post using the extracted web summary from the HTTP node.
- **Schedule a Light Post**: Schedule the posting date of our generated Claude post.
- **Update Airtable Base**: Update G**enerated LinkeIn Post** field and **Scheduled** field in Airtable.

## 🔗 Nodes Used

Airtable, HTTP Request, Airtable Trigger, Anthropic

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
