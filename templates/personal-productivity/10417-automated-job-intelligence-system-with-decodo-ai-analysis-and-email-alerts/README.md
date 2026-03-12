# ⚡ Automated job intelligence system with Decodo, AI analysis, and email alerts

> ⚡ **235 views** · ⚡ [Personal Productivity](../)

## Description

Stay ahead in your job search with this Automated Job Intelligence System!  
This workflow scans company career pages daily for new job listings, uses AI to analyze job relevance and seniority levels, and sends personalized email alerts for high-priority opportunities while maintaining a comprehensive job database. Perfect for job seekers, recruiters, and career coaches tracking ideal opportunities across target companies.

## What This Template Does
1. Triggers daily at 9 AM to scan for new job opportunities.  
2. Retrieves company URLs from Google Sheets database.  
3. Uses Decodo scraper to extract job listings from career pages.  
4. Analyzes job data with AI to identify company names and positions.  
5. Converts job data into individual listing items for processing.  
6. Compares new jobs against existing database to filter duplicates.  
7. Uses AI to assign relevance scores, seniority levels, and tech stack analysis.  
8. Filters high-relevance jobs (score &gt;8/10) for priority alerts.  
9. Stores all new jobs in Google Sheets for historical tracking.  
10. Sends personalized email alerts for high-relevance opportunities.  

## Key Benefits
- Automated daily scanning of target company career pages  
- AI-powered relevance scoring and job matching  
- Duplicate prevention to avoid redundant notifications  
- Comprehensive job database for tracking and analysis  
- Personalized alerts for high-priority opportunities  
- Time-saving automation for job search activities  

## Features
- Daily automated scheduling for consistent monitoring  
- AI-powered job extraction and data structuring  
- Decodo web scraping for reliable career page access  
- Intelligent relevance scoring and seniority analysis  
- Duplicate detection and filtering  
- Google Sheets integration for job tracking  
- Personalized email alerts for premium opportunities  
- Multi-company monitoring capability  
- Historical job data maintenance  

## Requirements
- Decodo API credentials for web scraping  
- OpenAI API credentials for AI analysis  
- Google Sheets OAuth2 credentials with edit access  
- Gmail OAuth2 credentials for email alerts  
- Slack Bot Token for error notifications (optional)  
- Environment variables for configuration settings  

## Target Audience
- Job seekers and career changers  
- Recruitment and talent acquisition teams  
- Career coaches and placement agencies  
- HR professionals monitoring competitor hiring  
- Technology professionals tracking market opportunities  
- University career services and placement offices  

## Step-by-Step Setup Instructions
1. Connect Decodo API credentials for career page scraping  
2. Set up OpenAI credentials for job relevance analysis  
3. Configure Google Sheets with company URLs and job tracking sheets  
4. Add Gmail credentials for personalized job alerts  
5. Optional: Set up Slack for error notifications  
6. Populate company URLs in your Google Sheets database  
7. Test with sample companies to verify job extraction and analysis  
8. Customize relevance thresholds for your job preferences  
9. Activate for daily automated job intelligence monitoring  


**Pro Tip:** Get a free Web Scraping API subscription - https://decodo.com/scraping/web

This workflow transforms your job search with automated intelligence, smart filtering, and personalized opportunity alerts!

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
