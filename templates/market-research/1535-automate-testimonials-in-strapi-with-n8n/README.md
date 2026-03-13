# 📊 Automate testimonials in Strapi with n8n

> ⚡ **2,322 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.

## Description

This is the workflow powering the n8n demo shown at StrapiConf 2022.

![image.png](fileId:624)

The workflow searches matching Tweets every 30 minutes using the [Interval](https://docs.n8n.io/nodes/n8n-nodes-base.interval/) node and listens to Form submissions using the [Webhook](https://docs.n8n.io/nodes/n8n-nodes-base.webhook/) node.

Sentiment analysis is handled by Google using the [Google Cloud Natural Language](https://docs.n8n.io/nodes/n8n-nodes-base.googleCloudNaturalLanguage/) node before the result is stored in Strapi using the [Strapi](https://docs.n8n.io/nodes/n8n-nodes-base.strapi/) node.

(These were originally two separate workflows that have been combined into one to simplify sharing.)

## 🔗 Nodes Used

Interval, Start, Webhook, X (Formerly Twitter), Strapi, Google Cloud Natural Language

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
