# 📱 Research-to-social post generator with Perplexity AI and Facebook Graph API

> ⚡ **429 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who’s it for
Teams that want to turn a chat prompt into a researched, ready-to-post social update—optionally published to Facebook.

## What it does / How it works
- Chat Trigger receives the user prompt
- Topic Agent optionally calls a research sub-workflow for fresh sources
- Outputs are validated into a structured JSON
- Post Writing Agent crafts a concise Vietnamese post
- (Optional) Facebook Graph API publishes to your Page

## How to set up
1. Connect OpenAI & Facebook in **Credentials** (no API key inside nodes).
2. In **Tool: Call Perplexity Researcher**, set your research `workflowId`.
3. In **Publish: Facebook Graph API**, set your Page ID and edge.
4. Adjust prompts/tone and the `LANGUAGE` in **CONFIG**.
5. Test the flow with sample prompts in the chat.

## Requirements
- n8n (Cloud or self-hosted)
- OpenAI API key (stored in Credentials)
- Facebook Page publish permissions
- (Optional) a research workflow for Perplexity

## How to customize the workflow
- Add moderation/review gates before publishing.
- Duplicate the publish path for other platforms.
- Store outputs in Sheets/Notion/DB for auditing.
- Tune model choice & temperature for your brand voice.

## Security
- Avoid hardcoding secrets in HTTP or Code nodes.
- Keep identifiers (Page IDs, workflowIds) configurable in **CONFIG**.

## 🔗 Nodes Used

Facebook Graph API, AI Agent, OpenAI Chat Model, Structured Output Parser, Call n8n Workflow Tool, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
