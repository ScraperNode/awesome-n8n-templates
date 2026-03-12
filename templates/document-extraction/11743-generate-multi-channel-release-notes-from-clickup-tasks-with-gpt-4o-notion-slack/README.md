# 🔬 Generate multi-channel release notes from ClickUp tasks with GPT-4o, Notion & Slack

> ⚡ **65 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow converts raw ClickUp task updates—received directly through a webhook—into fully automated release documentation. It validates incoming payloads, fetches and cleans task details, enriches them with AI-generated metadata, produces structured release notes using GPT-4o, publishes them to Notion, notifies stakeholders on Slack, emails a formatted summary, and logs the release into Google Sheets.
The system handles malformed events gracefully by logging invalid payloads and continues only when a valid task_id is present. It extracts structured fields (title, description, links, priority, assignee), then augments them with AI-driven classifications such as risk level, change type, module, and impact score. GPT-4o generates polished release notes following a strict template. Finally, the workflow distributes the release across multiple channels while maintaining an auditable, centralized history.

## ⚙️ What This Workflow Does (Step-by-Step)

🟢 Webhook — Receive ClickUp Task Update
 Captures incoming events from ClickUp via POST and forwards the raw body for parsing.

🧹 Code in JavaScript — Extract task_id
 Parses the raw webhook body and safely extracts task_id.
 Invalid JSON → forwarded to error logging.

🔍 Validate Incoming ClickUp Task Event
 Checks if task_id exists.
 Valid → continue workflow
 Invalid → log error to Google Sheets

📄 Fetch Full Task Details from ClickUp
 Retrieves full task metadata: title, description, status, priority, links, assignee details, and due date.

🧩 Extract Clean Task Fields from ClickUp Data
 Normalizes and structures the task fields into a clean, usable JSON object.

🧠 Provide GPT-4o Model for Metadata Extraction
 Loads the language model for metadata generation.

🔍 Generate Release Metadata via AI
 AI generates structured metadata including:
 • risk_level
 • change_type
 • module
 • impact_score
 • requires_testing

🧹 Parse AI Metadata JSON Output
 Parses stringified JSON from the AI node into valid structured JSON.
 Malformed metadata → returned as an error object.

🔀 Merge Task Details with Metadata
 Combines clean task fields with AI-generated metadata into a complete release-ready object.

🧠 Provide GPT-4o Model for Release Notes
 Supplies the language model needed to generate formal release notes.

✍️ Generate Structured Release Notes via AI
 Produces uniform release notes containing:
 • Summary
 • Improvements & Features
 • Bug Fixes
 • Impact Analysis
 • Known Issues

📝 Extract Release Notes Title & Final Output
 Extracts title from markdown and prepares final content for publishing.

📘 Create Release Notes Page in Notion
 Saves the release notes as a new page in the Notion Release Notes database.

💬 Post Release Announcement to Slack
 Sends formatted release notes + Notion link to the specified Slack user/channel.

📧 Send Release Summary Email
 Sends a structured HTML email with the release summary, full notes, and Notion link.

📊 Append Release Log Entry to Google Sheet
 Writes a complete release log entry including:
 • task ID
 • title
 • priority
 • module
 • risk level
 • Notion URL
 • Slack message URL
 • release date

🛑 Log Invalid ClickUp Events to Google Sheet
 Stores any invalid or incomplete webhook payload for debugging and auditing.

## 🧩 Prerequisites
 • ClickUp API token
 • Public webhook endpoint in n8n
 • Azure OpenAI GPT-4o credentials
 • Notion API integration
 • Slack API token
 • Google Sheets OAuth
 • Gmail OAuth

## 💡 Key Benefits
 ✔ Converts ClickUp updates directly into finished release documentation
 ✔ AI-powered metadata ensures consistent classification
 ✔ Instant multi-channel dissemination: Slack + Email + Notion
 ✔ Automatic logging for audit, QA, and release governance
 ✔ Eliminates manual writing, formatting, and cross-platform updates

## 👥 Perfect For
-  Product teams running constant sprints
-  Engineering teams needing reliable release documentation
-  Teams using ClickUp as their primary task manager
-  Organizations with multi-channel release communication needs

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, ClickUp, Gmail, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
