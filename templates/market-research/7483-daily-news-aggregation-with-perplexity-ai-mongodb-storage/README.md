# 📊 Daily news aggregation with Perplexity AI & MongoDB storage

> ⚡ **1,100 views** · 📊 [Market Research & Insights](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

***Workflow***: **Daily News Aggregator & MongoDB Storage**

This workflow is designed to run seamlessly in the background, automating the full cycle of news aggregation, storage, and reporting with precision and reliability.

1. Daily Trigger (Cron Node)
The process kicks off every morning at 8:00 AM UTC. This scheduling ensures that fresh global news is captured consistently at the start of each day.

2. Perplexity Node
At the heart of the workflow, a Perplexity node queries the latest global news. The prompt specifies both the type of news and the JSON structure required, guaranteeing the output is ready for structured storage. The result is a clean feed of headlines, timestamps, sources, and URLs.

3. Data Formatting (Code Node)
Since Perplexity’s response is a string, the workflow includes a custom JavaScript function to clean and parse it into a valid JSON array. Each news item is then transformed into its own object, ready for iteration.

4. MongoDB Insertion (Loop Node)
Each news article is inserted into the daily_news collection in MongoDB. The workflow ensures that fields such as headline, timestamp, source, URL, and category are stored neatly, with additional metadata available for future filtering and analysis.

5. Aggregation & Notification Prep (Code Node)
Once all items are stored, the workflow aggregates the day’s results. This step prepares a digest of what was successfully processed, ensuring visibility into the pipeline’s performance.

6. Email Notification (Gmail Node)
Finally, a summary email is sent via Gmail. This message confirms the operation’s success and provides a quick snapshot of the news collected and stored that day.

Workflow Flow

Cron Trigger → Perplexity API → Format Data → MongoDB Insert → Aggregate Results → Send Email Notification

This setup transforms what could be a manual, repetitive task into a streamlined daily routine. It not only guarantees timely and structured storage of news but also provides immediate confirmation, making it an elegant solution for automated information management.

## 🔗 Nodes Used

MongoDB, Gmail, Schedule Trigger, Perplexity

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
