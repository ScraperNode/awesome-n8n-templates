# 📊 AI YouTube trend explorer – n8n automation workflow with Gemini/ChatGPT

> ⚡ **13,886 views** · 📊 [Market Research & Insights](../)

## Description

### This n8n template helps you automatically discover, analyze, and track trending topics and videos on YouTube using an AI-powered agent.

Use cases are many: This workflow is perfect for **YouTube creators** needing fresh video ideas, **digital marketers** scouting new campaign topics, **social media managers** who want to catch trends early, and **researchers** who want to analyze what’s viral.

## How It Works
- The workflow starts whenever a chat message is received (e.g., a trend question, a topic prompt, or a request for insights).
- Incoming chat is routed to the **AI Agent – Trend Explorer** node:
     + First, the agent triggers the **Workflow – YouTube Search** tool to gather the latest trending topics and keywords from YouTube.
     + Next, the agent supplies this real-time YouTube data to the **OpenAI Chat Model** for deep analysis, trend interpretation, and unique insights.
     + To provide context-aware answers and track ongoing interests, the agent also references a **Simple Memory** module, recalling past queries, and user instructions.
- Finally, the result is a fast, data-driven, and smart trend report delivered instantly to your chat.

## How To Set Up
- Download the workflow package (including 2 .json files) and import it into your n8n interface.
- Set up necessary access in the following components of the **AI Agent - Trend Explorer** node:
    + **OpenAI Chat Model**: allows API connection for trend insights.
    + **Workflow – YouTube Search**: searches for trending videos based on the query.
    + **Simple Memory** (optional): enhances experience for ongoing sessions.
- Start by sending a chat message on n8n.
- Check the response from the AI agent in the same chat box.
- Ask follow-ups, explore deeper, or trigger new searches - all in one chat thread.

## Requirements
- n8n instance (self-hosted or cloud).
- Set up API access to **OpenAI Chat Model** for chat-based AI.

## How To Customize
- **Connect to your favorite chat platforms**: Easily integrate with additional chat triggers such as Telegram, Slack, or your preferred messaging app.
- **Choose your preferred AI model**: If you want a different viewpoint, simply swap OpenAI Chat Model for Google Gemini, Claude, or any compatible LLM model in your workflow.
- **Upgrade memory for smarter conversations**: For long-term recall or more advanced, context-aware chats, replace **Simple Memory** with a vector database like Pinecone or Redis.

## Need Help?
If you’d like this workflow customized to fit your tools and platforms availability, or if you’re looking to build a tailored AI Agent for your own business - please feel free to reach out to [**Agent Circle**](https://www.agentcircle.ai/). We’re always here to support and help you to bring automation ideas to life.

Join our community on different platforms for support, inspiration and tips from others.

Website: https://www.agentcircle.ai/
Etsy: https://www.etsy.com/shop/AgentCircle
Gumroad: http://agentcircle.gumroad.com/
Discord Global: https://discord.gg/d8SkCzKwnP
FB Page Global: https://www.facebook.com/agentcircle/
FB Group Global: https://www.facebook.com/groups/aiagentcircle/
X: https://x.com/agent_circle
YouTube: https://www.youtube.com/@agentcircle
LinkedIn: https://www.linkedin.com/company/agentcircle

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Call n8n Workflow Tool, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
