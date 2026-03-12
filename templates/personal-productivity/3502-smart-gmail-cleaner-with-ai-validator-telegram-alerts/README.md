# ⚡ Smart Gmail cleaner with AI validator & Telegram alerts

> ⚡ **3,058 views** · ⚡ [Personal Productivity](../)

## Description

Automatically clean up your Gmail inbox by deleting unwanted emails, validated by Gemini AI.  
Ideal for anyone tired of manual inbox cleanup, this workflow helps you save time while staying in control, with full transparency via Telegram alerts.

## How it works

- Scans Gmail inbox in adjustable 2-week batches  
- Uses Gemini AI to decide if an email should be deleted or skipped  
- Applies a label to skipped emails to avoid rechecking in future runs  
- Deletes unwanted emails and sends a Telegram message with the **AI's reasoning**  
- Also notifies on skipped emails, with explanation included  

## Set up steps

1. Connect your Gmail, Gemini AI, and Telegram accounts  
2. Adjust the AI baseline to control sensitivity (e.g. how strict the filtering should be)  
3. Set your batch range (default: last 2 weeks, adjustable)  
4. Define your Telegram chat/channel for notifications

---

**Note:** Thanks to n8n's modular design, you can easily switch Gemini for another AI model (like OpenAI, Claude, etc.) or replace Telegram with Discord, Slack, or even email, no code changes needed, just swap the nodes.

## 🔗 Nodes Used

Telegram, Gmail, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
