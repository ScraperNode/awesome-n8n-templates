# 🎣 Google Maps lead scraper & enrichment with AI-powered personalized outreach

> ⚡ **3,521 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## ⚡ Quick Setup

- Import this workflow into your n8n instance.
- Add your Apify, Google Sheets, and Firecrawl credentials.
- Activate the workflow to start your automated lead enrichment system.
- Copy the webhook URL from the MCP trigger node.
- Connect AI agents using the MCP URL.

## 🔧 How it Works

This solution combines two powerful workflows to deliver fully enriched, AI-ready business leads from Google Maps:

- Apify Google Maps Scraper Node: Collects business data and, if enabled, enriches each lead with contact details and social profiles.
- Leads Missing Enrichment: Any leads without contact or social info are automatically saved to a Google Sheet.
- Firecrawl & Code Node Workflow: A second workflow monitors the Google Sheet, crawls each business’s website using Firecrawl, and extracts additional social media profiles or contact info using a Code node.
- Personalization Logic: AI-powered nodes generate tailored outreach content for each enriched lead.
- Native Integration: The entire process is exposed as an MCP-compatible interface, returning enriched and personalized lead data directly to the AI agent.

## 📋 Available Operations
- Business Search: Find businesses on Google Maps by location, category, or keyword.
- Lead Enrichment: Automatically append contact details, social profiles, and other business info using Apify and Firecrawl.
- Personalized Outreach Generation: Create custom messages or emails for each lead.
- Batch Processing: Handle multiple leads in a single request.
- Status & Error Reporting: Get real-time feedback on processing, enrichment, and crawling.

## 🤖 AI Integration

- Parameter Handling: AI agents automatically provide values for:
- Search queries (location, keywords, categories)
- Enrichment options (contact, social, etc.)
- Personalization variables (name, business type, etc.)
- Response Format: Returns fully enriched lead data and personalized outreach content in a structured format.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Sheets Trigger, Filter, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
