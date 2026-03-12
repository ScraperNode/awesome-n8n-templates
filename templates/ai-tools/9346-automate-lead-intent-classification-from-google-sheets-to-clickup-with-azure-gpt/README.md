# 🎯 Automate lead intent classification from Google Sheets to ClickUp with Azure GPT-4

> ⚡ **133 views** · 🎯 [AI Summarization & Classification](../)

## Description

## Description
Automatically analyze incoming lead replies from Google Sheets using Azure OpenAI GPT-4, classify their intent (Demo Request, Pricing, Objection, etc.), and create actionable follow-up tasks in ClickUp — all without manual intervention. Streamline your sales response workflow and never miss a lead again. 🤖📩📈

## What This Template Does
- Triggers every 15 minutes to check for new lead replies in Google Sheets. ⏰
- Prepares lead data for AI analysis by standardizing input fields. 🧩
- Uses Azure OpenAI GPT-4 to classify lead intent (Demo Request, Pricing Inquiry, Objection, etc.). 🧠
- Routes leads based on intent to the corresponding follow-up handler. 🔀
- Creates new ClickUp tasks with calculated due dates, descriptions, and pipeline stages. 🗂️
- Adds structured checklists to each task for consistent sales follow-ups. ✅
- Loops through multiple tasks while respecting ClickUp API rate limits. 🔁

## Key Benefits
✅ Saves hours of manual lead qualification and task creation.
 ✅ Ensures no lead reply is ignored or delayed.
 ✅ Standardizes intent-based follow-ups for sales teams.
 ✅ Enhances productivity with AI-driven decision logic.
 ✅ Maintains clear visibility across CRM and task systems.

## Features
- 15-minute recurring trigger to monitor new replies.
- AI-powered intent classification using Azure OpenAI GPT-4.
- Multi-category routing logic for personalized next steps.
- Seamless ClickUp integration for automated task generation.
- Smart checklist creation for follow-up management.
- Batch loop processing to avoid rate-limit errors.

## Requirements
- n8n instance (cloud or self-hosted).
- Google Sheets OAuth2 credentials with read access.
- Azure OpenAI GPT-4 API credentials.
- ClickUp API token with workspace permissions.
- Target Audience
- Sales and marketing teams managing inbound leads. 💼
- Agencies automating client qualification workflows. 🏢
- Startups improving lead follow-up efficiency. 🚀
- Teams integrating AI-driven insights into CRM processes. 🌐

## Step-by-Step Setup Instructions
- Connect Google Sheets with your lead replies document. 📊
- Add Azure OpenAI GPT-4 API credentials for intent analysis. 🧠
- Configure ClickUp workspace details — team, space, folder, and list IDs. ⚙️
- Set your preferred trigger interval (default: every 15 minutes). ⏰
- Run a test with sample data to confirm intent mapping and task creation. ✅
- Activate the workflow to automatically classify leads and create ClickUp tasks. 🚀

## 🔗 Nodes Used

Google Sheets, HTTP Request, ClickUp, Schedule Trigger, AI Agent, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
