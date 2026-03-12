# ⚒️ Use any LangChain module in n8n (with the LangChain code node)

> ⚡ **12,741 views** · ⚒️ [Engineering](../)

## Description

[LangChain](https://www.langchain.com/) is a framework for building AI functionality that users large language models. By leveraging the functionality of LangChain, you can write even more powerful workflows.

This workflow shows how you can write LangChain code within n8n, including importing LangChain modules. 

The workflow itself produces a summary of a YouTube video, when given the video's ID. 

Note that to use this template, you need to be on n8n version 1.19.4 or later.

## 🔗 Nodes Used

LangChain Code, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
