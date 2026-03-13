# 📊 Monitor content trends across social media with AI, Slack and Google Sheets

> ⚡ **2,373 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

# How it works

This workflow automatically monitors trending topics across multiple platforms and generates content strategy insights for marketing teams.

## Key Steps

1. **Daily Trigger** - Runs automatically every 24 hours to capture fresh trends and viral content.
2. **Multi-Platform Scraping** - Uses AI-powered scrapers to analyze trends from LinkedIn, Twitter, Instagram, Google Trends, BuzzSumo, and Reddit.
3. **Trend Analysis** - Processes collected data to identify viral patterns, engagement metrics, and content opportunities.
4. **Content Strategy Generation** - Creates actionable insights for content planning and social media strategy.
5. **Team Notifications** - Sends comprehensive reports to Slack and updates content calendars in Google Sheets.

## Set up steps

**Setup time: 10-15 minutes**

1. **Configure ScrapeGraphAI credentials** - Add your ScrapeGraphAI API key for AI-powered trend scraping.
2. **Set up Slack connection** - Connect your Slack workspace for team notifications.
3. **Configure Google Sheets** - Set up a Google Sheets connection for content calendar updates.
4. **Customize target industries** - Modify the configuration to focus on your specific industry verticals (AI, marketing, tech, etc.).
5. **Adjust monitoring frequency** - Change the trigger timing based on your content planning needs.

## What you get

- **Daily trend reports** with viral content analysis and engagement metrics
- **Content opportunity scores** for different platforms and topics
- **Automated content calendar updates** with trending topics and suggested content
- **Team notifications** with key insights and actionable recommendations
- **Competitive analysis** of viral content patterns and successful strategies

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
