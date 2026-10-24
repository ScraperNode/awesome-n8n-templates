# 📊 Score LinkedIn company ICP fit with Periodix Actions, Claude and Google Sheets

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Paste LinkedIn company URLs into Google Sheets and get full company profiles plus an AI ICP score: industry, headcount, 6 to 24 month headcount growth, average tenure, HQ and offices, founding year, website, specialties, and description. Research and score companies 15x more cost-effectively than with Clay.

## How it works
1. Loads your ICP description and score threshold from one config step.
2. Reads LinkedIn company URLs from the Input tab and skips companies already in the Researched tab.
3. For each company, Periodix Actions fetches the full LinkedIn company profile.
4. 4. Key fields are flattened into clean columns: industry, specialties, headcount and range, headcount growth over 6, 12, and 24 months, average employee tenure, HQ and all offices, founding year, followers, website, tagline, and description.
5.  AI scores each company 1 to 10 against your ICP with a one-sentence reason.
6. Every company is appended to the Researched tab with icp_score, icp_reason, and icp_fit (yes or no).

## Setup
1. Create a Periodix Actions account at actions.periodix.net (free trial available), install the verified Periodix Actions node (works on n8n Cloud and self-hosted), and select your connected LinkedIn profile in the Get Company Profile node.
2. Add your AI provider credential (Claude by default; OpenAI or Gemini also work) to the ICP Fit node.
3. Connect your Google Sheets account via OAuth2 and set your Sheet ID in all three Google Sheets nodes.
4. Create two tabs: Input with a company_url column, and Researched with these headers: company_url, public_identifier, name, website, industry, employee_count, employee_range, hq_city, hq_country, offices, office_count, founded, followers, headcount_growth_6m, headcount_growth_12m, headcount_growth_24m, avg_tenure, specialties, tagline, description, icp_score, icp_reason, icp_fit, researched_at.
5. Describe your ICP and set the score threshold in ICP Config.

## Requirements
- A Periodix Actions account with a connected LinkedIn profile (free trial available)
- An AI provider API key (Claude, OpenAI, or Gemini)
- A Google account with Sheets access
- n8n Cloud or self-hosted

## Customization
- Raise or lower score_threshold to control how strict the ICP filter is
- Replace the last node with HubSpot or Notion to create qualified accounts in your CRM
- Add a Periodix Actions search step before Get Company Profile to research every company from a LinkedIn or Sales Navigator company search
- Switch the Manual Trigger to a Schedule Trigger to research new rows automatically

## Additional info
Periodix Actions connects through LinkedIn's own infrastructure, not a browser scraper: no cookies, no CAPTCHA, no scraper fingerprint, and the same output fields every run.
Built on the infrastructure behind Periodix: 0 LinkedIn accounts lost across 25,000 connected profiles in the last 24 months.
Each company lookup counts as one result. Researching and AI-scoring companies is 15x more cost-effective than with Clay, and about 40x more if you run Clay from n8n, since Clay's HTTP API is only available on its Growth plan.
Pricing starts at $10/month per connected LinkedIn profile with 1,000 results included, and every next 2,000 results for just $10, or $49/month unlimited. Periodix is rated 4.9/5 on G2.
Start here: https://actions.periodix.net/dashboard/register?utm_source=n8n&utm_medium=template&utm_campaign=company-research

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
