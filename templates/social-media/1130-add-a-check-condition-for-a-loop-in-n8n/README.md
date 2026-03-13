# 📱 Add a check condition for a loop in n8n

> ⚡ **11,893 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.

## Description

This workflow demonstrates the use of `$runIndex` expression. It demonstrates how the expression can be used to avoid an infinite loop.

The workflow will create 5 Tweets with the content 'Hello from n8n!'.

You can use this workflow by replacing the Twitter node with any other node(s) and updating the condition in the IF node.

## 🔗 Nodes Used

Start, X (Formerly Twitter)

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
