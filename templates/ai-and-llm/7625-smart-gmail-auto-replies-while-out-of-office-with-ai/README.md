# ✨ Smart Gmail auto-replies while out of office with AI

> ⚡ **482 views** · ✨ [AI & LLMs](../)

## Description

### Who is this for?

If you're going on vacation or away from work and want your Gmail to respond to emails intelligently while you're out, this workflow is for you.

It's perfect for freelancers, professionals, and teams who want a smarter, more personal out-of-office reply powered by AI.

### What does it solve?

No more generic autoresponders or missing urgent emails.

This AI-powered workflow:
- Writes short, polite, and personalized replies while you're away.
- Skips replying to newsletters, bots, or spam.
- Helps senders move forward by offering an alternate contact.
- Works around your specific time zone and schedule.

### How it works

1. The workflow runs on a schedule (e.g., every 15 minutes).
2. It checks if you are currently out of office (based on your defined start and end dates).
3. If you are, it looks for unread Gmail messages.
4. For each email:
   - It uses AI to decide if a reply is needed.
   - If yes, it generates a short, friendly out-of-office reply using your settings.
   - It sends the reply and labels the email to avoid duplicate replies.

### How to setup?

1. In the **Set node**:
   - Define your out-of-office start and end times in ISO 8601 format (e.g., `2025-08-19T07:00:00+02:00`).
   - Set your timezone (e.g., `Europe/Madrid`).
   - Add your backup contact's name and email.

2. In the **Gmail nodes**:
   - Connect your Gmail account using OAuth2 credentials.
   - Replace the label ID in the final Gmail node with your own label (e.g., "Auto-Replied").

3. In the **Schedule Trigger node**:
   - Set how often the workflow should check for new emails (e.g., every 15 minutes).

### How to customize this workflow to your needs

- Adjust the prompt in the AI Agent node to change tone or add more rules.
- Switch to a different timezone or update the return dates as needed.


This workflow ensures you stay professional, even while you're offline and saves you from coming back to an email mess.

## 🔗 Nodes Used

Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
