# 📊 Analyze competitor LinkedIn posts with Bright Data + Google Gemini to Google Sheets

> ⚡ **956 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

markdown*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

This workflow automatically analyzes competitor LinkedIn posts to extract strategic insights and engagement patterns. It saves you time by eliminating manual competitive analysis and provides actionable marketing intelligence from your competitors' social media activity.

## Overview
This workflow automatically scrapes LinkedIn post data including engagement metrics, comments, and content details, then uses AI to analyze the post's intent, effectiveness, and key marketing takeaways. It transforms raw LinkedIn data into structured competitive intelligence stored in Google Sheets.

## Tools Used
* **n8n**: The automation platform that orchestrates the workflow
* **Bright Data**: For scraping LinkedIn post data without restrictions
* **Google Gemini**: AI agent for intelligent post analysis and insight extraction
* **Google Sheets**: For storing structured competitive intelligence data

## How to Install
1. **Import the Workflow**: Download the .json file and import it into your n8n instance
2. **Configure Bright Data**: Add your Bright Data credentials to the scraping node
3. **Set Up Google Gemini**: Configure your Google Gemini API credentials
4. **Configure Google Sheets**: Connect your Google Sheets account and copy the template spreadsheet
5. **Customize**: Simply paste any LinkedIn post URL and run the workflow

## Use Cases
* **Marketing Teams**: Understand what content drives engagement for competitors
* **Content Strategists**: Identify successful post formats and messaging strategies
* **Social Media Managers**: Benchmark your content performance against industry leaders
* **Agencies/Consultants**: Offer LinkedIn competitive analysis as a service to clients

## Connect with Me
* **Website**: https://www.nofluff.online
* **YouTube**: https://www.youtube.com/@YaronBeen/videos
* **LinkedIn**: https://www.linkedin.com/in/yaronbeen/
* **Get Bright Data**: https://get.brightdata.com/1tndi4600b25 (Using this link supports my free workflows with a small commission)

#n8n #automation #linkedinanalytics #competitiveintelligence #brightdata #webscraping #marketinga

## 🔗 Nodes Used

Google Sheets, AI Agent, Auto-fixing Output Parser, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
