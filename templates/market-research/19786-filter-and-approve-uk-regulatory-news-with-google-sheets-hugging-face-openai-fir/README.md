# 📊 Filter and approve UK regulatory news with Google Sheets, Hugging Face, OpenAI, Firecrawl and Jev

> ⚡ **21 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow pulls article links from Google Sheets and optional live RSS feeds, filters and deduplicates them using Hugging Face or OpenAI embeddings, then uses Firecrawl plus TypeSafe JEV scoring to approve the most relevant stories and write an “approved package” and an outcomes ledger back to Google Sheets.

## How it works
1. Runs manually (or via the included webhook) and loads configuration such as Google Sheets tabs, rule thresholds, and the chosen embedding provider.
2. Optionally clears the “Approved Package” and “Articles” ledger tabs in Google Sheets for a clean run.
3. Reads source articles from Google Sheets and, if enabled, also pulls the latest items from the FCA RSS feed and maps them into the same article format.
4. Removes articles whose URLs already exist in the Google Sheets “Articles” ledger, then records the remaining URLs as pending in the ledger.
5. Scores each article with deterministic keyword and source weighting rules, drops low-scoring noise, and batches the survivors for embedding.
6. Generates embeddings with Hugging Face Inference API or OpenAI Embeddings, clusters near-duplicate stories by cosine similarity, and selects one primary article per cluster.
7. For non-hard-win primary stories, scrapes the full article via Firecrawl and sends the content to TypeSafe JEV to produce structured relevance and classification scores.
8. Computes a weighted relevance score, writes approved story packages to the “Approved Package” Google Sheets tab, and updates the “Articles” ledger with final statuses and reasons.

## Setup
1. Connect Google Sheets OAuth credentials and update the spreadsheet ID and tab names in the workflow context to match your sheet.
2. Add credentials for your embedding provider (Hugging Face API token or OpenAI API key) and choose the provider and model in the workflow context.
3. Add a Firecrawl bearer token credential so the workflow can scrape full article bodies for scoring.
4. Add a TypeSafe (JEV) bearer token credential for the structured relevance scoring API.
5. Ensure your Google Sheet has the expected tabs/columns for source input, the seen-URL ledger, and the approved output, and adjust thresholds/keyword weights to your niche.

## 🔗 Nodes Used

Google Sheets, HTTP Request, RSS Read, Webhook, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
