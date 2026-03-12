# 📱 Daily auto-generated tweets from trending topics using Perplexity & GPT-4o

> ⚡ **1,355 views** · 📱 [Social Media & Email Marketing](../)

## Description

This workflow auto-generates and posts a tweet once per day using real-time insights from the web. It uses Perplexity to fetch trending topics, OpenAI to summarize them into a tweet, and the Twitter API to publish.

⚙️ Set up steps
Set your Perplexity API key in the HTTP Request node.

Add your OpenAI API key to the Message Model node.

Authenticate your Twitter API credentials in the second HTTP Request node.

Modify the schedule trigger to run daily at your preferred time.

All logic is pre-configured — simply plug in your credentials and you're live.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.
