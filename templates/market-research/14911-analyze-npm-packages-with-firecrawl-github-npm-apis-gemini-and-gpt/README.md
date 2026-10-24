# 📊 Analyze npm packages with Firecrawl, GitHub, npm APIs, Gemini and GPT

> ⚡ **69 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This workflow analyzes any npm package and delivers a data-driven recommendation using Firecrawl + APIs + AI reasoning.

### 🔥 Why Firecrawl is Important Here

At the core of this workflow is Firecrawl, which is used to:

• Discover accurate npm package URLs dynamically
• Identify the correct GitHub repository (even for tricky packages)
• Enable AI agent to search & validate package context
• Provide a fallback when direct API mapping is not straightforward

👉 Instead of hardcoding URLs, Firecrawl makes this workflow fully dynamic and scalable.

### 🔍 What it does

This workflow:

• Accepts a package name via form
• Uses Firecrawl Search to find npm + GitHub sources
• Extracts clean URLs using logic layer
• Fetches real-time data using APIs (GitHub + npm)
• Calculates health metrics (activity, issue ratio)
• Uses AI to generate insights + recommendations
• Sends a clean Slack-ready report

### ⚙️ How it works (High-level)
• User submits package name
• Firecrawl searches npm & GitHub (dynamic discovery layer)
• Code node extracts clean, usable URLs
• GitHub API → stars, issues, license
• GitHub API → last commit activity
• npm API → weekly downloads
• Metrics calculated (health signals)
• AI Agent analyzes + recommends
• Slack message sent

### 🧠 Key Capabilities

• Firecrawl-powered dynamic URL discovery (no hardcoding)
• Real-time package evaluation using APIs
• AI-powered reasoning (not just raw data)
• Risk scoring (Low / Medium / High)
• Handles invalid or missing packages gracefully
• Produces structured + human-readable output

### ⚠️ Error Handling

• Firecrawl ensures fallback discovery for URLs
• API failures → handled using "continue on fail"
• Missing package → fallback response with suggestions
• Partial data → marked as "unknown"
• URL detection failures → fallback to default npm URL

### 📦 Requirements

• Firecrawl API key ⭐ (core component)
• GitHub OAuth credential
• Google Gemini API key
• Slack credential (optional for output)

### 💡 Example Use Cases

• Package evaluation before production use
• Comparing npm alternatives
• Developer productivity tooling
• Automated tech due diligence

### 🎯 Output

• Structured JSON (for automation)
• Slack-ready formatted report (for humans)

## 🔗 Nodes Used

GitHub, HTTP Request, Slack, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
