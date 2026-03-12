# 🔧 Automated MIT AI news delivery to Discord with deduplication

> ⚡ **93 views** · 🔧 [Miscellaneous](../)

## Description

Stay ahead of the curve with the latest Artificial Intelligence research from MIT, delivered directly to your Discord server—clean, filtered, and duplicate-free.

This workflow is perfect for AI agencies, researchers, and tech teams who want to stay informed without the noise.

## How it works
This workflow runs automatically every day (default 9:00 AM) to:
1. **Fetch** the official MIT News RSS feed for the "Artificial Intelligence" topic.
2. **Filter** articles to keep only those published in the last 24 hours.
3. **Deduplicate** content using an internal **n8n Data Table**. It checks if the article link has already been sent to prevent spamming old news.
4. **Notify** your team on Discord with a clean, formatted message including the Title, Author, Date, and Link.

## Setup steps
### 1. Create the Data Table (Mandatory)
This workflow relies on n8n Data Tables to track sent articles. Before running:
1. Go to your n8n Dashboard &gt; **Data Tables**.
2. Create a new table named: `mit_ai_news_sent`
3. Add these exact columns:
   * `creator` (Type: String)
   * `title` (Type: String)
   * `link` (Type: String)
   * `pubDate` (Type: Date)

### 2. Connect the Table
1. Import this template.
2. Open the orange nodes named **"Avoid Duplicated Articles"** and **"Register New Article"**.
3. Select the `mit_ai_news_sent` table you just created from the list.

### 3. Configure Discord
1. Create a Webhook in your Discord Server (Server Settings &gt; Integrations &gt; Webhooks).
2. Open the **"MIT AI Articles"** node.
3. Create a new Credential and paste your Webhook URL.

## 🔗 Nodes Used

RSS Read, Discord, Schedule Trigger, Filter, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
