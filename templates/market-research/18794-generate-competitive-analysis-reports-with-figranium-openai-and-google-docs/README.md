# 📊 Generate competitive analysis reports with Figranium, OpenAI and Google Docs

> ⚡ **8 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow collects structured website research for your company and a competitor using Figranium, compares both with an OpenAI chat model, and saves a detailed competitive intelligence report as a Google Doc.

## How it works
1. Triggers when a user submits the n8n form with your website URL and a competitor website URL.
2. Runs two Figranium website research tasks in parallel to extract structured data such as positioning, features, pricing, integrations, and sources for each site.
3. Normalizes each research result into individual structured records and merges your-company data with competitor data.
4. Sends the combined structured research to an OpenAI chat model to generate an evidence-driven competitive analysis report in Markdown.
5. Creates a new Google Doc and inserts the generated report content into the document.

## Setup
1. Set up Figranium (including the Competitive Research task/preset) and add a Figranium API credential in n8n.
2. Add an OpenAI API credential and select the chat model to use for the analysis.
3. Add a Google Docs OAuth2 credential and choose the target Google Drive folder (or keep the default) for the generated report.
4. Publish the n8n form and share the form URL so users can submit the two website inputs.

## Requirements
- A running Figranium instance
- The free Figranium Competitor Analysis preset
- A Figranium API key
- A Google account with access to Google Docs
- An OpenAI API key
- An n8n instance with the verified Figranium node installed

## Additional info
Figranium is free and open-source and runs on your own infrastructure. This workflow does not require a paid scraping API or per-result credits. Duplicate detection is based on business name, and existing leads in the selected Google Sheet are skipped.

## 🔗 Nodes Used

Google Docs, Basic LLM Chain, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
