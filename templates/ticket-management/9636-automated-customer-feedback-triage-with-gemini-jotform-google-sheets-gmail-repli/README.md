# 🎫 Automated customer feedback triage with Gemini, Jotform, Google Sheets & Gmail replies

> ⚡ **240 views** · 🎫 [Ticket Management & Triage](../)

## Description

# Who’s it for

Teams that collect product feedback with Jotform and want automated triage: instant alerts for urgent issues, knowledge-based replies to questions, and a clean backlog for suggestions. 


# How it works / What it does

New Jotform submissions are classified by Feedback Type (comments, questions, suggestions) and analyzed for sentiment. Angry or negative messages trigger a Telegram alert to your support channel. Questions are answered automatically using an agent that consults your internal Google Sheet “Q&A” database, then replies via Gmail with a styled HTML email. Suggestions are summarized, sent to a team chat, and appended to a Google Sheets backlog with name, email, summary, and date. All comments are logged to a structured sheet for reporting. 

# How to set up

- Connect your Jotform form and map fields (Name, E-mail, feedback text).

- Add credentials for Google Sheets, Gmail, Telegram, and LLM.

- Point the agent to your “Q&A” sheet/tab.

- Test each branch (comments, questions, suggestions) with sample entries. 

# Requirements

- Jotform account and live form

- n8n (self-hosted recommended if using community/LLM nodes)

- Google Sheets, Gmail, Telegram bot, and LLM API keys 


# How to customize the workflow

- Adjust sentiment thresholds or add new categories in the Switch node.

- Edit the Gmail HTML template and subject line.

- Change backlog columns or target sheets/tabs.

- Add rate-limits, SLA timers, or different alert channels.

- Best practice: rename all nodes, add a yellow Sticky Note with this description and per-step notes, and group user-config variables in a Set node. Remove any hard-coded IDs before sharing

## Knowledge base table
![Screenshot 20251014 202536.png](fileId:2944)

## Suggestions database
![Screenshot 20251014 202544.png](fileId:2943)

## Sentiment database
![Screenshot 20251014 202549.png](fileId:2942)

## 🔗 Nodes Used

Google Sheets, Telegram, Jotform Trigger, Gmail, AI Agent, Summarization Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
