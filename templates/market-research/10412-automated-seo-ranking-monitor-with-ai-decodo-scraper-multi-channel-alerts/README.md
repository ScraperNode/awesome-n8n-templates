# 📊 Automated SEO ranking monitor with AI, Decodo scraper & multi-channel alerts

> ⚡ **270 views** · 📊 [Market Research & Insights](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

Keep your SEO performance on track with this automated SEO Watchlist Monitor! 
  
This workflow combines AI-powered strategy analysis with real-time search ranking checks to track keyword positions, identify content gaps, and alert you to critical ranking drops. Perfect for marketing teams ensuring search visibility and competitive intelligence across platforms. 🚀🔍

**What This Template Does**  
1️⃣ Triggers daily SEO intelligence checks to monitor keyword performance.   
2️⃣ Configures target keywords, competitor domains, and geographic focus.  
3️⃣ Validates SEO configuration to ensure proper setup. 
4️⃣ Uses AI to analyze keyword competitiveness and strategic opportunities.  
5️⃣ Checks real-time search rankings using Google Search scraper.  
6️⃣ Detects critical ranking drops below position 10. 
7️⃣ Saves SEO intelligence to Google Sheets for tracking. 
8️⃣ Sends email alerts for urgent ranking issues. 
9️⃣ Provides daily Slack summaries of SEO performance.  

**Key Benefits**  
✅ Monitors keyword rankings and competitor movements daily  
✅ Identifies content gaps and strategic opportunities with AI analysis  
✅ Alerts instantly to critical ranking drops for quick action  
✅ Centralizes SEO intelligence in Google Sheets for team visibility  
✅ Combines AI insights with real-time search data for comprehensive monitoring  

**Features**  
- Daily automated schedule for continuous monitoring  
- AI-powered SEO strategy analysis and competitive intelligence  
- Real-time search ranking checks using Decodo scraper  
- Critical alert system for ranking drops  
- Google Sheets integration for data centralization  
- Slack and Gmail notifications for team awareness  
- Configuration validation and error logging  
- Structured data parsing for consistent reporting  

**Requirements**  
- OpenAI API credentials for AI analysis  
- Decodo API credentials for search scraping  
- Google Sheets OAuth2 credentials with edit access  
- Gmail OAuth2 credentials for email alerts  
- Slack Bot Token with chat:write permission  
- Environment variables for configuration settings  

**Target Audience**  
SEO and digital marketing teams 🎯  
Content strategy and growth teams 📈  
Competitive intelligence professionals 🔍  
Marketing operations teams 🚀  
Agency account managers managing multiple clients 💼  

**Step-by-Step Setup Instructions**  
1️⃣ Connect OpenAI credentials for AI analysis capabilities  
2️⃣ Set up Decodo API credentials for search scraping functionality  
3️⃣ Configure Google Sheets with required headers (Keyword, Rank, description, etc.)  
4️⃣ Add Gmail and Slack credentials for alerting and notifications  
5️⃣ Set your target keywords, competitors, and geographic focus in the configuration node  
6️⃣ Configure the cron schedule (hourly) for daily monitoring frequency  
7️⃣ Run once manually to verify all integrations and data flow  
8️⃣ Activate for ongoing SEO performance tracking and alerting ✅  

**Pro Tip:** Get a free Web Scraping API subscription - https://decodo.com/scraping/web

## 🔗 Nodes Used

Function, Google Sheets, Slack, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
