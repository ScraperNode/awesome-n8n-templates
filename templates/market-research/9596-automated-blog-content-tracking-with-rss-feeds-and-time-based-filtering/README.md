# 📊 Automated blog content tracking with RSS feeds and time-based filtering

> ⚡ **263 views** · 📊 [Market Research & Insights](../)

## Description

### **Automated Blog Monitoring System with RSS Feeds and Time-Based Filtering**

## Overview

This workflow provides a powerful yet simple foundation for monitoring blogs using **RSS feeds**. It automatically fetches articles from a list of your favorite blogs and filters them based on their publication date, separating new content from old. It is the perfect starting point for anyone looking to build a custom content aggregation or notification system without needing any API keys.

This template is designed for **developers**, **hobbyists**, and **marketers** who want a reliable way to track new blog posts and then decide what to do with them. Instead of including a specific final step, this workflow intentionally ends with a filter, giving you complete freedom to add your own integrations.

-----

## Use Cases

Why would you need to monitor and filter blog posts?

  * **Build a Custom News Feed:** Send new articles that match your interests directly to a Discord channel, Slack, or Telegram chat.
  * **Power a Newsletter:** Automatically collect links and summaries from industry blogs to curate your weekly newsletter content.
  * **Create a Social Media Queue:** Add new, relevant blog posts to a content calendar or social media scheduling tool like Buffer or Hootsuite.
  * **Archive Content:** Save new articles to a personal database like Airtable, Notion, or Google Sheets to build a searchable knowledge base.

-----

## How It Works

1.  **Manual Trigger:** The workflow starts when you click "Execute Workflow". You can easily swap this for a **Schedule Trigger** to run it automatically.
2.  **Fetch RSS Feeds:** It reads a list of RSS feed URLs that you provide in the **"blogs to track"** node.
3.  **Process Each Feed:** The workflow loops through each RSS feed individually.
4.  **Filter by Date:** It checks the publication date of every article and compares it to a timeframe you set (default is 60 days).
5.  **Split New from Old:**
      * **New articles** are sent down the **`true`** path of the **"Filter Out Old Blogs"** node.
      * **Old articles** are sent down the **`false`** path.
      * This workflow leaves the `true` path empty so you can add your desired next steps.

-----

## Setup and Customization

This workflow requires minimal setup and is designed for easy customization.

1.  **Add Your Blog Feeds:**

      * Find the **"blogs to track"** node.
      * In the `source_identifier` field, replace the example URLs with the RSS feeds you want to monitor.

    

    ```javascript
    // Add your target RSS feed URLs in this array
    ['https://blog.n8n.io/rss', 'https://zapier.com/blog/feeds/latest/']
    ```

2.  **Set the Time Filter:**

      * Go to the **"max\_content\_age\_days"** node.
      * Change the value from the default `60` to your desired number of days. For example, use `7` to only get articles published in the last week.

3.  **Customize Your Output (Required Next Step):**

      * This is the most important part\! Drag a new node and connect it to the **`true`** output of the **"Filter Out Old Blogs"** node.
      * **Example Idea:** To save new articles to a Google Sheet, add a **Split In Batches** node followed by a **Google Sheets** node to append each new article as a new row.

## 🔗 Nodes Used

RSS Read

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
