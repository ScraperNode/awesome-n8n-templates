# 🎣 Collect YouTube channel stats & contact info with Google Sheets and SerpAPI

> ⚡ **709 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Workflow Overview
This advanced n8n automation is a powerful channel research and intelligence gathering tool designed to transform raw YouTube channel data into actionable insights. By intelligently connecting multiple APIs and data sources, this workflow:

1. **Discovers Channel Metrics**: 
   - Automatically retrieves channel statistics
   - Captures detailed performance indicators
   - Provides comprehensive channel intelligence

2. **Performs Deep Analysis**:
   - Extracts recent video performance data
   - Calculates engagement metrics
   - Aggregates view count insights

3. **Uncovers Contact Information**:
   - Attempts to retrieve public email addresses
   - Provides direct outreach opportunities
   - Enhances lead generation capabilities

4. **Seamless Data Logging**:
   - Automatically updates Google Sheets
   - Maintains a live intelligence dashboard
   - Preserves historical channel data

## Key Benefits
- 🤖 **Full Automation**: Continuous channel intelligence gathering
- 💡 **Smart Analysis**: Comprehensive performance insights
- 📊 **Real-Time Tracking**: Always-updated channel metrics
- 🔍 **Lead Generation**: Direct contact information extraction

## Workflow Architecture

### 🔹 Stage 1: Channel Identification
- **Google Sheets Trigger**: Detects new channel additions
- **YouTube Data API**: Fetches channel statistics
- **Comprehensive Metric Collection**:
  - Subscriber count
  - Total view metrics
  - Channel overview

### 🔹 Stage 2: Video Performance Analysis
- **Recent Video Retrieval**: Fetches 5 latest uploads
- **View Count Aggregation**: 
  - Calculates total recent views
  - Provides engagement snapshot
- **Performance Insights**: Measures content effectiveness

### 🔹 Stage 3: Contact Discovery
- **SerpAPI Integration**: Attempts email extraction
- **Public Contact Information**: 
  - Retrieves available email addresses
  - Supports outreach and networking

### 🔹 Stage 4: Data Compilation
- **Intelligent Data Formatting**
- **Google Sheets Update**
- **Live Intelligence Dashboard**

## Potential Use Cases
- **Marketing Teams**: Influencer research
- **Sales Professionals**: Lead qualification
- **Content Strategists**: Competitive analysis
- **Recruitment Specialists**: Talent scouting
- **Business Development**: Partnership identification

## Setup Requirements
1. **YouTube Data API**
   - Google Cloud API credentials
   - Configured API access

2. **SerpAPI Account**
   - API key for email extraction
   - Web scraping permissions

3. **Google Sheets**
   - Connected Google account
   - Prepared tracking spreadsheet
   - Appropriate sharing settings

4. **n8n Installation**
   - Cloud or self-hosted instance
   - Workflow configuration
   - API credential management

## Future Enhancement Suggestions
- 🤖 AI-powered channel scoring
- 📊 Advanced trend analysis
- 🔔 Automated alert system
- 🌐 Multi-platform channel tracking
- 🧠 Machine learning insights generation

## Technical Considerations
- Implement robust error handling
- Use exponential backoff for API calls
- Maintain flexible data extraction strategies
- Ensure compliance with platform terms of service

## Ethical Guidelines
- Respect content creator privacy
- Use data for legitimate research
- Maintain transparent data collection practices
- Provide opt-out mechanisms

## Connect With Me

**Ready to unlock YouTube channel insights?**

📧 **Email**: Yaron@nofluff.online

🎥 **YouTube**: [@YaronBeen](https://www.youtube.com/@YaronBeen/videos)

💼 **LinkedIn**: [Yaron Been](https://www.linkedin.com/in/yaronbeen/)

**Transform your channel research with intelligent, automated workflows!**

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
