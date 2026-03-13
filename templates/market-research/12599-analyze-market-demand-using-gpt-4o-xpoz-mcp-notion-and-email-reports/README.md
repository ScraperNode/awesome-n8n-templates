# 📊 Analyze market demand using GPT-4o, XPOZ MCP, Notion and email reports

> ⚡ **502 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.

## Description

## 📘 Description
This workflow performs automated market demand research for a defined niche on a scheduled basis and converts raw public discussions into actionable business insights. It continuously scans search engines and social platforms to identify real customer pain points, unmet needs, buying or switching intent, and dissatisfaction with existing tools or solutions.
An AI market research agent analyzes public conversations to filter out noise and extract only high-signal demand indicators. These insights are then transformed into two outputs: a concise Notion-ready research summary for internal knowledge tracking and a professional, customer-ready email that communicates key findings in clear, business-friendly language. Built-in validation and error handling ensure reliability and traceability.
This workflow replaces repetitive manual market research with a consistent, insight-driven intelligence pipeline that supports founders, marketers, and growth teams.
⚠️ Deployment Disclaimer
 This template is intended for self-hosted n8n instances only.
 It relies on external MCP-based social intelligence tools and advanced AI agents not supported on n8n Cloud.

## ⚙️ What This Workflow Does (Step-by-Step)
⏰ Scheduled Market Research Trigger
 Runs automatically on a defined schedule.
🧾 Inject Niche, Query, and Research Context
 Sets the niche, keywords, and analyst notes to guide research focus.
🔎 Analyze Public Discussions for Market Demand (AI)
 Scans public search and social platforms to identify real demand signals, pain points, and buying intent.
📡 Public Search & Social Intelligence (MCP Tool)
 Fetches relevant public discussions for analysis.
🧠 Convert Market Signals into Structured Insights (AI)
 Transforms raw findings into a Notion-ready summary and a customer-friendly email.
🧹 Parse & Validate AI Output
 Ensures structured JSON output for safe downstream use.
📘 Save Market Research Insight to Notion
 Stores summarized insights for long-term research and tracking.
📧 Send Market Insight Email to Stakeholder
 Delivers a concise, value-focused email highlighting key findings.
🚨 Workflow Error Handler → Email Alert
 Sends detailed error notifications if any step fails.

## 🧩 Prerequisites
 • Self-hosted n8n instance
 • OpenAI API credentials
 • MCP (Xpoz) public search & social intelligence credentials
 • Notion API access
 • Gmail OAuth credentials

## 💡 Key Benefits
 ✔ Automates recurring market research
 ✔ Identifies real demand and buying intent signals
 ✔ Produces clean Notion documentation automatically
 ✔ Generates customer-ready insight emails
 ✔ Eliminates manual scanning of forums and social media
 ✔ Built-in error alerts for reliability

## 👥 Perfect For
-  Startup founders validating ideas
-  Growth and marketing teams
-  Product strategy teams
-  Market research and competitive intelligence teams

## 🔗 Nodes Used

Gmail, Notion, Schedule Trigger, AI Agent, OpenAI Chat Model, MCP Client Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
