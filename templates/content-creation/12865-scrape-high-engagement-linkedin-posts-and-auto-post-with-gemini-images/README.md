# 🎬 Scrape high-engagement LinkedIn posts and auto-post with Gemini images

> ⚡ **193 views** · 🎬 [Content Creation & Video](../)

## Description

## Who's it for

This workflow is ideal for:

- Content creators who want to replicate successful LinkedIn strategies
- Social media managers monitoring competitor content performance
- Marketing teams analyzing trending topics in their industry
- Personal brands looking to create data-driven content
- Agencies managing multiple LinkedIn accounts

## What it does

This comprehensive workflow automates the entire LinkedIn content lifecycle: it scrapes viral posts from target accounts, analyzes engagement patterns, identifies trending topics, generates original AI-powered content based on those trends, creates accompanying images, and automatically publishes to your LinkedIn profile or company page.

## How it works

**Phase 1: Data Collection (Runs every 12 hours)**

- Scheduler triggers the workflow twice daily
- Fetches LinkedIn profile URLs from Google Sheets
- Processes profiles in batches of 3 to respect API limits
- Uses Apify API to scrape recent posts from each profile
- Adds 3-second delays between requests to avoid rate limiting
- Filters for high-engagement posts (20+ likes, comments, or reposts)
- Saves viral posts to Google Sheets with full metadata

**Phase 2: Content Generation (Triggered by new data)**

- Monitors Google Sheets for new viral posts every minute
- Filters posts published within the last 3 days that haven't been analyzed
- Aggregates trending content into a single dataset
- Analyzes patterns using Google Gemini AI to identify:
  - Common themes and topics
  - Engagement triggers and hooks
  - Successful content structures
  - Trending hashtags and formats
- Generates original LinkedIn post with proper formatting
- Creates AI image prompt optimized for minimal text
- Generates professional image using Google Imagen
- Publishes complete post to your LinkedIn account
- Marks analyzed posts as complete to prevent duplication

## Setup steps

**1. Configure Google Sheets**

- Create a new Google Sheet with two tabs:
  - Tab 1: "usernames & links" - Add LinkedIn profile URLs you want to monitor
  - Tab 2: "scrape data" - Leave empty (auto-populated by workflow)
- Connect your Google Sheets credentials in both nodes
- Replace all instances of `YOUR_GOOGLE_SHEET_ID` with your actual sheet ID
- Replace `SHEET_GID` values with your actual sheet GIDs

**2. Set up Apify API**

- Sign up for Apify account and get API token
- Replace `YOUR_APIFY_API_TOKEN` in "Scrape LinkedIn Posts API" node
- Note: Apify has free tier with limited requests

**3. Configure Google Gemini credentials**

- Obtain Google PaLM API credentials
- Add credentials to both "Google Gemini Chat Model" and "Generate an image" nodes

**4. Set up LinkedIn publishing**

- Connect your LinkedIn credentials in "Publish to LinkedIn" node
- If posting as organization, replace `YOUR_LINKEDIN_ORGANIZATION_ID` with your company page ID
- If posting as individual, change "postAs" parameter to "person"

**5. Configure scheduling**

- Default schedule: every 12 hours
- Adjust "LinkedIn Content Automation Scheduler" trigger if needed
- Consider your API rate limits when changing frequency

**6. Test the workflow**

- Manually trigger Phase 1 to scrape posts
- Verify data appears in Google Sheets "scrape data" tab
- Wait for Phase 2 trigger or manually activate it
- Check that content is generated and published correctly
- Verify posts are marked as analyzed in Google Sheets

## Requirements


- Google Sheets API access (free)
- Google Sheets Trigger OAuth2 (free)
- Apify API token (free tier available, $49/month for more)
- Google PaLM/Gemini API key (pay-per-use pricing)
- LinkedIn OAuth credentials (free)



## How to customize

**Adjust scraping targets:**

- Add more LinkedIn profile URLs to your Google Sheets
- Change batch size in "Process Profiles in Batches" (default: 3)
- Modify post limit per profile in Apify API call (default: 1 post)

**Modify engagement filters:**

- Edit "Filter High-Engagement Posts" node thresholds
- Default: 20+ likes OR 20+ comments OR 20+ reposts
- Adjust based on your niche's typical engagement rates
- Add additional criteria like views or impressions

**Customize content analysis window:**

- Change "Filter Recent Posts (3 Days)" to analyze different timeframes
- Options: 24 hours for fast-moving trends, 7 days for broader patterns
- Balance between recency and data volume

**Refine AI content generation:**

- Edit system prompt in "LinkedIn Content Strategy AI" node
- Adjust content length, tone, or style preferences
- Add industry-specific guidelines
- Include brand voice requirements
- Modify hashtag strategy

**Customize image generation:**

- Edit image prompt structure in AI prompt
- Change visual style, colors, or composition
- Adjust for brand guidelines
- Modify dimensions or aspect ratios

**Change posting schedule:**

- Adjust "LinkedIn Content Automation Scheduler" frequency
- Consider optimal posting times for your audience
- Balance between content quality and posting frequency
- Coordinate with other marketing activities

**Enhance data collection:**

- Increase posts per profile in Apify settings
- Add more profile URLs to monitor
- Implement competitor tracking
- Track additional metrics like impressions or click-through rates

**Add notifications:**

- Connect Slack/Email nodes after successful posts
- Set up alerts for high-performing content
- Create reports of analyzed trends
- Monitor API usage and errors

## 🔗 Nodes Used

Google Sheets, HTTP Request, LinkedIn, Schedule Trigger, Google Sheets Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
