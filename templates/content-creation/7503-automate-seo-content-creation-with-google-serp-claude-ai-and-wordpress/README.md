# 🎬 Automate SEO content creation with Google SERP, Claude AI, and WordPress

> ⚡ **2,372 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.

## Description

## 👥 Who the Automation is for

This automation is perfect for bloggers, solopreneurs, business owners, and marketing teams who want to **scale SEO content creation**. 

Instead of spending hours on research and drafting, you can go from a single keyword idea to a ready-to-edit WordPress draft in minutes.<br><br>

## ⚙️ How the Automation Works

**Collect keywords** in a Google Sheet and mark the ones you want as “prioritized.”

Click “Prepare Content” → your keyword(s) are sent to n8n.

n8n pulls the top 10 Google **SERP** results.

**AI analyzes competitors** (tone, content type, gaps) and creates a **content brief.**

Another AI generates a **blog draft** based on the brief.

The draft is automatically uploaded to WordPress and your sheet updates.

👉 In short: **Keyword → SERP → Brief → Draft → WordPress.**<br><br>


## 🛠 How to Set Up [Full Setup Guide](https://opaque-face-45b.notion.site/Keyword-to-Blog-Post-Automation-221f1bceaabe808fb4efdc7c7be71bac)

Copy the Google Sheets Template.

Import the workflow into n8n.

Add your API keys: Google Custom Search, Claude AI, and WordPress credentials.

Test the webhook connection from Google Sheets.

**🎉 Done — you now have a one-click pipeline from keyword idea to WordPress draft.**

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Wordpress, Basic LLM Chain, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
