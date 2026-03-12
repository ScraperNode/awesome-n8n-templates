# 🔒 Intelligent AI digest for security, privacy, and compliance feeds

> ⚡ **19,960 views** · 🔒 [SecOps & Security Automation](../)

## Description

**How it works**
This workflow acts like your own personal AI assistant, automatically fetching and summarizing the most relevant Security, Privacy, and Compliance news from curated RSS feeds. It processes only the latest articles (past 24 hours), organizes them by category, summarizes key insights using AI, and delivers a clean HTML digest straight to your inbox—saving you time every day.

**Key Highlights**

- Handles three independent tracks: Security, Privacy, and Compliance
- Processes content from customizable RSS sources (add/remove easily)
- Filters fresh articles, removes duplicates, and sorts by recency
- Uses AI to summarize and format insights in a digestible format
- Sends polished HTML digests via Gmail—one per category
- Fully modular and extensible—adapt it to your needs

**Personalization**
You can easily tailor the workflow:

🎯 Customize feeds: Add or remove sources in the following Code nodes:
```
Fetch Security RSS, Fetch Privacy Feeds, and Fetch Compliance Feeds
```

🔧 Modify logic: Adjust filters, sorting, formatting, or even AI prompts as needed

🧠 Bring your own LLM: Works with Gemini, but easily swappable for other LLM APIs

**Setup Instructions**

- Requires Gmail and LLM (e.g., Gemini) credentials
- Prebuilt with placeholders for RSS feeds and email output
- Designed to be readable, maintainable, and fully adaptable

## 🔗 Nodes Used

RSS Read, Gmail, Schedule Trigger, Filter, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
