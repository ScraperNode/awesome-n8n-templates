# 🔬 Create an RSS feed based on a website's content

> ⚡ **44,466 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow parses content from a website (for this example, [Baserow's release page](https://baserow.io/blog/category/release)) and creates an RSS feed based on the extracted data.

## Prerequisites

- Some familiarity with HTML and CSS selectors

## Nodes

- [Webhook node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.webhook/) triggers the workflow when new content (a new Baserow release) is published on a website.
- [Set nodes](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.set/) set the required URLs and links for the RSS feed.
- [HTTP Request node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.httprequest) fetches data from a specified website page.
- [HTML Extract nodes](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.htmlextract/) extract the posts and their fields (such as date, title, description, and link) from the website.
- [Item Lists node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.itemlists/) iterates over each post on the page.
- [Date & Time node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.datetime/) converts the date of the post to a different format.
- [Function Item node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.functionitem/) creates RSS items for each post.
- [Function node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.function/) creates the response code for the RSS feed.
- [Respond to Webhook node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.respondtowebhook/) returns the RSS feed in response to the Webhook node.

The result of this workflow would look like this:
![image.png](fileId:600)

## 🔗 Nodes Used

Function, Function Item, HTTP Request, Start, Webhook, HTML Extract

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
