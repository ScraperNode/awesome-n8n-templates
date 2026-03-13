# 🎬 Generate Japanese Twitter posts with GPT-4, quality control, and Notion

> ⚡ **3 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.

## Description

## AI-Powered Japanese Social Media Content Generator with Quality Control

### 🎯 Who's it for

Marketing teams and social media managers in Japan who want to automate content creation while maintaining high quality standards and cultural appropriateness. Perfect for businesses that need consistent Japanese-language social media presence with built-in compliance checks.

### 📝 What it does

This workflow creates an intelligent content generation system that:

- Generates culturally-aware Japanese Twitter posts using GPT-4
- Automatically scores content quality across 5 dimensions (engagement, SEO, brand voice, readability, CTA)
- Performs sentiment analysis and risk detection for controversial topics
- Routes content intelligently: auto-posts high-quality/low-risk content, flags medium-risk content for approval, and rejects high-risk content
- Includes an auto-improvement loop that refines content up to 3 times if quality scores are below 70
- Provides weekly performance analytics and recommendations

### 🔧 How it works

**Daily Content Generation Flow:**
1. Schedule trigger runs weekday mornings at 9 AM
2. Fetches Japanese cultural context (seasons, holidays, business events)
3. Analyzes brand voice from past 30 days of posts
4. Generates 3 Twitter post variations with GPT-4
5. Each post is scored on quality metrics (100-point scale)
6. Low-scoring content enters auto-improvement loop
7. Risk analysis checks for controversy, cultural sensitivity, and sentiment
8. Decision routing: auto-approve and post OR send for manual approval OR reject

**Approval Workflow:**
- Pending posts trigger approval emails
- Webhook receives approval/rejection/edit actions
- Approved posts are published to Twitter and archived in Notion

**Weekly Analytics:**
- Monday morning trigger analyzes past week's performance
- GPT-4 generates insights report with best practices
- Email sent to team with recommendations

### ⚙️ Requirements

**APIs & Credentials:**
- OpenAI API (GPT-4 access)
- Twitter API v2 with OAuth 2.0
- Notion API (database for content storage)
- Email sending service (SMTP or SendGrid)

**Setup:**
1. Create a Notion database with columns: Content, Hashtags, Quality Score, Risk Level, Status, Engagement
2. Configure OpenAI API credentials with HTTP Header Auth
3. Set up Twitter OAuth 2.0 credentials
4. Configure email service for approval notifications

### 🎨 How to customize

**Adjust Quality Thresholds:**
- Modify the quality scoring criteria in "AI Quality Scoring" node
- Change auto-approval threshold (currently 70+ points)

**Content Generation:**
- Edit GPT-4 prompts in "Generate Content with GPT-4" node to match your brand tone
- Adjust temperature settings for more/less creative content
- Modify the number of posts generated per run

**Risk Detection:**
- Customize risk factors in "Sentiment & Risk Analysis" node
- Add industry-specific compliance checks

**Brand Voice Learning:**
- Adjust the lookback period in "Get Past 30 Days Posts" (currently 30 days)
- Modify brand voice analysis logic in "Analyze Brand Voice" node

**Scheduling:**
- Change cron expressions for daily content generation and weekly reports
- Add additional triggers for special campaigns

### ⚠️ Important Notes

- This workflow uses Japanese language prompts - modify system prompts if using for other languages
- Ensure compliance with Twitter's API rate limits and automation policies
- Review auto-posted content regularly to validate AI quality assessments
- The workflow stores all generated content in Notion for audit trails

## 🔗 Nodes Used

Send Email, HTTP Request, Webhook, Notion, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
