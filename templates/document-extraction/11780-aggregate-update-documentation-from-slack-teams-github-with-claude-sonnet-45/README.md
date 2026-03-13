# 🔬 Aggregate & update documentation from Slack, Teams & GitHub with Claude Sonnet 4.5

> ⚡ **153 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## How It Works
Aggregates communication data from Slack, Microsoft Teams, Gmail, GitHub, and Confluence into a single, unified AI-powered analysis workflow designed for quality review and automated documentation updates. This solution is specifically aimed at teams managing distributed content and knowledge workflows across multiple platforms. It addresses the challenges of fragmented communication and isolated information silos that often prevent rapid content review and timely decision-making. The workflow begins with a scheduled trigger, followed by multi-source data collection, merging and normalizing inputs, Claude AI-powered analysis, validation and quality checks, formatting, and finally publishing updates to Notion and Confluence, accompanied by Slack notifications to ensure stakeholders are promptly informed.

## Setup Steps
-Connect credentials: Slack API, Teams, Gmail OAuth, GitHub PAT. 
-Confluence API, Anthropic API key, Notion Integration. 
-Configure monitored channels/repositories. 
-Set schedule frequency. 
-Map output destinations (Notion/Confluence). 
-Test merged output before enabling automation.

## Prerequisites
Slack workspace, Teams account, Gmail access, GitHub repository, Confluence space, Anthropic API key, Notion workspace, n8n instance.

## Use Cases
Content review teams processing feedback, documentation teams aggregating updates, QA teams reviewing communications 

## Customization
Add/remove source nodes, adjust Claude prompts for analysis type, modify output destinations 

## Benefits
Saves 6+ hours weekly, eliminates missed content, AI-driven quality assurance

## 🔗 Nodes Used

GitHub, HTTP Request, Slack, Gmail, Microsoft Teams, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
