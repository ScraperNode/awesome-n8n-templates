# 🎣 Qualify Product Hunt leads with Google Gemini, Apify, and Google Sheets

> ⚡ **6 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Youtube Video: https://youtu.be/h47YeiivZvs?si=V-S1X-ME5V24Tuch

This workflow runs daily to pull the latest Product Hunt posts, qualifies them with Google Gemini, scrapes ICP-matching product websites with Apify to find emails, then writes the lead data to Google Sheets and creates contacts in GoHighLevel.

## How it works
1. Runs every day on a schedule trigger.
2. Queries the Product Hunt GraphQL API for the latest posts and iterates through each result.
3. Resolves each product’s website redirect target, extracts a clean domain, and filters out blocked domains like app stores, social networks, and link aggregators.
4. Sends the product name, tagline, and description to a Google Gemini–powered agent to score ICP fit and keeps only matches.
5. Uses Apify to crawl each matched website and extract email addresses from the site content.
6. Groups scraped results by domain, keeps only products with at least one email, and appends or updates a matching row in Google Sheets.
7. Creates a GoHighLevel contact using the first email and stores any additional emails in a custom field.

## Setup
1. Add Product Hunt OAuth2 credentials and ensure the GraphQL query in the Product Hunt request returns the fields used (name, tagline, description, website, topics, makers).
2. Add Google Gemini (Google PaLM) credentials for the AI qualification step.
3. Add an Apify API token and set the actor ID and crawl settings to match your email-scraping needs.
4. Connect Google Sheets with a service account, set the target spreadsheet and sheet, and ensure the sheet has columns for product_name, tagline, description, makers, url, original_ph_url, and emails.
5. Add GoHighLevel OAuth2 credentials and update the contact field mappings, including the custom field ID used to store additional emails.

## 🔗 Nodes Used

Google Sheets, HTTP Request, HighLevel, Schedule Trigger, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
