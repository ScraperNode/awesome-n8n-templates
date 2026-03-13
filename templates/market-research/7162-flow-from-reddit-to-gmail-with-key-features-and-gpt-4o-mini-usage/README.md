# 📊 Flow from Reddit to Gmail with key features and GPT-4o mini usage

> ⚡ **351 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

**What it does**

Automatically monitors multiple subreddits daily, identifies trending posts with high engagement, and delivers AI-powered summaries directly to your inbox. Never miss important discussions in your favorite communities again.

**Perfect for**

Investors tracking market sentiment, researchers monitoring industry discussions, content creators finding trending topics, or anyone wanting curated Reddit insights without endless scrolling.

**Apps used**

Reddit, OpenRouter (GPT-4o mini), Gmail

**How it works**

1. Triggers daily at your chosen time across all specified subreddits
2. Fetches hot posts from the last 24 hours with scores above 30 upvotes
3. Sorts posts by engagement score to prioritize trending content
4. Extracts post content plus top-level comments for full context
5. Generates concise AI summaries for each high-value thread
6. Compiles summaries into a clean HTML email digest
7. Delivers the digest to your Gmail inbox with clickable Reddit links

**Setup**

Configure these three essential settings:

- **Schedule time**: Set your preferred daily delivery time in the Schedule Trigger node. **Replace with your preferred hour** (currently 6 AM). Note: Times display in your workflow timezone
- **Topic and subreddits**: In the "Set Topic, Subreddits and Email Address" node, **replace with your topic name** (e.g., "Investing") and **replace with your subreddit array** (e.g., ["investing", "stocks"])
- **Email recipient**: **Replace with your Gmail address** in the same node

**Credentials**

Reddit OAuth2 for API access, OpenRouter API key for AI summaries, Gmail OAuth2 for email delivery

**If you have any questions in running the workflow, feel free to reach out to me at my youtube channel:** https://www.youtube.com/@lifeofhunyao

## 🔗 Nodes Used

Execute Sub-workflow, Gmail, Reddit, Execute Workflow Trigger, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
