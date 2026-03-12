# 🎬 Curate & translate news from RSS using Google Gemini, Sheets, and Slack

> ⚡ **120 views** · 🎬 [Content Creation & Video](../)

## Description

## 🤖 Automated Multi-lingual News Curator & Archiver

**Overview**
This workflow automates news monitoring by fetching RSS feeds, rewriting content using AI, translating it (EN/ZH/KO), and archiving it.

**Who is this for?**
Content Curators, Localization Teams, and Travel Bloggers.

**How it works**
1. **Fetch & Filter:** Pulls NHK RSS and filters for keywords (e.g., "Tokyo").
2. **AI Processing:** Google Gemini rewrites articles, extracts locations, and translates text.
3. **Archive & Notify:** Saves structured data to Google Sheets and alerts Slack.

**Setup Requirements**
1. **Credentials:** Google Gemini, Google Sheets, Slack.
2. **Google Sheet:** Create headers: `title`, `summary`, `location`, `en`, `zh`, `ko`, `url`.
3. **Slack:** Configure Channel IDs.

**Customization**
- **RSS Read:** Change feed URL.
- **If Node:** Update filter keywords.
- **AI Agent:** Adjust system prompts for tone.


## 1. Fetch & Filter
Runs on a schedule to fetch the latest RSS items. Filters articles based on specific keywords (e.g., "Tokyo" or "Season") before processing.


## 2. AI Analysis & Parsing
Uses Google Gemini to rewrite the news, extract specific locations, and translate content. The Code node cleans the JSON output for the database.


## 3. Archive & Notify
Appends the structured data to Google Sheets and sends a formatted notification to Slack (or alerts if an article was skipped).



**Output Example (JSON)**
The translation agent outputs data in this format:
```json
{
  "en": "Tokyo Tower is...",
  "zh": "东京塔是...",
  "ko": "도쿄 타워는..."
}

## 🔗 Nodes Used

Google Sheets, RSS Read, Slack, Schedule Trigger, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
