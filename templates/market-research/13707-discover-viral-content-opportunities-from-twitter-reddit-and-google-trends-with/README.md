# 📊 Discover viral content opportunities from Twitter, Reddit and Google Trends with Claude AI

> ⚡ **34 views** · 📊 [Market Research & Insights](../)

## Description

Automatically discovers trending topics in your niche and generates ready-to-use content ideas with AI.

## 🎯 How It Works

### 1. **Multi-Source Trend Monitoring**
   - Twitter/X trending topics and hashtags
   - Reddit hot posts from niche subreddits
   - Google Trends daily search trends
   - Runs every 2 hours for fresh opportunities

### 2. **Smart Filtering & Scoring**
   - Filters by your niche keywords
   - Removes duplicates across sources
   - Calculates viral potential score (0-100)
   - Ranks by engagement, recency, and relevance
   - Prevents suggesting already-covered topics

### 3. **AI Content Generation**
   - Uses Claude AI to analyze each trend
   - Generates 5 unique content ideas per trend
   - Provides hooks, key points, and platform recommendations
   - Explains why each idea has viral potential

### 4. **Comprehensive Delivery**
   - Beautiful HTML email digest with all opportunities
   - Slack summary for quick review
   - Database logging for tracking
   - Research links for deeper investigation

## ⚙️ Configuration Guide

### Step 1: Configure Your Niche
Edit the **"Load Niche Config"** node:

```javascript
niche: 'AI & Technology',  // Your industry
keywords: [                 // Topics to track
  'artificial intelligence',
  'machine learning',
  'AI tools',
  // Add your keywords
],
subreddits: 'artificial+machinelearning',  // Relevant subreddits
thresholds: {
  minTwitterLikes: 1000,    // Minimum engagement
  minRedditUpvotes: 500,
  minComments: 50
}
```

### Step 2: Connect Data Sources

**Twitter/X API:**
- Sign up for Twitter Developer Account
- Get API credentials (OAuth 2.0)
- Add credentials to "Fetch Twitter/X Trends" node

**Reddit API:**
- Create Reddit app: https://www.reddit.com/prefs/apps
- Get OAuth credentials
- Add credentials to "Fetch Reddit Hot Topics" node

**Google Trends:**
- No authentication needed (public API)
- Already configured in workflow

### Step 3: Configure AI Integration

**Anthropic Claude API:**
- Get API key from: https://console.anthropic.com/
- Add credentials to "AI - Generate Content Ideas" node
- Alternative: Use OpenAI GPT-4 by modifying the node

### Step 4: Setup Notifications

**Email:**
- Configure SMTP in "Send Email Digest" node
- Update recipient email address
- Customize HTML template if desired

**Slack:**
- Create incoming webhook: https://api.slack.com/messaging/webhooks
- Add webhook URL to "Send Slack Summary" node
- Customize channel name

### Step 5: Database (Optional)
- Create PostgreSQL database with schema below
- Add credentials to "Log to Content Database" node
- Skip if you don't need database tracking

### Database Schema
```sql
CREATE TABLE content.viral_opportunities (
  id SERIAL PRIMARY KEY,
  opportunity_id VARCHAR(255) UNIQUE,
  detected_at TIMESTAMP,
  topic TEXT,
  source VARCHAR(50),
  source_url TEXT,
  engagement BIGINT,
  viral_score INTEGER,
  opportunity_level VARCHAR(20),
  niche VARCHAR(100),
  content_ideas JSONB,
  research_links JSONB,
  urgency TEXT,
  status VARCHAR(50),
  created_at TIMESTAMP DEFAULT NOW()
);
```

## 🎨 Customization Options

### Adjust Scan Frequency
Edit "Every 2 Hours" trigger:
- More frequent: Every 1 hour
- Less frequent: Every 4-6 hours
- Consider API rate limits

### Tune Viral Score Algorithm
Edit "Calculate Viral Potential Score" node:
- Adjust engagement weight (currently 40%)
- Change recency importance (currently 30%)
- Modify threshold in "Filter High Potential Only" (currently 40)

### Customize Content Ideas
Modify the AI prompt in "AI - Generate Content Ideas":
- Change number of ideas (currently 5)
- Add specific format requirements
- Include brand voice guidelines
- Target specific platforms

## 📊 Expected Results

Typical scan finds:
- **5-15 opportunities** per scan (2 hours)
- **3-5 HIGH priority** (score 75+)
- **25+ content ideas** generated
- **Email sent** with full digest
- **Slack alert** for quick review

## 💡 Pro Tips

1. **Timing Matters**: Create content within 24-48 hours of detection
2. **High Priority First**: Focus on opportunities scoring 75+
3. **Platform Match**: Choose platforms where your audience is active
4. **Add Your Voice**: Use AI ideas as starting points, not final copy
5. **Track Performance**: Note which opportunity types perform best
6. **Refine Keywords**: Regularly update your niche keywords based on results
7. **Mix Formats**: Try different content formats for same trend

## 🚨 Important Notes

⚠️ **API Rate Limits:**
- Twitter: Monitor rate limits closely
- Reddit: 60 requests per minute
- Claude AI: Tier-based limits
- Consider caching results

💰 **Cost Considerations:**
- Twitter API: May require paid tier
- Reddit API: Free for reasonable use
- Claude AI: ~$0.50-1.00 per scan
- Total: ~$15-30/month estimated

🎯 **Best Practices:**
- Start with 1-2 sources, add more later
- Test with broader keywords initially
- Review first few reports to tune scoring
- Don't create content for every opportunity
- Quality over quantity

## 🔄 What Happens Next?

1. Workflow runs every 2 hours
2. Scans Twitter, Reddit, Google Trends
3. Filters by your keywords
4. Scores viral potential
5. Generates AI content ideas
6. Sends digest to email + Slack
7. Logs to database
8. Marks topics as suggested
9. Repeat!

## 🔗 Nodes Used

Send Email, HTTP Request, Postgres, Slack, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.
