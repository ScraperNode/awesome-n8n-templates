# 🎣 Enrich GDPR research contacts in Airtable with Tavily, OpenAI, and Dropcontact

> ⚡ **0 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs twice daily to read pending research prompts from Airtable, uses Tavily search plus OpenAI to extract relevant people, enriches them with Dropcontact, and upserts the resulting contacts back into Airtable while updating each request’s status.

## How it works
1. Runs on a schedule at 09:00 and 14:00.
2. Searches Airtable for “Research Requests” records where the Status is set to Pending.
3. For each pending prompt, queries the Tavily Search API and filters results to only keep high-confidence matches.
4. If no usable search results are found, updates the Airtable request status to Failed - Low Confidence.
5. If usable results are found, sends the Tavily output to OpenAI (GPT model) to extract a structured JSON list of contacts with names, organizations, roles, and interests.
6. Submits the extracted names and organizations to Dropcontact for enrichment, waits for the asynchronous callback, then fetches the enriched results.
7. Upserts each enriched contact into an Airtable “Contact List” table and updates the original Airtable request record to Completed.

## Setup
1. Create an Airtable personal access token credential and update the base ID and table IDs for both the Research Requests and Contact List tables.
2. Add an OpenAI API credential and confirm the selected model (for example, gpt-5-mini) is available to your account.
3. Set the Tavily API key as an environment variable named TAVILY_API_KEY.
4. Add a Dropcontact API credential and ensure Dropcontact can reach your n8n instance’s public resume URL used for the wait/callback step.
5. Ensure your Airtable schema includes a Status field (Pending, Completed, and Failed - Low Confidence) and a Prompt field used to identify and update requests.

## Requirements
- Any Database, Tavily API key, OpenAI API key, Dropcontact API key.

## Additional info
Airtable can be swapped out for Excel or any other database, This was built so non-technical staff could easily 'send requests' and get enriched contacts back in their database.

## 🔗 Nodes Used

Airtable, HTTP Request, Dropcontact, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
