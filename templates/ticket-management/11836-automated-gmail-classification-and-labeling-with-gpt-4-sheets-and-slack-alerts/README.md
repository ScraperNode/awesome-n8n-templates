# 🎫 Automated Gmail classification and labeling with GPT-4, Sheets and Slack alerts

> ⚡ **91 views** · 🎫 [Ticket Management & Triage](../)

## Description

## This n8n template automates email labeling using AI-enhanced classification and intelligent routing

Gmail users report spending significant time manually sorting email, so this tool helps alleviate that burden.

## How it works
- Gmail Trigger monitors unread emails every 2 minutes
- Once an email arrives, the content is extracted with HTML cleaning
- AI Agent (the node is set for Chat GPT-4) is used for classification & entity extraction
- A Structured Output Parser parses the email to JSON
- A 9-way category routing system categorizes the email (Inquiry, Support, Newsletter, Marketing, Personal, Urgent, Spam, Invoice, Meeting)
- Gmail auto-labeling is used for each category
- Google Sheets is used for logging (the main log that includes all emails and  an error log which are emails that cannot be classified)
- Slack alerts are generated for high-priority/urgent emails
- Error handling is done with separate error logging in Google Sheets

## How to use
- Set up credentials for Google Gmail, LLM (ChatGPT, Gemini, etc.), Google Sheets, and Slack
- Modify the categories as needed per user preference

## Requirements
- Gmail 
- Any LLM like ChatGPT or Google Gemini
- Google Drive with Google Sheets is optional for logging and error handling
- Slack is optional for high-priority messages

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Gmail Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
