# 🎣 Find unhappy competitor customers and enrich leads with Apify

> ⚡ **9 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This scheduled workflow uses Apify to scrape recent low-rated reviews for selected competitor domains, then enriches reviewer names by running a second Apify actor to find verified email contacts and outputs a cleaned list of potential leads.

## How it works
1. Runs on a weekly schedule.
2. Sends a request to Apify to start an actor run that collects the most recent reviews for a configured list of competitor company URLs.
3. Polls the Apify run status every 15 seconds until it succeeds or the maximum number of polls is reached.
4. When the run succeeds, fetches the scraped review dataset from Apify.
5. Filters for unhappy reviewers (rating 2 or below) with a first and last name, maps country codes to country names, and builds an input payload for contact discovery.
6. Runs a second Apify actor to find verified email contacts for each person and downloads the resulting dataset.
7. Filters out incomplete records and outputs structured contact and company fields (name, verified email, LinkedIn URL, location, and organization details).

## Setup
1. Create an Apify account and add your Apify API token to the workflow’s HTTP authentication (and replace any hard-coded token query parameters with your own).
2. In the configuration step, update the competitor domains in `companyUrls` and set `maxReviewsPerCompany` to control how many reviews to pull per company.
3. Verify the Apify actor endpoints used for review scraping and contact discovery are accessible in your Apify account and adjust the actor IDs/URLs if needed.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
