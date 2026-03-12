# 🎯 Send AI-summarized unread email alerts to Slack using GPT-4o and Gmail

> ⚡ **356 views** · 🎯 [AI Summarization & Classification](../)

## Description

### Who is this for?
If you’re overwhelmed with incoming emails but only want to be notified about the essentials, this workflow is for you. Perfect for busy professionals who want a short AI summary of new emails delivered directly to Slack.

### What does it solve?
Reading every email wastes time. This workflow filters out the noise by:
- Automatically summarizing each unread Gmail email using AI
- Sending you just the sender and a short summary to Slack
- Helping you stay focused without missing key information

### How it works
- Every minute, the workflow checks Gmail for unread emails
- When it finds one, it:
  - Extracts the email content
  - Sends it to OpenAI’s GPT model for a 250-character summary
  - Delivers the message directly to Slack

### How to setup?
1. **Connect your accounts:**
   - Gmail (OAuth2)
   - OpenAI (API key or connected account)
   - Slack (OAuth2)
2. **Edit the Slack node:**
   - Choose the Slack user/channel to send alerts to
3. **Optional:** Adjust the AI prompt in the “AI Agent” node to modify the summary style
4. **Optional:** Change polling frequency in the Gmail Trigger node

### How to customize this workflow to your needs
- Edit the AI prompt to:
  - Highlight urgency
  - Include specific keywords
  - Extend or reduce summary length
- Modify the Slack message format (add emojis, tags, or links)

## 🔗 Nodes Used

Slack, Gmail, Gmail Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
