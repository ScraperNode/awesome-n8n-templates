# 🎣 Generate and enrich local business leads with Decodo, OpenAI and Gmail

> ⚡ **113 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow finds local business leads on Google Maps, enriches them with website and AI analysis, and sends personalized cold emails to qualified prospects automatically.

## How it works
1. The workflow starts on a schedule and loads the search, scoring, and sender settings from one configuration node.
2. Decodo scrapes Google Maps search results for businesses that match your niche and city.
3. The workflow extracts lead details such as business name, address, phone number, website, and rating, then stores each lead in Google Sheets.
4. Each discovered lead is checked for a website. If no website is available, the lead is marked and skipped from enrichment.
5. For leads with a website, Decodo scrapes the site and OpenAI scores the business, summarizes it, and suggests enrichment fields such as business type, pain points, and contact email.
6. The workflow updates the lead in Google Sheets with the enrichment data.
7. Enriched leads are filtered by score threshold, website presence, email availability, and contact status.
8. For each qualified lead, the workflow scrapes more website content and uses OpenAI to write a personalized outreach email.
9. Gmail sends the email, and the lead is marked as contacted in Google Sheets.

## Setup
1. Add credentials for Decodo, OpenAI, Google Sheets, and Gmail. 
2. Replace the placeholder Google Sheet ID in the configuration node.
3. Create a Leads sheet with all required columns used in the workflow. 
4. Update the niche, city, geo, max leads, score threshold, and sender fields. 
5. This template uses the Decodo community node, so it is intended for self-hosted n8n only. Replace the placeholder image above with a real workflow screenshot before submission.

## Additional info
Published by Fahmi Fahreza, Indonesia’s first official n8n Brand Ambassador and founder of WithMi Automation, built from real client implementations, not tutorials.
→ Let us build it for you: withmiautomation.com
→ Learn to build it yourself: academy.withmiautomation.com
→ Bring Fahmi to your team (training, workshop, talkshow): fahmiiireza.com

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
