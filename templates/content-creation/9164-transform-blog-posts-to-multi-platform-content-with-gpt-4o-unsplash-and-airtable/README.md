# 🎬 Transform blog posts to multi-platform content with GPT-4o, Unsplash and Airtable

> ⚡ **414 views** · 🎬 [Content Creation & Video](../)

## Description

### How it works
• RSS feed monitors your blog for new posts automatically
• Extracts and cleans full article content from the blog post
• AI Chain (GPT-4o) transforms content into 5 platform-optimized formats (LinkedIn, Twitter, Instagram, Email, Video)
• Unsplash API suggests relevant images for each content piece
• Slack notification alerts content team with preview of all formats
• Airtable logs everything for content calendar tracking
• Optional auto-posting to LinkedIn and Twitter (disabled by default)
• Structured output parser ensures all 5 formats are generated correctly with proper character limits

### Set up steps
• **Time to set up:** 10-15 minutes
• Replace RSS feed URL with your blog's feed (common formats: /feed, /rss, /feed.xml)
• Get Slack channel ID for content team notifications
• Create Airtable base with 14 columns (Original_Title, Original_URL, Published_Date, LinkedIn_Post, LinkedIn_Hashtags, Twitter_Thread, Twitter_Hashtags, Instagram_Caption, Instagram_Hashtags, Email_Subject, Email_Body, Video_Script, Suggested_Images, Status)
• Add credentials: OpenAI (GPT-4o), Unsplash API, Slack OAuth2, Airtable Token
• Replace placeholder IDs in Slack and Airtable nodes
• Optional: Enable LinkedIn/Twitter auto-posting nodes and add OAuth2 credentials

### What you'll need
• **OpenAI API** - GPT-4o access for AI content repurposing
• **Unsplash API** - Free tier available for image suggestions
• **Slack** - Standard workspace for team notifications
• **Airtable** - Free plan works for content tracking
• **Blog with RSS feed** - WordPress, Ghost, Medium, Webflow all supported
• **LinkedIn/Twitter OAuth2** (optional) - For auto-posting feature

### Who this is for
Content creators, marketing teams, and agencies that want to maximize content ROI by automatically repurposing blog posts into platform-specific content. Perfect for B2B companies publishing regular blog content who need consistent multi-platform presence without manual reformatting.

## 🔗 Nodes Used

Airtable, HTTP Request, RSS Read, Slack, X (Formerly Twitter), LinkedIn

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
