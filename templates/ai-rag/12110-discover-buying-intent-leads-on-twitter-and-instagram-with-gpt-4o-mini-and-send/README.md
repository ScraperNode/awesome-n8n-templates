# 🔍 Discover buying-intent leads on Twitter and Instagram with GPT-4o-mini and send summaries to Slack and Notion

> ⚡ **572 views** · 🔍 [AI RAG & Knowledge Retrieval](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## 📊 Description
Automate B2B lead discovery by identifying high-intent prospects directly from Reddit discussions using AI-powered intent analysis. 🎯🤖 This workflow scans Reddit for conversations related to CRM and marketing automation tools, analyzes snippets to detect buying intent, identifies relevant decision-makers on LinkedIn, enriches contact details via RocketReach, and logs qualified leads into Google Sheets. Running every three hours, it ensures your sales team never misses fresh outbound opportunities without manual research. 🚀📊

## 🔁 What This Template Does
1️⃣ Runs automatically every 3 hours to search Reddit for tool-related discussions. ⏰
 2️⃣ Extracts Reddit snippets, links, and highlighted keywords from search results. 🔍
 3️⃣ Uses AI to classify buying intent as High, Medium, or Low. 🤖
 4️⃣ Identifies the core problem and suggests a safe, non-salesy outreach angle. 💬
 5️⃣ Filters only High and Medium intent opportunities. 🚦
 6️⃣ Searches LinkedIn for matching decision-makers based on role and seniority. 👥
 7️⃣ Enriches lead profiles with emails and company data using RocketReach. 📇
 8️⃣ Saves qualified leads into Google Sheets with deduplication logic. 📊
 9️⃣ Sends Slack alerts when enrichment fails or API limits are hit. 🚨
 🔟 Sends Gmail alerts if any workflow error occurs. ✉️

## ⭐ Key Benefits
✅ Discovers real buying intent directly from public Reddit discussions
 ✅ Eliminates manual lead research and qualification
 ✅ Uses AI for consistent, conservative intent classification
 ✅ Enriches leads with verified contact data automatically
 ✅ Builds a clean, ready-to-use outbound lead list in Google Sheets
 ✅ Runs continuously to capture fresh opportunities

## 🧩 Features
Scheduled Reddit monitoring via SerpAPI
AI-based intent detection using GPT-4o-mini
Conservative intent scoring to avoid false positives
LinkedIn decision-maker discovery
RocketReach contact enrichment
Google Sheets lead storage with update logic
Slack alerts for API and enrichment issues
Gmail-based error notifications
Scalable batch processing

## 🔐 Requirements
OpenAI API key (GPT-4o-mini)
SerpAPI API key
RocketReach API key
Google Sheets OAuth2 credentials
Slack API credentials
Gmail OAuth2 credentials

## 🎯 Target Audience
B2B sales and outbound teams
Growth and demand-generation teams
Lead generation agencies
SaaS founders targeting niche audiences
RevOps teams automating prospect research

## 🔗 Nodes Used

Slack, Gmail, Notion, AI Agent, Simple Memory, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
