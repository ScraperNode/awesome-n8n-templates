# 🎯 Declutter Gmail: archive inactive emails with GPT-4 classification

> ⚡ **453 views** · 🎯 [AI Summarization & Classification](../)

## Description

## Who is this for?

This workflow is for professionals, entrepreneurs, or anyone overwhelmed by a cluttered Gmail inbox. If you want to automatically archive low-priority emails using AI, this is the perfect hands-free solution.

## What does it solve?

Your inbox fills up with old, read emails that no longer need your attention but manually archiving them takes time. This workflow uses AI to scan and intelligently decide whether each email should be archived, needs a reply, or is spam. It helps you:

- Declutter your Gmail inbox automatically
- Identify important vs. unimportant emails
- Save time with smart email triage

## How it works

1. A scheduled trigger runs the workflow (you set how often).
2. It fetches all **read emails older than 45 days** from Gmail.
3. Each email is passed to an AI model(GPT-4) that classifies it as:
   - **Actionable**
   - **Archive**
4. If the AI recommends **archiving**, the workflow archives the email from your inbox.
5. All other emails are left untouched so you can review them as needed.

## How to set up?

1. Connect your **Gmail (OAuth2)** and **OpenAI API** credentials.
2. Open the "Schedule Trigger" node and choose how often the workflow should run (e.g., daily, weekly).
3. Optionally adjust the Gmail filter in the “List Old Emails” node to change which emails are targeted.
4. Start the workflow and let AI clean up your inbox automatically.

## How to customize this workflow to your needs

- **Change the Gmail filter**: Edit the query in the Gmail node to include other conditions (e.g., `older_than:30d`, specific labels, unread only).
- **Update the AI prompt**: Modify the prompt in the Function node to detect more nuanced categories like “Meeting Invite” or “Newsletter.”
- **Adjust schedule frequency**: Change how often the cleanup runs (e.g., hourly, daily).

## 🔗 Nodes Used

Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
