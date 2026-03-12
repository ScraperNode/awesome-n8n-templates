# 👥 Automatic job listings extraction and publishing template

> ⚡ **1,291 views** · 👥 [HR & Recruitment](../)

## Description

Automatically extract job listings from any website URL, format them with AI, and publish directly to WordPress. Just send a URL via Telegram, and watch as the workflow scrapes the job details, enhances the content with GPT, and creates a polished post on your site.

## 💡 Why Use Job Repost?

### ⏰ **Save countless hours**
Automatically extract, process, and publish job offers from any website, freeing your time from repetitive tasks.

### ✅ **Eliminate human errors**
Say goodbye to typos and missed fields — every job post is validated before going live.

### 📈 **Boost engagement**
Fresh, well-structured job listings attract more candidates, improving your site's reach and authority.

### 🚀 **Stay ahead**
Leveraging AI with GPT means your content is not just automated but polished and SEO-friendly — the digital assistant you never knew you needed.

## ⚡ Perfect For

- **Job board managers:** Want to aggregate listings from multiple sources with minimal effort
- **Recruiters & HR teams:** Who need to streamline job posting workflows without technical hassles
- **Content creators & marketers:** Looking to automate publishing while maintaining style and SEO standards

## 🔧 How It Works

| Step | Process | Description |
|------|---------|-------------|
| 📱 | **Trigger** | Send a job URL via Telegram bot to initiate the process |
| 🔥 | **Extract** | Firecrawl API scrapes and extracts clean content from the provided URL |
| 📎 | **Process** | Job data is extracted via AI, text split and cleaned, job categories and types mapped to your system |
| 🤖 | **Smart Logic** | GPT crafts formatted job posts, intelligent validation ensures all key data is present, default values fill in the blanks if necessary |
| 💌 | **Output** | Posts automatically published to WordPress with company logos uploaded, and success or error notifications sent via Telegram |
| 🗂 | **Storage** | Uses Supabase vector store for managing document embeddings, ensuring quick lookup and reference compliance |

## 🔐 Quick Setup

1. **Import** the provided JSON file into your [n8n instances](https://n8n.partnerlinks.io/khmuhtadin)
2. **Add credentials:**
   - Firecrawl API key
   - Google Drive OAuth2 (for RAG storage)
   - OpenAI API
   - WordPress API
   - Telegram API
   - Supabase
3. **Customize:**
   - Telegram bot token
   - WordPress URLs
   - Default images and category mappings if needed
4. **Update:** URLs and API tokens where placeholders are used
5. **Test:** Send a job URL to your Telegram bot to verify accurate extraction and posting

## 🧩 You'll Need

- ✅ Active [n8n instances](https://n8n.partnerlinks.io/khmuhtadin)
- ✅ [Firecrawl](https://firecrawl.dev) account with API access
- ✅ Google Drive account for RAG document storage
- ✅ OpenAI account with GPT API access
- ✅ WordPress site with autojob plugin and API enabled
- ✅ Telegram bot for URL submission and notifications
- ✅ Supabase account for vector store management

## 🛠️ Level Up Ideas

- 🌍 Add multi-language support to expand global reach
- 🔗 Support batch URL processing for multiple jobs at once
- 💬 Integrate Slack or email notifications for wider team alerts
- 🎯 Use more AI nodes to summarize or rate job offers for quality control
- 🔄 Schedule periodic cleanup of vector store for performance optimization
- 📊 Add analytics tracking for published jobs performance

## 🧠 Nodes Used

### Core Components:
- **Firecrawl HTTP Request** (Web scraping and content extraction)
- **Google Drive** (RAG document storage)
- **Supabase Vector Store**
- **OpenAI** (Embeddings, GPT Extraction)
- **Code Nodes** for mapping categories
- **Telegram Trigger & Message**
- **HTTP Request** (for WordPress API and image uploads)

---

**Made by:** [Khaisa Studio](https://khaisa.studio)  
**Tags:** `automation` `recruitment` `job-posting` `wordpress` `AI` `web-scraping` `firecrawl`  
**Category:** Human Resources, Recruitment, Wordpress, Scrapping  
**Need a custom?** contact me on **[LinkedIn](https://www.linkedin.com/in/khmuhtadin/)** or **[Web](khmuhtadin.com)**

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Google Drive, Google Drive Trigger, Embeddings OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
