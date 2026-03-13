# 🔬 Generate template descriptions from Google Drive with Azure GPT-4

> ⚡ **73 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## Description
Automatically generate polished, n8n-ready template descriptions from your saved JSON workflows in Google Drive. This AI-powered automation processes workflow files, drafts compliant descriptions, and delivers Markdown and HTML outputs directly to your inbox. 🚀💌📊💬

## What This Template Does
- Manually triggers the workflow to start processing.
- Searches a specified Google Drive folder for JSON workflow files.
- Iterates through each JSON file found in that folder.
- Downloads each file and prepares it for data extraction.
- Parses workflow data from the downloaded JSON content.
- Uses Azure OpenAI GPT-4 to generate concise titles and detailed descriptions.
- Converts the AI output into structured Markdown for n8n template publishing.
- Creates an HTML version of the description for email delivery.
- Logs generated details into a Google Sheet for record-keeping.
- Sends an email containing the Markdown and HTML descriptions to the target recipient.

## Key Benefits
✅ Fully automates n8n template description creation.
 ✅ Ensures consistency with official n8n publishing guidelines.
 ✅ Saves time while eliminating human writing errors.
 ✅ Provides dual Markdown + HTML outputs for flexibility.
 ✅ Centralizes workflow metadata in Google Sheets.
 ✅ Simplifies collaboration and version tracking via email delivery.

## Features
- Manual workflow trigger for controlled execution.
- Integration with Google Drive for locating and downloading JSON files.
- Intelligent parsing of workflow data from JSON structure.
- GPT-4-powered AI for title and description generation.
- Automatic Markdown + HTML formatting for n8n publishing.
- Google Sheets integration for persistent record-keeping.
- Automated Gmail delivery of generated documentation.

## Requirements
- n8n instance (cloud or self-hosted).
- Google Drive OAuth2 credentials with file read permissions.
- Google Sheets OAuth2 credentials with edit permissions.
- Azure OpenAI GPT-4 API key for AI text generation.
- Gmail OAuth2 credentials for email sending.

## Target Audience
- n8n content creators documenting workflows. 👩‍💼
- Automation teams handling multiple template deployments. 🔄
- Agencies and freelancers managing workflow documentation. 🏢
- Developers leveraging AI for faster template creation. 🌐
- Technical writers ensuring polished, standardized outputs. 📊

## Step-by-Step Setup Instructions
- Connect your Google Drive account and specify the folder containing JSON workflows. 🔑
- Authorize Google Sheets and confirm access to the tracking spreadsheet. ⚙️
- Add Azure OpenAI GPT-4 API credentials for AI-powered text generation. 🧠
- Connect Gmail credentials for automated email delivery. 📧
- Run the workflow manually using a test JSON file to validate all nodes. ✅
- Enable the workflow to automatically generate and send descriptions as needed. 🚀

## 🔗 Nodes Used

Google Sheets, Google Drive, Gmail, AI Agent, Simple Memory, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
