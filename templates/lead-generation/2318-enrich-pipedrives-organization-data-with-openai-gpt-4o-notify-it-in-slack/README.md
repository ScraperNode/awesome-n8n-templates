# 🎣 Enrich Pipedrive's Organization Data with OpenAI GPT-4o & Notify it in Slack

> ⚡ **2,212 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

This workflow **enriches new Pipedrive organization's data by adding a note to the organization object in Pipedrive**. It assumes there is a custom "website" field in your Pipedrive setup, as data will be scraped from this website to generate a note using OpenAI. Then, a notification is sent in Slack.

## ⚠️ Disclaimer
**This workflow uses a scraping API. Before using it, ensure you comply with the regulations regarding web scraping in your country or state**.

## Important Notes
- The **OpenAI model used is GPT-4o**, chosen for its large input token capacity. However, it is not the cheapest model if cost is very important to you.

- The system prompt in the OpenAI Node generates output with relevant information, but feel free to improve or **modify it according to your needs**.

## **How It Works**

### Node 1: `Pipedrive Trigger - An Organization is Created`
This is the trigger of the workflow. When **an organization object is created in Pipedrive**, this node is triggered and retrieves the data. **Make sure you have a "website" custom field in Pipedrive** (the name of the field in the n8n node will appear as a random ID and not with the Pipedrive custom field name).

### Node 2: `ScrapingBee - Get Organization's Website's Homepage Content`
This node **scrapes the content** from the URL of the website associated with the **Pipedrive Organization** created in Node 1. The workflow uses the [ScrapingBee](https://www.scrapingbee.com/) API, but **you can use any preferred API or simply the HTTP request node in n8n**.

### Node 3: `OpenAI - Message GPT-4o with Scraped Data`
This node sends HTML-scraped data from the previous node to the **OpenAI GPT-4o model**. The system prompt instructs the model to **extract company data**, such as products or services offered and competitors (if known by the model), and format it as HTML for optimal use in a Pipedrive Note.

### Node 4: `Pipedrive - Create a Note with OpenAI Output`
This node **adds a Note to the Organization created in Pipedrive** using the OpenAI node output. The Note will include the company description, target market, selling products, and competitors (if GPT-4o was able to determine them).

### Node 5 & 6: `HTML To Markdown` & `Code - Markdown to Slack Markdown`
These two nodes **format the HTML output to Slack Markdown**.

The Note created in Pipedrive is in HTML format, **as specified by the System Prompt of the OpenAI Node**. To send it to Slack, it needs to be converted to Markdown and then to Slack Markdown.

### Node 7: `Slack - Notify`
This node **sends a message in Slack containing the Pipedrive Organization Note** created with this workflow.

## 🔗 Nodes Used

HTTP Request, Pipedrive, Pipedrive Trigger, Slack, Markdown, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
