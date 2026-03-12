# 📊 Build a multi-site content aggregator with Google Sheets & custom extraction logic

> ⚡ **110 views** · 📊 [Market Research & Insights](../)

## Description

## An intelligent web scraping workflow that automatically routes URLs to site-specific extraction logic, normalizes data across multiple sources, and filters content by freshness to build a unified article feed.

### **What Makes This Different:**
- **Intelligent Source Routing** - Uses a Switch node to route URLs to specialized extractors based on source identifier, enabling custom CSS selectors per publisher for maximum accuracy
- **Universal Fallback Parser** - Advanced regex-based extractor handles unknown sources automatically, extracting title, description, author, date, and images from meta tags and HTML patterns
- **Freshness Filtering** - Built-in 45-day freshness threshold filters outdated content before saving, with configurable date validation logic
- **Tier-Based Classification** - Automatically categorizes articles into Tier 1 (0-7 days), Tier 2 (8-14 days), Tier 3 (15-30 days), or Archive based on publication date
- **Rate Limiting & Error Handling** - Built-in 3-second delays between requests prevents server overload, with comprehensive error handling that continues processing even if individual URLs fail
- **Status Tracking** - Updates source spreadsheet with processing status, enabling easy monitoring and retry logic for failed extractions

### **Key Benefits of Multi-Source Content Aggregation:**
- **Scalable Architecture** - Easily add new sources by adding a Switch rule and extraction node, no code changes needed for most sites
- **Data Normalization** - Standardizes extracted data across all sources into a consistent format (title, description, author, date, image, canonical URL)
- **Automated Processing** - Schedule-based execution (every 4 hours) or manual triggers keep your feed updated without manual intervention
- **Quality Control** - Freshness filtering ensures only recent, relevant content enters your feed, reducing noise from outdated articles
- **Flexible Input** - Reads from Google Sheets, making it easy to add URLs in bulk or integrate with other systems
- **Comprehensive Metadata** - Captures full article metadata including canonical URLs, publication dates, author information, and featured images

---

## Who's it for

This template is designed for **content aggregators, news monitoring services, content marketers, SEO professionals, researchers, and anyone who needs to collect and normalize articles from multiple websites**. It's perfect for organizations that need to **monitor competitor content**, **aggregate industry news**, **build content databases**, **track publication trends**, or **create unified article feeds** without **manually scraping each site or writing custom scrapers for every source**.

## How it works / What it does

This workflow creates a **unified article aggregation system** that **reads URLs from Google Sheets, routes them to site-specific extractors, normalizes the data, filters by freshness, and saves results to a feed**. The system:

1. **Reads Pending URLs** - Fetches URLs with source identifiers from Google Sheets, filtering for entries with "Pending" status
2. **Processes with Rate Limiting** - Loops through URLs one at a time with a 3-second delay between requests to respect server resources
3. **Fetches HTML Content** - Downloads page HTML with proper browser headers (User-Agent, Accept, Accept-Language) to avoid blocking
4. **Routes by Source** - Switch node directs URLs to specialized extractors (Site A, B, C, D) or universal fallback parser based on Source field
5. **Extracts Article Data** - Site-specific HTML nodes use custom CSS selectors, while fallback uses regex patterns to extract title, description, author, date, image, and canonical URL
6. **Normalizes Data** - Standardizes all extracted fields into consistent format, handling missing values and trimming whitespace
7. **Filters by Freshness** - Validates publication dates and filters out articles older than 45 days (configurable threshold)
8. **Calculates Tier & Status** - Assigns tier classification and freshness status based on article age
9. **Saves to Feed** - Appends normalized articles to Article Feed sheet with all metadata
10. **Updates Status** - Marks processed URLs as complete in source sheet for tracking

**Key Innovation: Source-Based Routing** - Unlike generic scrapers that use one-size-fits-all extraction, this workflow uses intelligent routing to apply site-specific CSS selectors. This dramatically improves extraction accuracy while maintaining a universal fallback for unknown sources, making it both precise and extensible.

