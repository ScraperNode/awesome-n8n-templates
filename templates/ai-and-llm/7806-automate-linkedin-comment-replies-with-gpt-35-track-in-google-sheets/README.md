# ✨ Automate LinkedIn comment replies with GPT-3.5 & track in Google Sheets

> ⚡ **1,197 views** · ✨ [AI & LLMs](../)

## Description

## How it works
This workflow automates LinkedIn community engagement by monitoring post comments, filtering new ones, generating AI-powered replies, and posting responses directly on LinkedIn. It also logs all interactions into Google Sheets for tracking and analytics.

## Step-by-step

**Trigger & Fetch**

- A Schedule Trigger runs the workflow every 10 minutes.

- The workflow fetches the latest comments on a specific LinkedIn post using LinkedIn’s API with token-based authentication.

**Filter for New Comments**

- Retrieves the timestamp of the last processed comment from Google Sheets.

- Filters out previously handled comments, ensuring only fresh interactions are processed.

**AI-Powered Reply Generation**

- Sends the new comment to OpenAI GPT-3.5 Turbo with a structured prompt.

- AI generates a professional, concise, and engaging LinkedIn-appropriate reply (max 2–3 sentences).

**Post Back to LinkedIn**

- Automatically posts the AI-generated reply under the original comment thread.

- Maintains consistent formatting and actor identity.

**Data Logging**

- Appends the original comment, AI response, and metadata into Google Sheets.

- Enables tracking, review, and future engagement analysis.

## Benefits

- Saves time by automating LinkedIn comment replies.

- Ensures responses are timely, professional, and on-brand.

- Maintains authentic engagement without manual effort.

- Prevents duplicate replies by filtering with timestamps.

- Creates a structured log in Google Sheets for auditing and analytics.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
