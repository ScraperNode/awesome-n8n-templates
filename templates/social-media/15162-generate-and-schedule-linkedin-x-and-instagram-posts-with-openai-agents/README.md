# 📱 Generate and schedule LinkedIn, X, and Instagram posts with OpenAI agents

> ⚡ **378 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This workflow orchestrates three specialized AI agents in sequence to research trends, generate platform-specific content (captions + images), and schedule posts across LinkedIn, X (Twitter), and Instagram.

### Who's it for
• Social media managers handling multiple brands
• Marketing teams needing consistent content pipelines
• Creators automating their content calendar
• Agencies managing high-volume posting schedules

### How it works
1. A topic/industry keyword is submitted via webhook or schedule
2. **Agent 1 (Research):** Searches current trends, extracts insights & hashtags
3. **Agent 2 (Content Gen):** Produces platform-specific captions + image prompts
4. **Agent 3 (Scheduling):** Posts to LinkedIn, X, and Instagram via their APIs
5. All activity is logged to a Google Sheet tracker

### How to set up
1. Import this workflow into n8n
2. Set credentials: OpenAI, LinkedIn OAuth2, Twitter OAuth2, Instagram Graph API, Google Sheets OAuth2, SendGrid (optional alerts)
3. Replace YOUR_SHEET_ID placeholder in the Google Sheet node
4. Replace YOUR_INSTAGRAM_ACCOUNT_ID, YOUR_LINKEDIN_PERSON_URN placeholders
5. Activate the workflow

### Requirements
• OpenAI API key (GPT-4.1 mini or better)
• LinkedIn OAuth2 credentials
• Twitter/X OAuth2 credentials
• Instagram Graph API credentials (Business account)
• Google Sheets OAuth2
• Optional: Stable Diffusion / DALL-E for image generation

### How to customize
• Swap OpenAI model in all AI nodes
• Adjust character limits per platform in Agent 2 prompt
• Modify posting schedule in the Schedule Trigger node
• Add Slack/email notifications on post confirmation
• Extend the Google Sheet columns for additional metadata

## 🔗 Nodes Used

HTTP Request, Webhook, Schedule Trigger, Filter, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
