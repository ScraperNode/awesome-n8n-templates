# 📊 Google autocomplete keyword scraper

> ⚡ **1,674 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who is this template for?

This workflow template is built for **SEO specialists** and **digital marketers** looking to uncover **keyword opportunities** effortlessly.

It uses **Google's autocomplete** magic to help you spot what's trending.

## How it works

Just give it a **keyword**.

The workflow then **queries Google** and **collects all autocomplete suggestions** by appending every letter from A to Z to your keyword.

**Output example** with the keyword "***n8n***" :

![n8n keywords.png](fileId:1228)

You can sort these keywords and give them to an LLM to produce entity-enriched text.

## Setup instructions

It works right out of the box. 🛠️

However, you may want to tweak the **output format** to better fit your use case.

### Exporting the Keywords

You can easily add a node to export the keywords in various ways:

- via a webhook
- by email
- as a file (e.g., saved to Google Drive)
- directly to a website

### Adapting the Language

Autocomplete results depend on the selected language.

You can change the `&hl=en` parameter in the **Google Autocomplete** node.  

Replace the `"en"` part with the language code of your choice.

**Examples:**  
- `&hl=fr` → French  
- `&hl=es` → Spanish  
- `&hl=de` → German

## 🔗 Nodes Used

HTTP Request, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
