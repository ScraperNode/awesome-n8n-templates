# 📊 Generate SEO content audit reports with DataForSEO and Google Search Console

> ⚡ **4,883 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## Introduction
The Content SEO Audit Workflow is a powerful automated solution that generates comprehensive SEO audit reports for websites. 

By combining the crawling capabilities of DataForSEO with the search performance metrics from Google Search Console, this workflow delivers actionable insights into content quality, technical SEO issues, and performance optimization opportunities. 

The workflow crawls up to 1,000 pages of a website, analyzes various SEO factors including metadata, content quality, internal linking, and search performance, and then generates a professional, branded HTML report that can be shared directly with clients. 

The entire process is automated, transforming what would typically be hours of manual analysis into a streamlined workflow that produces consistent, thorough results. 

This workflow bridges the gap between technical SEO auditing and practical, client-ready deliverables, making it an invaluable tool for SEO professionals and digital marketing agencies.

## Who is this for?
This workflow is designed for SEO consultants, digital marketing agencies, and content strategists who need to perform comprehensive content audits for clients or their own websites. It's particularly valuable for professionals who:

1. Regularly conduct SEO audits as part of their service offerings
2. Need to provide branded, professional reports to clients
3. Want to automate the time-consuming process of content analysis
4. Require data-driven insights to inform content strategy decisions

Users should have basic familiarity with SEO concepts and metrics, as well as a basic understanding of how to set up API credentials in n8n. 

While no coding knowledge is required to run the workflow, users should be comfortable with configuring workflow parameters and following setup instructions.

## What problem is this workflow solving?
Content audits are essential for SEO strategy but are traditionally labor-intensive and time-consuming. This workflow addresses several key challenges:

1. **Manual Data Collection**: Gathering data from multiple sources (crawlers, Google Search Console, etc.) typically requires hours of work. This workflow automates the entire data collection process.

2. **Inconsistent Analysis**: Manual audits can suffer from inconsistency in methodology. This workflow applies the same comprehensive analysis criteria to every page, ensuring thorough and consistent results.

3. **Report Generation**: Creating professional, client-ready reports often requires additional design work after the analysis is complete. This workflow generates a fully branded HTML report automatically.

4. **Data Integration**: Correlating technical SEO issues with actual search performance metrics is difficult when working with separate tools. This workflow seamlessly integrates crawl data with Google Search Console metrics.

5. **Scale Limitations**: Manual audits become increasingly difficult with larger websites. This workflow can efficiently process up to 1,000 pages without additional effort.

## What this workflow does
### Overview
The Content SEO Audit Workflow crawls a specified website, analyzes its content for various SEO issues, retrieves performance data from Google Search Console, and generates a comprehensive HTML report. 

The workflow identifies issues in five key categories: status issues (404 errors, redirects), content quality (thin content, readability), metadata SEO (title/description issues), internal linking (orphan pages, excessive click depth), and performance (underperforming content). 

The final report includes executive summaries, detailed issue breakdowns, and actionable recommendations, all branded with your company's colors and logo.

### Process
1. **Initial Configuration**: The workflow begins by setting parameters including the target domain, crawl limits, company information, and branding colors.

2. **Website Crawling**: The workflow creates a crawl task in DataForSEO and periodically checks its status until completion.

3. **Data Collection**: Once crawling is complete, the workflow:
   - Retrieves the raw audit data from DataForSEO
   - Extracts all URLs with status code 200 (successful pages)
   - Queries Google Search Console API for each URL to get clicks and impressions data
   - Identifies 404 and 301 pages and retrieves their source links

4. **Data Analysis**: The workflow analyzes the collected data to identify issues including:
   - Technical issues: 404 errors, redirects, canonicalization problems
   - Content issues: thin content, outdated content, readability problems
   - SEO metadata issues: missing/duplicate titles and descriptions, H1 problems
   - Internal linking issues: orphan pages, excessive click depth, low internal links
   - Performance issues: underperforming pages based on GSC data

5. **Report Generation**: Finally, the workflow:
   - Calculates a health score based on the severity and quantity of issues
   - Generates prioritized recommendations
   - Creates a comprehensive HTML report with interactive tables and visualizations
   - Customizes the report with your company's branding
   - Provides the report as a downloadable HTML file

## Setup
To set up this workflow, follow these steps:

1. **Import the workflow**: Download the JSON file and import it into your n8n instance.

2. **Configure DataForSEO credentials**:
   - Create a DataForSEO account at https://app.dataforseo.com/api-access (they offer a free $1 credit for testing)
   - Add a new "Basic Auth" credential in n8n following the [HTTP Request Authentication guide](https://docs.n8n.io/integrations/builtin/credentials/httprequest/)
   - Assign this credential to the "Create Task", "Check Task Status", "Get Raw Audit Data", and "Get Source URLs Data" nodes

3. **Configure Google Search Console credentials**:
   - Add a new "Google OAuth2 API" credential following the [Google OAuth guide](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-generic/)
   - Ensure your Google account has access to the Google Search Console property you want to analyze
   - Assign this credential to the "Query GSC API" node

4. **Update the "Set Fields" node** with:
   - dfs_domain: The website domain you want to audit
   - dfs_max_crawl_pages: Maximum number of pages to crawl (default: 1000)
   - dfs_enable_javascript: Whether to enable JavaScript rendering (default: false)
   - company_name: Your company name for the report branding
   - company_website: Your company website URL
   - company_logo_url: URL to your company logo
   - brand_primary_color: Your primary brand color (hex code)
   - brand_secondary_color: Your secondary brand color (hex code)
   - gsc_property_type: Set to "domain" or "url" depending on your Google Search Console property type

5. **Run the workflow**: Click "Start" and wait for it to complete (approximately 20 minutes for 500 pages).

6. **Download the report**: Once complete, download the HTML file from the "Download Report" node.

## How to customize this workflow to your needs
This workflow can be adapted in several ways to better suit your specific requirements:

1. **Adjust crawl parameters**: Modify the "Set Fields" node to change:
   - The maximum number of pages to crawl (dfs_max_crawl_pages). This workflow supports up to 1000 pages.
   - Whether to enable JavaScript rendering for JavaScript-heavy sites (dfs_enable_javascript)

2. **Customize issue detection thresholds**: In the "Build Report Structure" code node, you can modify:
   - Word count thresholds for thin content detection (currently 1500 words)
   - Click depth thresholds (currently flags pages deeper than 4 clicks)
   - Title and description length parameters (currently 40-60 chars for titles, 70-155 for descriptions)
   - Readability score thresholds (currently flags Flesch-Kincaid scores below 55)

3. **Modify the report design**: In the "Generate HTML Report" code node, you can:
   - Adjust the HTML/CSS to change the report layout and styling
   - Add or remove sections from the report
   - Change the recommendations logic
   - Modify the health score calculation algorithm

4. **Add additional data sources**: You could extend the workflow by:
   - Adding Pagespeed Insights data for performance metrics
   - Incorporating backlink data from other APIs
   - Adding keyword ranking data from rank tracking APIs

5. **Implement automated delivery**: Add nodes after the "Download Report" to:
   - Send the report directly to clients via email
   - Upload it to cloud storage
   - Create a PDF version of the report

## 🔗 Nodes Used

HTTP Request, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
