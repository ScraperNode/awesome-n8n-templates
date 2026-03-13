# ⚒️ Learn secure webhook APIs with authentication and Supabase integration

> ⚡ **3,039 views** · ⚒️ [Engineering](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This template is a practical introduction to **n8n Webhooks** with built-in examples for all major HTTP methods and authentication types. It is designed as a learning resource to help you understand how webhooks work in n8n, how to connect them to a data store, and how to secure them properly.

**What’s included:**

* Webhook nodes for **GET, POST, PUT, PATCH, DELETE, and HEAD**
* Demonstrations of **Basic Auth, Header Auth, and JWT Auth**
* Supabase integration for creating, retrieving, updating, and deleting rows
* Example response handling with **Respond to Webhook** nodes
* Sticky notes explaining each method, response type, and security option

**Use this template to:**

* Learn how to configure and test webhooks in n8n
* Explore different authentication strategies
* Connect webhooks to a simple Supabase table
* Understand best practices for securing webhook endpoints

This workflow is intended as an educational starting point. It shows you how to receive requests, map data, and return responses securely. For production use, adapt the structure, apply your own security policies, and extend the logic as needed.

Check out the YouTube video here: https://www.youtube.com/watch?v=o6F36xsiuBk

## 🔗 Nodes Used

Webhook, Supabase

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
