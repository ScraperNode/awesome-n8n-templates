# ⚡ Send emails via Gmail from Obsidian

> ⚡ **3,638 views** · ⚡ [Personal Productivity](../)

## Description

## How it Works
- This n8n template makes it possible to send emails directly from your Obsidian notes. 
- It leverages the power of the [Obsidian Post Webhook plugin](https://github.com/Masterb1234/obsidian-post-webhook/), allowing seamless integration between your notes and the email workflow. 

## What it does:
- Receives note content and metadata from Obsidian via a Webhook.
- Parses YAML frontmatter to define email recipients, subject, and more.
- Automatically processes attachments, encoding them into an email-friendly format.
- Sends emails via Gmail and confirms the status back to Obsidian.
- Includes a testing feature to verify everything works before going live.

## Set-up Steps
- Webhook Configuration: Set your n8n POST Webhook URL in the Obsidian [Obsidian Post Webhook plugin](https://github.com/Masterb1234/obsidian-post-webhook/) settings.
- Email Integration: Submit the Gmail credentials in n8n email nodes.
- Test the Workflow: Run a test from Obsidian to ensure the template functions correctly.
- Activate and Enjoy: Start sending customized emails with attachments from your notes in no time!

## 🔗 Nodes Used

Webhook, Gmail, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
