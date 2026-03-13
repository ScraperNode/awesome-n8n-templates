# 🤖 Conversational Meta ads reporting & management with GPT-5

> ⚡ **4,399 views** · 🤖 [AI Chatbots & Agents](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Currently Work-In-Progress

This n8n template creates an intelligent AI assistant that responds to chat messages, providing conversational access to your Meta Ads data. Powered by an OpenAI GPT-5 model and equipped with memory to maintain context, this agent can interact with your Meta Ads accounts via the Facebook Graph API.

Users can ask it to:
* **List all connected ad accounts.**
* **Retrieve detailed information** for a specific ad account, including active campaigns, ad sets, and individual ads.
* **Fetch performance insights** (e.g., spend, impressions, conversions, CPC, CPM, CTR, ROAS) for a given account and time range.
 
Ideal for **marketers, advertisers**, or anyone needing quick, conversational access to their Meta Ads performance data and campaign structure without logging into the Ad Manager directly.

Requires: OpenAI and Facebook Graph API credentials.

## 🔗 Nodes Used

Facebook Graph API, Execute Workflow Trigger, AI Agent, OpenAI Chat Model, Simple Memory, Calculator

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
