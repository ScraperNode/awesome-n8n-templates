# 🎬 Generate AI News LinkedIn Posts with GPT-4o-mini, NewsAPI, and Qdrant

> ⚡ **481 views** · 🎬 [Content Creation & Video](../)

## Description

Overview
Automated LinkedIn content generator that:

Fetches trending AI news using NewsAPI
Enhances content with Qdrant vector store context
Generates professional LinkedIn posts using GPT-4o-mini
Tracks email interactions in Google Sheets
🛠️ Prerequisites
API Keys : NewsAPI, OpenAI (GPT-4o-mini), Qdrant
Accounts : Gmail Oauth, Google Sheets, LinkedIn developer API
Environment Variables :
OPENAI_API_KEY
NEWSAPI_KEY
QDRANT_URL/QDRANT_API_KEY
📁 Google Sheets Setup
Create a spreadsheet with these columns:

ISO date
Email address
Unique ID
"Approve" or "Reject"

⚙️ Setup Instructions
Pre-populate Qdrant :
Create collection "posts" with LinkedIn post examples
Add 10+ example posts for style reference
Node Configuration :
Update Gmail credentials (OAuth2)
Set fromEmail/toEmail in email nodes
Configure Google Sheets document IDs
Test Workflow :
Run Schedule Trigger manually first
Verify email notifications work
Check Qdrant vector store connectivity

🎨 Customization Options
Tone Adjustment : Modify system message in "AI Agent"
Post Style : Update prompt in "Generate LinkedIn Post"
Filter Criteria : Edit NewsAPI URL parameters
Scheduling : Change interval in Schedule Trigger

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Gmail Trigger, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
