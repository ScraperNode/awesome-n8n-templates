# 📊 Extract customer pain points from support forums with Bright Data & GPT-4

> ⚡ **2,889 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

This workflow automatically monitors customer support forums and Q&A platforms to extract valuable customer insights and pain points. It saves you time by eliminating the need to manually browse through forum discussions and provides structured analysis of customer questions, answers, and recurring issues.

## Overview

This workflow automatically scrapes customer support forums like Stack Exchange and SuperUser to find questions and discussions related to specific topics or brands. It uses AI to analyze forum content, extract customer pain points, and identify recurring issues, then sends structured insights directly to your product team via email.

## Tools Used

- **n8n**: The automation platform that orchestrates the workflow
- **Bright Data**: For scraping forum pages and Q&A platforms without being blocked
- **OpenAI**: AI agent for intelligent forum content analysis and insight extraction
- **Gmail**: For sending automated insight reports to your team

## How to Install

1. **Import the Workflow**: Download the .json file and import it into your n8n instance
2. **Configure Bright Data**: Add your Bright Data credentials to the MCP Client node
3. **Set Up OpenAI**: Configure your OpenAI API credentials
4. **Configure Gmail**: Connect your Gmail account for sending team notifications
5. **Customize**: Set target forum URLs and define the topics or brands to monitor

## Use Cases

- **Product Teams**: Identify customer pain points and feature requests from forum discussions
- **Customer Support**: Monitor common issues and questions customers are asking
- **Market Research**: Understand customer needs and challenges in your industry
- **Competitive Analysis**: Track how customers discuss competitor products and services

## Connect with Me

- **Website**: https://www.nofluff.online
- **YouTube**: https://www.youtube.com/@YaronBeen/videos
- **LinkedIn**: https://www.linkedin.com/in/yaronbeen/
- **Get Bright Data**: https://get.brightdata.com/1tndi4600b25 (Using this link supports my free workflows with a small commission)

#n8n #automation #forummonitoring #customersupport #brightdata #webscraping #customerinsights #n8nworkflow #workflow #nocode #forumautomation #customerresearch #supportmonitoring #painpointanalysis #communitymonitoring #forumanalysis #customerfeedback #productinsights #supportforums #stackexchange #customervoice #userresearch #productfeedback #techsupport #communitylistening #customerexperience #supportanalysis #forumdata #qandamonitoring #customerpainpoints

## 🔗 Nodes Used

Gmail, AI Agent, OpenAI Chat Model, Auto-fixing Output Parser, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
