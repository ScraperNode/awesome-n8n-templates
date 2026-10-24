# 👥 Automatic job listings extraction and publishing template

> ⚡ **1,509 views** · 👥 [HR & Recruitment](../)

> 💡 **Pro Tip** — Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Turn any job ad URL into a polished WordPress post. Send a link via Telegram and this workflow scrapes the job details, enhances the content with GPT, and publishes a clean post on your site. No copy-paste, no typos slipping through.

*Last updated: September 2026.*

## Why Use Job Repost?

### **Save countless hours**
Extract, process, and publish job offers from any website automatically. Repetitive work disappears.

### **Eliminate human errors**
Typos and missed fields become history. Every job post is validated before going live.

### **Boost engagement**
Fresh, well-structured listings attract more candidates and grow your site's reach and authority.

### **Stay ahead**
AI-polished, SEO-friendly content on autopilot. The assistant you never knew you needed.

## Perfect For

- **Job board managers:** Aggregate listings from multiple sources with minimal effort.
- **Recruiters & HR teams:** Streamline job posting without technical hassles.
- **Content creators & marketers:** Automate publishing while keeping style and SEO standards.

## How It Works

* **Trigger:** Send a job URL via Telegram bot to start the process.
* **Extract:** Firecrawl API scrapes clean content from the provided URL.
* **Process:** AI extracts the job data, text is split and cleaned, categories and types are mapped to your system.
* **Smart Logic:** GPT crafts formatted job posts, validation checks that key data is present, defaults fill the blanks if needed.
* **Output:** Posts publish to WordPress automatically with company logos uploaded, plus success or error notifications via Telegram.
* **Storage:** Supabase vector store manages document embeddings for quick lookup and reference.

## Quick Setup

1. **Import** the provided JSON file into your [n8n instances](https://n8n.partnerlinks.io/creator-khmuhtadin)
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

## You'll Need

- Active [n8n instances](https://n8n.partnerlinks.io/creator-khmuhtadin)
- [Firecrawl](https://firecrawl.dev) account with API access
- Google Drive account for RAG document storage
- OpenAI account with GPT API access
- WordPress site with autojob plugin and API enabled
- Telegram bot for URL submission and notifications
- Supabase account for vector store management ([docs](https://supabase.com/docs))

## Level Up Ideas

- Add multi-language support to expand global reach
- Support batch URL processing for multiple jobs at once
- Integrate Slack or email notifications for wider team alerts
- Use more AI nodes to summarize or rate job offers for quality control
- Schedule periodic cleanup of vector store for performance optimization
- Add analytics tracking for published jobs performance

## Nodes Used

### Core Components:
- **Firecrawl HTTP Request** (Web scraping and content extraction)
- **Google Drive** (RAG document storage)
- **Supabase Vector Store**
- **OpenAI** (Embeddings, GPT Extraction)
- **Code Nodes** for mapping categories
- **Telegram Trigger & Message**
- **HTTP Request** (for WordPress API and image uploads)

### Quick Answers
**How do I submit a job?**  
Send the job ad URL to your Telegram bot. Extraction and publishing run automatically.  
**Where does the post go?**  
Straight to WordPress with company logo uploaded, plus a Telegram notification on success or error.  
**Where is the data kept?**  
Document embeddings live in your Supabase vector store for quick lookup.  

---

**Made by:** [khmuhtadin](https://khmuhtadin.com)  
**Tags:** `automation` `recruitment` `job-posting` `wordpress` `AI` `web-scraping` `firecrawl`  
**Category:** Human Resources, Recruitment, Wordpress, Scraping  
**Need a custom?** contact me on **[LinkedIn](https://www.linkedin.com/in/khmuhtadin/)** or **[Web](https://khmuhtadin.com)**

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Google Drive, Google Drive Trigger, Embeddings OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
