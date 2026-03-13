# 📊 💡🌐 Essential multipage website scraper with Jina.ai

> ⚡ **18,059 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## 💡🌐 Essential Multipage Website Scraper with Jina.ai

**Use responsibly and follow local rules and regulations**

This N8N workflow enables automated multi-page website scraping using [Jina.ai's](https://jina.ai) powerful web scraping capabilities, with seamless integration to Google Drive for content storage. Here's how it works:

## Main Features
The workflow automatically scrapes multiple pages from a website's sitemap and saves each page's content as a separate Google Drive document.

## Key Components
**Input Configuration**
- **Starts with a sitemap URL (default: https://ai.pydantic.dev/sitemap.xml)**
- Processes the sitemap to extract individual page URLs
- Includes filtering options to target specific topics or pages

**Scraping Process**
- Uses Jina.ai's web scraper to extract content from each URL
- Converts webpage content into clean markdown format
- Extracts page titles automatically for document naming

**Storage Integration**
- Creates individual Google Drive documents for each scraped page
- Names documents using the format "URL - Page Title"
- Saves content in markdown format for better readability

## Usage Instructions
1. Set your target website's sitemap URL in the "Set Website URL" node
2. Configure the "Filter By Topics or Pages" node to select specific content
3. Adjust the "Limit" node (default: 20 pages) to control batch size
4. Connect your Google Drive account
5. Run the workflow to begin automated scraping

## Additional Features
- Built-in rate limiting through the Wait node to prevent overloading servers
- Batch processing capability for handling large sitemaps

The workflow requires no API key for Jina.ai, making it accessible for immediate use while maintaining responsible scraping practices.

## 🔗 Nodes Used

HTTP Request, Google Drive, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
