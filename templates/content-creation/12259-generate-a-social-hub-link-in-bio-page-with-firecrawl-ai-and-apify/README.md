# 🎬 Generate a social hub link-in-bio page with FireCrawl AI and Apify

> ⚡ **4 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Generate Social Hub (link-in-bio) page with FireCrawl AI and Apify

This n8n template demonstrates how to create a link-in-bio style landing page (similar to Linktree or Beacons.ai) that automatically aggregates all social media links from any website. 

**Author's Note:** I built this because I was tired of manually inserting my social media links and copying business descriptions from my website one by one into the link-in-bio platform. What used to take me 10-15 minutes now happens automatically in under a minute. Hope it saves you time too.

Use cases are many: Try creating instant social hubs for sales leads or generating quick bio pages for directory listings.

### Good to know

- At time of writing, FireCrawl offers free tier with 500 credits per month. See [FireCrawl pricing](https://www.firecrawl.dev) for updated info.
- Apify offers a free tier with enough credits for testing and small projects. Actor usage costs vary based on compute time.
- The generated HTML is fully responsive and can be embedded directly or saved as a standalone page.
- Average processing time is 30-45 seconds per website depending on the size and complexity.

### How it works

1. We'll collect a website URL via a form trigger (accessible through webhook).
2. Apify's Contact Details Scraper Actor extracts emails, phone numbers, and social media links from the submitted website.
3. FireCrawl AI analyzes the website content and generates a short, compelling business description (1-2 sentences, under 150 characters).
4. Both results are merged and processed to identify specific social platforms (Facebook, Instagram, Twitter/X, LinkedIn, YouTube, TikTok, WhatsApp).
5. The system generates a HTML page with link-in-bio style layout, featuring brand colors, social icons, and the business description.
6. The result is displayed as a formatted HTML response directly in the form - ready to share, embed, or save.

### How to use

- The form trigger is used as the entry point, but you can replace this with other triggers such as a webhook, schedule, or manual trigger for batch processing.
- You can process multiple websites by looping through a list, though processing will take longer (approximately 30-45 seconds per site).
- The debug node at the bottom lets you preview and edit the HTML styling before deployment.

### Requirements

- Apify API key (get one at [https://apify.com](https://apify.com))
- Enable the Contact Details Scraper Actor at [https://console.apify.com/actors/WYyiMAvNXhfc2Rthx/input](https://console.apify.com/actors/WYyiMAvNXhfc2Rthx/input)
- FireCrawl API key (get free access at [https://www.firecrawl.dev](https://www.firecrawl.dev))
- Valid website URLs to analyze (must be publicly accessible)

### Customizing this workflow

1. **Adjust wait time**: The default wait time is 30 seconds in the "Wait for the Apify Scraper Process" node. Increase this if your scraper needs more time for larger websites.
2. **Modify description extraction**: Edit the extraction prompt in the "Scrape website description" node to change the description length or style. FireCrawl's `/extract` endpoint supports natural language prompts for structured data extraction.
3. **Change HTML styling**: Edit the CSS in the "Create html format" node to customize colors, fonts, layout, or add animations. The current design uses a purple gradient background with white cards.
4. **Debug HTML output**: Use the "View HTML for redesign or debug" node at the bottom to preview the generated HTML without submitting through the webhook.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
