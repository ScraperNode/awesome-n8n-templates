# 📁 Classify event photos from attendees with Gemma AI, Google Drive & Sheets

> ⚡ **1,340 views** · 📁 [File Management](../)

> 💡 **Pro Tip** — Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### There's a clear need for an easier way to manage attendee photos from live events, as current processes for collecting, sharing, and categorizing them are inefficient.

n8n can indeed help to solve this challenge by providing the data input interface via its forms and orchestrate AI-powered classification of images using AI nodes. However, in some cases - say you run regular events or with high attendee counts - the volume of photos may result in unsustainably high inference fees (token usage based billing) which could make the project unviable.

To work around this, [Featherless.ai](https://featherless.ai/register?referrer=HJUUTA6M) is an AI/LLM inference service which is subscription-based and provides unlimited tokens instead. This means costs are essentially capped for AI usage offering greater control and confidence on AI project budgets.

**Check out the final result here:** [https://docs.google.com/spreadsheets/d/1TpXQyhUq6tB8MLJ3maeWwswjut9wERZ8pSk_3kKhc58/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1TpXQyhUq6tB8MLJ3maeWwswjut9wERZ8pSk_3kKhc58/edit?usp=sharing)

### How it works
* A form trigger is used share a form interface to guests to upload their photos from their device.
* The photos are in one branch, are optimised in size before sending to a vision-capable LLM to classify and categorise against a set list of tags. The model inference service is provided by Featherless and takes advantage of their unlimited token usage subscription plan.
* The photos in another branch are copied into Google Drive for later reference.
* Once both branches are complete, the classification results and Google Drive link are appended to a Google Sheets table allowing for quick sorting and filtering of all photos.

### How to use
* Use this workflow to gain an incredible productivity boost for social media work. When all photos are organised and filter-ready, editors spend a fraction of the time to get community posts ready and delivered.
* Sharing the completed Google sheet with attendees helps them to better share memories within their own social circles.

### Requirements
* [FeatherLess.ai]((https://featherless.ai/register?referrer=HJUUTA6M)) account for Open Source Multimodal LLMs and unlimited token usage.
* Google Drive for file storage
* Google Sheet for organising photos into categories

### Customising this workflow
* Feel free to refine the form with custom styles to match your branding.
* Swap out Google services with equivalents to match your own environment. eg. Sharepoint and Excel.

## 🔗 Nodes Used

Edit Image, Google Sheets, HTTP Request, Google Drive, n8n Form Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
