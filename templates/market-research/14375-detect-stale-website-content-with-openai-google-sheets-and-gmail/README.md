# 📊 Detect stale website content with OpenAI, Google Sheets, and Gmail

> ⚡ **13 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Stale Content Detector for Websites

### Who is this for
Content marketers, SEO managers, and website owners who want to automatically find pages on their site that are outdated or need refreshing — without manually auditing every page.

### What it does
This workflow fetches your sitemap, identifies pages that have not been updated in a configurable number of days, fetches each stale page, and uses AI to assess whether the content is actually outdated or still accurate.

- **Sitemap parsing**: Fetches your sitemap.xml and extracts all URLs with their last-modified dates
- **Staleness filtering**: Flags pages not updated in more than X days (default: 180) and sorts by most stale first
- **Page content extraction**: Fetches each stale page and extracts the title and body text
- **AI freshness analysis**: An OpenAI-powered agent reviews each page and rates it LOW, MEDIUM, HIGH, or CRITICAL with specific update suggestions
- **Audit logging**: Saves every reviewed page to a Google Sheet with the full AI analysis
- **HTML email report**: Builds a color-coded summary email showing each flagged page with its AI verdict and sends one consolidated digest

### How to set up
1. Open **Site Configuration** and set your `sitemapUrl`, `staleDays` (default: 180), and `alertEmail`
2. Create a Google Sheet with a **ContentAudit** tab (columns: scan_date, page_url, last_modified, days_since_update, ai_review)
3. Paste your Google Sheet URL into the **Save to Content Audit Sheet** node
4. Connect your Gmail OAuth2 credentials on the **Email Content Audit Report** node
5. Connect your Google Sheets credentials
6. Connect your OpenAI API credentials on the **OpenAI Chat Model** node
7. Activate — runs every Monday at 7 AM

### Requirements
- n8n account (cloud or self-hosted)
- A website with a sitemap.xml (most CMS platforms generate one automatically)
- OpenAI API key (uses gpt-4o-mini)
- Gmail account with OAuth2
- Google Sheets

### How to customize
- Change the `staleDays` threshold in Site Configuration (default: 180 days / 6 months)
- Increase the page limit above 20 in the Code node for larger sites
- Add specific URL path filters to focus on blog posts, docs, or landing pages only
- Replace Gmail with Slack for faster team notifications
- Connect to your CMS API (WordPress, Ghost, Webflow) to pull content directly instead of scraping

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
