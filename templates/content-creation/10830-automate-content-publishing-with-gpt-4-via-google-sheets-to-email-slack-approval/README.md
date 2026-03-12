# 🎬 Automate content publishing with GPT-4 via Google Sheets to email & Slack approval

> ⚡ **133 views** · 🎬 [Content Creation & Video](../)

## Description

Streamline the final stage of your content production workflow by automating publishing, formatting, metadata generation, and approval routing. This AI-powered subworkflow pulls optimized drafts from Google Sheets, enriches them with SEO metadata, converts them into publish-ready HTML, and delivers them via email and Slack for approval or distribution. Ideal for teams managing high-volume content pipelines with structured review processes. ✨📝🚀

## What This Template Does
- Triggers via chat to start the content publishing process. 💬
- Fetches the latest optimized content draft from Google Sheets using a content ID. 📄
- Prepares metadata such as topic, intent, platform, and parameters. 🧩
- Uses an AI agent (GPT-4) to generate SEO metadata, HTML-formatted article, tags, and structured publish data. 🤖
- Enforces JSON structure to ensure consistent output formatting. 🧱
- Saves the publish-ready content (title, meta description, HTML, tags) back into Google Sheets for version tracking. 📊
- Sends the content to an approver via Gmail with a previewed HTML body. 📧
- Awaits approval and branches based on decision. 🔀
- If approved, sends the final published content to the intended recipient via Gmail. 📨
- Sends a success confirmation message to Slack for team visibility. 📢

## Key Benefits
✅ AI-generated SEO optimization, metadata, and HTML formatting
✅ Centralizes content versioning within Google Sheets
✅ Automates approval workflows and content delivery
✅ Ensures consistent output structure with JSON parsing
✅ Reduces manual formatting, editing, and routing tasks
✅ Delivers instant Slack notifications for team transparency

## Features
- Chat-triggered publishing workflow
- Google Sheets content retrieval and storage
- AI-driven formatting, metadata generation, HTML conversion
- Structured JSON enforcement for clean automation
- Gmail integration for approval + publishing
- Slack notifications for successful publication
- Short-term memory support for context persistence

## Requirements
1. Google Sheets OAuth2 credentials
2. OpenAI API key (GPT-4 or GPT-4 mini)
3. Gmail OAuth2 credentials for sending and receiving approval messages
4. Slack API credentials with chat:write access
5. Preconfigured Google Sheet containing optimized content drafts

## Target Audience
1. Content operations teams handling recurring content workflows
2. SEO and marketing teams producing high-volume articles
3. Agencies managing structured approval pipelines
4. Automation specialists building content publishing systems
5. Teams needing standardized, AI-enhanced HTML content

## Step-by-Step Setup Instructions
- Connect your Google Sheets OAuth2 credential and replace the sheet/document IDs. 🗂️
- Add your OpenAI API key for the AI Publishing Agent. 🔑
- Connect Gmail credentials for both approval and final publishing emails. 📧
- Update all email addresses and Slack channel IDs with your own. ✏️
- Modify metadata fields (topic, intent, platform) if needed. 🎯
- Run the workflow with a sample content ID to verify the flow. 🔍
- Enable and integrate as a subworkflow inside your main content pipeline. 🚀

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
