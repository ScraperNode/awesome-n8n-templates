# ⚒️ Validate n8n JSON workflows with GPT-4 & LangChain: Google Drive to Sheets

> ⚡ **131 views** · ⚒️ [Engineering](../)

## Description

**Description:**

This advanced n8n automation template checks the validity and production-readiness of multiple JSON workflow files using AI-powered analysis. 

It scans a designated Google Drive folder for uploaded JSON files, downloads them one by one, parses their structure, and sends each JSON to GPT-4 via LangChain Agent for intelligent validation. Results are automatically logged into a Google Sheet with structured feedback.

Ideal for QA analysts, workflow engineers, or product teams maintaining large libraries of automation blueprints—this template removes manual review from your JSON pipeline.

**What This Template Does (Step-by-Step)**

🟢 Manual Trigger: Starts the flow when user clicks "Execute Workflow".

📁 Google Drive File Search: Connects to a specified folder (e.g., Edtech) and fetches a list of all JSON files.

🔁 Batch Processor (SplitInBatches): Loops through each file one-by-one to prevent overload or parallel conflicts.

📥 File Downloader: Downloads each file using its unique File ID from Google Drive.

📤 JSON Extractor: Converts each downloaded file from binary to structured JSON.

🤖 LangChain AI Agent + Azure GPT-4

🟢 Sends each JSON structure to a GPT-4-powered 🟢 LangChain Agent.
🟢 AI validates and analyzes:
- JSON structure integrity
- Presence of required nodes/connections
- Proper use of credentials
- Industry-readiness
🟢 Observations on modularity, error handling, or fragility

📊 Google Sheets Logger: Writes AI-generated insights back into a Google Sheet (e.g., tab: final) for team visibility and tracking.

**Required Integrations**

- Google Drive API (OAuth2)
- Google Sheets API (OAuth2)
- Azure OpenAI or OpenAI GPT-4 API Key
- LangChain AI Agent & Memory Modules

**Perfect For**

🧪 QA teams validating hundreds of n8n workflows
⚙️ Workflow engineers ensuring automation design standards
📊 Ops teams tracking AI-generated feedback at scale
💼 SaaS platforms that auto-upload workflows for approval
🧠 Internal AI audit tools for low-code/no-code ecosystems

**Why Use This Template?**

✅ Fully automated JSON parsing and review
✅ AI-powered structural audit with actionable feedback
✅ Zero manual checking—great for scale
✅ Write-back to Google Sheets for traceability
✅ Modular, loop-safe, and scalable for enterprise ops

## 🔗 Nodes Used

Google Sheets, Google Drive, AI Agent, Simple Memory, Extract from File, Azure OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
