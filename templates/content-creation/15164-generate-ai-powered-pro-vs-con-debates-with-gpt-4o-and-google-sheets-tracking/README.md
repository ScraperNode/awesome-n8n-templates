# 🎬 Generate AI-powered pro vs con debates with GPT-4o and Google Sheets tracking

> ⚡ **64 views** · 🎬 [Content Creation & Video](../)

## Description

This workflow automatically processes incoming debate topic requests, generates structured, evidence-backed Pro vs Con debates with balanced arguments, rebuttals, and final verdicts using AI, delivers them via email, and logs everything in Google Sheets.

### Who’s it for
• Students and debaters preparing arguments
• Content creators and podcasters
• Researchers and analysts needing balanced views
• Decision-makers and AI enthusiasts exploring topics

### How it works / What it does
1. Captures new debate requests (webhook or scheduled poll)
2. Validates the topic and prepares context
3. AI generates full structured debate (Pro/Con arguments with evidence, rebuttals, verdict)
4. Formats professional markdown output
5. Emails the complete debate to the requester
6. Logs topic, verdict summary, and generation details in Google Sheets

### How to set up
1. Import this workflow
2. Set up credentials (Webhook, Google Sheets, OpenAI/Anthropic)
3. Update default instructions and email sender
4. Activate workflow

### Requirements
• Webhook endpoint for topic submissions
• Google Sheets
• OpenAI / Anthropic / Grok API
• Clear debate topic input

### How to customize the workflow
• Modify AI prompt for depth, tone, or format in the AI node
• Adjust Python validation rules
• Update Google Sheet columns
• Change email templates or add Slack/Teams delivery

## 🔗 Nodes Used

HTTP Request, Webhook, Schedule Trigger, Filter, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
