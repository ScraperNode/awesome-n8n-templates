# 🎬 Repurpose YouTube videos into multi-platform content with OpenAI and Anthropic

> ⚡ **251 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### Advanced Multi-Platform Content Distribution System

**What This Workflow Does:**
- Monitors your YouTube channel for new videos
- Downloads and processes video transcripts
- Uses AI to generate multiple content formats
- Automatically publishes to various platforms
- Handles rate limiting with strategic wait periods

**Content Outputs:**
✂️ Short-form clips (60s scripts)
📝 Blog posts (SEO optimized)
🧵 Twitter/X threads
📱 LinkedIn posts
🎯 SEO-optimized titles & descriptions

**Key Features:**
⏱️ Rate limiting with Wait nodes
🔄 Error handling & retries
🎨 AI-powered content adaptation
📊 Multi-format generation
🚀 Auto-publishing pipeline

**Requirements:**
- YouTube Data API key
- OpenAI/Anthropic API key
- Platform credentials (Twitter, LinkedIn, WordPress)
- Google Drive (optional backup)

**Workflow Stages:**
1️⃣ Video Discovery & Transcript Extraction
2️⃣ AI Content Generation (with rate limiting)
3️⃣ Content Formatting & Optimization
4️⃣ Multi-Platform Publishing

### 📊 Monitoring & Success Tracking

**Metrics Tracked:**
- Videos processed
- Content pieces generated
- Successful publications
- Failed attempts
- API costs
- Processing time

**Logging:**
All content saved to Google Drive for:
- Backup purposes
- Quality review
- Performance analysis
- Future optimization

**Notifications:**
- Slack alerts on completion
- Email summary reports
- Error notifications

**Analytics Integration:**
Track performance across:
- Blog pageviews
- Twitter engagement
- LinkedIn impressions
- SEO rankings

**Optimization Loop:**
Use analytics to:
- Refine AI prompts
- Adjust publishing times
- Identify top-performing formats
- Improve content quality

💡 **Tip:** Adjust wait times based on your API rate limits!

## 🔗 Nodes Used

HTTP Request, Google Drive, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
