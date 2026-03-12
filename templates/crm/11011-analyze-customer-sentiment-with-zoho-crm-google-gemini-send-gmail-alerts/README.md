# 🤝 Analyze customer sentiment with Zoho CRM, Google Gemini & send Gmail alerts

> ⚡ **105 views** · 🤝 [CRM & Sales Operations](../)

## Description

# Zoho CRM → AI Sentiment Analysis for customer interactions & Automatic Alerts Workflow

This workflow analyzes newly created Notes (in Any module) in Zoho CRM, detects customer sentiment using an AI model, updates the related CRM record with custom fields - sentiment label and score, and sends an instant alert whenever negative sentiment is detected. It runs on a scheduled interval and gives teams real-time visibility into customer emotions and potential risks.

### Quick Implementation Steps
1. Connect Zoho CRM OAuth2 credentials 
2. Add custom fields in Zoho CRM: `Sentiment_Label` and `Sentiment_Score` 
3. Add AI provider credentials 
4. Set Gmail alert recipient 
5. Activate workflow and test by adding a Note 

## What It Does
This workflow automatically monitors Zoho CRM Notes. When a new Note is detected, the text is extracted and analyzed through an AI-powered sentiment model. The AI classifies the text as Positive, Neutral or Negative and produces a numeric sentiment score.

The workflow updates the related CRM module with these values. If the sentiment is negative, a Gmail alert is triggered so your team can follow up quickly. This automation helps organizations maintain high customer satisfaction and detect potential issues early.

## Who’s It For
- Support teams 
- Sales teams 
- CRM administrators 
- Customer success managers 
- Businesses needing automated customer sentiment tracking 

## Requirements
- n8n instance 
- Zoho CRM OAuth2 credentials 
- Gmail OAuth2 credentials 
- AI provider key 
- Custom fields in Zoho CRM: Sentiment_Label & Sentiment_Score (if you are using different field name then do changes in workflow accoredingly)

## How It Works & Setup

### Step 1: Schedule Trigger
Runs periodically to check for new or updated Notes.

### Step 2: Fetch Latest Note
Retrieves the most recently modified Note.

### Step 3: Extract Details
Extracts Note text, note_id, parent_id and module name.

### Step 4: AI Sentiment Analysis
Sends text to the AI (via LangChain chain) for sentiment classification.

### Step 5: Conditional Branching
- If Negative: Send Gmail alert and update CRM 
- Otherwise: Just update CRM 

### Step 6: Update CRM
Writes sentiment data back into the related parent record.

## How to Customize Nodes
- Adjust sentiment output by modifying the AI prompt.
- Change field mappings in Zoho update nodes.
- Customize the Gmail alert message.
- Adjust Schedule Trigger frequency.
- Add additional metadata (e.g., emotion tags).

## Add‑Ons
- Slack/Teams alerts for negative sentiment. 
- Historical sentiment logging.
- Weekly sentiment reports.
- Auto-task creation for negative interactions.
- Priority-based escalation logic.

## Use Case Examples
1. Detect unhappy customers in support interactions.
2. Monitor sentiment across sales conversations.
3. Escalate negative feedback automatically.
4. Quality assurance tracking for customer interactions.
5. Early detection of churn indicators.

## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|------|----------------|----------|
| Sentiment not updating | Missing Zoho fields | Add custom fields in CRM |
| Note not detected | Fetching only latest note | Increase frequency or widen fetch scope |
| AI output invalid | Prompt mismatch | Update prompt and parser |
| Alerts not sending | Gmail OAuth expired | Reconnect Gmail |
| Incorrect sentiment | Weak prompt instructions | Refine prompt wording |

## Need Help?

[WeblineIndia](https://n8n.io/creators/weblineindia/) can help you configure, customize and extend workflows like this. 

We specialize in: 
- n8n automation
- CRM integrations
- AI/LLM-powered workflows
- Zoho CRM customization

Reach out if you'd like assistance building or enhancing similar [n8n automation solutions](https://www.weblineindia.com/n8n-automation/).

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger, Basic LLM Chain, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
