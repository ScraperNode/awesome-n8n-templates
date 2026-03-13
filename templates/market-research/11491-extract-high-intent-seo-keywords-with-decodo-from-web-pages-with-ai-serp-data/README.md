# 📊 Extract high-intent SEO keywords with Decodo from web pages with AI + SERP data

> ⚡ **93 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## What this workflow does

This template extracts high-intent SEO keywords from any web page and turns them into a ranked keyword list you can use for content planning, landing pages, and SEO strategy.

It runs in 3 phases:

***1. Scrape the target URL*** with Decodo [Decodo – Web Scraper for n8n](https://visit.decodo.com/raqXGD)

***2. Use AI to extract seed keywords*** and understand the page topic

***3. Enrich each seed keyword with real Google SERP data via SerpApi*** (related searches + questions + competitors), then apply a JavaScript scoring system to rank the best opportunities

The final output is saved to Google Sheets as a clean table of ranked keywords.

![image.png](fileId:3825)

## Who this workflow is for

SEO consultants and agencies

SaaS marketers and growth teams

Founders validating positioning and messaging

Content teams looking for “what people actually search for”

This workflow is especially useful when you want keywords with commercial / solution intent, not generic single-word terms.

## Workflow overview

**Phase 1  — Scrape & clean page content**

Reads the URL from Google Sheets

Scrapes the page via Decodo

Cleans HTML into plain text (token-friendly)

**Phase 2 — AI keyword extraction**

AI returns a structured JSON with:

brand / topic

5–10 mid-tail seed keywords

intent + audience hints

**Phase 3 — SERP enrichment + scoring**

Uses SerpApi to fetch:

- related searches
- People Also Ask questions
- competitor domains
- Scores and ranks keywords based on:
-- source type (related searches / PAA / organic)
-- frequency across seeds
-- modifiers (pricing, best, free, docs, etc.)
-- mid-tail length preference

## Setup (step by step)
**1) Google Sheets (input)**

Create a sheet with:

Column name: urls

One URL per row

![image.png](fileId:3826)

**2) Google Sheets (output)**

Create an output sheet with columns like:

- keyword
- score
- intent_hint

source_type

Tip: Clear the output sheet before each run if you want a clean export.

**3) Decodo**

Add your Decodo credentials

The URL is taken automatically from Google Sheets
[Decodo – Web Scraper for n8n](https://visit.decodo.com/raqXGD)

**4) SerpApi**

Add your SerpApi key in the SerpApi node

**5) AI Model**

Connect your preferred AI model (Gemini / OpenAI)

The prompt is optimized to output valid JSON only

**Self-hosted disclaimer**

This is a community template. You must configure your own credentials (Google Sheets, Decodo, SerpApi, AI).
Results depend on page accessibility and page content quality.

## 🔗 Nodes Used

Google Sheets, Gmail, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
