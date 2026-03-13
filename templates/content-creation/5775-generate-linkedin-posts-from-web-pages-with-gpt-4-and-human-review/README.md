# 🎬 Generate LinkedIn posts from web pages with GPT-4 and human review

> ⚡ **1,175 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Use Case
Turn any web page into a compelling LinkedIn post — complete with an AI-generated image. This automation is ideal for sharing content like blog posts, case studies, or product updates in a polished and engaging format.

## What This Automation Does
Given a page URL and optional user instructions, this automation:
- Scrapes the content of the webpage
- Uses AI to write a clear, educational, and LinkedIn-optimized post
- Sends both to Slack for review and approval
- Handles feedback and revisions via Slack interactions

Input:
- **Page URL** — The link to the webpage (required)
- **Instructions** — Optional notes on tone, emphasis, or format

Output:
- LinkedIn post text
- Slack message with review/approval options

## How It Works
1. **Form Submission**: User inputs a web page and optional instructions.
2. **Web Scraping**: Uses Airtop to extract page content.
3. **Post Generation**: AI agent writes a post based on the page and instructions.
4. **Slack Review Flow**:
   - Post and image sent to Slack for feedback
   - User can approve, request revisions, or decline
   - Revisions trigger reprocessing steps automatically
5. **Final Post Delivery**: Approved post is sent back to Slack, ready to publish.

## Setup Requirements
1. Generate an [Airtop API key](https://portal.airtop.ai/api-keys) completely free.
2. Configure your [OpenAI credentials](https://docs.n8n.io/integrations/builtin/credentials/openai/) for post and image prompt generation
3. [Slack OAuth](https://docs.n8n.io/integrations/builtin/credentials/slack/#slack-trigger-configuration) credentials and a Slack channel

## Next Steps
- **Post Directly**: Add LinkedIn publishing to automate the full content workflow.
- **Template Variations**: Offer post style presets (e.g., technical, story-driven, short-form).
- **CRM Sync**: Save approved posts and stats in Airtable or Notion for team use.

Read more about [generating social content using AI](https://www.airtop.ai/automations/generate-linkedin-post-from-a-webpage)

## 🔗 Nodes Used

Slack, OpenAI Chat Model, n8n Form Trigger, OpenAI, Text Classifier, Airtop

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
