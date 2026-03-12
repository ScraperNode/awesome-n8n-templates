# 📊 Automate SEO research & content gap analysis with GPT-4o, SerpAPI, and Gmail

> ⚡ **221 views** · 📊 [Market Research & Insights](../)

## Description

📘 Description
This workflow automates keyword-level SEO research and content opportunity discovery using live Google SERP data and AI-driven analysis. It takes a single keyword request, pulls real-time search results for the India market, converts raw SERP data into a structured SEO dataset, analyzes search intent and competition, identifies content gaps and high-impact opportunities, and delivers client-ready insights via email while logging results for tracking and audits.

Instead of manual keyword research, competitive scanning, and reporting, the system derives actionable SEO strategy directly from live search behavior. Outputs are structured for UI consumption, professional email delivery, and historical storage in Google Sheets. Any workflow failure triggers an automated Slack alert with diagnostic details.

This workflow replaces manual SEO research, gap analysis, reporting, and documentation with a repeatable, automated SEO intelligence pipeline.

## ⚙️ What This Workflow Does (Step-by-Step)

🟢 Receive SEO Keyword Analysis Request via Webhook
 Accepts a POST request containing the target keyword for SEO analysis.

🧹 Extract Keyword from Request Payload
 Cleans and isolates the keyword field for SERP processing.

🌐 Run Google SERP Search for Keyword (India)
 Executes a live Google search via SerpAPI with India as the target region.
 Fetches:
 • Organic search results
 • Related searches
 • Video SERP features
 • Result count metadata

🧩 Normalize SERP Results into SEO Dataset
 Transforms raw SERP output into a structured dataset containing:
 • Rankings, titles, snippets, and sources
 • Video presence and platforms
 • Related search intent signals

🧠 Analyze Keyword SEO Opportunities Using AI
 Uses GPT-4o to determine:
 • Search intent
 • Competition level
 • Content gaps
 • High-impact content opportunities
 • Recommended content formats
 Returns strictly structured JSON output.

🧪 Parse Market Analysis Output JSON
 Validates and enforces the predefined SEO analysis schema.

🔄 Flatten AI Output for Downstream Use
 Removes nested AI structures to simplify reporting and UI usage.

🧭 Map SEO Fields for UI & Reporting
 Aligns SEO insights to UI-friendly keys, including confidence scoring and reporting fields.

📧 Generate Client-Ready SEO Insights Email Using AI
 Converts SEO analysis into a professional HTML email containing:
 • Keyword & country context
 • Search intent explanation
 • Competition level
 • Content gaps
 • Top content opportunities with difficulty
 • Recommended formats
 • Overall confidence score

📤 Send SEO Opportunity Report via Email
 Delivers the formatted SEO opportunity report to the configured recipient via Gmail.

📊 Log SEO Analysis Result to Google Sheets
 Stores keyword, intent, competition, confidence, gaps, and opportunities for:
 • Tracking
 • Audits
 • Historical SEO analysis

🚨 Error Handler Trigger → Slack Alert
 Any workflow failure sends an automated Slack alert with node name, error message, and timestamp.

🧩 Prerequisites
 • SerpAPI account
 • OpenAI API key
 • Gmail OAuth credentials
 • Google Sheets OAuth access
 • Slack API credentials
 • Valid webhook endpoint for keyword submission

💡 Key Benefits
 ✔ Automates keyword-level SEO research using live SERP data
 ✔ Identifies content gaps and opportunities based on real search behavior
 ✔ Produces client-ready SEO insight reports automatically
 ✔ Eliminates manual competitor analysis and documentation
 ✔ Logs SEO intelligence for long-term tracking and audits
 ✔ Provides immediate error visibility through Slack alerts

👥 Perfect For
-  SEO agencies delivering keyword opportunity reports
-  Content teams planning data-driven content calendars
-  Founders validating SEO demand before investing in content
-  Marketing teams prioritizing high-impact keywords
-  Operators needing repeatable SEO research workflows

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Gmail, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
