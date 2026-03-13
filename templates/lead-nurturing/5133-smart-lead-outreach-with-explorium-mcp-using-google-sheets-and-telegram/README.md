# 💬 Smart lead outreach with Explorium MCP using Google Sheets and Telegram

> ⚡ **382 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

🚀 Smart Outreach: Auto-Personalized Lead Sequences

## 🧠 What It Does

This n8n workflow turns your Telegram bot into an AI-powered B2B lead enrichment and outreach engine.

It uses Explorium MCP's premium business data, combined with GPT-4 intelligence, to deliver:

Enriched lead profiles (person or company)
AI-personalized 4-step cold email sequences
Real-time interaction via Telegram
Google Sheets logging for CRM or follow-up
🖥️ Demo: https://www.loom.com/share/4c2ae62154d74b66b4a59a6926282fab
## 🔄 How It Works

1. Telegram Input
Users message a company or person’s name to your Telegram bot.

2. GPT-4 AI Agent Analyzes the Request
Determines if input is a person or company
Starts the enrichment process
3. Explorium MCP Client Fetches B2B Data
Pulls from enterprise-grade business databases
Finds company size, revenue, funding, contact names, tech stack, and more
Augments with Tavily search where needed
4. Smart Data Processor
Structures the info
Classifies it
Adds enrichment and processing timestamps
5. GPT-4 Generates Email Sequence
4-email cold outreach campaign
Personalized based on enriched profile
Professional tone with soft CTA and clear value
6. Google Sheets Logging
People Sheet: name, role, LinkedIn, experience, education, skills
Companies Sheet: size, HQ, tech stack, funding, lead score, outreach emails
7. Telegram Responds in Real-Time
Sends back structured summary
Clean JSON or readable text
🧰 Requirements

To run this workflow, you’ll need:

✅ Telegram Bot (via BotFather)
✅ OpenAI API Key (GPT-4 or GPT-4o)
✅ Explorium MCP credentials (for B2B enrichment)
✅ Tavily API key (for supplemental web results)
✅ Google Sheets account (OAuth2 connected to n8n)

## ⚙️ Setup Instructions

Import the Template into n8n
Use the JSON file to create a new workflow.
Configure Telegram Trigger
Set up your bot via BotFather
Connect your Telegram API credentials in n8n
Connect External APIs
Set up Explorium MCP credentials (via header auth)
Add Tavily and OpenAI credentials in their respective nodes
Replace Google Sheets Links
Update documentId and sheetName to point to your target Sheets
Customize (Optional)
Tweak prompt logic, email tone, or data mapping
Add Slack alerts or CRM pushes
Test the Flow
DM a name or company to your Telegram bot
Wait a few seconds for a full enriched reply + email sequence
## 📥 Output Includes:

Full structured profile in JSON format
4 cold outreach emails tailored to the lead
Stored copy in Google Sheets for sales or follow-up
💼 Who This Is For:

SDRs & Sales Teams
AI/Marketing Agencies
Growth Hackers
Founders doing outbound manually

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
