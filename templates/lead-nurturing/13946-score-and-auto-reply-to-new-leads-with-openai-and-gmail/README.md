# 💬 Score and auto-reply to new leads with OpenAI and Gmail

> ⚡ **83 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

**++Who is this for++**
Small business owners, freelancers, and agencies who receive inbound leads through a web form and want instant, personalized follow-up — without manually reading every submission.

**++What it does++**
When someone fills out your lead intake form, this workflow instantly:

Scores the lead 1-100 using OpenAI based on budget, project fit, and clarity
Classifies them as Hot, Warm, or Cold
Sends a personalized email reply that references what they actually wrote
Logs everything to Google Sheets with the score and AI reasoning
Hot leads get an enthusiastic reply with a calendar booking link. Warm leads get a helpful response with suggested next steps. Cold leads get a polite acknowledgment. Every lead gets a response within seconds.

**++How to set up++**
Fill in the "Configure Your Settings" node with your business name, email, calendar link, and description
Connect your Gmail and Google Sheets credentials
Add your OpenAI API key
Create a Google Sheet with the column headers listed in the workflow's sticky notes
Paste your Sheet URL into the "Log Lead with Score" node
Activate the workflow and share the form URL
Requirements
n8n account (cloud or self-hosted)
OpenAI API key
Gmail account (OAuth2)
Google Sheets (one blank sheet)
How to customize
Edit the OpenAI system prompt to adjust scoring criteria for your industry
Modify the tier thresholds (currently Hot 70+, Warm 40-69, Cold 0-39)
Customize the email tone by editing each Gmail node
Add or remove form fields to match your intake need

## 🔗 Nodes Used

Google Sheets, Gmail, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
