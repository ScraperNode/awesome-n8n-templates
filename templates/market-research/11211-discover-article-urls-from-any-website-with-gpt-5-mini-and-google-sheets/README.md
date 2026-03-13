# 📊 Discover article URLs from any website with GPT-5-mini and Google Sheets

> ⚡ **243 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## Automatically discover and extract article URLs from any website using AI to identify valid content links while filtering out navigation, category pages, and irrelevant content—perfect for building content pipelines, news aggregators, and research databases.

### **What Makes This Different:**
- **AI-Powered Intelligence** - Uses GPT-5-mini to understand webpage context and identify actual articles vs navigation pages, eliminating false positives
- **Browser Spoofing** - Includes realistic User-Agent headers and request patterns to avoid bot detection on publisher sites
- **Smart URL Normalization** - Automatically strips tracking parameters (utm_*, fbclid, etc.), removes duplicates, and standardizes URLs
- **Source Categorization** - AI assigns logical source names based on domain and content type for easy filtering
- **Rate Limiting Built-In** - Configurable delays between requests prevent IP blocking and respect website resources
- **Deduplication on Save** - Google Sheets append-or-update pattern ensures no duplicate URLs in your database

### **Key Benefits of AI-Powered Content Discovery:**
- **Save 10+ Hours Weekly** - Automate manual link hunting across dozens of publisher sites
- **Higher Quality Results** - AI filters out 95%+ of junk links (nav pages, categories, footers) that rule-based scrapers miss
- **Scale Effortlessly** - Add new seed URLs to your sheet and the same workflow handles any website structure
- **Industry Agnostic** - Works for news, blogs, research papers, product pages—any content type
- **Always Up-to-Date** - Schedule daily runs to catch new content as it's published
- **Full Audit Trail** - Track discovered URLs with timestamps and sources in Google Sheets

---

## Who's it for

This template is designed for **content marketers, SEO professionals, researchers, media monitors, and anyone who needs to aggregate content from multiple sources**. It's perfect for organizations that need to **track competitor blogs**, **curate industry news**, **build research databases**, **monitor brand mentions**, or **aggregate content for newsletters** without **manually checking dozens of websites daily or writing complex scraping rules for each source**.

## How it works / What it does

This workflow creates an **intelligent content discovery pipeline** that **automatically finds and extracts article URLs from any webpage**. The system:

1. **Reads Seed URLs** - Pulls a list of webpages to crawl from your Google Sheets (blog indexes, news feeds, publication homepages)
2. **Fetches with Stealth** - Downloads each webpage's HTML using browser-like headers to avoid bot detection
3. **Converts for AI** - Transforms messy HTML into clean Markdown that the AI can easily process
4. **AI Extraction** - GPT-5-mini analyzes the content and identifies valid article URLs while filtering out navigation, categories, and junk links
5. **Normalizes & Saves** - Cleans URLs (removes tracking params), deduplicates, and saves to Google Sheets with source tracking

**Key Innovation: Context-Aware Link Filtering** - Unlike traditional scrapers that rely on CSS selectors or URL patterns (which break when sites update), the AI understands the *semantic difference* between an article link and a navigation link. It reads the page like a human would, identifying content worth following regardless of the website's structure.

## How to set up

### 1. Create Your Google Sheets Database
- Create a new Google Spreadsheet with two sheets:
  - **"Seed URLs"** - Add column `URL` with webpages to crawl (blog homepages, news feeds, etc.)
  - **"Discovered URLs"** - Add columns: `URL`, `Source`, `Status`, `Discovered At`
- Add 3-5 seed URLs to start (e.g., `https://abc.com/`, `https://news.xyz.com/`)

### 2. Connect Your Credentials
- **Google Sheets**: Click the "Read Seed URLs" and "Save Discovered URLs" nodes → Select your Google Sheets account
- **OpenAI**: Click the "OpenAI GPT-5-mini" node → Add your OpenAI API key
- Select your spreadsheet and sheet names in both Google Sheets nodes

### 3. Customize the AI Prompt (Optional)
- Open the "AI URL Extractor" node
- Modify the system message to add industry-specific rules:
  ```
  // Example: Add to system message for tech blogs
  For tech sites, also extract:
  - Tutorial and guide URLs
  - Product announcement pages
  - Changelog and release notes
  ```
- Adjust source naming conventions to match your taxonomy

### 4. Test Your Configuration
- Click "Test Workflow" or use the Manual Trigger
- Check the execution to verify:
  - Seed URLs are being read correctly
  - HTML is fetched successfully (check for 200 status)
  - AI returns valid JSON array of URLs
  - URLs are saved to your output sheet
- Review the "Discovered URLs" sheet for results

### 5. Schedule and Monitor
- Adjust the Schedule Trigger (default: daily at 6 AM)
- Enable the workflow to run automatically
- Monitor execution logs for errors:
  - **Rate limiting**: Increase wait time if sites block you
  - **Empty results**: Check if seed URLs have changed structure
  - **AI errors**: Review AI output in execution data
- Set up error notifications via email or Slack (add nodes after Completion Summary)

## Requirements

- **Google Sheets Account** - OAuth2 connection for reading seed URLs and saving results
- **OpenAI API Key** - For GPT-5-mini (or swap for any LangChain-compatible LLM)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Markdown, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
