# 💬 Capture and score website leads with Gemini RAG, Supabase, Google Sheets and Slack alerts

> ⚡ **28 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

Turn your website chat into a lead-generating machine. Visitors chat with an AI that answers questions from your knowledge base, captures their contact info, syncs everything to Google Sheets, and automatically scores leads based on buying signals - all without manual intervention.

## What it does
- Gates conversations behind identity capture (requires name + email before answering questions)
- Saves user identity to Supabase per session (name, email, session_id)—supports updates if user changes their email
- Answers visitor questions using RAG from your Supabase vector store with Cohere reranking
- Detects new vs returning leads by email (prevents duplicate CRM entries)
- Creates/updates lead records in Google Sheets with:
  - Contact info (name, email, created date)
  - Conversation insights (interests, summary, notes)
  - Scoring metadata (last message time, score timer)
- Sends Slack alerts when high-intent signals detected (pricing questions, demo requests, urgency)
- Runs automated lead scoring every 10 minutes:
  - Finds leads inactive for 30+ minutes
  - AI analyzes conversation and assigns score (1-10) + status (Hot/Warm/Cold)
  - Writes results back to Google Sheets

## Requirements
- Google Sheets OAuth2 credentials
- Supabase account (for vector store + identity storage)
- Google Gemini API key
- Cohere API key (for reranking)
- Slack OAuth2 credentials
- Postgres database (for chat memory)
- A Google Sheet with columns: email, name, lead_score, lead_status, interests, conversation_summary, notes, last_message_at, score_after, scored, created_at

## Setup
1. Create your Google Sheet with the required columns (or duplicate the template structure)
2. Set up Supabase tables: `chat_users` (session_id, name, email), `documents` (vector store), `chat_memory` (conversation history)
3. Connect all credentials to their respective nodes (Google Sheets, Supabase, Gemini, Cohere, Slack, Postgres)
4. Update the AI agent prompts: replace `[AI AGENT NAME]`, `[COMPANY]`, and `[YOUR SERVICES/PRODUCTS/SOLUTIONS]` with your details
5. Populate your Supabase vector store with company knowledge base documents
6. Update the Google Sheet document ID if using your own sheet
7. Activate the workflow: chat flow runs on every message, scoring runs every 10 minutes

## Next steps
Embed the n8n chat widget on your website to start capturing leads. Monitor your Google Sheet to see leads populate with conversation summaries and scores. Use the lead_status column (Hot/Warm/Cold) to prioritize sales follow-up, or connect to your existing CRM via additional nodes.

**Tip:** Test the full flow with a few conversations first: provide name/email → ask questions → wait 30 minutes → verify the lead gets scored. The scoring timer resets with each new message, so leads are only scored after conversation inactivity.

## Sample Outputs

### AI support agent refusing to answer questions until identity received and confirmed
**via embedded n8n chat module.** 

![](https://i.postimg.cc/nLJsYnfq/Screenshot-2025-11-05-1533-57.png)

### n8n RAG chatbot running with hosted chat interface on external website
**via hosted n8n chat trigger.**

![](https://i.postimg.cc/q7zsSk5g/Screenshot-2025-11-05-154926.png)

![](https://i.postimg.cc/0jBxt0M9/Screenshot-2025-11-05-154939.png)

### Supabase DB table updated with users' name and email address once provided
**Creates a new row, or updates the row if the user requests to change their email address in the same chat session.**

![](https://i.postimg.cc/J4YcqDp5/Screenshot-2025-11-05-170547.png)

### Google Sheets CRM updated
**Creates a new row for a new lead, or updates an existing row for an existing lead. Enters details about the chat, and scores the lead.**
[Link to Google Sheets CRM sample file](https://docs.google.com/spreadsheets/d/1GJdgFLrKpjg3oyUvieW1mIbN7vWnJC2yxaEbwbAllbw/edit?usp=sharing)

![](https://i.postimg.cc/pV943SPC/lead-crm-record-scored.png)

### Slack alerts triggered in leads channel
**Alerts the relevant channel with automated Slack messages any time a lead shares their name and email, plus any time they show possible buying intent.**

![](https://i.postimg.cc/DyT65p0d/lead-slack-alert.png)

## 🔗 Nodes Used

Google Sheets, Supabase, Schedule Trigger, Filter, AI Agent, Supabase Vector Store

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
