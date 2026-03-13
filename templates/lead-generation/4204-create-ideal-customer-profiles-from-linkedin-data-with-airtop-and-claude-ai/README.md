# 🎣 Create ideal customer profiles from LinkedIn data with Airtop and Claude AI

> ⚡ **986 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Define Your ICP from Customer LinkedIn Profiles
## Use Case
This automation helps marketing and sales teams define their Ideal Customer Profile (ICP) using real LinkedIn profiles of current high-fit customers. By enriching and analyzing profile data, it generates a clear ICP definition and scoring methodology for future targeting.

## What This Automation Does
This automation analyzes LinkedIn profiles of your existing customers and produces:
- A structured ICP definition
- A scoring model to evaluate future prospects
- A Google Boolean search string to find similar prospects

Input:
- LinkedIn profile URLs of existing high-fit customers (e.g., `https://www.linkedin.com/in/amirashkenazi/`)

Output:
- A Google Doc containing the ICP analysis and scoring methodology

## How It Works
1. **Trigger**: Waits for a chat message containing one or more LinkedIn profile URLs.
2. **AI Agent**: Parses and processes the URLs.
3. **Airtop Data Enrichment**: Uses Airtop to extract structured information from each LinkedIn profile (e.g., job title, company, experience, skills).
4. **Memory**: Maintains state between inputs for consistent analysis.
5. **LLM Analysis**: Uses Claude 3.7 Sonnet to synthesize enriched data into a meaningful ICP.
6. **Google Docs**: Automatically creates a new doc with a timestamped title and appends the ICP definition.

## Setup Requirements
1. [Airtop Profile](https://portal.airtop.ai/browser-profiles) connected to LinkedIn, Insert the profile name in the Airtop Tool
2. Airtop API credentials. [Get it free here](https://www.airtop.ai/)
3. If you choose to activate saving the profiles in Google Docs you will need OAuth2 credentials (or just copy the ICP definition from the chat)

## Next Steps
- **Use the ICP for Scoring**: Feed new LinkedIn profiles through the same Airtop enrichment and use the scoring function to evaluate fit.
- **Automate Target Discovery**: Plug the Boolean search output into LinkedIn, Google, or People Data Labs for ICP-matching lead generation.
- **Refine Continuously**: Repeat the workflow as your customer base grows or segments evolve.

Read more about how to [Define ICP from Customer Examples](https://www.airtop.ai/automations/define-icp-from-customer-examples-n8n)

## 🔗 Nodes Used

Google Docs, AI Agent, Anthropic Chat Model, Simple Memory, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
