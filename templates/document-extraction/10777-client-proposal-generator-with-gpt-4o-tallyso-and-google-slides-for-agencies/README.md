# 🔬 Client proposal generator with GPT-4o, Tally.so, and Google Slides for agencies

> ⚡ **363 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow uses Tally.so to collect client input that you input yourself during the meeting or after from a simple form and send that data to n8n via an API webhook. Once received, n8n processes the information and uses OpenAI to expand on the provided details transforming the short client notes into a complete, well-structured proposal.

After generating the proposal, the workflow automatically:

Drafts a professional follow-up email using the generated proposal details.

Prepares the email inside Gmail, ready for your review and final send.

This creates a fast, automated process turning raw meeting notes into a polished, client-ready deliverable within minutes.

## 🔗 Nodes Used

Webhook, Google Drive, Gmail, Google Slides, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
