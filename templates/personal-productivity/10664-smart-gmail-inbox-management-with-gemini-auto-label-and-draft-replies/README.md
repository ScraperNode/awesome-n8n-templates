# ⚡ Smart Gmail inbox management with Gemini: Auto-label and draft replies

> ⚡ **778 views** · ⚡ [Personal Productivity](../)

## Description

Keep your Gmail inbox organized and stress-free with this AI-powered workflow. Ideal for freelancers, small business owners, and productivity enthusiasts who receive a high volume of mixed emails. This template automatically sorts messages into predefined labels and drafts a professional reply when follow-up is needed.

## How it works

- Gmail Trigger starts the workflow whenever a new email arrives.
- AI Classifier (Gemini or compatible model) analyzes the message, checks your previous conversations and sent emails, and assigns the correct Gmail label.
- Smart rules ensure irrelevant messages are deleted or archived, while actionable ones are prepared for a response.
- AI Draft Node creates a concise, friendly, and professional draft reply — stored safely in your Gmail drafts folder (never auto-sent).
- Optional tools like CheckCalendar can suggest time slots for meetings automatically.

Together, these steps make your inbox work for you: sorting, prioritizing, and drafting responses.

## Set up steps

1. Connect your Gmail account and ensure your label categories already exist.
2. Connect your Gemini (or other AI) credentials.
3. (Optional) Enable CheckCalendar for scheduling suggestions.
4. Adjust the labeling rules and prompt text to match your personal or business workflow.

## Requirements

- Gemini account for LLM
- Google OAuth2 credentials

## 🔗 Nodes Used

Gmail, Gmail Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
