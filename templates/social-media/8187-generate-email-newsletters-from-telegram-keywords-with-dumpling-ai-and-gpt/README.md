# 📱 Generate email newsletters from Telegram keywords with Dumpling AI and GPT

> ⚡ **194 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### Who is this for?  
This workflow is perfect for content creators, newsletter publishers, digital marketers, and virtual assistants who need a quick way to generate professional newsletters from trending news without manually curating and formatting articles.  

---  

### What problem is this workflow solving?  
Manually searching for news, summarizing articles, formatting them into a newsletter, and sending them by email is time-consuming and inconsistent. This workflow automates the process end-to-end: from capturing a keyword in Telegram to sending a ready-to-publish HTML newsletter by Gmail.  

---  

### What this workflow does  
The workflow begins when a keyword is received from Telegram. The keyword is expanded into trending suggestions using Dumpling AI Autocomplete, then passed to Dumpling AI Google News to fetch recent articles. The results are structured, split, and scraped for clean content. The combined content is sent to OpenAI to generate a professional HTML newsletter and subject line, which is finally delivered to a chosen inbox via Gmail.  

---  

### Nodes Overview  

1. Telegram Trigger – `Start: Receive Keyword`  
   Listens for a keyword sent from Telegram to initiate the workflow.  

2. HTTP Request – `Google Autocomplete via Dumpling AI`  
   Expands the keyword into trending search suggestions.  

3. HTTP Request – `Search Google News via Dumpling AI`  
   Fetches recent news articles related to the autocomplete suggestions.  

4. Parser and Split Nodes – `Process Articles`  
   Formats results into structured JSON and splits them into individual articles.  

5. HTTP Request – `Scraper via Dumpling AI`  
   Scrapes and cleans each article to extract high-quality text.  

6. Aggregate – `Combine Article Content`  
   Merges all cleaned articles into a single dataset for newsletter generation.  

7. OpenAI – `Generate Newsletter`  
   Produces a ready-to-use HTML newsletter and subject line.  

8. Gmail – `Send Newsletter`  
   Delivers the completed newsletter to the specified inbox.  

---  

### 📝 Notes  

- You must connect Dumpling AI and OpenAI accounts with valid API keys before running.  
- The Telegram trigger can be configured for private or group chats depending on your use case.  
- Ensure Gmail is properly connected with send permissions enabled.

## 🔗 Nodes Used

HTTP Request, Telegram Trigger, Gmail, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
