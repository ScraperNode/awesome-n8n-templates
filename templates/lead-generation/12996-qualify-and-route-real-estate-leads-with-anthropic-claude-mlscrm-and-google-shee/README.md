# 🎣 Qualify and route real estate leads with Anthropic Claude, MLS/CRM, and Google Sheets

> ⚡ **97 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.

## Description

## How It Works
This workflow automates real estate lead qualification and routing by enriching leads from multiple sources with AI-powered analysis and directing them to appropriate sales agents based on priority. Designed for real estate brokers, sales managers, and lead generation teams, it solves the critical challenge of quickly identifying high-value prospects from high-volume lead streams while ensuring timely agent follow-up. The system triggers on schedule, fetches leads simultaneously from MLS portals and CRM/email sources, aggregates all leads into unified dataset, splits leads for parallel processing, then deploys AI agents using Anthropic's Claude to analyze lead quality, buying intent, budget capacity, and urgency. Based on enrichment scores, leads are routed to best-fit agents by priority tier, with engagement tracking logged to Google Sheets for performance monitoring and optimization.

## Setup Steps
1. Configure Schedule Trigger with desired lead processing frequency
2. Set up MLS/portal integration API credentials in Fetch Leads from MLS/Portals node
3. Configure CRM/email system API access in Fetch Leads from CRM/Email node
4. Connect Anthropic API credentials for AI Lead Enrichment Agent
5. Customize Structured Output Parser with your lead scoring criteria
6. Update Check Lead Priority node with priority threshold rules
7. Configure agent routing logic in Route to Best-Fit Agent nodes by priority tier

## Prerequisites
Active Anthropic API account, MLS/real estate portal API access, CRM system with API integration 
## Use Cases
Inbound lead qualification from property portals, open house inquiry processing, email campaign lead scoring 
## Customization
Modify AI enrichment prompts for market-specific criteria, adjust priority scoring algorithms for business goals
## Benefits
Reduces lead response time by 75%, ensures high-value prospects receive immediate attention

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, AI Agent, Anthropic Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
