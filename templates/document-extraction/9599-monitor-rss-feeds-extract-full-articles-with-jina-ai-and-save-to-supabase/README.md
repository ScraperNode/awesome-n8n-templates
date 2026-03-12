# 🔬 Monitor RSS feeds, extract full articles with Jina AI, and save to Supabase

> ⚡ **307 views** · 🔬 [Document Extraction & Analysis](../)

## Description

### **Monitor RSS Feeds, Extract Full Articles, and Save to Supabase**

## Overview

This workflow solves a common problem with RSS feeds: they often only provide a short summary or snippet of the full article. This template automatically monitors a list of your favorite blog RSS feeds, filters for new content, visits the article page to extract the **entire blog post**, and then saves the structured data into a Supabase database.

It's designed for **content creators**, **marketers**, **researchers**, and anyone who needs to build a personal knowledge base, conduct competitive analysis, or power a content aggregation system without manual copy-pasting.

-----

## Use Cases

  * **Content Curation:** Automatically gather full-text articles for a newsletter or social media content.
  * **Personal Knowledge Base:** Create a searchable archive of articles from experts in your field.
  * **Competitive Analysis:** Track what competitors are publishing without visiting their blogs every day.
  * **AI Model Training:** Collect a clean, structured dataset of full-text articles to fine-tune an AI model.

-----

## How It Works

1.  **Scheduled Trigger:** The workflow runs automatically on a set schedule (default is once per day).
2.  **Fetch RSS Feeds:** It takes a list of RSS feed URLs you provide in the "blogs to track" node.
3.  **Filter for New Posts:** It checks the publication date of each article and only continues if the article is newer than a specified age (e.g., published within the last 60 days).
4.  **Extract Full Content:** For each new article, the workflow uses the [Jina AI Reader URL (`https://r.jina.ai/`)](https://www.google.com/search?q=%5Bhttps://jina.ai/reader/%5D\(https://jina.ai/reader/\)) to scrape the full, clean text from the blog post's webpage. This is a free and powerful way to get past the RSS snippet limit.
5.  **Save to Supabase:** Finally, it organizes the extracted data and saves it to your chosen Supabase table. The following data is saved by default:
      * `title`
      * `source_url` (the link to the original article)
      * `content_snippet` (the full extracted article text)
      * `published_date`
      * `creator` (the author)
      * `status` (a static value you can set, e.g., "new")
      * `content_type` (a static value you can set, e.g., "blog")

-----

## Setup Instructions

You can get this template running in about 10-15 minutes.

1.  **Set Up Your RSS Feed List:**

      * Navigate to the **"blogs to track"** Set node.
      * In the `source_identifier` field, replace the example URLs with the RSS feed URLs for the blogs you want to monitor. You can add as many as you like.
      * *Tip:* The best way to find a site's RSS feed is to use a tool like Perplexity or a web-browsing enabled LLM.

    

    ```javascript
    // Example list of RSS feeds
    ['https://blog.n8n.io/rss', 'https://zapier.com/blog/feeds/latest/']
    ```

2.  **Configure the Content Age Filter:**

      * Go to the **"max\_content\_age\_days"** Set node.
      * Change the `value` from the default `60` to your desired timeframe (e.g., `7` to only get articles from the last week).

3.  **Connect Your Storage Destination:**

      * The template uses the **"Save Blog Data to Database"** Supabase node.
      * First, ensure you have a table in your Supabase project with columns to match the data (e.g., `title`, `source_url`, `content_snippet`, `published_date`, `creator`, etc.).
      * In the n8n node, create new credentials using your Supabase Project URL and Service Role Key.
      * Select your table from the list and map the data fields from the workflow to your table columns.
      * **Want to use something else?** You can easily replace the Supabase node with a **Google Sheets**, **Airtable**, or the built-in **n8n Table** node. Just drag the final connection to your new node and configure the field mapping.

4.  **Set Your Schedule:**

      * Click on the first node, **"Schedule Trigger"**.
      * Adjust the trigger interval to your needs. The default is every day at noon.

5.  **Activate Workflow:**

      * Click the "Save" button, then toggle the workflow to **Active**. You're all set\!

## 🔗 Nodes Used

HTTP Request, RSS Read, Supabase, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
