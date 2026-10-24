# 📊 Generate daily top news digests from RSS feeds with Groq and Slack

> ⚡ **139 views** · 📊 [Market Research & Insights](../)

## Description

## How it works  
This workflow runs every morning to collect news from multiple RSS feeds across global, business, finance, and tech categories. It processes and filters the most recent articles, then uses an AI model to select the most relevant global stories. The selected news is formatted into a clean digest. Finally, the digest is automatically delivered to a Slack channel.

## Step-by-step  

- **Trigger and setup feeds**  
  - **Schedule Trigger** – Runs the workflow daily at a fixed time.  
  - **Define News Categories** – Stores all RSS feed URLs in one place.  
  - **Prepare RSS Feed List** – Converts feed data into iterable items.  

- **Fetch and process articles**  
  - **Loop Through RSS Feeds** – Iterates through each RSS source.  
  - **Fetch RSS Articles** – Pulls articles from each feed.  
  - **Filter Latest 10 Articles** – Sorts and keeps the most recent items.  
  - **Merge All RSS Articles** – Combines all articles into one dataset.  

- **AI selection and delivery**  
  - **AI Select Top Global News** – Uses AI to pick the most important stories.  
  - **Groq Chat Model** – Provides the language model for analysis.  
  - **Format News For Slack Message** – Structures AI output into clean messages.  
    - **(Sub-node) JSON Extraction Logic** – Parses AI response into usable article data.  
  - **Post News Digest to Slack** – Sends the final formatted digest to Slack.  

## Why use this?  

- Automates end-to-end news aggregation and summarization  
- Filters noise and highlights only high-impact global stories  
- Keeps teams informed directly within Slack  
- Reduces manual effort in tracking multiple news sources  
- Easily scalable by adding more RSS feeds or categories

## 🔗 Nodes Used

RSS Read, Slack, Schedule Trigger, AI Agent, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
