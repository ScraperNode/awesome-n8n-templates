# 💬 Draft and send AI customer support email replies with Gmail and Google Sheets

> ⚡ **307 views** · 💬 [Support Chatbots](../)

## Description

## How it works
1. Gmail is monitored every minute for new incoming emails
2. Automated and irrelevant emails are filtered out (newsletters, noreply senders, out-of-office replies, bounce notifications)
3. AI reads the email and drafts a reply based on your company documentation - embedded directly in the system prompt, no vector database needed
4. The original email and the draft reply are logged to a Google Sheet for human review
5. Type "send" in the Send column to approve a reply - the workflow detects it and sends it via Gmail
6. The row is updated to "Replied" to prevent duplicate sends

## Set up steps
1. Connect your **Gmail**, **OpenRouter**, and **Google Sheets** credentials (~5 min)
2. Create a Google Sheet with columns: Message ID, From, Subject, Body, Reply, Send
3. In the **Draft AI Reply** node, replace the sample company documentation in the system prompt with your own
4. In the **Filter Unwanted Emails** node, update the first condition with your own email address
5. Activate the workflow

## 🔗 Nodes Used

Google Sheets, Gmail, Gmail Trigger, Schedule Trigger, Basic LLM Chain, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
