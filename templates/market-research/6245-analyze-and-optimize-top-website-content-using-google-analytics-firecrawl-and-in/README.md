# 📊 Analyze and optimize top website content using Google Analytics, Firecrawl and InfraNodus

> ⚡ **811 views** · 📊 [Market Research & Insights](../)

## Description

## Optimize Your Top Performing Website Content with Google Analytics, Firecrawl, and InfraNodus

This templates helps you 
- **extract** the top performing pages from your website using Google Analytics
- **scrape** the content of the pages using Firecrawl API (HTTP node provided)
- **build a knowledge graph** for all these pages with the **topics** and **gaps** identified using [InfraNodus](https://infranodus.com)
- understand the main **concepts and topical clusters** in your **top-performing content**, so you can create more of it, while also identifying the **content gaps** — structural holes between the topics that you can use to generate **new content ideas**
- have access to a **knowledge graph visualization** of your top performing content to explore it using the interactive network interface

![InfraNodus knowledge graph](https://support.noduslabs.com/hc/article_attachments/20266752795292)


## How it works
This template uses the [InfraNodus](https://infranodus.com) to visualize and analyze your top performing content. 

It will extract the top pages from the Google Analytics data for the website you choose and scrape their text content using the high-quality Firecrawl API. Then it will ingest every page into an InfraNodus graph you specify. The graph can be used to explore the content visually. The insights from the graph, such as the main topics and gaps between them will be shown to you in the end of the workflow. 

You can use these insights to understand 

- **what kind of content you should focus on creating to get the highest number of views** and to establish **topical authority** in your area, which is good for **SEO** and **LLM optimization** — focusing on the topics identified in the top content
- discover the **content gaps** — which topics are not connected yet that you could link with new content ideas and publish — this caters to your audience's interests, but connects your existing ideas in a new way. So you deliver the content that's **relevant** but also **novel**.

Here's a description **step by step**:



![InfraNodus graph knowledge base](https://support.noduslabs.com/hc/article_attachments/20266752795292)

***Note:** you can replace the PDF to Text convertor node with a better quality **PDF convertor** from [ConvertAPI](https://convertapi.com?ref=4l54n) which respects the original file layout and doesn't split text into small chunks*

1. Trigger the workflow
2. Extract a list of top (25, 50) pages from your Google Analytics account (you'll need to connect it via the Google Cloud API)
3. Fix the extracted data and add a correct URL prefix to each page (if your Analytics has relative paths only
4. Loop through each page extracted
5. Extract the text content of every page using the high-quality [Firecrawl API](https://firecrawl.dev)
6. Ingest the text content into the [InfraNodus graph](https://infranodus.com) that you specify
7. Once all the pages are ingested into the InfraNodus graph, access the AI insights endpoint in InfraNodus and get the information about the main topics and gaps
8. Display this information to the user

## How to use

You need an [InfraNodus API account and key](https://infranodus.com/api) to use this workflow. 

- Create an InfraNodus account
- Get the API key at [https://infranodus.com/api-access](https://infranodus.com/api-access) and create a Bearer authorization key for the InfraNodus HTTP nodes.

## Requirements

- An [InfraNodus](https://infranodus.com/use-case/ai-knowledge-graphs) account and API key
- Optional: A Google Analytics account for your property (alternatively, you can modify this workflow to provide a list of the most popular pages)
- Optional: A Google Cloud API access (to access the data from Google Analytic saccount — follow the n8n instructions)
- Optional: A [Firecrawl API key](https://firecrawl.dev) API key for better quality web page scraping (otherwise, use the standard HTTP to Text node from n8n)


## Customizing this workflow

You can customize this workflow by using a list of the URL pages you want to analyze from a Google sheet. Alternatively, you can use the Google SERP node to extract top search results for a query and get the main topics for them.

For **support and feedback**, please, contact us at [https://support.noduslabs.com](https://support.noduslabs.com)

To learn more about **InfraNodus**: [https://infranodus.com](https://infranodus.com)

## 🔗 Nodes Used

HTTP Request, Google Analytics, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
