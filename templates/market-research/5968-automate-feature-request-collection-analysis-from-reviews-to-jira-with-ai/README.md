# 📊 Automate feature request collection & analysis from reviews to Jira with AI

> ⚡ **541 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

This workflow automatically gathers and analyzes feature requests from multiple sources including support tickets, user forums, and feedback platforms to help prioritize product development. It saves you time by eliminating the need to manually monitor various channels and provides intelligent feature request analysis.

## Overview

This workflow automatically scrapes support systems, user forums, social media, and feedback platforms to collect feature requests from customers. It uses Bright Data to access various platforms without being blocked and AI to intelligently categorize, prioritize, and analyze feature requests based on frequency and user impact.

## Tools Used

- **n8n**: The automation platform that orchestrates the workflow
- **Bright Data**: For scraping support platforms and user forums without being blocked
- **OpenAI**: AI agent for intelligent feature request categorization and analysis
- **Google Sheets**: For storing feature requests and generating prioritization reports

## How to Install

1. **Import the Workflow**: Download the .json file and import it into your n8n instance
2. **Configure Bright Data**: Add your Bright Data credentials to the MCP Client node
3. **Set Up OpenAI**: Configure your OpenAI API credentials
4. **Configure Google Sheets**: Connect your Google Sheets account and set up your feature request tracking spreadsheet
5. **Customize**: Define feedback sources and feature request identification parameters

## Use Cases

- **Product Management**: Prioritize roadmap items based on customer demand
- **Development Teams**: Understand which features users need most
- **Customer Success**: Track and respond to feature requests proactively
- **Strategy Teams**: Make data-driven decisions about product direction

## Connect with Me

- **Website**: https://www.nofluff.online
- **YouTube**: https://www.youtube.com/@YaronBeen/videos
- **LinkedIn**: https://www.linkedin.com/in/yaronbeen/
- **Get Bright Data**: https://get.brightdata.com/1tndi4600b25 (Using this link supports my free workflows with a small commission)

#n8n #automation #featurerequests #productmanagement #brightdata #webscraping #productdevelopment #n8nworkflow #workflow #nocode #roadmapping #customervoice #productinsights #featureanalysis #productfeedback #userresearch #productdata #featuretracking #productplanning #customerneeds #featurediscovery #productprioritization #featurebacklog #uservoice #productintelligence #developmentplanning #featuremonitoring #productdecisions #feedbackgathering #productautomation

## 🔗 Nodes Used

Jira Software, AI Agent, OpenAI Chat Model, Auto-fixing Output Parser, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
