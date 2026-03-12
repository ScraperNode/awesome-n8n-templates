# 🎫 Automatically detect & classify GitHub API errors with GPT-4o to Airtable, Notion & Slack

> ⚡ **60 views** · 🎫 [Ticket Management & Triage](../)

## Description

Automatically detect, classify, and document GitHub API errors using AI.
This workflow connects GitHub, OpenAI (GPT-4o), Airtable, Notion, and Slack to build a real-time, searchable API error knowledge base — helping engineering and support teams respond faster, stay aligned, and maintain clean documentation. ⚙️📘💬

## 🚀 What This Template Does
1️⃣ Triggers on new or updated GitHub issues (API-related). 🪝
 2️⃣ Extracts key fields (title, body, repo, and link). 📄
 3️⃣ Classifies issues using OpenAI GPT-4o, identifying error type, category, root cause, and severity. 🤖
 4️⃣ Validates & parses AI output into structured JSON format. ✅
 5️⃣ Creates or updates organized FAQ-style entries in Airtable for quick lookup. 🗂️
 6️⃣ Logs detailed entries into Notion, maintaining an ongoing issue knowledge base. 📘
 7️⃣ Notifies the right Slack team channel (DevOps, Backend, API, Support) with concise summaries. 💬
 8️⃣ Tracks & prevents duplicates, keeping your error catalog clean and auditable. 🔄

## 💡 Key Benefits
✅ Converts unstructured GitHub issues into AI-analyzed documentation
 ✅ Centralizes API error intelligence across teams
 ✅ Reduces time-to-resolution for recurring issues
 ✅ Maintains synchronized records in Airtable & Notion
 ✅ Keeps DevOps and Support instantly informed through Slack alerts
 ✅ Fully automated, scalable, and low-cost using GPT-4o

## ⚙️ Features
- Real-time GitHub trigger for API or backend issues
- GPT-4o-based AI classification (error type, cause, severity, confidence)
- Smart duplicate prevention logic
- Bi-directional sync to Airtable + Notion
- Slack alerts with contextual AI insights
- Modular design — easy to extend with Jira, Teams, or email integrations

## 🧰 Requirements
- GitHub OAuth2 credentials
- OpenAI API key (GPT-4o recommended)
- Airtable Base & Table IDs (with fields like Error Code, Category, Severity, Root Cause)
- Notion integration with database access
- Slack Bot token with chat:write scope

## 👥 Target Audience
- Engineering & DevOps teams managing APIs
- Customer support & SRE teams maintaining FAQs
- Product managers tracking recurring API issues
- SaaS orgs automating documentation & error visibility

## 🪜 Step-by-Step Setup Instructions
1️⃣ Connect your GitHub account and enable the “issues” webhook event.
 2️⃣ Add OpenAI credentials (GPT-4o model for classification).
 3️⃣ Create an Airtable base with fields: Error Code, Category, Root Cause, Severity, Confidence.
 4️⃣ Configure your Notion database with matching schema and access.
 5️⃣ Set up Slack credentials and choose your alert channels.
 6️⃣ Test with a sample GitHub issue to validate AI classification.
 7️⃣ Enable the workflow — enjoy continuous AI-powered issue documentation!

## 🔗 Nodes Used

Airtable, Github Trigger, Slack, Notion, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
