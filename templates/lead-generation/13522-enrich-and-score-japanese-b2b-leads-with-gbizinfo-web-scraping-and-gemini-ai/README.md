# 🎣 Enrich and score Japanese B2B leads with gBizINFO, web scraping, and Gemini AI

> ⚡ **8 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# Enrich and score Japanese company leads with government APIs, web scraping, and Gemini AI

## What this workflow does

This workflow automates B2B lead research for Japanese companies. Submit a company name through a web form, and the workflow queries two free Japanese government APIs for corporate registry and business data, checks Google Maps for reputation, scrapes the company website for contact details and tech stack, and uses Gemini AI to score the lead and write a personalized outreach message in Japanese. Results are saved to Google Sheets, and high-scoring leads trigger a Slack alert.

## How it works

1. **Lead input form** — A sales rep submits a company name along with industry, prefecture, priority, and notes
2. **National Tax Agency API** — Retrieves the official corporate number, registered name, address, and entity type using the free 法人番号 API
3. **gBizINFO API** — Enriches the lead with employee count, capital, establishment date, representative, subsidies, certifications, patents, and business summary using the free Ministry of Economy API
4. **Google Maps Places API** — Fetches the company's star rating, review count, and business status for reputation assessment
5. **Website scraping** — Fetches the company homepage and extracts email addresses, Japanese phone numbers, tech stack (11 technologies including AWS, AI/ML, and DX), hiring signals, and social media links
6. **AI lead scoring** — Gemini AI analyzes all collected data and produces a score from 0 to 100, three actionable insights, a personalized outreach message in Japanese, and a recommended next action
7. **Google Sheets** — Saves 30+ data fields per lead for pipeline tracking and reporting
8. **Slack alert** — Leads scoring 75 or higher trigger an instant notification with the full intelligence report

## Tools used

| Tool | Purpose |
|------|---------|
| Form trigger | Lead submission interface |
| HTTP Request (National Tax Agency) | Corporate registry lookup (free) |
| HTTP Request (gBizINFO) | Government business data enrichment (free) |
| HTTP Request (Google Maps) | Reputation and review data |
| HTTP Request (website) | Homepage scraping for contact and tech intel |
| Code nodes (×4) | Data parsing, merging, extraction, and output formatting |
| Google Gemini AI | Lead scoring and outreach message generation |
| Google Sheets | Lead database and pipeline tracking |
| Slack | Hot lead alerts |

## Key features

- **Two free government data sources** that Clay, Apollo, and ZoomInfo cannot access
- **Website intelligence** with email, phone, tech stack, hiring signal, and social media extraction
- **120-point trust score** weighted across corporate registration, subsidies, certifications, reputation, and web presence
- **Company size classification** using Japanese SME standards (大企業, 中堅企業, 中小企業, 小規模企業)
- **AI analysis in Japanese** with personalized outreach messages referencing specific company details
- **30+ structured data fields** saved per lead for complete pipeline visibility

## Setup

1. Get a free **Application ID** from the National Tax Agency (法人番号 API)
2. Get a free **API token** from gBizINFO (Ministry of Economy)
3. Add a **Google Maps API** key with Places API enabled
4. Connect **Google Sheets** via OAuth2 and create a lead tracking spreadsheet
5. Connect your **Slack** workspace and select the notification channel
6. Set your **Google Gemini API** key
7. Activate the workflow and share the form URL with your sales team

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Filter, Basic LLM Chain, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
