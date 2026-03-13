# 🎬 Generate business ideas & social media content from Reddit with AI analysis to Telegram

> ⚡ **1,354 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

Description

AI-Powered Business Idea Generation & Social Media Content Strategy Workflow

This intelligent content discovery and strategy system features 15 nodes that automatically monitor Reddit communities, analyze business opportunities, and generate targeted social media content for AI automation agencies and entrepreneurs. It leverages AI classification, structured analysis, and automated content creation to transform community discussions into actionable business insights and marketing materials.

Core Components

Reddit Intelligence: Multi-subreddit monitoring across AI automation, n8n, and entrepreneur communities with keyword-based filtering.

AI Classification Engine: Intelligent categorization of posts into "Questions" vs "Requests" using LangChain text classification.

Dual Analysis System: Specialized AI agents for educational content (questions) and sales-focused content (service requests).

Content Strategy Generator: Automated creation of LinkedIn and Twitter content tailored to different audience engagement strategies.

Telegram Integration: Real-time delivery of formatted content strategies and business insights.

Structured Output Processing: JSON-formatted analysis with relevancy scores, feasibility assessments, and actionable content recommendations.

Target Users

•
AI Automation Agency Owners seeking consistent lead generation and thought leadership content

•
Entrepreneurs wanting to identify market opportunities and position themselves as industry experts

•
Content Creators in the automation/AI space needing data-driven content strategies

•
Business Development Professionals looking for systematic opportunity identification

•
Digital Marketing Agencies serving tech and automation clients

Setup Requirements

To get started, you'll need:

Reddit API Access: OAuth2 credentials for accessing Reddit's API and monitoring multiple subreddits.

Required APIs:

•
OpenRouter (for AI model access - supports GPT-4, Claude, and other models)

•
Reddit OAuth2 API (for community monitoring and data extraction)

n8n Prerequisites:

•
Version 1.7+ with LangChain nodes enabled

•
Webhook configuration for Telegram integration

•
Proper credential storage and management setup

Telegram Bot: Create via @BotFather for receiving formatted content strategies and business insights.

Disclaimer: This template uses LangChain nodes and Reddit API integration. Ensure your n8n instance supports these features and verify API rate limits for production use.

Step-by-Step Setup Guide

1.
Install n8n: Ensure you're running n8n version 1.7 or higher with LangChain node support enabled.

2.
Set Up API Credentials:

•
Create Reddit OAuth2 application at reddit.com/prefs/apps

•
Set up OpenRouter account and obtain API key

•
Store credentials securely in n8n credential manager



3.
Create Telegram Bot:

•
Go to Telegram, search for @BotFather

•
Create new bot and note the token

•
Configure webhook pointing to your n8n instance



4.
Import the Workflow:

•
Copy the workflow JSON from the template submission

•
Import into your n8n dashboard

•
Verify all nodes are properly connected



5.
Configure Monitoring Settings:

•
Adjust subreddit targets (currently: ArtificialIntelligence, n8n, entrepreneur)

•
Set keyword filters for relevant topics

•
Configure post limits and sorting preferences



6.
Customize AI Analysis:

•
Update system prompts to match your business expertise

•
Adjust relevancy and feasibility scoring criteria

•
Modify content generation templates for your brand voice



7.
Test the Workflow:

•
Run manual execution to verify Reddit data collection

•
Check AI classification and analysis outputs

•
Confirm Telegram delivery of formatted content



8.
Schedule Automation:

•
Set up daily trigger (currently configured for 12 PM)

•
Monitor execution logs for any API rate limit issues

•
Adjust frequency based on content volume needs



Usage Instructions

Automated Discovery: The workflow runs daily at 12 PM, scanning three key subreddits for relevant posts about AI automation, business opportunities, and n8n workflows.

Intelligent Classification: Posts are automatically categorized as either "Questions" (educational opportunities) or "Requests" (potential service leads) using AI text classification.

Dual Analysis Approach:

•
Questions → Educational content strategy with relevancy and detail scoring

•
Requests → Sales-focused content with relevancy and feasibility scoring

Content Strategy Generation: Each analyzed post generates:

•
3 LinkedIn posts (thought leadership, case studies, educational frameworks)

•
3 Twitter posts (quick insights, engagement questions, thread starters)

Telegram Delivery: Receive formatted content strategies with:

•
Post summaries and business context

•
Relevancy/feasibility scores

•
Ready-to-use social media content

•
Strategic recommendations

Content Customization: Adapt generated content for different tones (business, educational, technical) and posting schedules.

Workflow Features

Multi-Platform Monitoring: Simultaneous tracking of 3 key Reddit communities with customizable keyword filters.

AI-Powered Classification: Automatic categorization of posts into actionable content types.

Dual Scoring System:

•
Relevancy scores (0.05-0.95) for business alignment

•
Detail/Feasibility scores (0.05-0.95) for content quality assessment

Content Variety: Generates both educational and sales-focused social media strategies.

Structured Output: JSON-formatted analysis for easy integration with other systems.

Real-time Delivery: Instant Telegram notifications with formatted content strategies.

Scalable Monitoring: Easy addition of new subreddits and keyword filters.

Error Handling: Comprehensive validation with graceful failure management.

Performance Specifications

•
Monitoring Frequency: Daily automated execution with manual trigger capability

•
Post Analysis: 5 posts per subreddit (15 total daily)

•
Content Generation: 6 social media posts per analyzed opportunity

•
Classification Accuracy: AI-powered with structured output validation

•
Delivery Method: Real-time Telegram integration

•
Scoring Range: 0.05-0.95 scale for relevancy and feasibility assessment

Why This Workflow?

Systematic Opportunity Identification: Never miss potential business opportunities or content ideas from key communities.

AI-Enhanced Analysis: Leverage advanced language models for intelligent content categorization and strategy generation.

Time-Efficient Content Creation: Transform community discussions into ready-to-use social media content.

Data-Driven Insights: Quantified scoring helps prioritize opportunities and content strategies.

Automated Lead Intelligence: Identify potential service requests and educational content opportunities automatically.

Workflow Image

![image.png](fileId:2177)




Need help customizing this workflow for your specific use case? As a fellow entrepreneur passionate about automation and business development, I'd be happy to consult. Connect with me on LinkedIn: https://www.linkedin.com/in/femi-adedayo-h44/ or email for support. Let's make your AI automation agency even more efficient!

## 🔗 Nodes Used

Telegram, Reddit, Schedule Trigger, AI Agent, Structured Output Parser, Text Classifier

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
