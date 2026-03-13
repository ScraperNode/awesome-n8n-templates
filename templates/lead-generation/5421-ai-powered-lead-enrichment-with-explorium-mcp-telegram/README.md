# 🎣 AI-powered lead enrichment with Explorium MCP & Telegram

> ⚡ **1,063 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## 🤖 AI-Powered Lead Enrichment with Explorium MCP & Telegram

## Who it's for

Sales reps, agencies, and growth teams who want to turn basic company info into qualified leads with automated research . Perfect for B2B prospecting.

## What it does

This workflow lets you send a company name or domain via Telegram, and instantly returns:

✅ Enriched company profile (industry, size, tech, pain points)

✅ A clean, structured JSON — ready for your CRM or sales tools
How it works

💬 Send company info to your Telegram bot
🔎 Workflow pulls data from Explorium MCP + Tavily
🧠 AI analyzes model, tools, pain points & goals

📤 JSON response sent back via Telegram or logged to your database
Requirements

🔐 OpenAI API (GPT-4)
🧠 Explorium MCP API
🌐 Tavily Web Search API
🤖 Telegram Bot API
🗃️ PostgreSQL (for memory/logging)
How to set up

Add API keys in n8n
Connect Telegram bot to webhook
Set up PostgreSQL for memory persistence
Customize prompts (tone, niche, etc.)
Test by sending a company name via Telegram
Customization Options

🎯 Focus enrichment on specific industries or keywords
💬 Adjust the email sequence structure & style
🧩 Add extra data sources (e.g. Clearbit, Crunchbase)
🧾 Format JSON to match your CRM schema
⚙️ Add approval step before sending emails
Highlights

✅ Uses multi-source enrichment
✅ Works 100% from Telegram
✅ Integrates into any sales pipeline

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Postgres Chat Memory, MCP Client Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
