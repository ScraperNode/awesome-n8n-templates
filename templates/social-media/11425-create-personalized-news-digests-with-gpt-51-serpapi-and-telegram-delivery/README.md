# 📱 Create personalized news digests with GPT-5.1, SerpAPI, and Telegram delivery

> ⚡ **136 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Overview

Staying up to date with fast-moving topics like AI, machine learning, or your specific industry can be overwhelming. You either drown in daily noise or miss important developments between weekly digests.

This **AI News Agent** workflow delivers a curated newsletter only when there's genuinely relevant news. I use it myself for AI and n8n topics.

**Key features:**

- **AI-driven send decision**: An AI agent evaluates whether today's news is worth sending.
- **Deduplication**: Compares candidate articles against past newsletters to avoid repetition.
- **Real-time news**: Uses [SerpAPI's DuckDuckGo News engine](https://serpapi.com/duckduckgo-news-api) for fresh results.
- **Frequency guardrails**: Configure minimum and maximum days between newsletters.

In this post, I'll walk you through the complete workflow, explain each component, and show you how to set it up yourself.

## What this workflow does

At a high level, the AI News Agent:

1. **Fetches fresh news** twice daily via SerpAPI's DuckDuckGo News engine.
2. **Stores articles** in a persistent data table with automatic deduplication.
3. **Filters for freshness** - only considers articles newer than your last newsletter.
4. **Applies frequency guardrails** - respects your min/max sending preferences.
5. **Makes an editorial decision** - AI evaluates if the news is worth sending.
6. **Enriches selected articles** - uses Tavily web search for fact-checking and depth.
7. **Delivers via Telegram** - sends a clean, formatted newsletter.
8. **Remembers what it sent** - stores each edition to prevent future repetition.

This allows you to get newsletters **only when there's genuinely relevant news** - in contrast to a fixed schedule.

## Requirements

To run this workflow, you need:

- **SerpAPI key**  
  Create an account at [serpapi.com](https://serpapi.com) and generate an API key. They offer 250 free searches/month.

- **Tavily API key**  
  Sign up at [app.tavily.com](https://app.tavily.com) and create an API key. Generous free tier available.

- **OpenAI API key**  
  Get one from [OpenAI](https://platform.openai.com) - required for AI agent calls.

- **Telegram bot + chat ID**  
  A free Telegram bot (via BotFather) and the chat/channel ID where you want the newsletter. See [Telegram's bot tutorial](https://core.telegram.org/bots/tutorial) for setup.

## How it works

The workflow is organized into five logical stages.

### Stage 1: Schedule & Configuration

- **Schedule Trigger**  
  Runs the workflow on a cron schedule. Default: `0 0 9,17 * * *` (twice daily at 9:00 and 17:00). These frequent checks enable the AI to send newsletters at these times when it observes actually relevant news, not only once a week.
_I picked 09:00 and 17:00 as natural check‑in points at the start and end of a typical workday, so you see updates when you’re most likely to read them without being interrupted in the middle of deep work. With SerpAPI’s 250 free searches/month, running twice per day with a small set of topics (e.g. 2–3) keeps you comfortably below the limit; if you add more topics or increase the schedule frequency, either tighten the cron window or move to a paid SerpAPI plan to avoid hitting the cap._

- **Set topics and language**  
  A `Set` node that defines your configuration:
  - `topics`: comma-separated list (e.g., `AI, n8n`)
  - `language`: output language (e.g., `English`)
  - `minDaysBetween`: minimum days to wait (0 = no minimum)
  - `maxDaysBetween`: maximum days without sending (triggers a "must-send" fallback)

### Stage 2: Fetch & Store News

- **Build topic queries**  
  Splits your comma-separated topics into individual search queries:
_In DuckDuckGo News via SerpAPI, a query like `AI,n8n` looks for news where both “AI” and “n8n” appear. For a niche tool like `n8n`, this is often almost identical to just searching for `n8n` ([docs](https://serpapi.com/duckduckgo-news-api)). It’s therefore better to split the topics, search for each of them separately, and let the AI later decide which news articles to select._

```javascript
return $input.first().json.topics.split(',').map(topic =&gt; ({
  json: { topic: topic.trim() }
}));
```

- **Fetch news from SerpAPI (DuckDuckGo News)**  
  HTTP Request node calling SerpAPI with:
  - `engine`: `duckduckgo_news`
  - `q`: your topic
  - `df`: `d` (last day)
  
  Auth is handled via `httpQueryAuth` credentials with your SerpAPI key.
_SerpAPI also offers other news engines such as the Google News API ([see here](https://serpapi.com/google-news-api)). DuckDuckGo News is used here because, unlike Google News, it returns an excerpt/snippet in addition to the title, source, and URL ([see here](https://serpapi.com/duckduckgo-news-api))—giving the AI more context to work with._
_Another option is NewsAPI, but its [free tier delays articles by 24 hours](https://newsapi.org/pricing), so you miss the freshness window that makes these twice-daily checks valuable. DuckDuckGo News through SerpAPI keeps the workflow real-time without that lag._
_n8n has official SerpAPI nodes, but as of writing there is no dedicated node for the DuckDuckGo News API. That’s why this workflow uses a custom `HTTP Request` node instead, which works the same under the hood while giving you full control over the DuckDuckGo News parameters._

- **Split SerpAPI results into articles**  
  Expands the `results` array so each article becomes its own item.

- **Upsert articles into News table**  
  Stores each article in an n8n data table with fields: `title`, `source`, `url`, `excerpt`, `date`. Uses **upsert** on title + URL to avoid duplicates. Date is normalized to ISO UTC:

```javascript
DateTime.fromSeconds(Number($json.date), {zone: 'utc'}).toISO()
```

### Stage 3: Filtering & Frequency Guardrails

This is where the workflow gets smart about *what* to consider and *when* to send.

- **Get previous newsletters → Sort → Get most recent**  
  Pulls all editions from the `Newsletters` table and isolates the latest one with its `createdAt` timestamp.

- **Combine articles with last newsletter metadata**  
  Attaches the last newsletter timestamp to each candidate article.

- **Filter articles newer than last newsletter**  
  Keeps only articles published *after* the last edition. Uses a safe default date (`2024-01-01`) if no previous newsletter exists:

```javascript
$json.date_2 &gt; ($json.createdAt_1 || DateTime.fromISO('2024-01-01T00:00:00.000Z'))
```

- **Stop if last newsletter is too recent**  
  Compares `createdAt` against your `minDaysBetween` setting. If you're still in the "too soon to send" window, the workflow short-circuits here.

### Stage 4: AI Editorial Decision

This is the core intelligence of the workflow - an AI that decides *whether* to send and *what* to include. This stage is also the actual agentic part of the workflow, where the system makes its own decisions instead of just following a fixed schedule.

- **Aggregate candidate articles for AI**  
  Bundles today's filtered articles into a compact list with `title`, `excerpt`, `source`, and `url`.

- **Limit previous newsletters to last 5 → Aggregate**  
  Prepares the last 5 newsletter contents for the AI to check against for repetition.

- **Combine candidate articles with past newsletters**  
  Merges both lists so the AI sees "today's candidates" + "recent history" side by side.

- **AI: decide send + select articles**  
  The heart of the workflow. A GPT-5.1 call with a comprehensive editorial prompt:

```text
You are an **AI Newsletter Editor**. Your job is to decide whether today’s newsletter edition should be sent, and to select the best articles.

You will receive a list of articles with:
'title', 'excerpt', `source`, `url`.

You will also receive content of **previously sent newsletters** (markdown).

# Your Tasks

## 1. Decide whether to send the newsletter

Output "YES" only if all of the following are satisfied **OR** the fallback rule applies:

### **Base Criteria**

1. There are **at least 3 meaningful articles**.
   *Meaningful = not trivial, not purely promotional, not clickbait, contains actual informational value.*

2. Articles must be **non-duplicate and non-overlapping**:

   * Not the same topic/headline rephrased
   * Not reporting identical events with minor variations
   * Not the same news covered by multiple sources without distinct insights

3. Articles must be **relevant to the user's topics**:
   **{{ $('Set topics and language').item.json.topics }}**

4. Articles must be **novel** relative to the **topics in previous newsletters**:

   * Compare against all previous newsletters below
   * Exclude articles that discuss topics already substantially covered

5. Articles must offer **clear value**:

   * New information
   * Impact that matters to the user
   * Insight, analysis, or meaningful expansion

### **Fallback rule: Newsletter frequency requirement**

If **at least 1 relevant article exists** *and*
the last newsletter was sent **more than {{ $('Set topics and language').item.json.maxDaysBetween }} days ago**, then you **MUST** return "YES" as a decision even if the other criteria are not completely met.

Last newsletter was sent {{ $('Get most recent newsletter').item.json.createdAt ? Math.floor($now.diff(DateTime.fromISO($('Get most recent newsletter').item.json.createdAt), 'days').days) : 999 }} days ago.

### Otherwise → "NO"

## **2. If "YES": Select Articles**

Select the **top 3–5** articles that best fulfill the criteria above.

For each selected article, output:

* **title** (rewrite for clarity, conciseness, and impact)
* **summary** (1–2 sentences; written in the output language)
* **source**
* **url**

All summaries **must** be written in:
**{{ $('Set topics and language').item.json.language }}**

---

# **Output Format (JSON)**

{
  "decision": "YES or NO",
  "articles": [
    {
      "title": "...",
      "summary": "...",
      "source": "...",
      "url": "..."
    }
  ]
}

When "decision": "NO", return an empty array for "articles".

# **Article Input**

Use these articles:

{{
  $json.results.map(
   article =&gt;
    `Title: ${article.title_2}
     Excerpt: ${article.excerpt_2}
     Source: ${article.source_2}
     URL: ${article.url_2}`
  ).join('\n---\n')
}}

You must also consider the topics already covered in previous newsletters to avoid repetition:

{{ $json.newsletters.map(x =&gt; `Newsletter: ${x.content}`).join('\n---\n') }}
```

The AI outputs structured JSON:

```json
{
  "decision": "YES",
  "articles": [
    {
      "title": "...",
      "summary": "...",
      "source": "...",
      "url": "..."
    }
  ]
}
```

- **If AI decided to send newsletter**  
  Routes based on `decision === "YES"`. If NO, the workflow ends gracefully.

### Stage 5: Content Enrichment & Delivery

- **Split selected articles for enrichment**  
  Each selected article becomes its own item for individual processing.

- **AI: enrich & write article**  
  An AI Agent node with GPT-5.1 + Tavily web search tool. For each article:

```text
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
3. Write **1–2 sentences** summarizing the topic, combining the original summary and information from the new sources.
4. Return the original source name and url as well.

**Output (JSON):**

{
  "title": "final article title",
  "content": "concise 1–2 sentence article content",
  "source": "the name of the original source",
  "url": "the url of the original source"
}

**Rules:**

* Ensure the topic is relevant, informative, and timely.
* Translate the article if necessary to comply with the desired language {{ $('Set topics and language').item.json.language }}.
```

The **Output Parser** enforces the JSON schema with `title`, `content`, `source`, and `url` fields.

- **Aggregate enriched articles**  
  Collects all enriched articles back into a single array.

- **Insert newsletter content into Newsletters table**  
  Stores the final markdown content for future deduplication:

```javascript
$json.output.map(article =&gt; {
  const title = JSON.stringify(article.title).slice(1, -1);
  const content = JSON.stringify(article.content).slice(1, -1);
  const source = JSON.stringify(article.source).slice(1, -1);
  const url = JSON.stringify(article.url).slice(1, -1);
  return `*${title}*\n${content}\nSource: [${source}](${url})`;
}).join('\n\n')
```

- **Send newsletter to Telegram**  
  Sends the formatted newsletter to your Telegram chat/channel.

## Why this workflow is powerful

- **Intelligent send decisions**  
  The AI evaluates news quality before sending, leading to a less noisy and more relevant news digest.

- **Memory across editions**  
  By persisting newsletters and comparing against history, the workflow avoids repetition.

- **Frequency guardrails with flexibility**  
  Set boundaries (e.g., "at least 1 day between sends" and "must send within 5 days"), but let the AI decide the optimal moment within those bounds.

- **Source-level deduplication**  
  The news table with upsert prevents the same article from being considered multiple times across runs.

- **Grounded in facts**  
  SerpAPI provides real news sources; Tavily enriches with additional verification. The newsletter stays factual.

- **Configurable and extensible**  
  Change topics, language, frequency - all in one `Set` node. In addition, the workflow is modular, allowing to add new news sources or new delivery channels without touching the core logic.

## Configuration guide

To customize this workflow for your needs:

1. **Topics and language**  
   Open `Set topics and language` and modify:
   - `topics`: your interests (e.g., `machine learning, startups, TypeScript`)
   - `language`: your preferred output language

2. **Frequency settings**  
   - `minDaysBetween`: minimum days between newsletters (0 = no limit)
   - `maxDaysBetween`: maximum gap before forcing a send
   - For very high-volume topics (such as `"AI"`), expect the workflow to send almost every time once `minDaysBetween` has passed, because the content-quality criteria are usually met.

3. **Schedule**  
   Modify the `Schedule Trigger` cron expression. Default runs twice daily at 9:00 am and 5:00 pm; adjust to your preference.

4. **Telegram**  
   Update the `chatId` in the Telegram node to your chat/channel.

5. **Credentials**  
   Set up credentials for: SerpAPI (httpQueryAuth), Tavily, OpenAI, Telegram.

## Next steps and improvements

Here are concrete directions to take this workflow further:

- **Multi-agent architecture**  
  Split the current AI calls into specialized agents: signal detection, relevance scoring, editorial decision, content enhancement, and formatting - each with a single responsibility.

- **1:1 personalization**  
  Move from static topics to weighted preferences. Learn from click behavior and feedback.

- **Telegram feedback buttons**  
  Add inline buttons (👍 Useful / 👎 Not relevant / 🔎 More like this) and feed signals back into ranking.

- **Email with HTML template**  
  For more flexibility, send the newsletter via email.
- **Incorporating other news APIs or RSS feeds**  
  Add more sources such as other news APIs and RSS feeds from blogs, newsletters, or communities.
- **Adjust for arxiv paper search and research news**  
  Swap SerpAPI for arxiv search or other academic sources to obtain a personal research digest newsletter.
- **Images and thumbnails**  
  Fetch representative images for each article and include them in the newsletter.

- **Web archive**  
  Auto-publish each edition as a web page with permalinks.

- **Retry logic and error handling**  
  Add exponential backoff for external APIs and route failures to an error workflow.

- **Prompt versioning**  
  Move prompts to a data table with versioning for A/B testing and rollback.

- **Audio and video news**  
  Use audio or video models for better news communication.


## Wrap-up

This AI News Agent workflow represents a significant evolution from simple scheduled newsletters. By adding **intelligent send decisions**, **historical deduplication**, and **frequency guardrails**, you get a newsletter that respects the quality of available news.

I use this workflow myself to stay informed on AI and automation topics without the overload of daily news or the delayed delivery caused by a fixed newsletter schedule.


Need help with your automations? [Contact me here](https://akribic.com/contact).

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger, Filter, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
