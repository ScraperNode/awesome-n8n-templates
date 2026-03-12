# 📊 Tech news aggregator: The Verge & TechCrunch RSS to Notion with GPT-4 summaries

> ⚡ **1,352 views** · 📊 [Market Research & Insights](../)

## Description

This n8n workflow automates the process of fetching, processing, and storing tech news articles from RSS feeds into a Notion database. It retrieves articles from The Verge and TechCrunch, processes them to avoid duplicates, extracts full article content, generates summaries using an LLM, and stores the data in Notion. The workflow is designed to run on a schedule or manually for testing, with sticky notes providing clear documentation for each step.

 **Data in notion**
![image.png](fileId:2632)

## Workflow Overview

- **Triggers**: 
  - **Manual Trigger**: Used for testing the workflow (`When clicking ‘Execute workflow’`).
  - **Schedule Trigger**: Runs daily at 11 AM to fetch new articles (`Schedule Trigger`, disabled).

- **Fetch Feeds**:
  - Pulls RSS feeds from The Verge (`The Verge`) and TechCrunch (`TechCrunch`). 

- **Hash Creation**:
  - Generates a SHA256 hash of each article’s URL (`Crypto`, `Crypto1`) to identify unique articles efficiently. 

- **Loop Over Articles**:
  - Processes articles in batches (`Loop Over Items`, `Loop Over Items1`) to handle multiple articles from each feed.

- **Duplicate Check**:
  - Queries the Notion database (`Get many database pages`, `Get many database pages1`) to check if an article’s hash exists. If it does, the article is skipped (`If`, `If1`). 

- **Fetch Full Article**:
  - If the article is new, retrieves the full article content via HTTP request (`HTTP Request`, `HTTP Request1`). 

- **Extract Content**:
  - Extracts paragraph content from the article HTML (`HTML`, `HTML1`) using specific CSS selectors (`.duet--article--article-body-component p` for The Verge, `.entry-content p` for TechCrunch). 

- **Clean Data**:
  - JavaScript code (`Code in JavaScript`, `Code in JavaScript1`) processes the extracted content by removing empty paragraphs, links, and excessive whitespace, then joins paragraphs into a single string. 

- **Summarize Article**:
  - Uses an OpenAI model (`OpenAI Chat Model`, `OpenAI Chat Model1`) with a LangChain node (`Basic LLM Chain`, `Basic LLM Chain1`) to generate a concise summary (max 1500 characters) in plain text, focusing on main arguments or updates. 

- **Store in Notion**:
  - Creates a new page in a Notion database (`Create a database page`, `Create a database page1`) with fields for title, summary, date, hash, URL, source, digest status, and full article text. 

- **Credentials**:
  - Uses Notion API and OpenAI API credentials, ensuring no hardcoded API keys in HTTP nodes.


## Notes

- This workflow is for learning purpose only.

## 🔗 Nodes Used

HTTP Request, RSS Read, Notion, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
