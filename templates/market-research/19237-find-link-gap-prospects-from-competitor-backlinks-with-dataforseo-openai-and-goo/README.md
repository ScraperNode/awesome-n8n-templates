# 📊 Find link gap prospects from competitor backlinks with DataForSEO, OpenAI, and Google Sheets

> ⚡ **35 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow collects your domain, competitor domains, and a Google Sheets tracker, then uses DataForSEO to find domains linking to all competitors but not you, estimates their traffic, and uses OpenAI to generate a pitch page and outreach angle before appending the results to Google Sheets.

## How it works
1. Receives a form submission with your domain, competitor domains, ranking thresholds, and the Google Sheets tracker URL.
2. Calls DataForSEO Backlinks Domain Intersection to find referring domains that link to every competitor while excluding domains that already link to you.
3. Calls DataForSEO Labs Relevant Pages to pull your top existing pages (by estimated organic traffic) to constrain what can be pitched.
4. Merges both results and, if no prospects remain after filtering, returns a “no new prospects” message in the browser.
5. Calls DataForSEO Labs Bulk Traffic Estimation for the shortlisted prospect domains, then calculates a score using domain rank, estimated visits, and spam score.
6. Sends the top prospects and your best pages to OpenAI to select a valid pitch page and write a one-sentence outreach angle per domain.
7. Appends one row per prospect into the `prospects` tab in Google Sheets and shows an HTML summary of the shortlist back in the form completion page.

## Setup
1. Create a DataForSEO Basic Auth credential in n8n (username is your account email and password is your API password).
2. Add an OpenAI credential and ensure the OpenAI model in the workflow is available to your account.
3. Connect Google Sheets credentials and prepare a spreadsheet with a `prospects` tab and the required header columns expected by the append step.
4. Open the form trigger URL, submit your domain, 2–3 competitor domains, and the destination Google Sheets URL, and adjust the minimum domain rank and prospect limit as needed.

## Requirements
- A DataForSEO account with the Backlinks and Labs APIs. One run costs about five cents: $0.024 for the domain intersection, $0.012 for the bulk traffic estimate and $0.013 for your own top pages, plus one model call.

## Additional info
Two things worth knowing, both measured against the live API and both handled here. The intersection is an AND that narrows fast - semrush.com plus ahrefs.com shared 13,612 referring domains, adding moz.com cut it to 9,773 - so two or three competitors works and five usually returns nothing. And the unsorted head of that list is junk: the top row was an alternate-tag farm with 409,843 backlinks from 2 referring domains, which is why the request sorts by domain rank and filters on spam score, and why the scoring step weighs rank against real estimated traffic. Platforms that link to everybody, google.com included, are dropped outright.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Basic LLM Chain, OpenAI Chat Model, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
