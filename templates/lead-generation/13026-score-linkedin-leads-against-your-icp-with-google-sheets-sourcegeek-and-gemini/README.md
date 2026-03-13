# 🎣 Score LinkedIn leads against your ICP with Google Sheets, SourceGeek and Gemini

> ⚡ **69 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

**How it works**
This template is using a LinkedIn User Profile in combination with your detailed Ideal Customer Profile (ICP) to create a score, including reasoning and outreach messages.

It is manually triggered and uses a Google Sheet as an entry point. Inside there are rows with only LinkedIn profile urls in it.

Then the SourceGeek Node is being triggered and the complete profile info is retrieved. 

That info is being sent to an AI Agent where a long description of the Ideal Customer Profile is written down. 

The AI Agent will process all that data and will return with three values

- ICP rating (between 0 - 100)
- ICP reasoning. Where does the score come from
- A 1st, 2nd and 3rd outreach message which you can use later on

After that the original Google Sheet row will be updated with the data created by the AI Agent

**How to use**
- Populate a Google Sheet with LinkedIn Profile URLs which potentially can be your customers
- Let the SourceGeek fetch all their data from LinkedIn and enrich it with soft skills and much more
- Describe in detail your ICP and let the AI Agent determine the score of the profile
- Update the initial Google Sheet with the ICP Score and the reasoning how this score came to be

**Requirements**
- A Google Sheet with LinkedIn profile urls
- The verified SourceGeek node

## 🔗 Nodes Used

Google Sheets, AI Agent, Simple Memory, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
