# ⚡ Create a personalized daily newsletter with Google Gemini AI and RSS feeds

> ⚡ **17,193 views** · ⚡ [Personal Productivity](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

### Who's it for

This workflow is for anyone who wants to stay informed without the overwhelm. Whether you're tracking industry news, following your favorite blogs, monitoring competitors, or just keeping up with topics you care about—this automated newsletter keeps you in the loop effortlessly.

### What it does

This automated workflow fetches content from your favorite RSS feeds, filters it based on your interests using Google Gemini AI, and sends you a beautifully formatted HTML newsletter at your preferred time. The AI selects the top 10-15 items from each category based on keywords you define, delivering only what matters to you.

### How it works

1. **Schedule Trigger**: Runs daily at your chosen time (default: 9:00 AM)
2. **RSS Feeds**: Fetches content from your favorite news sources and websites
3. **Processing**: Splits URLs, loops through feeds in batches to avoid rate limits
4. **Merge & Convert**: Combines all RSS items into a single CSV file
5. **AI Curation**: Google Gemini analyzes the content and selects relevant items based on your keywords
6. **Email Delivery**: Sends a personalized HTML newsletter with summaries and images

### Requirements

- **Google Gemini API** credentials (for AI curation)
- **SMTP credentials** (for sending emails)
- Active n8n instance (self-hosted or cloud)

### How to set up

1. Add your **Google Gemini API credentials** in both Gemini nodes
2. Configure your **SMTP settings** in the "Send email" node
3. Update the **email addresses** (from and to) in the email node
4. Add your **favorite RSS feed URLs** in the "Set" nodes
5. Customize the **AI keywords** in "Analyze document" to match your interests
6. Set your preferred **schedule time** in the trigger node

### How to customize

- **Add your RSS feeds**: Replace the example URLs in both "Set" nodes with RSS feeds from your favorite sources (blogs, news sites, podcasts, YouTube channels, etc.)
- **Define your interests**: Modify the keywords in the "Analyze document" AI prompt to filter content that matters to you
- **Adjust categories**: Change the two sections to match your needs (e.g., "Industry News" and "Competitor Updates" or "Learning Resources" and "Tools")
- **Change email format**: Update the HTML template in the AI prompt to customize the newsletter design
- **Modify delivery time**: Update the schedule trigger to run at your preferred time

## 🔗 Nodes Used

Send Email, RSS Read, Schedule Trigger, Convert to File, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
