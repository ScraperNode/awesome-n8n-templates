# ⚡ Summarize Gmail emails with Gemini and send an HTML action digest

> ⚡ **81 views** · ⚡ [Personal Productivity](../)

## Description

## Who’s it for
This template is for anyone who wants a quick, structured inbox review (founders, freelancers, support, operations) without reading every email.

## What it does
Every 12 hours, the workflow checks Gmail for emails received in the last 12 hours, then summarizes each email and extracts the next action plus a priority level (high/normal/low). It generates a direct Gmail “Open message” link for each item (using `rfc822msgid`) and sends one clean HTML digest email. If there are no new emails, it sends a short “No new emails” message instead.

## How to set up
1) Connect your Gmail OAuth2 credentials in these nodes: **Fetch Emails**, **Send Summary**, **No Emails**.  
2) Connect your Gemini credentials in **Google Gemini Chat Model**.  
3) Update the recipient email in **Send Summary** and **No Emails** (`sendTo`), or replace it with a single variable in a Config/Set node.  
4) Click **Test workflow** once, then activate the workflow.

## Requirements
- Gmail account + Gmail OAuth2 credentials in n8n.  
- Google Gemini API access.

## Recommended model
Use **Gemini 2.5 Flash** for fast, reliable structured output. If the model is not available in your region/account, select the closest available Gemini model.

## How to customize the workflow
- Change the lookback window (12 hours → 24 hours, etc.) by editing the Date/Time calculation.  
- Adjust the AI prompt rules (priority criteria, action wording, output fields).  
- Modify the HTML digest design to match your branding.  
- Remove or change the Inbox-only filter if you want to include other labels (Sent/Other).

## 🔗 Nodes Used

Gmail, Schedule Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
