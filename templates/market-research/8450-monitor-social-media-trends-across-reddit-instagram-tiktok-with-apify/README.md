# 📊 Monitor social media trends across Reddit, Instagram & TikTok with Apify

> ⚡ **6,942 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.

## Description

## Who's it for
Social media managers, content creators, brand managers, and marketing teams who need to track keyword performance and trending content across TikTok, Instagram, and Reddit for competitive analysis and content inspiration.
## What it does
This workflow automatically monitors trending content across three major social media platforms using specified keywords. It scrapes posts from TikTok, Instagram, and Reddit, calculates engagement scores using platform-specific metrics, ranks content by performance, and generates a comprehensive HTML email report with the top-performing posts across all platforms.
## How it works
The workflow follows a sequential multi-platform scraping process:

Reddit Scraping: Searches for keyword-based posts and comments with engagement metrics
Instagram Monitoring: Analyzes hashtag-based content with likes and comments data
TikTok Analysis: Tracks hashtag performance including views, likes, shares, and comments
Score Calculation: Applies platform-specific scoring algorithms based on engagement metrics
Unified Ranking: Combines and ranks all content across platforms by engagement score
Report Generation: Creates a detailed HTML email report with top performers and analytics

## Requirements

Apify account with API access
Gmail account for report delivery
Platform-specific scrapers: Reddit Scraper Lite, Instagram Scraper, TikTok Scraper

## How to set up
### Step 1: Configure Apify credentials

Set up Apify HTTP header authentication in n8n
Ensure access to the required scrapers:

Reddit: trudax~reddit-scraper-lite
Instagram: apify~instagram-scraper
TikTok: clockworks~tiktok-scraper



### Step 2: Customize search parameters
Reddit configuration:

Search terms: Modify "searches" array with your keywords
Content type: Posts and comments (searchComments can be enabled)
Sort method: "top" (alternatives: hot, new, relevance)
Time period: "month" (alternatives: hour, day, week, year, all)
Result limits: maxItems: 50, maxPostCount: 25

Instagram configuration:

Hashtag URLs: Update directUrls with target hashtags
Results type: "posts" (alternatives: stories, reels)
Time filter: "onlyPostsNewerThan": "7 days"
Result limit: resultsLimit: 15

TikTok configuration:

Hashtags: Update hashtags array with target keywords
Results per page: resultsPerPage: 20
Time filter: "oldestPostDateUnified": "7 days"

### Step 3: Set up email reporting

Configure Gmail OAuth2 credentials
Update recipient email address in "Send a message" node
Customize email subject and styling as needed

### Step 4: Adjust scoring algorithms
Current scoring formulas:

Reddit: (upvotes × 1) + (comments × 2)
Instagram: (likes × 1) + (comments × 2)
TikTok: (likes × 1) + (comments × 2) + (shares × 3) + (views ÷ 1000)

Modify the code nodes to adjust scoring based on your priorities.
## How to customize the workflow
### Keyword and hashtag targeting

Multiple keywords: Add arrays of search terms for broader monitoring
Brand-specific terms: Include brand names, product names, competitor analysis
Seasonal tracking: Adjust keywords based on campaigns or seasonal trends
Negative filtering: Exclude irrelevant content with filtering logic

### Platform-specific customization
Reddit enhancements:

Subreddit targeting: Focus on specific communities
Comment analysis: Enable comment scraping for deeper insights
User profiling: Track specific user activity and influence

Instagram modifications:

Story monitoring: Track story mentions and hashtag usage
Influencer tracking: Monitor specific account performance
Location-based: Add geo-targeted hashtag monitoring

TikTok optimizations:

Trend detection: Identify viral sounds and effects
Creator analysis: Track trending creators in your niche
Challenge monitoring: Follow hashtag challenge performance

### Scoring and ranking customization

Weighted metrics: Adjust multipliers based on platform importance
Recency factors: Give bonus points to newer content
Quality filters: Exclude low-engagement or spam content
Sentiment analysis: Integrate sentiment scoring for brand monitoring

### Reporting enhancements

Multiple recipients: Send reports to different team members
Scheduled execution: Add scheduling triggers for automated monitoring
Data export: Save results to spreadsheets or databases
Alert thresholds: Set up notifications for high-performing content

## Engagement scoring methodology
### Platform-specific algorithms
Reddit scoring logic:

Emphasizes community engagement through upvotes and discussion
Comments weighted higher (×2) as they indicate deeper engagement
Filters out low-quality posts and spam content

Instagram scoring approach:

Balances visual appeal (likes) with engagement depth (comments)
Focuses on recent content to capture trending moments
Excludes carousel sub-items to avoid duplicate counting

TikTok scoring system:

Multi-factor algorithm considering all engagement types
Views normalized (÷1000) to balance with other metrics
Shares heavily weighted (×3) as they indicate viral potential

### Level classification
Content automatically categorized into performance tiers:

High: Score ≥ 10,000 (viral or highly engaging content)
Medium: Score ≥ 1,000 (good engagement, worth monitoring)
Low: Score &lt; 1,000 (baseline engagement)

## Results interpretation
### Comprehensive analytics dashboard
The email report includes:

Cross-platform leaderboard: Top 15 posts ranked by engagement score
Platform breakdown: Performance summary by social network
Engagement metrics: Detailed scoring and classification
Direct links: Clickable access to original content
Author tracking: Creator identification for influencer outreach

### Actionable insights

Content inspiration: Identify high-performing content formats and topics
Competitor analysis: Monitor competitor content performance
Trend identification: Spot emerging topics before they peak
Influencer discovery: Find creators driving engagement in your niche

## Use cases
### Brand monitoring and competitive analysis

Brand mention tracking: Monitor how your brand performs across platforms
Competitor surveillance: Track competitor content and engagement rates
Crisis management: Early detection of negative sentiment or issues
Market positioning: Understand your brand's social media presence

### Content strategy optimization

Content format analysis: Identify which content types perform best
Hashtag research: Discover effective hashtags for your niche
Posting timing: Analyze when high-engagement content is published
Trend forecasting: Spot emerging trends for proactive content creation

### Influencer and partnership identification

Creator discovery: Find influential voices in your industry
Partnership evaluation: Assess potential collaborator engagement rates
Campaign performance: Track sponsored content and brand partnerships
Community building: Identify active community members and advocates

## Workflow limitations

API rate limiting: Subject to Apify scraper limitations and quotas
Platform restrictions: Some content may be private or restricted
Real-time delays: 30-second waits between platform scraping prevent rate limiting
Manual execution: Currently triggered manually (easily schedulable)
Single keyword focus: Current setup optimized for one keyword at a time
Platform availability: Dependent on third-party scrapers and their maintenance

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
