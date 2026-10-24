# 📊 Monitor social media trends across Reddit, Instagram & TikTok with Apify

> ⚡ **7,696 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

**📺 Full walkthrough video: https://youtu.be/Me4d4BILvHk**


## What it does
This workflow automatically monitors trending content across Reddit, Instagram, and TikTok using keywords you define. It scrapes the most engaging posts, calculates platform-specific engagement scores, ranks content in a unified leaderboard, and delivers a professional HTML email dashboard — while storing historical data in a structured table for long-term trend tracking.

No manual research. No tab switching. Just the top-performing content in your inbox, automatically.

## Who's it for
Social media managers, content creators, brand managers, marketing teams, and agencies who need to track keyword performance and trending content across multiple platforms for competitive analysis, content inspiration, and influencer discovery.

## How it works
The workflow runs a full scraping cycle for each keyword in your list:

- **Reddit Monitoring**: Searches top posts by keyword with upvotes and comment data
- **Instagram Monitoring**: Scrapes hashtag-based posts with likes and comments
- **TikTok Analysis**: Tracks hashtag content including views, likes, shares, and comments
- **Engagement Scoring**: Applies platform-specific algorithms to rank content objectively
- **Unified Ranking**: Combines all platforms into a single top 15 leaderboard
- **Email Report**: Delivers a formatted HTML dashboard with clickable links to original posts
- **Data Storage**: Pushes all results into a DataTable for historical tracking and trend analysis

## Requirements

- Apify account (free tier works — no recurring cost)
- Gmail account for report delivery
- n8n instance (cloud or self-hosted)
- Platform scrapers: Reddit Scraper Lite, Instagram Scraper, TikTok Scraper

## How to set up

### Step 1: Configure Apify credentials
- Set up Apify API authentication in n8n
- Ensure access to the required scrapers:
  - Reddit: `trudax~reddit-scraper-lite`
  - Instagram: `apify~instagram-scraper`
  - TikTok: `clockworks~tiktok-scraper`
- Install the Apify community node: https://docs.apify.com/platform/integrations/n8n

### Step 2: Add your keywords
Open the **"Query social media"** DataTable and add one keyword per row. The Loop Over Query node automatically runs a full Reddit + Instagram + TikTok scraping cycle for every keyword — no limit on the number of keywords.

### Step 3: Configure search parameters

Reddit:
- Search terms via `searches` array
- Sort: `top` (alternatives: hot, new, relevance)
- Time period: `month` (alternatives: hour, day, week, year, all)
- Limits: maxItems 50, maxPostCount 25

Instagram:
- Target hashtags via `directUrls`
- Results type: `posts`
- Time filter: `onlyPostsNewerThan: 7 days`
- Result limit: 15

TikTok:
- Target hashtags via `hashtags` array
- Results per page: 20
- Time filter: `oldestPostDateUnified: 7 days`

### Step 4: Set up email reporting
- Configure Gmail OAuth2 credentials in n8n
- Update the recipient email address in the **Send a message** node
- Customize subject and styling as needed

### Step 5: Schedule the workflow
Add a Schedule Trigger to run the workflow automatically — daily, weekly, or at any interval that suits your monitoring needs.

## Engagement scoring methodology

### Platform-specific algorithms

**Reddit**
`Score = (upvotes × 1) + (comments × 2)`
Comments weighted higher as they indicate deeper community engagement.

**Instagram**
`Score = (likes × 1) + (comments × 2)`
Focused on recent content to capture trending moments. Carousel sub-items excluded to avoid duplicates.

**TikTok**
`Score = (likes × 1) + (comments × 2) + (shares × 3) + (views ÷ 1000)`
Shares heavily weighted (×3) as the strongest viral indicator. Views normalized to balance with other metrics.

### Performance levels
Content is automatically classified into three tiers:
- **High**: Score ≥ 10,000 — viral or highly engaging content
- **Medium**: Score ≥ 1,000 — solid engagement, worth monitoring
- **Low**: Score &lt; 1,000 — baseline engagement

## Results & dashboard

The automated email report includes:
- **Cross-platform leaderboard**: Top 15 posts ranked by unified engagement score
- **Platform breakdown**: Total score per network (TikTok / Reddit / Instagram)
- **Per-post detail**: Author, content preview, score, level, and direct link to original post
- **Historical DataTable**: One row per post with keyword, source, score, date — queryable over time

## How to customize

### Keyword targeting
- Add as many keywords as needed — one row per keyword in the DataTable
- Use brand names, product names, competitor terms, or campaign hashtags
- Adjust for seasonal trends or campaign periods

### Scoring adjustments
Modify the Code nodes to:
- Change metric multipliers based on your priorities
- Add recency bonuses for fresher content
- Filter out low-quality or spam content
- Integrate sentiment scoring for brand monitoring

### Reporting enhancements
- Add multiple email recipients
- Export results to Google Sheets or Airtable
- Set alert thresholds for high-performing content
- Connect to Slack or Teams for real-time notifications

## Use cases

**Brand & competitive monitoring**
Track brand mentions, competitor content performance, and market positioning across all three platforms simultaneously.

**Content strategy**
Identify top-performing content formats, discover effective hashtags, and spot emerging trends before they peak.

**Influencer discovery**
Find creators driving the most engagement in your niche and evaluate potential collaborators based on real performance data.

**Campaign tracking**
Monitor hashtag campaigns, track sponsored content performance, and measure share of voice over time.

## Limitations

- Subject to Apify scraper quotas (free tier: ~$5 credit/month included)
- Some private or restricted content may not be accessible
- 30-second processing waits between platforms to prevent rate limiting
- Dependent on third-party scraper availability and maintenance

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
