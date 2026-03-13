# 📱 Post latest Twitter mentions to Slack

> ⚡ **3,100 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.

## Description

This workflow will allow you to get the latest twitter mentions and send those mentions to Rocket.Chat. 

To ensure that we don't resend the same tweets as before, we use the Function Node and `getWorkflowStaticData()` to persist the ids of the tweets which have already been sent and filter those out. This leaves us with only the newest tweets.

## 🔗 Nodes Used

Cron, Function, Start, RocketChat, X (Formerly Twitter)

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
