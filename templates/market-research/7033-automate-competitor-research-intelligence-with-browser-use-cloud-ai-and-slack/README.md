# 📊 Automate competitor research & intelligence with Browser Use Cloud AI and Slack

> ⚡ **985 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

A sample demo showing how to integrate Browser Use Cloud API with N8N workflows. This template demonstrates AI-powered web research automation by collecting competitor intelligence and delivering formatted results to Slack.

### How It Works

1. Form trigger accepts competitor name input
2. Browser Use Cloud API performs automated web research
3. Webhook processes completion status and retrieves structured data
4. JavaScript code formats results into readable Slack message
5. HTTP request sends final report to Slack

### Integration Pattern
This workflow showcases key cloud API integration techniques:

- REST API authentication with bearer tokens
- Webhook-based status monitoring for long-running tasks
- JSON data parsing and transformation
- Conditional logic for processing different response states

### Setup Required

- Browser Use API key (signup at [cloud.browser-use.com](cloud.browser-use.com))
- Slack webhook URL

Perfect demo for learning browser-use cloud API integrations and building automated research workflows.

## 🔗 Nodes Used

HTTP Request, Webhook, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
