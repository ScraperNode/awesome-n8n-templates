# 📊 Extract sitemap URLs to CSV using chat input, XML parsing and HTTP upload

> ⚡ **85 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# SEO Sitemap Extractor: Convert XML to CSV via Chat Interface

This workflow provides a streamlined, no-code solution to extract all nested URLs from any standard XML sitemap and instantly convert them into a structured CSV file. Built entirely within n8n's native chat interface, it eliminates the need for manual data formatting or custom Python scripts during SEO audits and site migrations.

## Typical Use Cases
* **SEO Audits:** Quickly compile a comprehensive list of a website's published pages for bulk analysis.
* **Site Migrations:** Extract legacy URLs to prepare 301 redirect mapping spreadsheets.
* **Content Scraping Prep:** Generate a clean list of target URLs to feed into downstream scraping or web automation workflows.

## How It Works
1. **Interactive Trigger:** The workflow begins in the n8n chat window. Simply paste a valid sitemap URL (e.g., `https://example.com/sitemap.xml`).
2. **Validation & Fetching:** An HTTP Request node fetches the raw XML data while conditional logic verifies the link is accessible (HTTP 200).
3. **Data Parsing:** The native XML node parses the raw text into a structured JSON object, isolating the `loc` (URL) and `lastmod` (Last Modified) tags. 
4. **File Generation & Delivery:** The extracted data is compiled into a sanitized CSV binary file and temporarily uploaded to a file host. The workflow concludes by returning a one-click, secure download link directly in the chat.

## Key Features
* **Smart Error Handling:** Includes built-in routing to detect and reject **Sitemap Index** files (which require recursive crawling) and inaccessible URLs, returning user-friendly error messages in the chat.
* **Automated Data Mapping:** Automatically flattens complex XML arrays into a clean, two-column spreadsheet format.
* **Extraction Summary:** Calculates and outputs the total number of successfully extracted URLs before delivering the file.

## Prerequisites & Limitations
* **Direct Sitemaps Only:** This workflow is optimized for standard page sitemaps. If you need to process a Sitemap Index, you will need to input the underlying child sitemap URLs individually.
* **Third-Party Hosting:** By default, this workflow relies on a public API (Uguu) to host the final CSV file for download. You can easily swap the final HTTP Request node to your preferred cloud storage provider (e.g., AWS S3, Google Drive, Dropbox) if you require private file handling. 
* **Memory Limits:** Extremely large sitemaps (50,000+ URLs) may require increased memory allocation depending on your n8n hosting environment.

## 🔗 Nodes Used

HTTP Request, Convert to File, Summarize, Chat Trigger, Chat

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
