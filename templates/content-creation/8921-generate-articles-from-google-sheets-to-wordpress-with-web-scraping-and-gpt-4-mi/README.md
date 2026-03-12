# 🎬 Generate articles from Google Sheets to WordPress with web scraping and GPT-4 Mini

> ⚡ **834 views** · 🎬 [Content Creation & Video](../)

## Description

## 🤖 Automated AI Article Generation from Google Sheets to WordPress

### 📝 Short Description
Transform a Google Sheet into an automated content factory! This workflow reads article topics, scrapes source content, uses AI to create original articles, and publishes drafts to WordPress automatically. 🚀

### 📖 Full Description
This workflow automates the entire content creation pipeline by connecting Google Sheets, web scraping, AI content generation, and WordPress publishing. It's designed for content marketers, bloggers, and news publishers who need to scale their content production efficiently. 💪

The system monitors a Google Sheet for new article ideas, processes source URLs through a dual-AI system for summarization and content creation, then automatically generates WordPress drafts while tracking everything back to the spreadsheet. 📊→🤖→🌐

## 👥 Who's It For

- **📈 Content marketing agencies** managing multiple clients
- **✍️ Bloggers** looking to scale their content output
- **📰 News publishers** automating article aggregation
- **🔍 SEO specialists** creating keyword-optimized content
- **🎯 Digital marketers** running content campaigns

## ⚙️ How It Works

1. **📊 Sheet Monitoring**: Watches Google Sheets for rows marked "New" in the Flow Status column
2. **🔍 Content Processing**: Fetches and analyzes source articles using dual AI agents
3. **🤖 Article Generation**: Creates SEO-optimized articles with proper formatting and structure
4. **🌐 WordPress Integration**: Automatically publishes drafts to your WordPress site
5. **✅ Status Tracking**: Updates the sheet with progress and final draft links

## 🛠️ How to Set Up

### 📋 Prerequisites
- 🔐 Google Sheets API access (OAuth2)
- 🧠 OpenAI API key
- 🌐 WordPress REST API credentials
- 🔗 Source URLs for article inspiration

### ⚡ Configuration Steps
1. **🔄 Clone the workflow** into your n8n instance
2. **🔗 Connect credentials** for Google Sheets, OpenAI, and WordPress
3. **📄 Update the Google Sheet ID** in all Sheet nodes to point to your document
4. **📊 Configure the sheet columns** to match: Topic, Source, Flow Status, Publish Status, Publish Link
5. **🧪 Test with one row** marked as "New" in your sheet

## 📋 Requirements

### 🧩 n8n Nodes Used
- 📊 Google Sheets (read/update operations)
- 🌐 HTTP Request (web scraping)
- 🤖 OpenAI/LangChain (AI content processing)
- 🌐 WordPress (draft creation)
- 💻 Code node (content formatting)
- ⚖️ If node (error handling)
- 🔄 SplitInBatches (item processing)

### ☁️ External Services
- 📊 Google Sheets with specific column structure
- 🧠 OpenAI API access
- 🌐 WordPress installation with REST API enabled

## 🎨 How to Customize the Workflow

### ✍️ Content Style Adjustments
Modify the "Article Creator" AI node's system prompt to change:
- 🎭 Writing tone and style
- 🔍 SEO keyword density
- 📑 Article structure and headings
- 💬 Call-to-action format

### 🔍 Source Processing
Adjust the "Article Summarizer" node to:
- 🕸️ Handle different website structures
- 📝 Extract specific content elements
- 📋 Modify markdown output format

### 📤 Publishing Options
Customize the "Create a Draft" WordPress node to:
- 📝 Change post status from "draft" to "publish"
- 👥 Assign different authors or categories
- 🏷️ Add custom fields or tags

### ⚠️ Error Handling
Modify the conditional logic in the "If" node to handle different failure scenarios or add additional validation steps.

---

**ℹ️ Note**: This workflow uses community nodes (LangChain/OpenAI) and requires a self-hosted n8n instance.

*✨ Workflow features comprehensive error handling, real-time status tracking, and batch processing for efficient content pipeline management.*

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Wordpress, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
