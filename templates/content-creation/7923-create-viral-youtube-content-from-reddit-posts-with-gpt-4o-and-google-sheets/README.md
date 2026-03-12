# 🎬 Create viral YouTube content from Reddit posts with GPT-4o and Google Sheets

> ⚡ **869 views** · 🎬 [Content Creation & Video](../)

## Description

📝 Description

This workflow automates the collection, filtering, and scoring of trending AskReddit posts for viral potential. It pulls posts from Reddit, removes duplicates, calculates a custom virality score, and writes the final candidates into Google Sheets for later use in content creation.

This is Phase 1 of the AskReddit → YouTube Shorts automation pipeline. It prepares clean, high-quality data that can be used in the next phases (script generation, AI video creation, and publishing).

⚙️ Setup Steps

Import Workflow into your n8n instance.

Reddit API:

Add your Reddit API credentials in the "Get AskReddit Posts" node.

Google Sheets:

Connect your Google account.

Point the "Write Candidates" node to your target Google Sheet.

Virality Scoring:

The "Add Virality Score" node assigns weights (e.g., upvotes, comments).

Adjust the scoring logic as needed for your niche.

Run Workflow:

Execute manually or schedule with Cron.

Verify that trending AskReddit posts appear in your sheet, scored and cleaned.

## 🔗 Nodes Used

Google Sheets, HTTP Request, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
