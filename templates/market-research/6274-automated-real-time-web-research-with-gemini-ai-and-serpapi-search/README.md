# 📊 Automated real-time web research with Gemini AI and SerpAPI search

> ⚡ **3,228 views** · 📊 [Market Research & Insights](../)

## Description

### This workflow demonstrates how to automate live information gathering, fact-checking, and trend analysis in response to any chat message - using a powerful AI agent, memory, and a real-time search tool.

Use cases are many: This is perfect for **researchers** needing instant, up-to-date data; **support teams** providing live, accurate answers; **content creators** looking to verify facts or find hot topics; and **analysts** automating regular reports with the freshest information.

## How It Works
- The workflow is triggered whenever a chat message is received (e.g., a user question, research prompt, or data request).
- The message is sent to the AI Agent, which follows the following steps:
    - First, it queries **SerpAPI – Research** to gather the latest real-time information and data from the web.
    - Next, it checks the **Window Buffer Memory** for any related past interactions or contextual information that may be useful.
    - Finally, it sends all collected data and context to the **Google Gemini Chat Model**, which analyzes the information and generates a comprehensive, intelligent response.
- Then, the AI Agent delivers the analyzed, up-to-date answer directly in the chat, combining live data, context, and expert analysis.

## How To Set Up
- Download and import the workflow into your n8n workspace.
- Set up API credentials and tool access for the **AI Agent**:
     - **Google Gemini** (for chat-based intelligence) → connected to Node **Google Gemini Chat Model**.
     - **SerpAPI** (for real-time web and search results) → connected to Node **SerpAPI - Research**.
     - **Window Buffer Memory** (for richer, context-aware conversations) → connected to Node Window **Buffer Memory**.
- Open the chat in n8n and type the topic or trend you want to research.
- Send the message and wait for the process to complete.
- Receive the AI-powered research reply in the chat box.

## Requirements
- An **n8n** instance (self-hosted or cloud).
- **SerpAPI** credentials for live web search and data gathering.
- **Window Buffer Memory** configured to provide relevant conversation context in history.
- **Google Gemini API** access to analyze collected data and generate responses.

## How To Customize
- **Choose your preferred AI model**: Replace **Google Gemini** with **OpenAI ChatGPT**, or any other chat model as preferred.
- **Add or change memory**: Replace **Window Buffer Memory** with more advanced memory options for deeper recall.
- **Connect your preferred chat platform**: Easily swap out the default chat integration for Telegram, Slack, or any other compatible messaging platform to trigger and interact with the workflow.

## Need Help?
If you’d like this workflow customized, or if you’re looking to build a tailored AI Agent for your own business - please feel free to reach out to [**Agent Circle**](https://www.agentcircle.ai/). We’re always here to support and help you to bring automation ideas to life.

Join our community on different platforms for assistance, inspiration and tips from others.

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

AI Agent, OpenAI Chat Model, Simple Memory, SerpApi (Google Search), Manual Chat Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
