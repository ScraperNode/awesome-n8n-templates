# ⚡ Personal knowledgebase AI agent

> ⚡ **2,870 views** · ⚡ [Personal Productivity](../)

## Description

**How it works:**

This project creates a personal AI knowledge assistant that operates through Telegram. The assistant can extract summaries from YouTube videos or online articles, store them in Google Sheets for later reference, and retrieve stored summaries when requested by the user.

**Step-by-step:**

* **Google Sheets Trigger:** The workflow starts by detecting a new YouTube or article URL added to a dedicated sheet (**Sheet2**). It checks whether the link is already processed.

* **Link Type Detection:** The system identifies if the URL is from YouTube or a standard article.

* **Data Retrieval:**

  * If it’s YouTube: Uses **Apify** to fetch the transcript.
  * If it’s an article: Uses an **HTTP Request** node to fetch the webpage content.

* **AI Summarization:** The transcript or article content is passed to **Google Gemini** for refined summarization.

* **Google Sheets Storage:** The summary and title are appended to another sheet (**Sheet1**) for long-term storage, along with a “Stored” status update in Sheet2.

* **Telegram Assistant:**

  * A **Telegram Trigger** listens for messages from the user.
  * The assistant searches stored summaries in Google Sheets.
  * If a match is found, it returns the result to the user on Telegram; otherwise, it politely apologizes.

---

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, Markdown, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
