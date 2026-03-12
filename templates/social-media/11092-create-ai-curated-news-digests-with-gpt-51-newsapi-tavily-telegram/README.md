# 📱 Create AI-curated news digests with GPT-5.1, NewsAPI, Tavily & Telegram

> ⚡ **296 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Overview

Staying up to date with fast-moving topics like AI, machine learning, research, or your specific industry can be tricky.

To solve this for myself (for me, it is mostly AI and automation topics), I built and use this n8n workflow: it **pulls fresh articles** using NewsAPI based on my topics of interest, lets an AI agent **pick the 5 most relevant ones**, enriches them with a Tavily search engine, and **sends a clean, readable newsletter straight to Telegram** - in the language you specify.

In this post, I'll:

- Explain what the workflow does and why it's useful
- Show you how to import and configure it step by step
- Highlight the main advantages and common customisations
- Outline concrete next steps and improvements

After following this guide, you'll end up with a fully automated weekly newsletter that delivers relevant news on the topics you care about - without any manual work.

This is ideal if you already run n8n and want a mostly no‑code way to get a curated weekly digest in Telegram.

## What this workflow does

At a high level, this workflow:

- Runs on a schedule (weekly at 9:00 on Sundays by default)
- Automatically finds recent, relevant news via NewsAPI for your topics of interest
- Lets AI select the top 5 most relevant news
- Uses a Tavily-powered AI agent to fact-check and enrich each article
- Aggregates the final results into a compact newsletter in the language you specify
- Sends them as a Markdown-formatted Telegram message

The result: every week you get an AI-picked, enriched mini-newsletter with the latest news based on your own interests - delivered in Telegram.

## Requirements

To run this workflow, you need:

