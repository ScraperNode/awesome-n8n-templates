# 🎬 Tech news_curator - analyze daily news using AI_agents with Mistral

> ⚡ **2,135 views** · 🎬 [Content Creation & Video](../)

## Description

Using Mistral API, you can use this n8n workflow to automate the process of: collecting, filtering, analyzing, and summarizing news articles from multiple sources. The sources come from pre-built RSS feeds and a custom DuckDuckGo node, which you can change if you need.
It will deliver the most relevant news of the day in a concise manner.



****++How It Works++****

1.     The workflow begins each weekday at noon.

2.     The news are gathered from RSS feeds and a custom DuckDuckGo node, using HTTPS GET when needed.

3.     News not from today or containing unwanted keywords are filtered out.

4.     The first AI Agent will select the top news from their titles alone and generate a general title & summary.

5.     The next AI Agent will summarize the full content of the selected top news articles.

6.     The general summary and title will be combined with the top 10 news summaries into a final output.



**++Requirements++**

-     An active n8n instance (self-hosted or cloud).

-     Install the custom DuckDuckGo node: **n8n-nodes-duckduckgo-search**

-     A Mistral API key

-     Configure the Sub-Workflow for the content which requires HTTP GET requests. It is provided in the template itself.




++*Fair Notice*++

This is an older version of the template. There is a superior updated version which isn't restricted to tech news, with enhanced capabilities such as communication through different channels (email, social media) and advanced keyword filtering. It was recently published in n8n. You can find it [here](https://n8n.io/workflows/6157-multi-source-news-curator-with-mistral-ai-analysis-summaries-and-custom-channels/). If you are interested or would like to discuss specific needs, then feel free to contact us.

## 🔗 Nodes Used

HTTP Request, RSS Read, Execute Sub-workflow, Markdown, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
