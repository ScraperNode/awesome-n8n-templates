# 📈 📈 Receive daily market news from FT.com to your Microsoft Outlook inbox

> ⚡ **9,884 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## 📈 Daily Financial News - Description 

This workflow automates the process of collecting, organizing, and delivering a daily summary of financial news by following these key steps:

1. **Scheduled Activation**  
   The workflow starts at 7:00 AM each day, triggered by the Schedule Trigger node.

2. **News Retrieval**  
   The **HTTP Request** node fetches the latest financial news from [FT.com](https://www.ft.com/).

3. **Content Extraction**  
   The **Extract Specific Content** node scrapes targeted sections of the HTML (headlines, editor's picks, top stories, etc.) using CSS selectors to locate and capture relevant content.

4. **News Aggregation**  
   The **Set Node** gathers and organizes the extracted news data, preparing it for summarization. Categories like "Headline #1," "Editor's Picks," and "Europe News" are all structured into a single data block.

5. **Summarization**  
   An **AI Agent** (Google Gemini) takes the aggregated news data and creates a concise, HTML-formatted summary tailored to give investors an insightful market snapshot.

6. **Email Delivery**  
   Finally, the **Microsoft Outlook** node sends the summary via email to the designated recipient with the subject "Financial news from today."

This process ensures that financial news is efficiently curated, summarized, and delivered without manual intervention.

## 🔗 Nodes Used

HTTP Request, Microsoft Outlook, Schedule Trigger, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
