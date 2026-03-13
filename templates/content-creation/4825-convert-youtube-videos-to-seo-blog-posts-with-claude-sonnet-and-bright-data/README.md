# 🎬 Convert YouTube videos to SEO blog posts with Claude Sonnet and Bright Data

> ⚡ **91 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Automatically scrape YouTube videos by keyword, generate SEO blog posts with Claude AI, and publish to Blogger with tracking.

# Convert YouTube videos to blog posts with Claude AI and Bright Data

Automate the entire process of discovering YouTube videos, transforming them into professional blog content, and publishing to Blogger—all while tracking everything in Google Sheets.

Perfect for content marketers, bloggers, and businesses who want to scale their content production without manual effort.

---

## What this workflow does

This automation handles four key tasks:

1. **Scrapes YouTube videos** - Uses Bright Data to search YouTube by keyword and extract video titles, descriptions, and metadata
2. **Generates blog content** - Claude AI transforms video information into 600+ word SEO-optimized blog posts
3. **Publishes automatically** - Posts go live on your Blogger account without manual intervention
4. **Tracks everything** - Logs video titles and published URLs to Google Sheets for easy monitoring

---

## How it works

The workflow begins when you submit a keyword through a form. Bright Data searches YouTube and extracts video data matching your keyword. The system checks scraping progress every minute until data is ready.

Once videos are retrieved, the workflow processes them in batches. For each video, it extracts the title, description, and channel details. Claude AI then writes a professional blog post using a conversational tone suitable for publication.

The generated content is cleaned to remove markdown formatting. Finally, the blog publishes to Blogger and the workflow saves the video title plus live blog URL to Google Sheets. A 1-minute pause between batches prevents rate limiting.

---

## Setup requirements

**Accounts needed:**
- n8n instance (self-hosted or cloud)
- Bright Data account with YouTube scraping access
- Anthropic API key for Claude AI
- Google account with Sheets and Blogger access

**Estimated setup time:** 10-15 minutes

---

## Setup steps

### 1. Import workflow
- Copy the workflow JSON
- Open n8n → Workflows → Import from JSON
- Paste and import
- Verify all nodes are connected

### 2. Configure Bright Data
- Add HTTP Header Auth credential
- Set Authorization header: `Bearer YOUR_API_KEY`
- Update "Start YouTube Video Scraper" node with your dataset ID
- Test the connection

### 3. Set up Claude AI
- Add Anthropic API credential
- Enter your API key
- Model is set to `claude-sonnet-4-20250514`
- Test the connection

### 4. Connect Google services
- Create a Google Sheet with columns: "YouTube Title" and "Bloger_LiveLink"
- Add Google Sheets OAuth2 credential
- Paste Sheet ID in "Save to Tracking Sheet" node
- Enable Blogger API and add OAuth credential
- Update "Publish to Blogger" node with your Blog ID

### 5. Test and activate
- Submit a test keyword through the form
- Check execution logs
- Verify blog posts appear on Blogger
- Confirm data logs to Google Sheets

---

## What gets extracted and generated

**YouTube data:**
- Video titles and descriptions
- Channel information
- Views, likes, and engagement metrics

**AI-generated content:**
- 600+ word blog posts
- SEO-optimized structure
- Professional, conversational tone
- Proper headings and formatting

**Tracking data:**
- Video titles
- Published blog URLs
- Timestamps

---

## Use cases

**Content marketing:** Repurpose trending videos into blog content at scale

**Market research:** Track competitor videos and generate analytical blog posts

**Educational content:** Convert tutorial videos into readable guides

**SEO strategy:** Build topical authority by covering trending keywords

---

## Important notes

- Replace all placeholder API keys before activation
- Ensure credentials are tested successfully
- Bright Data charges may apply based on usage
- Each video generates one blog post
- Processing time depends on video batch size

---

## Webhook access

Access the workflow via webhook form at:
```
https://your-n8n-instance.com/webhook/youtube-blog-automation
```

Submit keywords to start the automation instantly.

---

## Support

For questions or assistance:
- Email: [info@incrementors.com](info@incrementors.com)
- Contact: [https://www.incrementors.com/contact-us/](https://www.incrementors.com/contact-us/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, AI Agent, Anthropic Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
