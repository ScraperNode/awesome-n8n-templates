# 🎫 Automate email filtering & AI summarization. 100% free & effective, works 7/24

> ⚡ **34,899 views** · 🎫 [Ticket Management & Triage](../)

## Description

![dddss.png](fileId:1796)
## Good to know:
This workflow automatically processes incoming emails (you can filter them base on your needs) and creates concise AI-powered summaries, then logs them to a Google Sheets spreadsheet for easy tracking and analysis.

## Who is this for?

➖Business professionals who receive many emails and need quick summaries
➖Customer service teams tracking email communications
➖Project managers monitoring email correspondence
➖Anyone who wants to automatically organize and summarize their email communications

## What problem is this workflow solving?

This workflow solves the problem of email overload by automatically reading incoming emails, generating concise summaries using AI, and organizing them in a structured format. It eliminates the need to manually read through every email to understand the key points and maintains a searchable record of communications.

## What this workflow does:

✅Monitors your Gmail inbox for new emails
✅Filters emails based on specific criteria (sender validation)
✅Extracts key information (sender, date, subject, content)
✅Uses AI to generate concise summaries of email content
✅Automatically logs all data including the AI summary to a Google Sheets spreadsheet

## How it works:

1️⃣Gmail trigger monitors for new emails at specified intervals
2️⃣Email data is processed and formatted using JavaScript
3️⃣A conditional check validates the sender
4️⃣AI agent (powered by Groq's language model) reads the email content and generates a summary
5️⃣All information is automatically appended to a Google Sheets document

## How to use:

Set up Gmail OAuth2 credentials in n8n
Configure Google Sheets OAuth2 credentials
Set up Groq API credentials for AI processing
Create a Google Sheets document and update the document ID
Customize the sender validation criteria as needed
Activate the workflow

## Requirements:

✅n8n instance (cloud or self-hosted)
✅Gmail account with OAuth2 access
✅Google Sheets account
✅AI API
✅Basic understanding of n8n workflow

## Customizing this workflow:

🟢Modify the Gmail trigger filters to target specific labels or criteria
🟢Adjust the sender validation logic in the conditional node
🟢Customize the AI prompt to change summary style or focus
🟢Add additional data fields to the Google Sheets output
🟢Change the polling frequency for checking new emails
🟢Switch to different AI models by replacing the Groq node

## 🔗 Nodes Used

Google Sheets, Gmail Trigger, AI Agent, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
