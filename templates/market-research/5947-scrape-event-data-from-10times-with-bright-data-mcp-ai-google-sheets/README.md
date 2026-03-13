# 📊 Scrape event data from 10times with Bright Data MCP, AI & Google Sheets

> ⚡ **1,181 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

This workflow automatically discovers and collects information about events and attendee data from event platforms. It saves you time by eliminating the need to manually browse through event listings and provides a centralized database of event information including categories, venues, and attendee feedback.

## Overview

This workflow automatically scrapes event data from 10times.com and other event platforms to extract categories, featured events, attendee feedback, and venue information. It uses Bright Data to access event websites without being blocked and AI to intelligently parse event data into structured format for storage in Google Sheets.

## Tools Used

- **n8n**: The automation platform that orchestrates the workflow
- **Bright Data**: For scraping event websites without being blocked
- **OpenAI**: AI agent for intelligent event data extraction and parsing
- **Google Sheets**: For storing and organizing event information

## How to Install

1. **Import the Workflow**: Download the .json file and import it into your n8n instance
2. **Configure Bright Data**: Add your Bright Data credentials to the MCP Client node
3. **Set Up OpenAI**: Configure your OpenAI API credentials
4. **Configure Google Sheets**: Connect your Google Sheets account and specify the target spreadsheet
5. **Customize**: Adjust the event platform URLs and event criteria you want to monitor

## Use Cases

- **Event Planners**: Monitor competing events and industry trends
- **Marketing Teams**: Identify events for sponsorship and networking opportunities
- **Business Development**: Find relevant events for lead generation and partnerships
- **Market Research**: Track event attendance patterns and industry insights

## Connect with Me

- **Website**: https://www.nofluff.online
- **YouTube**: https://www.youtube.com/@YaronBeen/videos
- **LinkedIn**: https://www.linkedin.com/in/yaronbeen/
- **Get Bright Data**: https://get.brightdata.com/1tndi4600b25 (Using this link supports my free workflows with a small commission)

#n8n #automation #events #eventdiscovery #brightdata #webscraping #eventplanning #eventscraping #attendeedata #eventmarketing #n8nworkflow #workflow #nocode #eventautomation #eventmonitoring #eventresearch #10times #eventintelligence #venuedata #eventfeedback #eventtracking #eventcalendar #eventanalytics #businessevents #eventorganizer #eventtech #eventindustry #eventcollection #networkingevents #conferencedata

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, AI Agent, OpenAI Chat Model, Auto-fixing Output Parser, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
