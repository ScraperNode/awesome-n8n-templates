# 🔒 Monitor compliance with GPT-4 analysis of system logs and generate audit reports

> ⚡ **117 views** · 🔒 [SecOps & Security Automation](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## How It Works
This solution centralizes communication data from Slack, Microsoft Teams, Gmail, and GitHub into a unified AI-powered analysis and documentation workflow for teams managing distributed knowledge. Manual aggregation across multiple tools is time-consuming and leads to information silos that obscure key decisions and context. By automating secure data collection and normalization, the workflow enables AI models to analyze conversations, extract decisions, action items, and key themes, and convert these insights into continuously updated documentation such as design notes and knowledge base articles. This improves visibility, preserves organizational knowledge, and supports more effective collaboration and decision-making.

## Setup Steps
* **Connect credentials:** Slack App API, Microsoft Teams credentials, Gmail OAuth, GitHub Personal Access Token, Anthropic API key 
* **Configure monitoring parameters:** Specify channels, repositories, and email labels to track
* **Set schedule triggers: 
 
## Prerequisites
Slack workspace admin, Teams account, Gmail account, GitHub repository access, Anthropic API subscription, Notion workspace, n8n self-hosted or cloud instance.

## Use Cases
Marketing teams aggregating customer feedback across channels; Documentation teams collecting technical updates; 

## Customization
Modify source integrations by adding/removing trigger nodes. Adjust AI prompts in Anthropic node for different analysis types.  

## Benefits
Saves 5+ hours weekly on manual data collection. Ensures no communication missed across platforms.

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
