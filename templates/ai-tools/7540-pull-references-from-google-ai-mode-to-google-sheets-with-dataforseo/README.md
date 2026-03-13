# 🎯 Pull references from Google AI mode to Google Sheets with DataForSEO

> ⚡ **590 views** · 🎯 [AI Summarization & Classification](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

![Pull references from Google AI Mode with DataForSEO.png](fileId:2133)

## Who’s it for

SEO analysts and marketers who want to capture and analyze source references from Google’s AI Mode answers, track competitor mentions or measure brand visibility in generative search features.

## What it does

This workflow automates the process of gathering source references from Google’s AI Mode results. Using the DataForSEO SERP API, it extracts the source title, URL, and domain, and records that data in Google Sheets. You can use this template to monitor how often your site appears in AI-generated answers or what competitor domains get mentioned for your target keywords.

## How it works

Triggers on your chosen schedule (default: every 7 days).
Calls the DataForSEO SERP API for your keyword.
Extracts and cleans Google AI Mode results.
Stores the data in a Google Sheet.

## Requirements

* n8n instance 
* DataForSEO account
* A Google Sheet that contains the Source, Domain, URL, Title, and Text columns (as in the example: [https://docs.google.com/spreadsheets/d/1XCjkjyVxrtpTUQenHeR3B07xfEZ489mhuVidjhGOO7I/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1XCjkjyVxrtpTUQenHeR3B07xfEZ489mhuVidjhGOO7I/edit?usp=sharing)).

## Customization

You can change the schedule or swap the Google Sheet for BI dashboards or reporting tools.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
