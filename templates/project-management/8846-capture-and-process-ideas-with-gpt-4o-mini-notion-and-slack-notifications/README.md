# 📋 Capture and process ideas with GPT-4o-mini, Notion and Slack notifications

> ⚡ **125 views** · 📋 [Project Management](../)

## Description

## How it works

This workflow captures idea submissions from a webhook and enriches them using AI.  
It extracts key fields like Title, Tags, Submitted By, and Created date in IST format.  
The cleaned data is stored in a Notion database for centralized tracking.  
Finally, a confirmation message is posted in Slack to notify the team.

## Step-by-step

## Step-by-step

**1. Capture and process submission**  
- **Webhook** – Receives idea submissions with text and user ID.  
- **AI Agent & OpenAI Model** – Enrich and structure the input into Title, Tags, Submitted By, and Created fields.  
- **Code** – Extracts clean data, formats tags, and prepares the entry for Notion.  

**2. Store in Notion**  
- **Add to Notion** – Creates a new database entry with mapped fields: Title, Submitted By, Tags, Created.  

**3. Notify in Slack**  
- **Send Confirmation (Slack)** – Posts a confirmation message with the submitted idea title.  
  

## Why use this?

- Centralizes idea collection directly into Notion for better organization.  
- Eliminates manual formatting with AI-powered data structuring.  
- Ensures consistency in tags, submitter info, and timestamps.  
- Provides instant team-wide visibility via Slack notifications.  
- Saves time while keeping idea management streamlined and transparent.

## 🔗 Nodes Used

Slack, Webhook, Notion, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
