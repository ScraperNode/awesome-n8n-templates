# 🎯 Automate Gmail lead follow-up with OpenAI GPT-4O, HubSpot, Slack & Google Sheets

> ⚡ **167 views** · 🎯 [AI Summarization & Classification](../)

## Description

## How it works

This workflow automates the handling of new lead responses received in Gmail. It captures emails with a specific label, analyzes the message using AI to determine sentiment, intent, urgency, next action, and priority, and then decides whether follow-up is needed. If required, it creates tasks in HubSpot, notifies the sales team via Slack, and logs all details into Google Sheets for tracking.

## Step-by-step
**Trigger on New Lead Email**

- Workflow starts whenever a new email with a defined Gmail label arrives.

- Captures the sender’s email, subject, message snippet, and timestamp.

**Normalize Email Data**

- Standardizes Gmail fields into structured values:

  - leadEmail (sender’s address)

  - subject (email subject)

  - message (email content snippet)

  - source (Gmail)

  - receivedAt (timestamp)

**AI-Powered Lead Analysis**

- Uses OpenAI to analyze the lead’s message.

- Extracts:

  - Sentiment (Positive / Neutral / Negative)

  - Intent (Interested, Not Interested, Needs Info, Ready to Buy, Objection)

  - Urgency (High / Medium / Low)

  - Next Action (Call, Email, Demo, Quote, No Action)

  - Summary (1–2 sentence description)

  - Priority (Hot / Warm / Cold)

- Parsed results are merged with the original email data.

- Flags are added:

  - needsFollowUp (true/false)

  - isHighPriority (true/false)

**Decision: Needs Follow-Up?**

- If AI suggests a follow-up action, the workflow continues.

- Otherwise, the process stops here.

**Create HubSpot Task**

- Automatically creates a HubSpot CRM task for the sales team.

- Task includes email subject, body, and lead details.

**Notify Sales Team on Slack**

- Sends a formatted message to Slack with key lead insights:

  - Summary
 
  - Lead email

  - Priority

  - Urgency

  - Date of analysis

**Log Lead Data to Google Sheets**

- Appends structured data to Google Sheets for record-keeping.

- Stores all fields: Email, Date, Subject, Message, Sentiment, Intent, Urgency, Next Action, Summary, and Priority.

## Why use this?

- Automates lead triage directly from Gmail.

- Saves time by using AI-powered analysis instead of manual review. 
- Ensures no potential lead is missed by logging into Google Sheets.

- Provides instant sales team alerts on high-priority leads.

- Integrates seamlessly with HubSpot CRM for structured follow-up.

- Keeps your sales pipeline efficient, organized, and proactive.

## 🔗 Nodes Used

Google Sheets, Slack, HubSpot, Gmail Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
