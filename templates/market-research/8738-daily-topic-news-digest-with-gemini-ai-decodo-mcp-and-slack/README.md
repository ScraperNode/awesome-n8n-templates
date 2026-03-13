# 📊 Daily topic news digest with Gemini AI, Decodo MCP and Slack

> ⚡ **360 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Try It Out!

This n8n template demonstrates how to build an autonomous AI news agent using Decodo MCP that automatically finds, scrapes, and delivers fresh industry news to your team via Slack. 

Use cases are many – automated news monitoring for your industry, competitive intelligence gathering, startup monitoring, regulatory updates, research automation, or daily briefings for your organization.

### How it works

- Define your news topics using the Set node – AI, MCP, web scraping, whatever matters to your business.
- The AI Agent processes those topics using the Gemini Chat Model, determining which tools to use and when.
- Here's where it gets interesting: Decodo MCP gives your AI agent the tools to search Google, scrape websites, and parse content automatically – all while bypassing geo-restrictions and anti-bot measures.
- The agent hunts for fresh articles from the last 48 hours, extracts clean data, and returns structured JSON results.
- Format Results cleans up the AI's messy output and removes duplicates.
- Your polished news digest gets delivered to Slack with clickable links and summaries.

### How to use

- Schedule trigger runs daily at 9 AM – adjust timing or swap for webhook triggers as needed.
- Customize topics in the Set node to match your industry.
- Scales effortlessly: add more topics, tweak search criteria, done.

### Requirements

- Decodo MCP credentials ([free trial available](https://dashboard.decodo.com/)) – grab the [Smithery connection URL with keys](https://decodo.com/blog/how-to-set-up-mcp-server#h2-step_4:_configure_the_mcp_server_) and paste it straight into your n8n MCP node. Done.
- [Gemini API key](https://aistudio.google.com/app/apikey) for the AI processing – drop it into the Google Gemini Chat Model node and pick whichever [Gemini model](https://ai.google.dev/gemini-api/docs/models) fits your needs.
- Slack workspace for delivery – [n8n's Slack integration docs](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.slack/) have you covered.

### What the final output looks like

Here's what your team receives in Slack every morning:

![gemini_decodo_mcp_news_automationresults.png](fileId:2663)

### Need help?

Join the [Discord](https://discord.com/invite/gvJhWJPaB4) or email [support@decodo.com](mailto:support@decodo.com) for questions.

Happy Automating!

## 🔗 Nodes Used

Slack, Schedule Trigger, AI Agent, Google Gemini Chat Model, MCP Client Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
