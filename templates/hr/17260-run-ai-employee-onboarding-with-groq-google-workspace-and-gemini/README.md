# 👥 Run AI employee onboarding with Groq, Google Workspace, and Gemini

> ⚡ **10 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow ingests onboarding documents from Google Drive into an in-memory vector store with Google Gemini embeddings, then runs a multi-channel onboarding chatbot powered by Groq, sends role-based welcome emails via Gmail when a new hire appears in Google Sheets, and schedules day 1/7/30 check-in emails.

## How it works
1. Manually runs an ingestion flow that lists files in a specified Google Drive folder, downloads them, extracts text, and indexes them into an in-memory vector store using Google Gemini embeddings.
2. Receives employee questions via n8n Chat (and optionally Slack or Telegram), normalizes the message into a single format, and rejects empty or overly long inputs.
3. Uses a Groq LLM agent with per-user session memory to retrieve relevant excerpts from the in-memory company_docs knowledge base and generate a grounded answer, or directs the user to HR when no relevant content is found.
4. Routes the assistant’s response back to the originating channel (n8n Chat, and optionally Slack or Telegram).
5. Triggers every minute on updates to a Google Sheets “Hires” sheet, validates rows marked as Hired, and skips hires already present in the “Tracking” sheet.
6. Builds a department-specific onboarding checklist, uses Groq to draft an HTML welcome email, sends it via Gmail, creates and shares a dedicated Google Drive onboarding folder, and appends the hire to the Google Sheets “Tracking” sheet.
7. Runs daily on a schedule, reads the “Tracking” sheet, finds hires due for day 1/7/30 check-ins, sends a Groq-written Gmail check-in email, and stamps the corresponding check-in column in Google Sheets to avoid duplicate sends.

## Setup
1. Add credentials for Google Drive (service account), Google Sheets (OAuth2), Gmail (OAuth2), Groq API, and Google Gemini (PaLM) embeddings.
2. Set the Google Drive docs folder ID and company/HR values in the configuration steps (all fields marked like YOUR_GOOGLE_DRIVE_FOLDER_ID, YOUR_COMPANY_NAME, and YOUR_HR_EMAIL).
3. Create and populate the Google Sheets “Hires” and “Tracking” sheets with the required column headers, and set the Hires/Tracking document and sheet IDs in the Google Sheets trigger and config fields.
4. Run the manual ingestion once (and re-run after document changes or any n8n restart, since the vector store is in-memory) before using the chatbot.
5. If you want Slack or Telegram support, add the relevant credentials, configure the app/bot webhooks, enable the optional triggers and reply nodes, and set the target Slack channel name.

## 🔗 Nodes Used

Google Sheets, Slack, Telegram, Telegram Trigger, Google Drive, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
