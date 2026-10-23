# 🎣 Enrich LinkedIn profiles in Google Sheets with Apify

> ⚡ **1,516 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow reads LinkedIn profile URLs from Google Sheets, calls the Apify LinkedIn scraper to fetch profile details, and writes enriched fields (name, headline, job title, company, location, skills, positions, education, certifications, and follower data) back to the same rows.

## How it works
1. Runs when you manually execute the workflow.
2. Loads configuration values such as the LinkedIn URL column name, **[apify](https://www.apify.com?fpr=udemy)** actor ID, contact-finding toggle, and batch size.
3. Reads rows from the selected Google Sheets tab to get the LinkedIn profile URLs to enrich.
4. Processes the sheet rows in batches to control throughput and respect Apify rate limits.
5. For each row, sends the LinkedIn URL to **[apify](https://www.apify.com?fpr=udemy)** and retrieves the scraped LinkedIn profile data.
6. Updates the matching Google Sheets row (by row_number) with the returned profile fields, including skills, positions, education, and other metadata.

## Setup
1. Add a Google Sheets OAuth2 credential and select the target spreadsheet and sheet tab in the read and update steps.
2. Add an **[apify](https://www.apify.com?fpr=udemy)** API token as HTTP Header Auth (Authorization: Bearer YOUR_APIFY_TOKEN) for the Apify request.
3. Ensure your Google Sheet includes a column containing LinkedIn profile URLs (default name: "LinkedIn URL") and a row_number column used to match updates.
4. In the configuration step, set the correct LinkedIn URL column name, Apify actor ID, and batch size (and enable find_contacts only if your Apify actor/setup supports it).

## Additional info
# Enrich LinkedIn profiles in Google Sheets

# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Course-Enrich-LinkedIn-profiles-in-Google-Sheets-39b3d6550fd98193aa8dc58f2a1e42a6)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
