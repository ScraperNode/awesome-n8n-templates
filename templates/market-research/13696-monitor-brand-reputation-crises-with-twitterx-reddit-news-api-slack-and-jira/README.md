# 📊 Monitor brand reputation crises with Twitter/X, Reddit, News API, Slack and Jira

> ⚡ **22 views** · 📊 [Market Research & Insights](../)

## Description

This workflow monitors brand mentions across multiple platforms (Twitter/X, Reddit, News) and automatically detects reputation crises based on sentiment analysis and trend detection.

## How it works

1. **Multi-platform monitoring**: Every 10 minutes, scans Twitter/X, Reddit, and news sites for brand mentions
2. **Data normalization**: Converts all platform data into unified format
3. **Smart filtering**: Removes duplicates and already-analyzed mentions
4. **AI sentiment analysis**: Analyzes each mention for:
   - Sentiment score (positive/negative/neutral)
   - Amplification factors (engagement, verified accounts, news sources)
   - Crisis-level phrases and keywords
5. **Trend detection**: Compares current sentiment to 24-hour baseline:
   - Detects sharp sentiment drops
   - Identifies negative mention spikes
   - Calculates impact surge
6. **Crisis classification**: Assigns severity (CRITICAL/HIGH/MEDIUM/LOW)
7. **Automated response**: For crises, triggers immediate alerts:
   - Executive crisis brief with action plan
   - Slack alerts to crisis team
   - Email to leadership and PR team
   - JIRA ticket creation
   - Crisis event logging

## Setup steps

1. **Connect platforms**:
   - Twitter/X: Add OAuth credentials to "Monitor Twitter/X" node
   - Reddit: Add OAuth credentials to "Monitor Reddit" node
   - News API: Get API key from newsapi.org and add to "Monitor News & Blogs" node

2. **Configure brand monitoring**:
   - Update brand name and handles in search queries
   - Add additional platforms if needed (LinkedIn, Facebook, Instagram)

3. **Set up alerting**:
   - Slack: Add credentials and update channel names
   - Email: Add SMTP settings and recipient lists
   - JIRA: Add credentials and project ID

4. **Adjust sensitivity**:
   - Modify sentiment keyword dictionaries in "AI Sentiment Analysis Engine"
   - Adjust crisis threshold scores
   - Customize amplification factors

5. **Test thoroughly**:
   - Run manual execution with test data
   - Verify alert routing and content
   - Test false positive handling

6. **Activate**: Enable for continuous 24/7 monitoring

## Key Features:

- **Multi-platform monitoring** (every 10 minutes): Twitter/X, Reddit, and News sites
- **Data normalization** that converts different platform formats into unified structure
- **AI sentiment analysis** engine that evaluates:
  - Sentiment keywords (critical, severe, moderate, mild negative/positive)
  - Amplification factors (engagement, verified accounts, follower counts)
  - Impact scoring based on reach and influence
- **Baseline trend detection** that tracks 24-hour sentiment history and detects:
  - Sharp sentiment drops (15+ points = crisis)
  - Negative mention spikes (30%+ increase)
  - Impact surges
- **Automated crisis response workflow**:
  - Aggregates crisis mentions into executive brief
  - Generates detailed action plan based on severity
  - Sends Slack alerts to crisis team
  - Emails leadership with comprehensive brief
  - Creates JIRA ticket for tracking
  - Logs all events for analysis
- **Two-path routing**: Crisis-level events trigger full response workflow, while routine mentions are logged for trend analysis

## 🔗 Nodes Used

Send Email, HTTP Request, Slack, Jira Software, X (Formerly Twitter), Reddit

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.
