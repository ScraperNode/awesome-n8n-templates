# 📊 Extract website intelligence & classify ecommerce URLs with Gemini & Firecrawl to Google Sheets

> ⚡ **51 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## Description

This n8n template automates website analysis and ecommerce URL classification using AI. It scrapes a website, extracts business intelligence, maps all internal pages, and categorises them into products, categories, or non-commerce pages. All outputs are saved in Google Sheets for easy access.

---

## Use cases

- Lead enrichment for sales and marketing teams  
- Ecommerce product & category discovery  
- Competitor website analysis  
- Website audits and content mapping  
- Market and industry research  

---

## How it works

1. A user submits a website URL via an n8n form.
2. The homepage is scraped and cleaned.
3. AI extracts company insights (value proposition, industry, audience, B2B/B2C).
4. Firecrawl maps all internal URLs.
5. URLs are enriched with metadata.
6. AI classifies each URL as product, category, or other.
7. Results are written into structured Google Sheets tabs.

---

## How to use

1. Import the workflow into n8n.
2. Connect Google Sheets, Firecrawl, and AI credentials.
3. Update the Google Sheets document links.
4. Open the form URL and submit a website.
5. Let the workflow run and review the results in Sheets.

---

## Requirements

- n8n (self-hosted or cloud)
- Firecrawl API key
- Google Gemini or compatible LLM credentials
- Google Sheets account

---

## Customising this workflow

- Change AI prompts to match your niche (SaaS, ecommerce, services).
- Add filters to exclude unwanted URLs (blogs, legal pages, etc.).
- Extend Sheets with scoring, tagging, or lead qualification logic.
- Replace the LLM with another supported model if needed.

---

## What this template demonstrates

- End-to-end website intelligence extraction
- Safe, rule-based AI classification (no hallucinations)
- Scalable URL processing with batching
- Clean data pipelines into Google Sheets
- Practical AI usage for real business workflows

This template is designed to work out-of-the-box for website intelligence, ecommerce mapping, and lead research.

Feel free to reach out for custom implementation or enhancements:

📧 **Email:** @dinakars2003@gmail.com

## 🔗 Nodes Used

Google Sheets, HTTP Request, HTML Extract, n8n Form Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
