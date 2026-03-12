# ⚙️ Daily pull request summaries from GitHub to Telegram using GPT-4o-mini

> ⚡ **234 views** · ⚙️ [DevOps & CI/CD](../)

## Description

### Stay informed about the latest n8n updates automatically!

This workflow monitors the n8n GitHub repository for new pull requests, filters updates from today, generates an AI-powered summary, and sends notifications to your Telegram channel.

### Who's it for
- n8n users who want to stay up-to-date with platform changes
- Development teams tracking n8n updates
- Anyone managing n8n workflows who needs to know about breaking changes or new features

### How it works
1. **Daily scheduled check** at 10 AM for new pull requests
2. **Fetches latest PR** from n8n GitHub repository
3. **Filters** to only process today's updates
4. **Extracts** the pull request summary
5. **AI generates** a clear, technical summary in English
6. **Sends notification** to your Telegram channel

## 🔗 Nodes Used

GitHub, Telegram, Schedule Trigger, Filter, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
