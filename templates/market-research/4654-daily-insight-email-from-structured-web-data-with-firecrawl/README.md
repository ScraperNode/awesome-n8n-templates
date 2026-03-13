# 📊 Daily insight email from Structured Web Data with Firecrawl

> ⚡ **773 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

🔥 Daily Web Scraper & AI Summary with Firecrawl + Email Automation
Need to extract and summarize web content from a site that doesn’t have an API? This workflow runs daily to scrape a web page using Firecrawl, summarize the content with OpenAI, and send it directly to your email — fully automated.

Watch Full Video Step-by-step Tutorial Here:
https://www.youtube.com/@Automatewithmarc

🔧 How It Works
Daily Trigger – Starts the workflow every 24 hours.

Firecrawl Node – Crawls and extracts structured data from any web page you specify.

OpenAI Node (Optional) – Processes and summarizes the raw content using a prompt you control.

Gmail Node – Sends the final summary or content snapshot to your email inbox.

✅ Perfect For
Business analysts tracking daily market or industry news

Researchers and founders automating competitive intelligence

Anyone who wants web data delivered without coding or scraping scripts

🪜 Setup Instructions
Firecrawl API Key – Sign up and insert your key in the credentials.

Update Target URL – Edit the URL in the Firecrawl node to your desired site.

Customize the Prompt – Tailor the OpenAI prompt to extract the insights you want.

Connect Gmail – Add your Gmail credentials and set your recipient email.

🧰 Built With
Firecrawl (Web scraping without code)

OpenAI (For summarizing and insight extraction)

Gmail (Automated notifications)

n8n (Workflow automation engine)

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
