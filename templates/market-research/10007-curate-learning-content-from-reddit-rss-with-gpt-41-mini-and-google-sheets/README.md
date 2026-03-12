# 📊 Curate learning content from Reddit & RSS with GPT-4.1-mini and Google Sheets

> ⚡ **212 views** · 📊 [Market Research & Insights](../)

## Description

## Personalized Learning Content Aggregator with AI Filtering

### Who’s it for
This workflow is for learners, educators, and professionals who want to automatically collect and filter the most relevant educational articles, tutorials, and resources based on specific keywords.

### How it works
- Fetches content from RSS feeds and Reddit based on user-defined keywords.
- AI analyzes and filters the articles to keep only **relevant, educational, and non-promotional** posts.
- Saves curated results into a Google Sheet for easy review.

### How to set up
1. Connect your **Google Sheets** and **AI** (OpenAI or LangChain) credentials.
2. Add your RSS feed URLs and keywords to Google Sheets.
3. Adjust schedule timing in the trigger node (default: 8 AM & 6 PM daily).
4. Run the workflow and check the results in your Google Sheet.

### Requirements
- Google Sheets account for storage.
- RSS feed URLs and keyword list.
- AI node (OpenAI / Gemini / Claude) for filtering logic.

### How to customize
- Change or add new content sources (e.g., YouTube, Medium, Dev.to).
- Adjust AI prompt criteria to match your learning goals.
- Save results to other platforms (e.g., Notion, Slack, or Airtable).

**Note:** This workflow uses no personal identifiers or API keys directly in nodes. All credentials are safely stored in n8n’s credential manager.

## 🔗 Nodes Used

Google Sheets, HTTP Request, RSS Read, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