- **NewsAPI key**  
  Create an account [here](https://newsapi.org) and generate an API key - it is free.
- **Tavily API key**  
  You can sign up [here](https://app.tavily.com) and create an API key. They also have a generous free tier.
- **OpenAI API key**  
  Get one from OpenAI - we need this for the LLM agent calls.
- **Telegram bot + chat ID**  
  A Telegram bot (via BotFather) and the chat/channel ID where you want the newsletter. It is also free. See for example [here](https://core.telegram.org/bots/tutorial) how to set that up.

## How it works

The exact logic of the workflow is as follows:

- **Schedule Trigger**  
  Runs the workflow on a fixed interval (in this version: weekly, at 9:00 on Sundays).
- **Set topics and language**  
  A `Set` node that defines topics (my default is `AI,n8n` - use a comma-separated list) and language (here I have English, but choose what you prefer). Change these to match your interests (e.g. `health,fitness`, `macroeconomics,markets`, `climate,policy`, or anything you care about).
- **Call NewsAPI**  
  HTTP Request node calling the NewsAPI API. It uses as arguments:
  - `from`: last 7 days¹  
  - `q`: the query, built from your topics (topics like `AI,n8n` become `AI OR n8n` expected by the API)²  
  - `sortBy`: `relevancy` - the most relevant ones at the top of the results returned  
  Auth is handled via an `httpQueryAuth` credential, where your NewsAPI key is passed as a query parameter.
- **AI Topic Selector**  
  An `OpenAI - Message a model` node using `gpt-5.1` via your OpenAI API key with the following prompt:

```
You are an assistant that selects the most relevant news articles for a user.

Instructions:  
1. Choose the **5 most relevant non-overlapping articles** based on the user topics.  
2. For each article, provide:  
   - title  
   - short summary (1–2 sentences)  
   - source name  
   - url
3. Output the results in the language specified by the user.

Output as a "articles" JSON array of objects, each with "title", "summary", "source" and "url".

User topics of interest: {{ $('Set topics and language').item.json.topics }}
Output language: {{ $('Set topics and language').item.json.language }}

NewsAPI articles:

{{ 
  $json.articles.map(
    article =&gt; 
      `Title: ${article.title}
Description: ${article.description}
Content: ${article.content}
Source: ${article.source.name}
URL: ${article.url}`
  ).join('\n---\n')
}}
```

  The prompt instructs the model to read your topics and language, look at all articles from the NewsAPI call (it returns a maximum of 100), select the 5 most relevant, non-overlapping articles, and output a JSON array with `title`, `summary`, `source` and `url`.

- **Split Out**  
  Splits out the AI message so each article becomes its own item. This lets the downstream AI agent work on each article individually.

  Under the hood, we parse the JSON array returned by the AI into individual items, so that each article becomes its own item in n8n. This lets the AI Agent node enrich each article separately.
- **Newsletter AI Agent**  
  An AI Agent node with `gpt-5.1` as model, again accessed via your OpenAI API key. The agent takes the initial title, summary, source and url, uses the Tavily search tool to find 2–3 reliable, recent sources, and writes a concise 1–3 sentence article in the language you specified. The prompt for the model is shown below.

```
You are a research writer that updates short news summaries into concise, factual articles.

**Input:**
Title: {{ $json["title"] }}
Summary: {{ $json["summary"] }}
Source: {{ $json["source"] }}
Original URL: {{ $json["url"] }}
Language: {{ $('Set topics and language').item.json.language }}

**Instructions:**

1. Use **Tavily Search** to gather 2–3 reliable, recent, and relevant sources on this topic.
2. Update the **title** if a more accurate or engaging one exists.
3. Write **1–3 sentences** summarizing the topic, combining the original summary and information from the new sources.
4. Return the original source name and url as well.

**Output (JSON):**

{
  "title": "final article title",
  "content": "concise 1–3 sentence article content",
  "source": "the name of the original source",
  "url": "the url of the original source"
}

**Rules:**

* Ensure the topic is relevant, informative, and timely.
* Translate the article if necessary to comply with the desired language {{ $('Set topics and language').item.json.language }}.
```

  In particular, the prompt instructs the model to 
  
  1. Use **Tavily Search** to gather 2–3 reliable, recent, and relevant sources on this topic.
  2. Update the **title** if a more accurate or engaging one exists
  3. Write **1–3 sentences** summarizing the topic, combining the original summary and information from the new sources
  4. Reply in a pre-defined JSON format including the original source name and url. The **Output Parser** enforces a structured JSON output with `title`, `content`, `source` and `url` as fields.

  Because the model is allowed to adjust titles, you may occasionally see slightly different titles than in the original feed; if you prefer minimal changes, you can tighten the prompt to only allow small tweaks.

- **Aggregate**  
  Aggregate node collecting the `output` field from the agent. Combines the individual article objects back into one array to be used for messaging.
- **Send a text message**  
  A `Telegram - Send a text message` node that uses your Telegram bot credentials and `chatId`. Renders each article as title, content plus `Source: [source](url)`.

&gt; To adjust this workflow for your needs, open the `Set topics and language` node to tweak topics (comma-separated, like `AI,startups,LLMs` or `web dev,TypeScript,n8n`) and switch the language to any target language, then inspect the `Schedule Trigger` to adjust interval and time, e.g. weekly at 07:30. These two tweaks control the content topics of your newsletter and when you will receive it.

## Why this workflow is powerful

- **End-to-end automation**  
  From news discovery to curated delivery, everything is automated.
- **AI-driven topic relevance**  
  Instead of naïvely listing every headline the AI filters for relevance to your topics and avoids overlapping or duplicate stories.
- **Grounded in facts**  
  By using NewsAPI and Tavily, the newsletter stays fact-based, i.e. you get short, factual summaries grounded in multiple sources.
- **Flexibility**  
  A single parameter (`language`) lets you specify the output language, while the Schedule Trigger lets you set the frequency.
- **Low friction and mobile-first**  
  Using Telegram as a consumption surface provides quick, low-friction reading, with push notifications as notifiers.

## Next steps

Here are concrete directions to take this workflow further:

- **RAG-workflow for better topic selection**  
  Use a Retrieval-Augmented Generation pattern to let the model better choose topics that align with your evolving preferences. Right now, all news articles go into the prompt, which may bias the model to pick articles that appear first.
- **Prompt iteration and evaluation framework**  
  Systematically experiment with different selection criteria (e.g. "more technical", "more beginner-friendly"), tone and length of the newsletter.
- **Logging using n8n data tables**  
  Persist previous newsletter to avoid repetition and for better debugging. Using the source links provided in the newsletter, track which articles were clicked to enable 1:1 personalization.
- **Email with HTML template**  
  For more flexibility, send the newsletter via email.
- **Trigger based on news relevance**  
  Instead of (or in addition to) a fixed schedule, compute a "relevance score" or "novelty score" across articles. Trigger only when the score crosses a threshold.
- **Incorporating other news APIs or RSS feeds**  
  Add more sources such as other news APIs and RSS feeds from blogs, newsletters, or communities.
- **Adjust for arxiv paper search and research news**  
  Swap NewsAPI for arxiv search or other academic sources to obtain a personal research digest newsletter.
- **Add 1:1 personalization by tracking URL clicks**  
  Use n8n data tables to track which URLs have been clicked. Use this information as input to future AI runs to refine the news suggestions.
- **Audio and video news**  
  Use audio or video models for better news communication.

## Wrap-up

This workflow shows how I use n8n, NewsAPI, Tavily, OpenAI, and Telegram to **create a personal weekly newsletter**. It’s mostly no-code, easy to customize, and something I rely on myself to stay informed without spending time browsing news manually.

[Contact me here](https://akribic.com/contact?subject=AI%20newsletter%20n8n%20workflow), visit my [website](https://akribic.com), or connect with me on [LinkedIn](https://www.linkedin.com/in/felixkemeth).

## Footnotes

1. we do that here with the JS expression `={{ DateTime.fromISO($json.timestamp).minus({ days: 7 }) }}`
2. we do that here with the JS expression `{{ $json.topics.replaceAll("," , " OR ") }}`

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
