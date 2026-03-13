# 🔬 Enrich property inventory survey with image recognition and AI agent

> ⚡ **5,705 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

This n8n workflow assists property managers and surveyors by reducing the time and effort it takes to complete property inventory surveys.

In such surveys, articles and goods within a property may need to be captured and reported as a matter of record. This can take a sizable amount of time if the property or number of items is big enough.

Our solution is to delegate this task to a capable AI Agent who can identify and fill out the details of each item automatically.

## How it works

* An AirTable Base is used to capture just the image of an item within the property
* Our workflow monitoring this AirTable Base sends the photo to an AI image recognition model to describe the item for purpose of identification.
* Our AI agent uses this description and the help of Google's reverse image search in an attempt to find an online product page for the item.
* If found, the product page is scraped for the item's specifications which are then used to fill out the rest of the details of the item in our Airtable.

## Requirements

* Airtable for capturing photos and product information
* OpenAI account to for image recognition service and AI for agent
* SerpAPI account for google reverse image search.
* Firecrawl.dev account for webspacing.

## Customising this workflow

Try building an internal inventory database to query and integrate into the workflow. This could save on costs by avoiding fetching new each time for common items.

## 🔗 Nodes Used

Airtable, HTTP Request, Execute Workflow Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
