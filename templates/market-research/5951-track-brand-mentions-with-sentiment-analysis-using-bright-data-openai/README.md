# 📊 Track brand mentions with sentiment analysis using Bright Data & OpenAI

> ⚡ **1,170 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

This workflow automatically tracks brand mentions across various online platforms by scraping blog posts and articles for specific brand references. It saves you time by eliminating the need to manually search for brand mentions and provides sentiment analysis on how your brand is being discussed online.

## Overview

This workflow automatically scrapes Medium blog posts and other online content to find mentions of specific brands (like OpenAI) and performs sentiment analysis on the content. It uses Bright Data to access content without restrictions and AI to intelligently extract brand-related information, analyze sentiment, and summarize key points about brand coverage.

## Tools Used

- **n8n**: The automation platform that orchestrates the workflow
- **Bright Data**: For scraping blog posts and articles without being blocked
- **OpenAI**: AI agent for intelligent content analysis and sentiment extraction
- **Google Sheets**: For storing brand mention data and sentiment analysis results

## How to Install

1. **Import the Workflow**: Download the .json file and import it into your n8n instance
2. **Configure Bright Data**: Add your Bright Data credentials to the MCP Client node
3. **Set Up OpenAI**: Configure your OpenAI API credentials
4. **Configure Google Sheets**: Connect your Google Sheets account and set up your brand monitoring spreadsheet
5. **Customize**: Define target URLs and brand keywords to monitor

## Use Cases

- **Brand Monitoring**: Track how your brand is mentioned and discussed online
- **Public Relations**: Monitor media coverage and public sentiment about your brand
- **Competitive Intelligence**: Track mentions of competitor brands and market perception
- **Crisis Management**: Quickly identify negative brand mentions for rapid response

## Connect with Me

- **Website**: https://www.nofluff.online
- **YouTube**: https://www.youtube.com/@YaronBeen/videos
- **LinkedIn**: https://www.linkedin.com/in/yaronbeen/
- **Get Bright Data**: https://get.brightdata.com/1tndi4600b25 (Using this link supports my free workflows with a small commission)

#n8n #automation #brandmonitoring #sentimentanalysis #brightdata #webscraping #brandmentions #n8nworkflow #workflow #nocode #mediamonitoring #brandtracking #publicrelations #brandanalytics #onlinemonitoring #contentanalysis #brandsentiment #digitalmonitoring #brandresearch #mediaanalysis #brandinsights #reputationmanagement #brandwatch #socialmediamonitoring #contentmonitoring #brandpresence #digitalpr #brandlistening #mediatracking #onlinereputation

## 🔗 Nodes Used

Google Sheets, AI Agent, OpenAI Chat Model, Auto-fixing Output Parser, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
