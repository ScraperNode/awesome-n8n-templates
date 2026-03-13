# 📈 Financial news digest with Google Gemini AI to Outlook email

> ⚡ **764 views** · 📈 [Crypto Trading & Stock Market](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## 🧠 Key Features

- Looping source scraping: Collects content from news sites you have selected (it might not work for all of them however)
- HTML extraction & cleaning: Parses, cleans, and filters messy website data to isolate only the most relevant content.
- AI-powered synthesis: Uses Google Gemini (via LangChain agent) to summarize and structure financial news into a clear, bullet-pointed format.
- Email-ready output: Generates styled HTML summaries with coral-colored headings, ideal for daily email reports.
- Fully automated delivery: Sends out beautifully formatted updates via Outlook — no manual work required.


## 🔧 Technologies Used

n8n workflow orchestration
LangChain agents for prompt logic and formatting
Google Gemini API for advanced NLP
Custom JS logic to manage dynamic inputs and cleanup
Microsoft Outlook API for final distribution

&gt; Feel free to reach out if needed !

## 🔗 Nodes Used

HTTP Request, Microsoft Outlook, Schedule Trigger, AI Agent, Item List Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
