# 🎣 Enrich B2B leads for Attio CRM with Apollo, LinkedIn, news and GPT-4o

> ⚡ **87 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

# **B2B Lead Enrichment | Attio CRM**

This n8n template automates B2B lead research and enrichment for Attio CRM. It combines data from Apollo.io, LinkedIn scraping, and news sources with AI-powered analysis to generate actionable sales intelligence - turning hours of manual BDR research into minutes.

## Who is this for?

- Sales teams using Attio CRM who want to reduce time spent on lead research
- BDRs/SDRs who need rich prospect context before outreach
- Revenue operations teams looking to automate CRM enrichment at scale

## What problem does this workflow solve?

Before reaching out to a prospect, sales reps typically spend 15-30 minutes researching company background, recent news, leadership team, and LinkedIn activity. This workflow automates that entire research process, freeing BDRs to focus on relationship building instead of data gathering.

## How it works

1. Trigger: Manually execute (adapt to webhook or form trigger for automation)
2. Apollo Enrichment: Fetches comprehensive company data by domain
3. Parallel Processing: Three branches run simultaneously:
    - News articles → Tavily extraction → AI summary
    - LinkedIn company page → Scrape Creators → AI summary
    - Leadership search (with web search) → Apollo person lookup → LinkedIn profiles → AI summary
4. Validation: An LLM Critic agent verifies all claims using web search
5. Final Output: Lead Enrichment Agent generates a structured dossier
6. CRM Sync: Updates Attio company and people records

## Good to Know

Estimated API Costs (per enrichment):
   - Apollo.io: Varies by plan (credits-based)
   - Scrape Creators: ~$0.01-0.05 per profile
   - Tavily: ~$0.01 per extraction
   - OpenAI GPT-4o: ~$0.10-0.30 depending on content length

Rate Limits: Leadership profiles are processed sequentially to respect API limits. For bulk enrichment, consider adding delays between executions.

## Requirements

- Apollo.io account with API access
- Scrape Creators API key (for LinkedIn scraping)
- Tavily API key (for article extraction)
- OpenAI API key (GPT-4o model access)
- Attio CRM account with API access

## Setup

1. Import the workflow into n8n
2. Configure credentials for each service:
  	- Apollo API (HTTP Header Auth with x-api-key)
  	- Scrape Creators API
  	- Tavily API
  	- OpenAI API
  	- Attio API
3. Add these custom fields to your Attio Companies object:
  	- positioning (text)
  	- conversation_points (text)
  	- leadership_conversations (text)
     - enrichment_status (select with "complete" option)
4. Test with a single domain before running at scale

## Customizing this workflow

   - Trigger: Replace manual trigger with a webhook (real-time enrichment on new leads) or schedule node (batch processing)
   - AI Prompts: Adjust the system prompts in AI agents to match your industry or ideal customer profile
   - Output Fields: Modify the final Code node to map to your specific Attio field structure
   - News Timeframe: Change the 6-month lookback in Apollo:LatestNews to your preferred range
   - Leadership Depth: Adjust the number of leadership profiles to enrich based on your needs

Made by [www.fenrirlabs.nl](www.fenrirlabs.nl)

## 🔗 Nodes Used

HTTP Request, AI Agent, OpenAI Chat Model, Structured Output Parser, Think Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
