# 🎣 Score and enrich lookalike companies with PredictLeads, Google Sheets and Slack

> ⚡ **54 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Overview

Find companies similar to your best clients using PredictLeads, enrich each with news, hiring, and tech signals, then score them 0–100 for outreach priority.

This workflow reads your best client domains from Google Sheets, discovers lookalike companies via the PredictLeads Similar Companies API, enriches each with news events, job openings, and technology detections, then calculates a composite lead score from 0 to 100 based on multiple signals. Scored results are written to Google Sheets so your sales team can prioritize outreach.

## How it works

1. A manual trigger starts the workflow.
2. The workflow reads your best client domains from Google Sheets.
3. It loops through each client and fetches similar companies from PredictLeads.
4. It extracts lookalike company details such as domain, company name, industry, and similarity score.
5. It loops through each lookalike and enriches it with three PredictLeads signals:

   * News events for recent company activity
   * Job openings for hiring signals
   * Technology detections for tech stack insights
6. It calculates a composite score from 0 to 100 based on:

   * +30 points for recent news events in the last 30 days
   * +30 points for active hiring with 5 or more open roles
   * +20 points for using target technologies such as HubSpot, Salesforce, or Marketo
   * +10 points for a high similarity score above 0.7
   * +10 points for being located in a target region such as the US, UK, or Canada
7. It writes scored lookalikes to the **Scored Lookalikes** tab in Google Sheets.

## Setup

* Create a Google Sheet with two tabs:

  * `Sheet1` with a `domain` column for your best client domains, one per row
  * `Scored Lookalikes` with these columns:

    * `domain`
    * `company_name`
    * `source_domain`
    * `similarity_score`
    * `news_count`
    * `job_count`
    * `tech_names`
    * `tech_match`
    * `country`
    * `composite_score`
    * `scored_at`
* Connect your Google Sheets account using OAuth2.
* Add your PredictLeads API credentials using the `X-Api-Key` and `X-Api-Token` headers.

## Requirements

* Google Sheets OAuth2 credentials
* PredictLeads API account: `https://docs.predictleads.com`

## Notes

* Target technologies such as HubSpot, Salesforce, and Marketo, as well as target regions such as the US, UK, and Canada, can be adjusted in the scoring code node.
* The scoring weights are configurable, so you can change the point values to match your sales priorities.
* Start with 3 to 5 best client domains for optimal results.
* PredictLeads Similar Companies, News Events, Job Openings, and Technology Detections API docs: `https://docs.predictleads.com`

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
