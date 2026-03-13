# 📊 AI YouTube analytics agent: Comment analyzer & insights reporter

> ⚡ **11,481 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

**Transform YouTube comments into actionable insights with automated AI analysis and professional email reports.**

This intelligent workflow monitors your Google Sheets for YouTube video IDs, fetches comments using YouTube API, performs comprehensive AI sentiment analysis, and delivers formatted email reports with viewer insights - helping content creators understand their audience and improve engagement.

## 🚀 What It Does

**Smart Video Monitoring**: Watches Google Sheets for new YouTube video IDs marked as "Pending" and triggers automated analysis

**Complete Comment Collection**: Fetches up to 100 top comments per video using YouTube API with relevance-based ordering

**AI-Powered Analysis**: Uses GPT-4 to analyze comments for sentiment, themes, questions, feedback, and actionable insights

**Professional Email Reports**: Generates detailed HTML reports with statistics, sentiment breakdown, and improvement recommendations

**Automated Status Tracking**: Updates spreadsheet status to prevent duplicate processing and maintain organized workflow

## 🎯 Key Benefits

✅ **Deep Audience Insights**: Understand what viewers really think about your content  
✅ **Save Hours of Manual Work**: Automated comment analysis vs reading hundreds of comments  
✅ **Improve Content Strategy**: Get actionable feedback for better video performance  
✅ **Track Sentiment Trends**: Monitor positive/negative feedback patterns  
✅ **Professional Reporting**: Receive formatted analysis reports via email  
✅ **Scalable Analysis**: Process multiple videos automatically  

## 🏢 Perfect For

### **Content Creators & YouTubers**
- Individual creators tracking audience engagement
- Educational channels analyzing learning feedback
- Entertainment creators understanding viewer preferences
- Business channels monitoring brand sentiment

### **Marketing & Business Applications**
- **Brand Monitoring**: Track sentiment on branded content and partnerships
- **Audience Research**: Understand viewer demographics and preferences  
- **Content Optimization**: Identify what resonates with your audience
- **Competitor Analysis**: Analyze comments on competitor videos (where allowed)

## ⚙️ What's Included

**Complete Analytics Workflow**: Ready-to-deploy YouTube comment analysis system
**Google Sheets Integration**: Simple spreadsheet-based video management
**YouTube API Integration**: Automated comment fetching with proper authentication
**AI Analysis Engine**: GPT-4 powered sentiment and insight generation
**Email Reporting System**: Professional HTML-formatted reports
**Status Management**: Automatic processing tracking and duplicate prevention

## 🔧 Setup Requirements

- **n8n Platform**: Cloud or self-hosted instance
- **YouTube API Credentials**: Google Cloud Console API access
- **OpenAI API**: GPT-4 access for comment analysis
- **Google Sheets**: Video ID management and status tracking
- **Gmail Account**: For receiving analysis reports

## 📊 Required Google Sheets Structure

```
| ID | Video Title | YouTube Video ID | Status |
|----|-------------|------------------|---------|
| 1  | My Tutorial | dQw4w9WgXcQ     | Pending |
| 2  | Product Demo| abc123def456    | Mail Sent |
| 3  | Weekly Vlog | xyz789uvw012    | Draft |
```

**Status Options**: Draft → Pending → Mail Sent

## 📧 Sample Analysis Report

```
📺 YouTube Comments Analysis Report
Video: "How to Build Your First Website"

📊 Quick Statistics:
• Total Comments Analyzed: 87
• Average Likes per Comment: 3.2
• Total Replies: 156
• Sentiment Summary: Positive: 65%, Negative: 10%, Neutral: 25%

❓ Common Questions:
• "What hosting service do you recommend?"
• "Can I do this without coding experience?"
• "How much does domain registration cost?"

💡 Key Feedback Points:
• Tutorial pace is perfect for beginners
• More examples of finished websites requested
• Viewers want follow-up video on advanced features

🎯 Actionable Insights:
• Create hosting comparison video
• Add timestamps for different skill levels
• Consider beginner-friendly series expansion
```

## 🎨 Customization Options

**Analysis Depth**: Adjust AI prompts for different analysis focuses (engagement, education, entertainment)
**Comment Limits**: Modify maximum comments processed (default: 100, AI analysis: 50)
**Report Recipients**: Send reports to multiple team members or clients
**Custom Metrics**: Add specific analysis criteria for your content niche
**Multi-Channel**: Process videos from multiple YouTube channels
**Scheduling**: Set up regular analysis of your latest videos

## 🏷️ Tags & Categories

`#youtube-analytics` `#comment-analysis` `#content-creator-tools` `#ai-sentiment-analysis` `#video-insights` `#audience-research` `#youtube-api` `#content-optimization` `#social-media-analytics` `#creator-economy` `#video-marketing` `#engagement-analysis` `#content-strategy` `#ai-reporting` `#youtube-automation`

## 💡 Use Case Examples

**Educational Channel**: Analyze tutorial comments to identify confusing concepts and improve teaching methods
**Product Reviews**: Monitor sentiment on review videos to understand customer satisfaction trends  
**Entertainment Creator**: Track audience reactions to different content formats and optimize future videos

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, YouTube, Google Sheets Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
