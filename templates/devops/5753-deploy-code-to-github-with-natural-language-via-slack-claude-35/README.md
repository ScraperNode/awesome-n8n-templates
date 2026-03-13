# ⚙️ Deploy code to GitHub with natural language via Slack & Claude 3.5

> ⚡ **322 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.

## Description

## Github Deployer Agent
## Overview
The Github Deployer Agent is an intelligent automation tool that integrates with Slack to streamline code deployment workflows. Powered by Anthropic's Claude 3.5 and Tavily for web search, it enables seamless, context-aware file pushes to a GitHub repository with minimal user input.

## Capabilities
- Accepts natural language via Slack
- Automatically pushes code to a default GitHub repository
- Uses Claude 3.5 for code generation and decision-making
- Leverages Tavily for real-time web search to enhance context
- Supports folder structure hints to ensure clean and organized repositories

## Required Connections
To operate correctly, the following integrations must be in place:
- Slack API Token with permission to read messages and post responses
- GitHub Personal Access Token with repo write permissions
- Tavily API Key for external search functionality
- Claude 3.5 API Access via Anthropic

*Detailed configuration instructions are provided in the workflow*

## Example Input
From Slack, you can send messages like:
"Generate a basic `README.md` for my Python project and store it in the root directory."

## Customising This Workflow
You can tailor the workflow by:
- Modifying default folder paths or repository settings
- Integrate Jira node to use issue keys as default folder naming
- Add slack file upload option

## 🔗 Nodes Used

Slack, AI Agent, Anthropic Chat Model, Slack Trigger, HTTP Request Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
