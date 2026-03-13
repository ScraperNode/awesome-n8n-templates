# 🎣 LinkedIn email finder with AI domain detection using Google Sheets & Hunter.io

> ⚡ **188 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who’s it for
This template is designed for recruiters, lead-generation teams, agency owners, and sales professionals who collect LinkedIn profile data and need to automate the process of finding verified company domains and email addresses. It is ideal for teams looking to eliminate manual research and streamline prospect enrichment.

## What it does / How it works
This workflow reads contact records from a Google Sheet, including name, position, and description.  
An AI agent analyzes each profile to determine the company domain. If the domain is already identifiable from the description, it is used directly.  
If no domain is found, the workflow generates an intelligent search term and performs a Google Custom Search to extract the most accurate domain from real web results using another AI agent.  
Once the domain is confirmed, the workflow queries Hunter.io to find the best-matching email address for the contact.  
Finally, the enriched data—email and company domain—is appended back into the Google Sheet, updating each row automatically.

## Requirements
- Google Sheets OAuth2 credentials  
- Google Gemini (PaLM) API credentials  
- Hunter.io API key  
- Google Custom Search API key and CSE ID  
- A Google Sheet with columns for name, position, description, and domain  

## How to set up
1. Connect your Google Sheets, Gemini, Hunter.io, and Google Search credentials.  
2. Replace the Google Sheet ID and sheet name with your own.  
3. Add your API keys to the designated nodes.  
4. Ensure column names match your sheet structure.  
5. Execute the workflow to begin enrichment.

## How to customize the workflow
- Modify AI prompts for better domain inference  
- Add additional enrichment steps (social profiles, industry tags)  
- Add fallback email providers (Snov, Apollo, etc.)  
- Change update logic to support multiple sheets or batch processing

## 🔗 Nodes Used

Google Sheets, HTTP Request, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
