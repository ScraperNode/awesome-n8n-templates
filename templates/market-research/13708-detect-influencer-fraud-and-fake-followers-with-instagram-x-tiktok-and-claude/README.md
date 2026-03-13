# 📊 Detect influencer fraud and fake followers with Instagram, X, TikTok and Claude

> ⚡ **44 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Analyzes influencer profiles and scores authenticity before brand partnership approval. Detects fake followers, bot accounts, and suspicious engagement patterns using AI-powered behavioral analysis.

## 🎯 How It Works

**Simple 7-Node Workflow:**
1. **Input** → Submit influencer username and platform (Instagram/Twitter/TikTok)
2. **Fetch** → Retrieve complete profile data and engagement metrics
3. **Analyze** → Examine follower patterns, ratios, growth velocity, engagement
4. **AI Check** → Deep behavioral analysis with Claude AI
5. **Report** → Generate comprehensive fraud assessment
6. **Notify** → Send detailed email report to partnership team
7. **Log** → Save to database for tracking

## 📊 Detection Capabilities

- **Follower Authenticity**: Analyzes follower-to-following ratio (red flag if &lt; 0.5)
- **Engagement Quality**: Calculates engagement rate (industry avg: 1-5%)
- **Growth Patterns**: Detects suspicious rapid follower spikes
- **Content Consistency**: Evaluates posting frequency and regularity
- **Profile Completeness**: Checks verification, bio, activity
- **AI Behavioral Analysis**: Deep pattern recognition for sophisticated fraud

## ⚙️ Setup Instructions

### 1. Configure API Access
**Social Platform APIs:**
- **Instagram**: Get Graph API access token from Meta for Developers
- **Twitter**: OAuth 2.0 credentials from Twitter Developer Portal
- **TikTok**: Business API credentials (optional)

**AI Analysis:**
- **Anthropic Claude API**: Get key from console.anthropic.com
- Used for advanced behavioral fraud detection

### 2. Setup Notifications
- Configure SMTP in "Send Report" node
- Update recipient email (partnerships@company.com)
- Customize HTML template if needed

### 3. Database (Optional)
- Create PostgreSQL table (schema below)
- Add database credentials to final node
- Skip if you don't need historical tracking

### Database Schema
```sql
CREATE TABLE partnerships.influencer_fraud_reports (
  id SERIAL PRIMARY KEY,
  report_id VARCHAR(255) UNIQUE,
  username VARCHAR(255),
  platform VARCHAR(50),
  profile_url TEXT,
  followers BIGINT,
  following BIGINT,
  posts INTEGER,
  verified BOOLEAN,
  authenticity_score INTEGER,
  risk_level VARCHAR(50),
  final_decision TEXT,
  partnership_recommendation VARCHAR(100),
  ai_verdict VARCHAR(50),
  ai_confidence VARCHAR(20),
  red_flags JSONB,
  fake_follower_estimate VARCHAR(20),
  detailed_analysis JSONB,
  created_at TIMESTAMP
);
```

## 🚀 How to Use

**Webhook Endpoint**: `POST /webhook/influencer-fraud-check`

**Request Body:**
```json
{
  "username": "influencer_handle",
  "platform": "instagram"  // or "twitter", "tiktok"
}
```

**Example:**
```bash
curl -X POST https://your-n8n.com/webhook/influencer-fraud-check \
  -H "Content-Type: application/json" \
  -d '{"username":"example_user","platform":"instagram"}'
```

## 📈 Scoring System

**Overall Authenticity Score (0-100):**
- **80-100**: LOW RISK → Approved for partnership
- **60-79**: MEDIUM RISK → Requires manual review
- **40-59**: HIGH RISK → Caution advised
- **0-39**: CRITICAL RISK → Rejected

**Weighted Components:**
- Follower Quality (25%)
- Engagement Quality (35%)
- Content Consistency (15%)
- Growth Pattern (15%)
- Profile Completeness (10%)

**Final Score = 70% Automated + 30% AI Analysis**

## 🚩 Red Flags Detected

- Following-to-follower ratio &gt; 2:1
- Engagement rate &lt; 0.5%
- Rapid growth (&gt;50K followers/month)
- Large following with &lt;10 posts
- No verification with &gt;100K followers
- Bot-like comment patterns
- Suspicious audience demographics

## 💰 Cost Estimate

- **Instagram/Twitter API**: Free tier usually sufficient
- **Claude AI**: ~$0.10-0.20 per analysis
- **Estimated**: $5-10/month for 50 checks

## 💡 Best Practices

1. **Always verify** HIGH and MEDIUM risk profiles manually
2. **Cross-reference** with other influencer databases
3. **Request** media kit and past campaign results
4. **Trial campaigns** before large commitments
5. **Monitor** performance metrics post-partnership
6. **Update** detection thresholds based on your findings

## 🎯 What You Get

**Detailed Report Includes:**
- Overall authenticity score (0-100)
- Risk level classification
- Partnership recommendation (APPROVE/REVIEW/REJECT)
- Engagement quality analysis
- Fake follower percentage estimate
- AI behavioral insights
- Specific red flags and concerns
- Next steps and recommendations

## 🔗 Nodes Used

Send Email, HTTP Request, Postgres, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
