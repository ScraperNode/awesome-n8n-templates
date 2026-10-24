# 📊 Monitor Reddit keyword trends and email reports with Apify

> ⚡ **15 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

**📺 Full walkthrough video: https://www.youtube.com/watch?v=Me4d4BILvHk**

## What it does
This workflow automatically monitors trending content on Reddit using keywords you define. It scrapes the most engaging posts, calculates an engagement score based on upvotes and comments, ranks content in a leaderboard, and delivers a professional HTML email dashboard — while storing historical data in a structured table for long-term trend tracking.

No manual research. No tab switching. Just the top-performing Reddit content in your inbox, automatically.

## Who's it for
Social media managers, content creators, brand managers, marketing teams, and agencies who need to track keyword performance and trending Reddit content for competitive analysis, content inspiration, and community discovery.

## How it works
The workflow runs a full scraping cycle for each keyword in your list:

- **Reddit Monitoring**: Searches top posts by keyword with upvotes and comment data
- **Engagement Scoring**: Ranks content based on upvotes and comments
- **Email Report**: Delivers a formatted HTML dashboard with clickable links to original posts
- **Data Storage**: Pushes all results into a DataTable for historical tracking and trend analysis

## Requirements

- Apify account (free tier works — no recurring cost)
- Gmail account for report delivery
- n8n instance (cloud or self-hosted)
- Reddit Scraper Lite: `trudax~reddit-scraper-lite`

## How to set up

### Step 1: Configure Apify credentials
- Set up Apify API authentication in n8n
- Ensure access to the Reddit scraper: `trudax~reddit-scraper-lite`
- Install the Apify community node: https://docs.apify.com/platform/integrations/n8n

### Step 2: Add your keywords
Open the **"Query social media"** DataTable and add one keyword per row. The Loop Over Query node automatically runs a full Reddit scraping cycle for every keyword — no limit on the number of keywords.

### Step 3: Configure search parameters

Reddit:
- Search terms via `searches` array
- Sort: `top` (alternatives: hot, new, relevance)
- Time period: `month` (alternatives: hour, day, week, year, all)
- Limits: maxItems 50, maxPostCount 25

### Step 4: Set up email reporting
- Configure Gmail OAuth2 credentials in n8n
- Update the recipient email address in the **Send a message** node
- Customize subject and styling as needed

### Step 5: Schedule the workflow
Add a Schedule Trigger to run the workflow automatically — daily, weekly, or at any interval that suits your monitoring needs.

## Engagement scoring methodology

**Reddit**
`Score = (upvotes × 1) + (comments × 2)`
Comments weighted higher as they indicate deeper community engagement.

### Performance levels
- **High**: Score ≥ 10,000 — viral or highly engaging content
- **Medium**: Score ≥ 1,000 — solid engagement, worth monitoring
- **Low**: Score &lt; 1,000 — baseline engagement

## Results & dashboard

The automated email report includes:
- **Reddit leaderboard**: Top 10 posts ranked by engagement score
- **Per-post detail**: Subreddit, content preview, score, level, and direct link to original post
- **Historical DataTable**: One row per post with keyword, score, date — queryable over time

## How to customize

### Keyword targeting
- Add as many keywords as needed — one row per keyword in the DataTable
- Use brand names, product names, competitor terms, or niche subreddit topics
- Adjust for seasonal trends or campaign periods

### Scoring adjustments
Modify the Code node to:
- Change metric multipliers based on your priorities
- Add recency bonuses for fresher content
- Filter out low-quality or spam content

### Reporting enhancements
- Add multiple email recipients
- Export results to Google Sheets or Airtable
- Set alert thresholds for high-performing content
- Connect to Slack or Teams for real-time notifications

## Use cases

**Brand & competitive monitoring**
Track brand mentions and competitor content performance on Reddit simultaneously.

**Content strategy**
Identify top-performing posts, discover effective subreddits, and spot emerging trends before they peak.

**Community discovery**
Find the most active communities in your niche and evaluate engagement based on real performance data.

**Campaign tracking**
Monitor keyword campaigns and measure share of voice over time.

## Limitations

- Subject to Apify scraper quotas (free tier: ~$5 credit/month included)
- Some private or restricted content may not be accessible
- Dependent on third-party scraper availability and maintenance

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
