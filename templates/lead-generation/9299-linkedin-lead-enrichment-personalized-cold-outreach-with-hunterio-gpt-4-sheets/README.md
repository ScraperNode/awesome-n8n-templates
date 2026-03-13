# 🎣 LinkedIn Lead Enrichment & Personalized Cold Outreach with Hunter.io, GPT-4 & Sheets

> ⚡ **786 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Supercharge your sales and marketing efforts with this powerful automation that transforms a list of LinkedIn profiles into a fully enriched, personalized outreach campaign. This workflow is designed for sales teams, growth marketers, and business development professionals looking to scale their lead generation without sacrificing personalization.

It seamlessly integrates LinkedIn scraping, email enrichment with Hunter.io, AI-powered message generation with OpenAI, and data organization in Google Sheets.

## How It Works

Start with Leads: The workflow begins with a list of target LinkedIn profile URLs.



Scrape Profile Data: It automatically scrapes each LinkedIn profile to extract key professional information such as name, title, company, and location. A built-in delay helps manage rate limits.




Find Verified Emails: Using the scraped company and name, the workflow queries ==Hunter.io to find a verified work email address== for the lead.




AI-Powered Personalization: If an email is found, the lead's data is sent to OpenAI (GPT-4), which generates a highly personalized, conversational outreach message based on their role, company, and your value proposition.



Sync to CRM/Sheet: Finally, all the enriched data—including the custom AI message—is neatly organized and saved as a new row in your designated Google Sheet.


~~Stop wasting hours on manual lead research and generic outreach~~. Implement this automated workflow to focus on building relationships and closing deals.

## 🔗 Nodes Used

Google Sheets, HTTP Request, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
