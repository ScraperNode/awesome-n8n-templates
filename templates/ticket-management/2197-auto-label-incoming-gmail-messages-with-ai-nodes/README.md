# 🎫 Auto-label incoming Gmail messages with AI nodes

> ⚡ **30,447 views** · 🎫 [Ticket Management & Triage](../)

## Description

This workflow uses AI to analyze the content of every new message in Gmail and then assigns specific labels, according to the context of the email. 

Default configuration of the workflow includes 3 labels:
- „Partnership” - email about sponsored content or cooperation,
- „Inquiry” - email about products, services,
- „Notification” - email that doesn't require response.

You can add or edit labels and descriptions according to your use case. 

🎬 See this workflow in action [in my YouTube video](https://youtu.be/a8Dhj3Zh9vQ) about automating Gmail. 

## How it works?

Gmail trigger performs polling every minute for new messages (you can change the trigger interval according to your needs). The email content is then downloaded and forwarded to an AI chain.

💡 The prompt in the AI chain node includes instructions for applying labels according to the email content - change label names and instructions to fit your use case.

Next, the workflow retrieves all labels from the Gmail account and compares them with the label names returned from the AI chain. Label IDs are aggregated and applied to processed email messages.

⚠️ Label names in the Gmail account and workflow (prompt, JSON schema) must be the same.

## Set up steps

1. Set credentials for Gmail and OpenAI. 
2. Add labels to your Gmail account (e.g. „Partnership”, „Inquiry” and „Notification”).
3. Change prompt in AI chain node (update list of label names and instructions). 
4. Change list of available labels in JSON schema in parser node. 
5. Optionally: change polling interval in Gmail trigger (by default interval is 1 minute).

If you like this workflow, please subscribe to [my YouTube channel](https://www.youtube.com/@workfloows/) and/or [my newsletter](https://workfloows.com/).

## 🔗 Nodes Used

Gmail, Gmail Trigger, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
