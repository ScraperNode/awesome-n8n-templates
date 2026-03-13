# 🎬 Flight deal analyzer with weather data using GPT, Google Flights & WordPress

> ⚡ **567 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## Introduction
Automates flight deal discovery and intelligent analysis for travel bloggers and deal hunters. Scrapes live pricing, enriches with weather data, applies AI evaluation, and auto-publishes to WordPress—eliminating manual research and accelerating content delivery.

## How It Works
User submits route via form, scrapes real-time flight prices and weather data, AI analyzes deal quality considering weather conditions, formats results, publishes to WordPress, sends Slack notification—fully automated from input to publication.

## Workflow Template
Form Input → Extract Data → Scrape Flight Prices → Extract Pricing → Fetch Weather → Parse Weather → Prepare AI Input → AI Analysis → Parse Output → Format Results → Publish WordPress → Slack Alert → User Response

## Setup Instructions
1. **Form Setup:** Configure user input fields for flight routes and preferences
2. **APIs:** Connect Google Flights scraping endpoint, weather API credentials, OpenAI/Chat Model API key
3. **Publishing:** Set WordPress credentials, target blog category, Slack webhook URL
4. **AI Configuration:** Define analysis prompts, output structure, parser rules

## Workflow Steps
1. **Data Collection:** Form captures route, scrapes Google Flights pricing, fetches destination weather via API
2. **AI Processing:** Enriches flight data with weather context, analyzes deal quality using OpenAI/Chat Model with structured output parsing
3. **Publishing:** Formats analysis results, creates WordPress post, sends Slack notification, delivers response to user


## Prerequisites
n8n instance, Google Flights access, weather API key, OpenAI/compatible AI service, WordPress site with API access, Slack workspace

## Use Cases
Travel blog automation, flight deal newsletters, price comparison services, seasonal travel planning, destination weather analysis, automated social media content

## Customization
Modify AI analysis criteria, adjust weather impact weighting, customize WordPress post templates, add email distribution, integrate additional data sources, expand to hotel/rental deals

## Benefits
Eliminates manual price checking, combines multiple data sources automatically, delivers AI-enhanced insights, accelerates publishing workflow, scales across unlimited routes, provides weather-aware recommendations

## 🔗 Nodes Used

HTTP Request, Slack, Wordpress, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
