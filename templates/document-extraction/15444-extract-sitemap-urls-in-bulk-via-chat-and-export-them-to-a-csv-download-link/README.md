# 🔬 Extract sitemap URLs in bulk via chat and export them to a CSV download link

> ⚡ **122 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Extracting URLs from multiple XML sitemaps manually is tedious, and combining them into a single usable file is time-consuming. This workflow solves this by acting as an automated bulk extractor. You simply paste multiple XML sitemap URLs into the chat, and the workflow validates the links, safely downloads the data, flattens all the URLs into a single standardized list, and provides a direct link to download the combined CSV file.

## How It Works
* **Phase 1: Input & Validation:** The workflow listens for the user to submit a text message containing one or more sitemap URLs. It then parses the input into an array of URLs and flags any invalid entries, limiting the request to a maximum of 10 sitemap URLs.
* **Phase 2: Bulk Data Fetching & Triage:** It executes HTTP GET requests to download the raw XML data from the valid URLs. The workflow safely routes successful fetches forward while isolating exact URLs that failed to download so they can be accurately reported back to the user. A delay node ensures error messages regarding failed URLs are delivered to the chat before final success messages.
* **Phase 3: Parsing & Extraction Loop:** The workflow iterates through the successfully downloaded sitemaps one by one. It converts the raw XML into a JSON object, scans for nested sitemap indexes, and flattens the nested array of URLs into individual items.
* **Phase 4: Output & Delivery:** It compiles the massive, flattened list of standardized URLs into a single binary CSV file. This file is uploaded to an external file-hosting service (`uguu.se`) to bypass chat attachment limits, and a final public download link is sent to the user alongside the total number of URLs extracted.

## Key Features
* **Automated Triage:** Provides immediate, clear chat feedback on exactly which sitemap URLs failed to download or were nested index files. This allows the rest of the loop to continue processing valid sitemaps without crashing.
* **Data Standardization:** Maps raw URL strings and `&lt;lastmod&gt;` tags to clean, consistent field names before compiling the final document.
* **Batch Processing:** Utilizes a loop to ensure each XML payload is individually parsed and safely processed without overloading the workflow's memory.

## Dependencies & Limitations
* **Nested Indexes:** This workflow does not recursively scrape nested sitemap indexes (sitemaps inside sitemaps). If detected, it skips the file, alerts the user in the chat, and continues processing the rest of your valid sitemaps.
* **Batch Limits:** Users are restricted to submitting a maximum of 10 sitemap URLs per request.
* **Memory Limits:** Processing dozens of massive sitemaps (e.g., 50,000+ URLs each) simultaneously may cause memory timeout errors depending on your specific n8n server resources.
* **External File Hosting:** The workflow uses a generic HTTP Request to POST the binary CSV to a temporary public host (`uguu.se`), meaning files will typically expire and be deleted within 24-48 hours. You can swap this node for AWS S3, Google Drive, or Dropbox if you prefer private storage.

## 🔗 Nodes Used

HTTP Request, Convert to File, Chat Trigger, Chat

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
