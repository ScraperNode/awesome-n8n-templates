# 🎯 Collect & summarize multilingual news with NewsAPI, OpenAI & Google Sheets

> ⚡ **428 views** · 🎯 [AI Summarization & Classification](../)

## Description

How it works
This workflow automatically collects the latest news articles from both English and Japanese sources using NewsAPI, summarizes them with OpenAI, and appends the results into a Google Sheet. The summaries are concise (about 50 characters) in Japanese, making it easy to review news highlights at a glance.

Set up steps
1. Create a Google Sheet with two tabs:
   - 01_Input (columns: Keyword, SearchRequired)
   - 02_Output (columns: Date, Keyword, Summary, URL)
2. Enter your own Google Sheet ID and tab names in the workflow.
3. Add your NewsAPI key in the HTTP Request nodes.
4. Connect your OpenAI account (or deactivate the summarization node if not needed).
5. Run the workflow manually or use the daily schedule trigger at 13:00.

This template is ready to use with minimal changes. Sticky notes inside the workflow provide extra guidance.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
