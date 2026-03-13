# 📈 Stock portfolio analysis with Perplexity AI, GPT-4, and Google Sheets

> ⚡ **2,133 views** · 📈 [Crypto Trading & Stock Market](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.

## Description

📊 Dynamic Portfolio Advisor – Daily Stock Market Intelligence with Google Sheets
Description:
This advanced AI-powered n8n workflow automatically delivers a daily market intelligence briefing tailored to your stock holdings portfolio stored in Google Sheets. It uses real-time data from Perplexity AI, combines it with your portfolio, and generates personalized insights, risk alerts, and trade suggestions — all delivered via Telegram or any messaging app of your choice.

For step-by-step build of workflows like this, check out:
https://www.youtube.com/@Automatewithmarc

⚙️ How It Works:
🕒 Daily Trigger
 Starts every day at a scheduled time (default: 10 AM) to fetch the most recent market data.

📈 Holdings Fetch
 Reads your current portfolio dynamically from Google Sheets — no hardcoding required.

🧠 AI Analysis Agent
 Combines:

Market headlines

Company-specific developments

Macroeconomic updates
 And analyzes how they might affect your holdings.

🔍 Perplexity Web Research Tool
 Finds and summarizes the most relevant stock market news from the past 24 hours.

💬 Telegram Delivery
 Sends a customized summary of:

Market highlights

Asset-specific impacts

Opportunities and risks

Actionable trade ideas (buy/sell/hold)

🛠️ Tools & Integrations:
Google Sheets (live holdings feed)

Perplexity AI (real-time market research)

OpenAI GPT (financial summarization)

Telegram (output, customizable)

💡 Use Cases:
Portfolio-aware market intelligence

Automated investor briefing assistant

Risk alert + opportunity scanner

Daily trade idea generator

Finance bloggers or equity analysts streamlining prep work

📍Note: You can easily replace Telegram with Slack, Email, Notion, or any output tool supported by n8n.

This template is perfect for active investors, financial advisors, or automation-savvy traders who want to turn AI and data into actionable daily signals.

## 🔗 Nodes Used

Telegram, Schedule Trigger, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