## How to set up

### 1. Prepare Google Sheets
- Create a Google Sheet with two tabs: **"URLs to Process"** and **"Article Feed"**
- In **"URLs to Process"** sheet, create columns: `URL`, `Source`, `Status`
- Add sample data: URLs in `URL` column, source identifiers (e.g., "Site A", "Site B") in `Source` column, and "Pending" in `Status` column
- In **"Article Feed"** sheet, the workflow will automatically create columns: `Title`, `Description`, `Author`, `datePublished`, `imageUrl`, `canonicalUrl`, `source`, `sourceUrl`, `tier`, `freshnessStatus`, `extractedAt`
- Verify your Google Sheets credentials are set up in n8n (OAuth2 recommended)

### 2. Configure Google Sheets Nodes
- Open the **"Read Pending URLs"** node and select your spreadsheet from the document dropdown
- Set sheet name to **"URLs to Process"**
- Configure the **"Save to Article Feed"** node: select same spreadsheet, set sheet name to **"Article Feed"**, operation should be **"Append or Update"**
- Configure the **"Update URL Status"** node: same spreadsheet, **"URLs to Process"** sheet, operation **"Update"**
- Test connection by running the "Read Pending URLs" node manually to verify it can access your sheet

### 3. Customize Source Routing
- Open the **"Source Router"** (Switch node) to see current routing rules for Site A, B, C, D, and fallback
- To add a new source: Click "Add Rule", set condition: `{{ $('Loop Over URLs').item.json.Source }}` equals your source name
- Create a new HTML extraction node for your source with appropriate CSS selectors
- Connect the new extractor to the **"Normalize Extracted Data"** node
- Update the Switch node to route to your new extractor
- Example CSS selectors for common sites:
  ```javascript
  // WordPress sites
  title: "h1.entry-title, .post-title"
  author: ".author-name, .byline a"
  date: "time.entry-date, time[datetime]"
  
  // Modern CMS
  title: "h1.article__title, article h1"
  author: ".article__byline a, a[rel='author']"
  date: "time[datetime], meta[property='article:published_time']"
  ```

### 4. Configure Freshness Threshold
- Open the **"Freshness Filter (45 days)"** IF node
- The current threshold is 45 days (configurable in the condition expression)
- To change threshold: Modify the expression `cutoffDate.setDate(cutoffDate.getDate() - 45)` to your desired number of days
- The filter marks articles as "Fresh" (within threshold) or routes to "Outdated" handler
- Test with sample URLs to verify date parsing works correctly for your sources

### 5. Set Up Scheduling & Test
- The workflow includes both **Manual Trigger** (for testing) and **Schedule Trigger** (runs every 4 hours)
- To customize schedule: Open "Schedule (Every 4 Hours)" node and adjust interval
- For initial testing: Use Manual Trigger, add 2-3 test URLs to your sheet with Status="Pending"
- Verify execution: Check that URLs are fetched, routed correctly, extracted, and saved to Article Feed
- Monitor the **"Completion Summary"** node output to see processing statistics
- Check execution logs for any errors in HTML extraction or date parsing
- Common issues: Missing CSS selectors (update extractor), date format mismatches (adjust date parsing), or rate limiting (increase wait time if needed)

## Requirements

- **Google Sheets Account** - Active Google account with OAuth2 credentials configured in n8n for reading and writing spreadsheet data
- **Source Spreadsheet** - Google Sheet with "URLs to Process" and "Article Feed" tabs, properly formatted with required columns
- **n8n Instance** - Self-hosted or cloud n8n instance with access to external websites (HTTP Request node needs internet connectivity)
- **Source Knowledge** - Understanding of target website HTML structure to configure CSS selectors for site-specific extractors (or use fallback parser for unknown sources)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
