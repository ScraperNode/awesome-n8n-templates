# 🧾 Classify and route uploaded documents to Google Drive with an AI agent

> ⚡ **126 views** · 🧾 [Invoice Processing](../)

## Description

## What This Workflow Does
Upload a document (PDF, PNG, JPEG) via a web form and let an **AI agent** classify it and route it to the correct Google Drive folder on its own. No rule-based routing, no Switch nodes – the agent decides the category and calls the matching move tool. Documents it can't confidently classify are moved to a **Needs Review** folder and flagged via **Slack**.

## How It Works
1. User uploads a file through the hosted web form
2. The file is uploaded to a temporary **Incoming** folder in Google Drive
3. The file ID and name are passed to the **AI Agent**
4. The agent classifies the document and calls the matching **Move** tool (e.g. `move_to_medical`)
5. If it can't confidently classify, it calls **Move to Needs Review** + sends a **Slack** alert

**Supported categories:**
`medical_invoice` · `restaurant_invoice` · `hotel_invoice` · `trades_invoice` · `telecom_invoice`

---

## Setup Guide

### 1. Create Your Google Drive Folders
Create one folder per category in Google Drive:
- **Incoming** (temporary landing folder)
- **Medical** · **Restaurant** · **Hotel** · **Trades** · **Telecom**
- **Needs Review**

### 2. Connect Google Drive
1. In n8n, go to **Settings → Credentials** and create a **Google Drive OAuth2** credential
2. This requires a **Client ID** and **Client Secret** from Google Cloud Console (APIs & Services → Credentials → OAuth 2.0 Client ID)
3. Make sure the **Google Drive API** is enabled in your Google Cloud project
4. Open the **Upload to Incoming Folder** node and select your Incoming folder
5. Open each of the 6 Move tool nodes and select the correct target folder

### 3. Connect Your Chat Model
1. Add a credential for your chosen model (Gemini, OpenAI, Anthropic) in **Settings → Credentials**
2. Open the **Chat Model** node and assign the credential
3. Any tool-calling capable model will work – Gemini 1.5 Pro or GPT-4o recommended

### 4. Connect Slack
1. Create a **Slack API** credential in n8n (needs a Bot Token with `chat:write` scope)
2. Create a channel for review notifications (e.g. `#document-review`)
3. Invite the bot to that channel
4. Open the **Slack: Notify Review Channel** node and select the correct channel

### 5. Activate & Test
1. Click **Active** in the top-right corner of n8n
2. Open the form URL and upload a test document
3. Check the execution log to confirm the classification and the move action
4. Verify the file lands in the correct Google Drive folder
5. Test with an unrecognizable document to confirm the Slack alert fires

---

## Notes
- The agent's classification quality depends on the filename and the chat model's reasoning. Descriptive filenames improve accuracy significantly.
- This workflow is an **agentic demo** – it replaces deterministic routing with LLM decision-making. For production-grade document classification with structured extraction, per-field prompting, and explicit confidence scoring, check out the easybits Extractor community node.

## 🔗 Nodes Used

Google Drive, AI Agent, n8n Form Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
