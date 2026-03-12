# 💬 Create and join call sessions with Plivo and UltraVox AI Voice Assistant

> ⚡ **1,881 views** · 💬 [Support Chatbots](../)

## Description

This workflow template creates an audio stream session on UltraVox compatible with Plivo and sends it to Plivo.

How It Works : 
Plivo initiates a call and requests the Answer URL.

The workflow responds with Plivo XML to join the session.

Note:
Ensure you update the UltraVox API Key in the credentials.
Update System Prompt based on your requirements.

 [Check Youtube Video](https://www.youtube.com/watch?v=Acbs3ouc4FQ)
![Youtube Video](https://img.youtube.com/vi/Acbs3ouc4FQ/0.jpg)

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
