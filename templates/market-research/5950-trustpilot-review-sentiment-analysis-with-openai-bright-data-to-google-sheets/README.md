# 📊 Trustpilot review sentiment analysis with OpenAI & Bright Data to Google Sheets

> ⚡ **494 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This workflow automatically scrapes customer reviews from Trustpilot and performs sentiment analysis to extract valuable customer insights. It saves you time by eliminating the need to manually read through reviews and provides structured data on customer feedback, sentiment, and pain points.

## Overview

This workflow automatically scrapes the latest customer reviews from any Trustpilot company page and uses AI to analyze each review for sentiment, extract key complaints or praise, and identify recurring customer pain points. It stores all structured review data in Google Sheets for easy analysis and reporting.

## Tools Used

- **n8n**: The automation platform that orchestrates the workflow
- **Bright Data**: For scraping Trustpilot review pages without being blocked
- **OpenAI**: AI agent for intelligent review analysis and sentiment extraction
- **Google Sheets**: For storing structured review data and analysis results

## How to Install

1. **Import the Workflow**: Download the .json file and import it into your n8n instance
2. **Configure Bright Data**: Add your Bright Data credentials to the MCP Client node
3. **Set Up OpenAI**: Configure your OpenAI API credentials
4. **Configure Google Sheets**: Connect your Google Sheets account and set up your review tracking spreadsheet
5. **Customize**: Enter target Trustpilot company URLs and adjust review analysis parameters

## Use Cases

- **Product Teams**: Identify customer pain points and feature requests from reviews
- **Customer Support**: Monitor customer satisfaction and recurring issues
- **Marketing Teams**: Extract positive testimonials and understand customer sentiment
- **Business Intelligence**: Track brand reputation and customer feedback trends

## Connect with Me

- **Website**: https://www.nofluff.online
- **YouTube**: https://www.youtube.com/@YaronBeen/videos
- **LinkedIn**: https://www.linkedin.com/in/yaronbeen/
- **Get Bright Data**: https://get.brightdata.com/1tndi4600b25 (Using this link supports my free workflows with a small commission)

#n8n #automation #trustpilot #reviewscraping #sentimentanalysis #brightdata #webscraping #customerreviews #n8nworkflow #workflow #nocode #reviewautomation #customerinsights #brandmonitoring #reviewanalysis #customerfeedback #reputationmanagement #reviewmonitoring #customersentiment #productfeedback #trustpilotscraping #reviewdata #customerexperience #businessintelligence #feedbackanalysis #reviewtracking #customervoice #aianalysis #reviewmining #customerinsights

## 🔗 Nodes Used

Google Sheets, AI Agent, OpenAI Chat Model, Auto-fixing Output Parser, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
