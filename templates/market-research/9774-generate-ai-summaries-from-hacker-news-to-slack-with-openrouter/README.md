# 📊 Generate AI summaries from Hacker News to Slack with OpenRouter

> ⚡ **1,265 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who's it for

This template is for teams that want to stay updated on industry trends, tech news, or competitor mentions without manually browsing news sites. It's ideal for marketing, development, and research teams who use Slack as their central hub for automated, timely information.

## What it does / How it works

This workflow runs on a daily schedule (default 9 AM), fetches the top articles from Hacker News for a specific keyword you define (e.g., 'AI'), and uses an AI agent with OpenRouter to generate a concise, 3-bullet point summary in Japanese for each article. The final formatted summary, including the article title, is then posted to a designated Slack channel. The entire process is guided by descriptive sticky notes on the canvas, explaining each configuration step.

## How to set up

1.  In the **Configure Your Settings** node, change the default keyword `AI` to your topic of interest and update the `slack_channel` to your target channel name.
2.  Click the **OpenRouter Chat Model** node and select your OpenRouter API key from the Credentials dropdown. If you haven't connected it yet, you will need to create a new credential.
3.  Click the **Send Summary to Slack** node and connect your Slack account using OAuth2 credentials.
4.  (Optional) Adjust the schedule in the **Trigger Daily at 9 AM** node to change how often the workflow runs.
5.  Activate the workflow.

## Requirements

* An n8n instance (Cloud or self-hosted).
* A Slack account and workspace.
* An OpenRouter API key stored in your n8n credentials.
* If self-hosting, ensure the LangChain nodes are enabled.

## How to customize the workflow

* **Change the News Source:** Replace the **Hacker News** node with an **RSS Feed Read** node or another news integration to pull articles from different sources.
* **Modify the AI Prompt:** In the **Summarize Article with AI** node, you can edit the system message to change the summary language, length, or tone.
* **Use a Different AI Model:** Swap the **OpenRouter** node for an **OpenAI**, **Anthropic**, or any other supported chat model.
* **Track Multiple Keywords:** Modify the workflow to loop through a list of keywords in the **Configure Your Settings** node to monitor several topics at once.

## 🔗 Nodes Used

Slack, Hacker News, Schedule Trigger, AI Agent, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
