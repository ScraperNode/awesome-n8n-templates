# 💬 Generate personalized sales emails with LinkedIn data & Claude 3.7 via OpenRouter

> ⚡ **18,447 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## How it works
- The automation loads rows from a Google Sheet of leads that you want to contact.
- It makes a Google search via Apify for LinkedIn links based on the First name / Last name / Company.
- Another Apify actor fetches the right LinkedIn profile based on the first profile which is retuned
- The same process is done for the company that the lead works for, giving extra context. If the lead has a current company listed on their LinkedIn, we use that URL to do the lookup, rather than doing a separate Google search.
- A call is made to OpenRouter to get an LLM to generate an email based on a prompt designed to do personalized outreach.
- An email is sent via a Gmail node.


## Set up steps
- Connect your Google Sheets + Gmail accounts to use these APIs.
- Make an account with Apify and enter your credentials.
- Set your details in the "Set My Data" node to customize the workflow to revolve around your company + value proposition. 

I would recommend changing the prompt in the "Generate Personalized Email" node to match the tone of voice that you want your agent to have. 

You can change the guidelines to e.g. change whether the agent introduces itself, and give more examples in the style you want to make the output better.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Filter, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
