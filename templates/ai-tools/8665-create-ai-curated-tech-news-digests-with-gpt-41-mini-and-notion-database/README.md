# 🎯 Create AI-curated tech news digests with GPT-4.1 Mini and Notion Database

> ⚡ **411 views** · 🎯 [AI Summarization & Classification](../)

## Description

# Daily Tech & Startup Digest: Notion-Powered News Curation

## Description
This n8n workflow automates the curation of a daily tech and startup news digest from articles stored in a Notion database. It filters articles from the past 24 hours, refines them using keyword matching and LLM classification, aggregates them into a single Markdown digest with categorized summaries, and publishes the result as a Notion page. Designed for manual testing or daily scheduled runs, it includes sticky notes (as required by the n8n creator page) to document each step clearly. This original workflow is for educational purposes, showcasing Notion integration, AI classification, and Markdown-to-Notion conversion.

## Data in Notion
![www.notion.so_TechStartupDailyDigest2025091627079f2b185181e08239e126f04a296b.png](fileId:2641)

## Workflow Overview

### Triggers
- **Manual Trigger**: Tests the workflow (`When clicking ‘Execute workflow’`). 
- **Schedule Trigger**: Runs daily at 8 PM (`Schedule Trigger`, disabled by default). 

### Article Filtering
- **Fetch Articles**: Queries the Notion database (`Get many database pages`) for articles from the last 24 hours using a date filter. 
- **Keyword Filtering**: JavaScript code (`Code in JavaScript`) filters articles containing tech/startup keywords (e.g., "tech," "AI," "startup") in title, summary, or full text. 
-  **LLM Classification**: Uses OpenAI’s `gpt-4.1-mini` (`OpenAI Chat Model`) with a text classifier (`Text Classifier`) to categorize articles as "Tech/Startup" or "Other," keeping only relevant ones. 

### Digest Creation
- **Aggregate Articles**: Combines filtered articles into a single object (`Code in JavaScript1`) for processing. 
- **Generate Digest**: An AI agent (`AI Agent`) with OpenAI’s `gpt-4.1-mini` (`OpenAI Chat Model1`) creates a Markdown digest with an intro paragraph, categorized article summaries (e.g., AI & Developer Tools, Startups & Funding), clickable links, and a closing note. 

### Notion Publishing
- **Format for Notion**: JavaScript code (`Code in JavaScript2`) converts the Markdown digest into a Notion-compatible JSON payload, supporting headings, bulleted lists, and links, with a title like “Tech & Startup Daily Digest – YYYY-MM-DD”. 
- **Create Notion Page**: Sends the payload via HTTP request (`HTTP Request`) to the Notion API to create a new page.

### Credentials
- Uses Notion API and OpenAI API credentials.

## Notes
- This workflow is for educational purposes, demonstrating Notion database querying, AI classification, and Markdown-to-Notion publishing.
- Enable and adjust the schedule trigger (e.g., 8 PM daily) for production use to create daily digests.
- Set up Notion and OpenAI API credentials in n8n before running.

- The date filter can be modified (e.g., hours instead of days) to adjust the article selection window.

## 🔗 Nodes Used

HTTP Request, Notion, Schedule Trigger, AI Agent, OpenAI Chat Model, Text Classifier

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
