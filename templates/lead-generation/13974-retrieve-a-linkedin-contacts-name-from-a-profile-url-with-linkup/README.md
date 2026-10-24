# 🎣 Retrieve a LinkedIn contact’s name from a profile URL with LinkUp

> ⚡ **161 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Summary  
This workflow retrieves a LinkedIn contact’s **full name** from their **profile URL** using the [LinkUp](https://www.linkup.so) AI Search API. It’s a lightweight alternative to web scraping or complex APIs — integrating neatly into your existing **n8n** automations.

## How it works  
- The workflow reads LinkedIn URLs from a **Data Table**.  
- Each URL is sent to LinkUp via an HTTP Request node using natural language.  
- LinkUp returns the corresponding contact name.  
- The Data Table is automatically updated with the retrieved name.  

## How to use  
1. Create a Data Table named **LinkedInURL** with two fields:  
   - `url` (String)  
   - `name` (String)  
2. Add one or more LinkedIn profile URLs, for example:  
   `https://www.linkedin.com/in/stephaneheckel/`  
3. Store your LinkUp API key in the **Settings** component.  
   You can get one at [https://app.linkup.so/api-keys](https://app.linkup.so/api-keys).  
4. Run the workflow. The `name` field will populate with the correct LinkedIn names.  

## Requirements  
- **LinkUp** account
- **n8n** version: tested on 1.122.4 (Ubuntu)

## Need Help?
Feel free to comment this [post](https://www.linkedin.com/posts/n8n-about_linkedin-activity-7436922917336289281-hTxv/).
Contact me on [LinkedIn](https://www.linkedin.com/in/stephaneheckel/) or ask in the [Forum](https://community.n8n.io/)!

## 🔗 Nodes Used

HTTP Request, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
