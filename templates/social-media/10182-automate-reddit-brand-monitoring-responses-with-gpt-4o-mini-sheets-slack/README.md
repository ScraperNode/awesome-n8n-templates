# 📱 Automate Reddit brand monitoring & responses with GPT-4o-mini, Sheets & Slack

> ⚡ **886 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.

## Description

## How it Works

This workflow automates intelligent Reddit marketing by monitoring brand mentions, analyzing sentiment with AI, and engaging authentically with communities. Every 24 hours, the system searches Reddit for posts containing your configured brand keywords across all subreddits, finding up to 50 of the newest mentions to analyze.

Each discovered post is sent to OpenAI's GPT-4o-mini model for comprehensive analysis. The AI evaluates sentiment (positive/neutral/negative), assigns an engagement score (0-100), determines relevance to your brand, and generates contextual, helpful responses that add genuine value to the conversation. It also classifies the response type (educational/supportive/promotional) and provides reasoning for whether engagement is appropriate.

The workflow intelligently filters posts using a multi-criteria system: only posts that are relevant to your brand, score above 60 in engagement quality, and warrant a response type other than "pass" proceed to engagement. This prevents spam and ensures every interaction is meaningful.

Selected posts are processed one at a time through a loop to respect Reddit's rate limits. For each worthy post, the AI-generated comment is posted, and complete interaction data is logged to Google Sheets including timestamp, post details, sentiment, engagement scores, and success status. This creates a permanent audit trail and analytics database.

At the end of each run, the workflow aggregates all data into a comprehensive daily summary report with total posts analyzed, comments posted, engagement rate, sentiment breakdown, and the top 5 engagement opportunities ranked by score. This report is automatically sent to Slack with formatted metrics, giving your team instant visibility into your Reddit marketing performance.

---

## Who is this for?

- **Brand managers and marketing teams** needing automated social listening and engagement on Reddit
- **Community managers** responsible for authentic brand presence across multiple subreddits
- **Startup founders and growth marketers** who want to scale Reddit marketing without hiring a team
- **PR and reputation teams** monitoring brand sentiment and responding to discussions in real-time
- **Product marketers** seeking organic engagement opportunities in product-related communities
- **Any business** that wants to build authentic Reddit presence while avoiding spammy marketing tactics

---

## Setup Steps

- **Setup time:** Approx. 30-40 minutes (credential configuration, keyword setup, Google Sheets creation, Slack integration)
- **Requirements:**
    - Reddit account with OAuth2 application credentials (create at reddit.com/prefs/apps)
    - OpenAI API key with GPT-4o-mini access
    - Google account with a new Google Sheet for tracking interactions
    - Slack workspace with posting permissions to a marketing/monitoring channel
    - Brand keywords and subreddit strategy prepared

1. **Create Reddit OAuth Application:** Visit reddit.com/prefs/apps, create a "script" type app, and obtain your client ID and secret
2. **Configure Reddit Credentials in n8n:** Add Reddit OAuth2 credentials with your app credentials and authorize access
3. **Set up OpenAI API:** Obtain API key from platform.openai.com and configure in n8n OpenAI credentials
4. **Create Google Sheet:** Set up a new sheet with columns: timestamp, postId, postTitle, subreddit, postUrl, sentiment, engagementScore, responseType, commentPosted, reasoning
5. **Configure these nodes:**
    - **Brand Keywords Config:** Edit the JavaScript code to include your brand name, product names, and relevant industry keywords
    - **Search Brand Mentions:** Adjust the limit (default 50) and sort preference based on your needs
    - **AI Post Analysis:** Customize the prompt to match your brand voice and engagement guidelines
    - **Filter Engagement-Worthy:** Adjust the engagementScore threshold (default 60) based on your quality standards
    - **Loop Through Posts:** Configure max iterations and batch size for rate limit compliance
    - **Log to Google Sheets:** Replace YOUR_SHEET_ID with your actual Google Sheets document ID
    - **Send Slack Report:** Replace YOUR_CHANNEL_ID with your Slack channel ID
6. **Test the workflow:** Run manually first to verify all connections work and adjust AI prompts
7. **Activate for daily runs:** Once tested, activate the Schedule Trigger to run automatically every 24 hours

---

## Node Descriptions (10 words each)

1. **Daily Marketing Check** - Schedule trigger runs workflow every 24 hours automatically daily
2. **Brand Keywords Config** - JavaScript code node defining brand keywords to monitor Reddit
3. **Search Brand Mentions** - Reddit node searches all subreddits for brand keyword mentions
4. **AI Post Analysis** - OpenAI analyzes sentiment, relevance, generates contextual helpful comment responses
5. **Filter Engagement-Worthy** - Conditional node filters only high-quality relevant posts worth engaging
6. **Loop Through Posts** - Split in batches processes each post individually respecting limits
7. **Post Helpful Comment** - Reddit node posts AI-generated comment to worthy Reddit discussions
8. **Log to Google Sheets** - Appends all interaction data to spreadsheet for permanent tracking
9. **Generate Daily Summary** - JavaScript aggregates metrics, sentiment breakdown, generates comprehensive daily report
10. **Send Slack Report** - Posts formatted daily summary with metrics to team Slack channel

## 🔗 Nodes Used

Google Sheets, Slack, Reddit, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
