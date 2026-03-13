# 🎬 Automated daily news summaries with OpenRouter AI & Gmail delivery

> ⚡ **1,004 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.

## Description

### Daily AI News Summary & Gmail Delivery

This n8n template demonstrates how to build an autonomous AI agent that automatically scours the web for the latest news, intelligently summarizes the top stories, and delivers a professional, formatted news digest directly to your email inbox.

Use cases are many: Create a personalized daily briefing to start your day informed, keep your team updated on industry trends and competitor news, or automate content curation for your newsletter.

**Good to know**

*   At the time of writing, costs will depend on the LLM you select via **OpenRouter** and your usage of the **Tavily Search API**. Both services offer free tiers to get started.
*   This workflow requires API keys and credentials for OpenRouter, Tavily, and Gmail.
*   The AI Agent's system prompt is configured to produce summaries in **Japanese**. You can easily change the language and topics by editing the prompt in the "AI News Agent" node.

**How it works**

1.  The workflow begins on a daily schedule, which you can configure to your preferred time.
2.  A **Code node** dynamically generates a search query for the current day's most important news across several categories.
3.  The **AI Agent** receives this query. It uses its attached tools to perform the task:
    *   It uses the **Tavily News Search** tool to find relevant, up-to-date articles from the web.
    *   It then uses the **OpenRouter Chat Model** to analyze the search results, identify the most significant stories, and write a summary for each.
    *   The agent's output is strictly structured into a JSON format, containing a main title and an array of individual news stories.
4.  Another **Code node** takes this structured JSON data and transforms it into a clean, professional HTML-formatted email.
5.  Finally, the **Gmail node** sends the beautifully formatted email to your specified recipient.

**How to use**

*   Before you start, you must add your credentials for **OpenRouter**, **Tavily**, and **Gmail** in their respective nodes.
*   Customize the schedule in the "Schedule Trigger" node to set the daily delivery time.
*   Change the recipient's email address in the final "Send a message" (Gmail) node.

**Requirements**

*   OpenRouter account (for access to various LLMs)
*   Tavily AI account (for the real-time search API)
*   Google account with Gmail enabled for sending emails via OAuth2

**Customising this workflow**

*   **Change the delivery channel:** Easily swap the final Gmail node for a Slack, Discord, or Telegram node to send the news summary to a team channel.
*   **Focus the news topics:** Modify the "Prepare News Query" node to search for highly specific topics, such as "latest advancements in artificial intelligence" or "financial news from the European market."
*   **Archive the news:** Add a node after the AI Agent to save the structured JSON data to a database or Google Sheet, allowing you to build a searchable news archive over time.

## 🔗 Nodes Used

Gmail, Schedule Trigger, AI Agent, Structured Output Parser, HTTP Request Tool, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
