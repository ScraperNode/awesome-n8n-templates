# 📱 Automate email campaign analysis & smart follow-ups with Bright Data & OpenAI

> ⚡ **6,224 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

This workflow automatically tracks email campaign performance metrics and triggers smart follow-up actions based on engagement data. It saves you time by eliminating the need to manually monitor campaign reports and provides intelligent re-engagement strategies for improving email marketing ROI.

## Overview

This workflow automatically scrapes email service provider (ESP) reports to extract campaign performance metrics like open rates, click-through rates, and bounce rates. It uses AI to analyze the data and automatically sends targeted follow-up emails to re-engage subscribers who opened but didn't click, maximizing campaign effectiveness.

## Tools Used

- **n8n**: The automation platform that orchestrates the workflow
- **Bright Data**: For scraping ESP campaign reports without being blocked
- **OpenAI**: AI agent for intelligent campaign data analysis and decision making
- **Gmail**: For sending automated follow-up engagement emails

## How to Install

1. **Import the Workflow**: Download the .json file and import it into your n8n instance
2. **Configure Bright Data**: Add your Bright Data credentials to the MCP Client node
3. **Set Up OpenAI**: Configure your OpenAI API credentials
4. **Configure Gmail**: Connect your Gmail account for sending follow-up emails
5. **Customize**: Set ESP report URLs and define engagement thresholds for triggering follow-ups

## Use Cases

- **Email Marketing**: Automatically optimize campaign performance with smart follow-ups
- **Marketing Automation**: Trigger re-engagement campaigns based on behavior data
- **Performance Tracking**: Monitor email metrics without manual ESP login
- **Customer Retention**: Re-engage subscribers who showed interest but didn't convert

## Connect with Me

- **Website**: https://www.nofluff.online
- **YouTube**: https://www.youtube.com/@YaronBeen/videos
- **LinkedIn**: https://www.linkedin.com/in/yaronbeen/
- **Get Bright Data**: https://get.brightdata.com/1tndi4600b25 (Using this link supports my free workflows with a small commission)

#n8n #automation #emailmarketing #campaigntracking #brightdata #webscraping #emailautomation #n8nworkflow #workflow #nocode #emailcampaigns #marketingautomation #emailperformance #campaignanalysis #emailmetrics #reengagement #marketingdata #emailoptimization #campaignmonitoring #emailanalytics #digitalmarketing #performancetracking #emailstrategy #conversionoptimization #marketinganalytics #emailroi #campaigninsights #emailengagement #marketingefficiency #automatedemail

## 🔗 Nodes Used

Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model, Auto-fixing Output Parser, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
