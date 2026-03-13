# 📊 Extract top products from any website with Dumpling AI and GPT-4o

> ⚡ **424 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### 🛍️ Pick Best-Value Products from Any Website Using Dumpling AI, GPT-4o, and Google Sheets

### Who’s it for  
This workflow is for eCommerce researchers, affiliate marketers, and anyone who needs to compare product listings across sites like Amazon. It’s perfect for quickly identifying top product picks based on delivery speed, free shipping, and price.

### What it does  
Just submit a product listing URL. The workflow will crawl it using Dumpling AI, take screenshots of the pages, and pass them to GPT-4o to extract up to 3 best-value picks. It analyzes screenshots visually—no HTML scraping needed.

Each result includes:  
- product name  
- price  
- review count  
- free delivery date (if available)

### How it works  
- 📝 Receives a URL through a web form  
- 🧠 Uses Dumpling AI to crawl the website  
- 📸 Takes screenshots of each product listing  
- 🔍 GPT-4o analyzes each image to pick top products  
- 🔧 A code node parses and flattens the output  
- 📊 Google Sheets stores the result  
- 📧 Sends the spreadsheet link via email

### Requirements  
- **Dumpling AI token** 
- **OpenAI key** (GPT-4o)  
- **Google Sheet** with columns: `product name`, `price`, `reviews no.`, `free_delivery_date`

&gt; You can customize the AI prompt to extract other visual insights (e.g., ratings, specs).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
