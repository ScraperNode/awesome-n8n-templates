# 🎫 Triage and route Gmail leads with Groq, Notion CRM, and Twilio calls

> ⚡ **5 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick Overview
This workflow checks unread Gmail messages every hour, uses Groq-hosted LLM prompts to triage importance and route emails to the right manager, then updates a Notion CRM database, forwards an assignment email via Gmail, and triggers a Twilio confirmation call via HTTP.

## How it works
1. Triggers every hour and pulls unread emails from Gmail.
2. Uses Groq (via LangChain) to classify each email as important or not based on the sender, subject, and snippet.
3. If the email is important, fetches member/manager records and existing company records from Notion.
4. Combines the email, manager list, and company list, then uses Groq (via LangChain) to match the email to an existing company or assign a new company and select an active manager.
5. If the status is "assigned," creates a new company record in the Notion Companies database with the selected manager and extracted company details.
6. Sends an assignment notification email to the selected manager through Gmail and then triggers a confirmation call using the Twilio Calls API over HTTP.

## Setup
1. Connect Gmail OAuth2 credentials for both the Gmail trigger (unread polling) and the Gmail send action.
2. Add Groq API credentials for the two LangChain LLM steps and adjust the prompts if you want different importance/routing rules.
3. Connect Notion API credentials and update the two Notion database IDs to point to your duplicated Members and Companies databases.
4. Configure the Twilio HTTP request with your Twilio Account SID in the URL, HTTP Basic Auth (Account SID and Auth Token), and set the To/From phone numbers and webhook URL used for the call.

## 🔗 Nodes Used

HTTP Request, Gmail, Notion, Gmail Trigger, Basic LLM Chain, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
