# 📊 Summarize Japanese AI engineering articles from Qiita and note RSS to Slack

> ⚡ **42 views** · 📊 [Market Research & Insights](../)

## Description

## Who’s it for

This workflow is designed for Japanese-speaking individuals who want to efficiently stay up to date with practical, experience-based AI and engineering insights shared by developers on platforms like Qiita and note.

It specifically targets users who prefer real-world knowledge such as implementation examples, troubleshooting solutions, and hands-on AI use cases written in Japanese, rather than generalized global IT news or curated media content.

The workflow is optimized for those who want to quickly consume high-quality Japanese technical content on a daily basis.

---

## What it does

This workflow collects, processes, and summarizes Japanese AI and engineering-related articles published within the last 24 hours from Qiita and note RSS feeds.

It merges multiple RSS sources, filters only recent articles (last 24 hours), and prepares structured data for AI processing.

Then, it uses AI to evaluate and rank the articles, selects the most valuable ones, retrieves each article page, extracts readable content, and generates structured summaries in Japanese, including:

- Summary
- Target audience
- Use cases
- Merits
- Demerits

Finally, it formats the results and sends a daily digest to Slack in Japanese.

Users can also customize RSS sources to match their preferred content.

---

## How it works

1. A scheduled trigger starts the workflow automatically.
2. RSS feeds from Qiita and note are fetched and merged.
3. Articles are filtered to only include those published within the last 24 hours.
4. Articles are normalized into a structured format for AI processing.
5. Gemini evaluates and ranks articles based on usefulness and selects the top 10.
6. Article links are prepared and each page is fetched.
7. HTML is cleaned and converted into readable text.
8. OpenAI generates structured summaries in Japanese.
9. The final digest is formatted and posted to Slack in Japanese.

---

## Requirements

- Google Gemini API credentials
- OpenAI API credentials
- Slack OAuth2 credentials
- A Slack channel for notifications

---

## How to set up

Add your API credentials in n8n, set the Slack destination channel, review and adjust the AI prompts if needed, and activate the workflow.

You can also customize RSS sources depending on your preferred Japanese content (e.g., specific hashtags, niche blogs, or categories).

---

## How to customize the workflow

You can customize this workflow by:

- Adding or replacing RSS sources (e.g., Japanese niche engineering blogs or communities)
- Adjusting filtering conditions (e.g., time range beyond 24 hours or keyword-based filtering)
- Refining AI scoring criteria to better match your interests
- Modifying summary structure or output format (Japanese-focused customization)
- Customizing Slack message layout for better readability
- Changing the output language (default is Japanese)

## 🔗 Nodes Used

HTTP Request, RSS Read, Slack, Schedule Trigger, AI Agent, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
