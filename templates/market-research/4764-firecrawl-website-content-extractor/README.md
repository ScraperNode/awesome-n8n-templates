# 📊 🌐 Firecrawl website content extractor

> ⚡ **713 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# 🌐 Firecrawl Website Content Extractor (n8n Workflow)

This n8n automation workflow uses **Firecrawl API** to extract structured data (e.g., quotes and authors) from web pages — such as [Quotes to Scrape](https://quotes.toscrape.com/) — and handles retries in case of delayed extraction.

---

## 🔁 Workflow Overview

### 🎯 Purpose:
- Crawl and extract **structured web data** using Firecrawl
- Wait for asynchronous scraping to complete
- Retrieve and validate results
- Support retries if content is not ready

---

## 🔧 Step-by-Step Node Breakdown

### 1. 🧪 **Manual Trigger**
- Node: `When clicking ‘Test workflow’`
- Used to **manually test** or execute the workflow during setup or debugging.

---

### 2. 📤 **Firecrawl Extract API Request**
- Node: `Extract`
- Sends a `POST` request to `https://api.firecrawl.dev/v1/extract`
- Payload includes:
  - `urls`: List of pages to crawl (`https://quotes.toscrape.com/*`)
  - `prompt`: "Extract all quotes and their corresponding authors from the website."
  - `schema`: JSON schema defining expected structure (`quotes[]`, each with `text` and `author`)

&gt; 📌 Uses an **HTTP Header Auth** credential for Firecrawl API

---

### 3. ⏱️ **Wait for 30 Seconds**
- Node: `30 Secs`
- Gives Firecrawl time to finish processing in the background
- Prevents hitting the API before results are ready

---

### 4. 📥 **Get Results**
- Node: `Get Results`
- Performs a `GET` request to the status URL using `{{ $('Extract').item.json.id }}` to retrieve extraction results.

---

### 5. ✅❌ **Condition Check**
- Node: `If`
- Checks if the `data` array is empty (i.e., no results yet)
- If **data is empty**:
  - Waits **10 more seconds** and retries
- If **data is available**:
  - Passes data to the next step (e.g., processing or storage)

---

### 6. 🔁 **Retry Delay**
- Node: `10 Seconds`
- Waits briefly before sending another `GET` request to Firecrawl

---

### 7. 🛠️ **Edit Fields (Optional Output Formatting)**
- Node: `Edit Fields`
- Placeholder to structure or format the extracted results (quotes and authors)

---

## 🧾 Sticky Note: Firecrawl Setup Guide

Included as an embedded reference:
- 🔗 [10% Firecrawl Discount](https://firecrawl.link/nateherk)
- 🧰 Instructions to:
  - Add Firecrawl API credentials in **n8n**
  - Use Firecrawl Community Node for **self-hosted** instances
  - Set up the schema and prompt for targeted data extraction

---

## ✅ Key Features

- 🔌 API-based crawling with schema-structured output
- ⏱️ Smart waiting + retry mechanism
- 🧠 AI prompt integration for intelligent data parsing
- ⚙️ Flexible for different URLs, prompts, and schemas

---

## 📦 Sample Output Schema

```json
{
  "quotes": [
    {
      "text": "The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.",
      "author": "Albert Einstein"
    },
    {
      "text": "It is our choices, Harry, that show what we truly are, far more than our abilities.",
      "author": "J.K. Rowling"
    }
  ]
}

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
