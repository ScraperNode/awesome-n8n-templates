# 📈 🏛️ Daily US Congress members stock trades report via Firecrawl + OpenAI + Gmail

> ⚡ **3,180 views** · 📈 [Crypto Trading & Stock Market](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

📬 What This Workflow Does
This workflow automatically scrapes recent high-value congressional stock trades from Quiver Quantitative, summarizes the key transactions, and delivers a neatly formatted report to your inbox — every single day.

It combines Firecrawl's powerful content extraction, OpenAI's GPT formatting, and n8n's automation engine to turn raw HTML data into a digestible, human-readable email.

Watch Full Tutorial on how to build this workflow here:
https://www.youtube.com/watch?v=HChQSYsWbGo&t=947s&pp=0gcJCb4JAYcqIYzv

🔧 How It Works
🕒 Schedule Trigger
Fires daily at a set hour (e.g., 6 PM) to begin the data pipeline.

🔥 Firecrawl Extract API (POST)
Targets the Quiver Quantitative “Congress Trading” page and sends a structured prompt asking for all trades over $50K in the past month.

⏳ Wait Node
Allows time for Firecrawl to finish processing before retrieving results.

📥 Firecrawl Get Result API (GET)
Retrieves the extracted and structured data.

🧠 OpenAI Chat Model (GPT-4o)
Formats the raw trading data into a readable summary that includes:

Date of Transaction

Stock/Asset traded

Amount

Congress member’s name and political party

📧 Gmail Node
Sends the summary to your inbox with the subject “Congress Trade Updates - QQ”.

🧠 Why This is Useful
Congressional trading activity often reveals valuable signals — especially when high-value trades are made.
This workflow:

Saves time manually tracking Quiver Quant updates

Converts complex tables into a daily, readable email

Keeps investors, researchers, and newsrooms in the loop — hands-free

🛠 Requirements
Firecrawl API Key (with extract access)

OpenAI API Key

Gmail OAuth2 credentials

n8n (self-hosted or cloud)

💬 Sample Output:
Congress Trade Summary – May 21

Nancy Pelosi (D) sold TSLA for $85,000 on April 28

John Raynor (R) purchased AAPL worth $120,000 on May 2
... and more

🪜 Setup Steps
Add your Firecrawl, OpenAI, and Gmail credentials in n8n.

Adjust the schedule node to your desired time.

Customize the OpenAI system prompt if you want a different summary style.

Deploy the workflow — and enjoy your daily edge.

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
