# 💬 AI-powered RAG Q&A chatbot with OpenAI, Google Sheets, Glide & Supabase

> ⚡ **1,380 views** · 💬 [Support Chatbots](../)

## Description

**Automate AI-Powered RAG System with Contextual Q&A, Google Sheets Integration, and Glide Frontend—Powered by n8n, OpenAI, Supabase, and Google Apps Script.**

# Tools & Services Used
Glide (Frontend for user interactions)

Google Sheets (Stores questions and answers)

Google Apps Script (Forms + media upload handling)

OpenAI (Embeddings + GPT-4 to rank and generate answers)

Supabase (Optional for image hosting)

n8n (Automation logic and backend glue)

# Workflow Overview
## This automation performs the following steps:

Trigger: Webhook receives a user question from a Glide frontend.

Fetch Data: Retrieves Q&A entries (and optionally, image URLs) from a connected Google Sheet.

Rank Relevance:

OpenAI Embeddings rank the relevance of stored questions to the new input.

Top matches are passed to a GPT-4 prompt for answer generation.

Generate Answer:

GPT-4 creates a contextual answer using the best match.

Optional: Includes media URL if attached to the matched answer.

Response: Sends the formatted answer back to Glide frontend (text + optional image).

# Prerequisites
## Active accounts and API keys for:

OpenAI (API key with GPT-4 and embedding access)

Google Sheets (linked via Service Account or OAuth2 credentials)

Glide App (with a form to submit questions)

Supabase (optional, if hosting user-uploaded media)

n8n Self-hosted (for community nodes and webhook access)

# How to Use This Template
## Step 1: Import the Template
Upload the provided JSON into your self-hosted n8n instance.

Requires installation of the Community Node: @n8n/n8n-nodes-openai-embeddings

## Step 2: Configure Credentials
Webhook Trigger: Replace the Glide webhook URL with your actual endpoint from your app.

Google Sheets Node: Set the spreadsheet ID and worksheet name to fetch your Q&A dataset.

OpenAI Nodes:

Insert your OpenAI API key.

Confirm that both text-embedding-ada-002 (or similar) and gpt-4 are available.

Supabase or Apps Script (Optional): Ensure image links are correctly formed in the Sheet.

## Step 3: Customize Prompts and Thresholds
Update the OpenAI ranking prompt or similarity threshold in the Function or Code node.

Tailor GPT-4 prompts to return concise or detailed answers based on your use case.

# Initial Test Run
Simulate a Question:
Trigger the Glide form with a sample question.

Check n8n logs for:

Matching score/ranking success

Correct retrieval from Sheets

GPT-4 answer generation

Image URL handling (if enabled)

# Production Prep
Add error-handling nodes for cases when Sheets are empty or GPT-4 fails.

Set up logging via Google Sheets, Supabase, or external database.

Rate-limit or debounce requests from Glide if needed.

# Use Cases
Customer Support Portals: Offer instant Q&A with your business data.

Internal Knowledgebase: Employees can query training manuals and SOPs.

AI Concierge: Combine structured answers with friendly tone for guest interactions.

# Disclaimer

Validate Glide form inputs before full deployment.

Ensure your OpenAI and Google Sheets usage stays within quota limits.

## 🔗 Nodes Used

HTTP Request, Webhook, Google Drive, Google Calendar, AI Agent, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
