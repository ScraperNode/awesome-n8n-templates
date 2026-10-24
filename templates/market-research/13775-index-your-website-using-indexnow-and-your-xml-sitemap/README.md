# 📊 Index your website using IndexNow and your XML sitemap

> ⚡ **89 views** · 📊 [Market Research & Insights](../)

## Description

## Index your site using IndexNow and XML sitemap

Stop waiting for search engines to discover your content updates. This workflow automates the process of notifying search engines (Bing, Yandex, etc.) about new or updated pages using the IndexNow protocol.

By parsing your XML sitemap and filtering for pages modified within a specific timeframe (e.g., the last week), it ensures your crawl budget is used efficiently and your latest content appears in search results almost instantly.

### How to configure:

1. **Host your key:** Generate an IndexNow key and upload the `.txt` file to your website's root directory.
2. **Setup Configuration node:**
   * Enter your `sitemap_url` (e.g., https://yoursite.com/sitemap.xml).
   * Enter your `indexnow_key`.
   * Set the `modified_after` variable to define your lookback window (e.g., -7d or a specific ISO date).
3. **Schedule:** Adjust the Schedule Trigger to your preferred frequency (default is daily).
4. **Activate:** Once configured, turn the workflow on to start proactive indexing.


For a deep dive into how this workflow works and why it's a game-changer for your SEO strategy, check out our full guide on n8nplaybook.com.
[Read the full Playbook Article here](https://n8nplaybook.com/post/2026/02/automate-indexnow-seo-n8n-workflow/)

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
