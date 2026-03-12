# 💬 Human in the loop email response system (AI + IMAP)

> ⚡ **2,016 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

How it works

This workflow automates the process of handling incoming emails by:

1. Receiving emails via IMAP.
2. Converting the email to Markdown for better AI understanding.
3. Summarizing the email using an AI model.
4. Drafting a professional reply with AI, based on the summary.
5. Requesting human approval for the AI-generated response.
6. Sending the approved reply back to the original sender.

---

Set up steps

Estimated time: 10–20 minutes (excluding credential setup)
What you’ll need:
- IMAP credentials for your email inbox
- SMTP credentials for sending emails
- OpenAI (or compatible) API key for AI steps

Setup outline:
1. Add your IMAP and SMTP credentials to the workflow.
2. Connect your OpenAI (or compatible) account for AI summarization and reply generation.
3. Deploy the workflow in n8n and activate it.
4. Test by sending an email to your connected inbox.

Note:
Detailed configuration tips and explanations are included as sticky notes inside the workflow for each step.

## 🔗 Nodes Used

Email Trigger (IMAP), Send Email, Markdown, AI Agent, Summarization Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
