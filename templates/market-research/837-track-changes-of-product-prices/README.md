# 📊 Track changes of product prices

> ⚡ **14,718 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

This workflow automatically tracks changes on specific websites, typically in e-commerce where you want to get information about price changes. 

## Prerequisites

- Basic knowledge of HTML and JavaScript

## Nodes

- [Execute Command nodes](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.executecommand/) create a file named `kopacky.json` in the `/data/` folder (Make sure that n8n has the permissions to make changes to the folder in your setup) and clean data.
- [Cron node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.cron/) triggers the workflow at regular intervals (default is 15 minutes), depending on how often you want to crawl URLs of your watchers. 
- [Function Item node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.functionItem/) **(Change me)** adds the URL watchers. You can put as many URLs (watchers) as you want by changing the JavaScript code in the node. There are four properties for each watcher:

|Property|Meaning|
|-|-|
|slug|Unique identifier for the watcher.|
|link|URL of the website where you want to track changes.|
|selector|CSS selector of the HTML tag, where your price is placed. You can use browser web tools to get a specific selector.|
|currency|Currency code in which your price is set.|

- [Function Item node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.functionItem/) **(Init item)** saves all required data from each watcher to the `kopacky.json` file.
- [HTTP Request node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.httpRequest/) fetches data from the website.
- [HTML Extract node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.htmlExtract/) extracts the required information from the webpage.
- [Send Email nodes](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.sendemail/) **(NotifyBetterPrice)** send you an email  when there is an issue with getting the price, and when a better price is available (this could happen if the website is down, your tracking product is not available anymore, or the owner of the website changed the selector or HTML).
- [IF nodes](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.if/) filter the incoming data and route the workflow.
- [Move Binary Data nodes](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.movebinarydata/) convert the JSON file to binary data.
- [Write Binary File nodes](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.writebinaryfile/) write the product prices in the file.

NOTE: This is the first (beta) version of this workflow, so it could have some issues. For example, there is an issue with getting content of those websites, where the owner of the website blocks any calls from unknown foreign services - it's typical protection against crawlers.

## 🔗 Nodes Used

Cron, Send Email, Function Item, HTTP Request, Read Binary File, Start

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
