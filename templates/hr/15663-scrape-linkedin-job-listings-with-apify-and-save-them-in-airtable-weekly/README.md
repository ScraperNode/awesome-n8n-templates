# 👥 Scrape LinkedIn job listings with Apify and save them in Airtable weekly

> ⚡ **83 views** · 👥 [HR & Recruitment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

**📺 Full walkthrough video: https://youtu.be/Gv31A4vHJcA**

## Who it's for

This workflow is for job seekers, recruiters, or HR teams who want to automatically monitor new job postings on LinkedIn based on specific search queries, without manually checking the platform every week.

## How it works

1. A **Schedule Trigger** fires the workflow every week at 10am.
2. The **Set Search Queries** node defines up to three job title keywords (e.g. "Assistant administratif", "Assistant ADV", "Administration des ventes").
3. An **HTTP POST request** submits these queries to an Apify actor (`vIGxjRrHqDTPuE6M4`), which scrapes matching LinkedIn job listings — filtered by location (France), company size (≤500 employees), and time range (last 7 days).
4. Each result returned by Apify (title, company, location, description, recruiter info, etc.) is saved as a **new record in Airtable**.

## How to set up

- [ ] Configure the Schedule Trigger with your desired run frequency
- [ ] Add your Apify API credentials to the HTTP Request node
- [ ] Verify the Apify actor ID matches your chosen LinkedIn scraper
- [ ] Update the search queries in the **Set Search Queries** node
- [ ] Connect your Airtable account and configure the target base and table

## Requirements

- Apify account with API token
- Airtable account with a configured base and table

## How to customize

- Add more query fields in the **Set Search Queries** node to broaden your job search coverage
- Adjust the Apify actor payload (location, company size, time range) to target different markets or job types
- Add a downstream step to send a Slack or email notification when new jobs are found

## 🔗 Nodes Used

Airtable, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
