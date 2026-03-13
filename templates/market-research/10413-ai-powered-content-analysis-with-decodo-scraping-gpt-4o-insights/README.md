# 📊 AI-powered content analysis with Decodo scraping & GPT-4o insights

> ⚡ **232 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

# AI-Powered Content Analysis System

Elevate your content quality with this AI-powered Content Analysis System!  
This workflow automatically evaluates website content using advanced scraping and AI analysis, providing comprehensive SEO insights, readability scores, and actionable improvement recommendations. Perfect for content teams ensuring optimal performance and engagement across digital properties.

## What This Template Does
1. Triggers via form submission for on-demand content analysis requests.  
2. Checks previous analyses to prevent duplicate processing.  
3. Scrapes target URLs using Decodo for comprehensive content extraction.  
4. Uses AI to evaluate content quality, SEO effectiveness, and readability.  
5. Saves analysis results to Google Sheets for historical tracking.  
6. Generates professional Google Docs reports with actionable insights.  
7. Sends email notifications with formatted analysis summaries.  
8. Alerts teams via Slack for both normal and urgent findings.  
9. Creates remediation plans and Trello tasks for low-quality content.

## Key Benefits
- Automated content quality assessment with AI-powered insights  
- Prevents duplicate analyses to optimize resource usage  
- Comprehensive SEO and readability scoring for data-driven decisions  
- Professional reporting with Google Docs and email integration  
- Immediate team alerts for urgent content improvements  
- Historical tracking and trend analysis capabilities  

## Features
- Form-based trigger for easy content analysis requests  
- Duplicate detection and prevention system  
- AI-powered content evaluation using GPT-4o  
- Real-time web scraping with Decodo integration  
- Automated Google Docs report generation  
- Multi-channel notifications (Slack, Gmail)  
- Quality threshold monitoring and alerting  
- Remediation plan generation for low-quality content  
- Trello integration for task management  
- Historical analysis database in Google Sheets  

## Requirements
- OpenAI API credentials for AI analysis  
- Decodo API credentials for web scraping  
- Google Sheets OAuth2 credentials with edit access  
- Google Docs OAuth2 credentials for report generation  
- Gmail OAuth2 credentials for email notifications  
- Slack Bot Token with chat:write permission  
- Trello credentials (optional for task management)  
- Environment variables for configuration settings  

## Target Audience
- Content marketing and strategy teams  
- SEO specialists and digital marketers  
- Content quality assurance teams  
- Digital agencies managing multiple clients  
- Website owners and publishers  
- Content operations managers  

## Step-by-Step Setup Instructions
1. Connect OpenAI credentials for AI content analysis capabilities  
2. Set up Decodo API credentials for web scraping functionality  
3. Configure Google Sheets with required analysis headers  
4. Add Google Docs credentials for automated report generation  
5. Set up Gmail and Slack credentials for notifications  
6. Optional: Configure Trello integration for task management  
7. Customize the analysis form with your industry and focus areas  
8. Test with sample URLs to verify all integrations and data flow  
9. Deploy for ongoing content quality monitoring and optimization  


**Pro Tip:** Get a free Web Scraping API subscription - https://decodo.com/scraping/web

This workflow ensures your content maintains high quality standards with automated analysis, professional reporting, and immediate improvement alerts!

## 🔗 Nodes Used

Function, Google Sheets, Slack, Trello, Gmail, Google Docs

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
