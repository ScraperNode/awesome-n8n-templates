# 📊 Monitor Instagram hashtag trends and email HTML reports with Apify and Gmail

> ⚡ **140 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

**📺 Full walkthrough video: https://www.youtube.com/watch?v=Me4d4BILvHk**

## What it does
This workflow automatically monitors trending content on Instagram using keywords you define. It scrapes the most engaging posts, calculates an engagement score based on likes and comments, ranks content in a leaderboard, and delivers a professional HTML email dashboard — while storing historical data in a structured table for long-term trend tracking.

No manual research. No tab switching. Just the top-performing Instagram content in your inbox, automatically.

## Who's it for
Social media managers, content creators, brand managers, marketing teams, and agencies who need to track hashtag performance and trending Instagram content for competitive analysis, content inspiration, and influencer discovery.

## How it works
The workflow runs a full scraping cycle for each keyword in your list:

- **Instagram Monitoring**: Scrapes hashtag-based posts with likes and comments
- **Engagement Scoring**: Ranks content based on likes and comments
- **Email Report**: Delivers a formatted HTML dashboard with clickable links to original posts
- **Data Storage**: Pushes all results into a DataTable for historical tracking and trend analysis

## Requirements

- Apify account (free tier works — no recurring cost)
- Gmail account for report delivery
- n8n instance (cloud or self-hosted)
- Instagram Scraper: `apify~instagram-scraper`

## How to set up

### Step 1: Configure Apify credentials
- Set up Apify API authentication in n8n
- Ensure access to the Instagram scraper: `apify~instagram-scraper`
- Install the Apify community node: https://docs.apify.com/platform/integrations/n8n

### Step 2: Add your keywords
Open the **"Query social media"** DataTable and add one keyword per row. The Loop Over Query node automatically runs a full Instagram scraping cycle for every keyword — no limit on the number of keywords.

### Step 3: Configure search parameters

Instagram:
- Target hashtags via `directUrls`
- Results type: `posts`
- Time filter: `onlyPostsNewerThan: 7 days`
- Result limit: 15

### Step 4: Set up email reporting
- Configure Gmail OAuth2 credentials in n8n
- Update the recipient email address in the **Send a message** node
- Customize subject and styling as needed

### Step 5: Schedule the workflow
Add a Schedule Trigger to run the workflow automatically — daily, weekly, or at any interval that suits your monitoring needs.

## Engagement scoring methodology

**Instagram**
`Score = (likes × 1) + (comments × 2)`
Focused on recent content to capture trending moments. Carousel sub-items excluded to avoid duplicates.

### Performance levels
- **High**: Score ≥ 10,000 — viral or highly engaging content
- **Medium**: Score ≥ 1,000 — solid engagement, worth monitoring
- **Low**: Score &lt; 1,000 — baseline engagement

## Results & dashboard

The automated email report includes:
- **Instagram leaderboard**: Top 10 posts ranked by engagement score
- **Per-post detail**: Account, content preview, score, level, and direct link to original post
- **Historical DataTable**: One row per post with keyword, score, date — queryable over time

## How to customize

### Keyword targeting
- Add as many keywords as needed — one row per keyword in the DataTable
- Use brand names, product names, competitor terms, or campaign hashtags
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
Track brand mentions and competitor content performance on Instagram simultaneously.

**Content strategy**
Identify top-performing posts, discover effective hashtags, and spot emerging trends before they peak.

**Influencer discovery**
Find creators driving the most engagement in your niche and evaluate potential collaborators based on real performance data.

**Campaign tracking**
Monitor hashtag campaigns, track sponsored content performance, and measure share of voice over time.

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
