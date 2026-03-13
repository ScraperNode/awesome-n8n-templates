# 🎣 AI-powered lead generation system with email personalization and LinkedIn

> ⚡ **8,867 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# 🔧 AI-Powered B2B Prospecting Automation

This automation is a complete end-to-end system designed to find, qualify, and contact B2B leads — fully automated and powered by AI.

## 1. Lead Discovery & Scoring

- Searches for target companies on LinkedIn via [Ghost Genius API](https://ghostgenius.fr), using filters like location, and company size.
- Enriches each company with details like website, description, and follower count.
- Uses OpenAI to **score** each company (0 to 10) based on fit with your product.
- Filters out irrelevant companies and stores only qualified ones (score ≥ 7) into a Google Sheet CRM.

## 2. Decision-Maker Enrichment & Outreach

- Finds key decision-makers at each qualified company via LinkedIn Sales Navigator.
- Retrieves their job titles, descriptions, and LinkedIn summaries.
- Generates a **fully personalized 3-email cold outreach sequence** using OpenAI.
- Retrieves verified email addresses using a waterfall enrichment system.
- Stores all contact data and email content in your CRM and updates lead status.

## Key Features

- **Fully automated**: runs daily with no manual input required.
- **Smart targeting**: all filters and parameters managed in Google Sheets.
- **AI-enhanced**: leverages OpenAI for scoring, personalization, and copywriting.
- **Compliant & safe**: uses Ghost Genius API (cookieless scraping).

---

Ideal for B2B startups, agencies, or growth teams looking to scale outbound without manual effort.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Stop and Error, Schedule Trigger, Filter, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
