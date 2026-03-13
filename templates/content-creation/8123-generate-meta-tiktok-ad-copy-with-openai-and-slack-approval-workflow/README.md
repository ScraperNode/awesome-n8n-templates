# 🎬 Generate meta & TikTok ad copy with OpenAI and Slack approval workflow

> ⚡ **406 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who's it for

Marketing teams, copywriters, and agencies who need to quickly generate and iterate on ad copies for Meta and TikTok campaigns. Perfect for brands that want AI-powered copy generation with human review and approval built into the workflow.

## What it does

This workflow automates the ad copy creation process by:
- Collecting brand and product information through a form
- Using AI to generate tailored ad copies based on brand type (Fashion or Problem-Solution)
- Sending copies to Slack for team review and approval
- Handling revision requests with feedback incorporation
- Limiting revisions to 3 rounds to maintain efficiency

## How to set up

1. **Configure your OpenAI credentials** in the OpenAI nodes
2. **Set up Slack integration** and select your review channel in all Slack nodes
3. **Customize the AI prompts** in the OpenAI nodes to match your brand voice
4. **Test the form** to ensure file uploads and data collection work properly
5. **Activate the workflow** when ready

## Requirements

- OpenAI API access (GPT-3.5 or GPT-4)
- Slack workspace with appropriate channel permissions
- Self-hosted n8n instance (for file upload functionality)

## How to customize

- Adjust the AI prompts in OpenAI nodes to match your specific industry or brand guidelines
- Modify the revision limit in the "Edit Fields: Revision Counter Max 3" node
- Add additional brand types in the form dropdown and corresponding AI nodes
- Customize Slack messages to match your team's communication style

## 🔗 Nodes Used

Slack, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
