# 📊 Crawl websites & answer questions with GPT-5 nano and Google Sheets

> ⚡ **1,950 views** · 📊 [Market Research & Insights](../)

## Description

## **Web Consultation & Crawling Chatbot with Google Sheets Memory**

**Who is this workflow for?**
This workflow is designed for **SEO analysts, content creators, marketing agencies, and developers** who need to index a website and then interact with its content as if it were a chatbot.
⚠ **Note:** if the site contains many pages, AI token consumption can generate **high costs**, especially during the initial crawling and analysis phase.

---

### **1. Initial Mode (first use with a URL)**

When the user enters a URL for the first time:

1. **URL validation** using AI (gpt-5-nano).
2. **Automatic sitemap discovery** via `robots.txt`.
3. **Relevant sitemap selection** (pages, posts, categories, or tags) using GPT-4o according to configured options.
   *(Includes “OPTIONS” node to precisely choose which types of URLs to process)*
4. **Crawling of all selected pages**:

   * Downloads HTML of each page.
   * Converts HTML to Markdown.
   * AI analysis to extract:

     * Detected language.
     * Heading hierarchy (H1, H2, etc.).
     * Internal and external links.
     * Content summary.
5. **Structured storage** in Google Sheets:

   * Lang
   * H1 and hierarchy
   * External URLs
   * Internal URLs
   * Summary Content
   * Data schema (flag to enable agent mode)

When finished, the sheet is marked with **`Data schema = true`**, signaling that the site is indexed.

---

### **2. Agent Mode (subsequent queries)**

If the URL has already been indexed (`Data schema = true`):

1. The chat becomes a **LangChain Agent** that:

   * Reads the database in Google Sheets.
   * Can perform **real-time HTTP requests** if it needs updated information.
   * Responds **as if it were the website**, using stored and live data.

This allows the user to ask questions such as:

* *"What’s on the contact page?"*
* *"How many external links are there on the homepage?"*
* *"Give me all the H1 headings from the services pages"*
* *"What CTA would you suggest for my page?"*
* *"How would you expand X content?"*

---

### **Use cases**

* Build a chatbot that answers questions about a website’s content.
* Index and analyze full websites for future queries.
* SEO tool to list headings, links, and content summaries.
* Assistant for quick exploration of a site’s structure.
* Generate improvement recommendations and content strategies from site data.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Stop and Error, Markdown, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
