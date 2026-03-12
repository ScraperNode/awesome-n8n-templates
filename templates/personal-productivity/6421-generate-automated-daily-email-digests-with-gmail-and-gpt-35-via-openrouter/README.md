# ⚡ Generate automated daily email digests with Gmail and GPT-3.5 via OpenRouter

> ⚡ **1,106 views** · ⚡ [Personal Productivity](../)

## Description

## AI-Powered Daily Gmail Digest Summary using LangChain & OpenRouter
This n8n template helps you automatically summarize your daily Gmail messages using OpenRouter's GPT model via LangChain. It generates a structured email digest highlighting key information, tasks, issues, and action items — all delivered to your inbox every morning.

## Who’s it for
- Busy professionals who want a quick overview of their daily emails
- Founders or managers needing to track team or client communication
- Anyone looking to automate inbox triage and reduce time spent on emails

## How it works / What it does
- This n8n workflow runs every morning at 7 AM, automatically:

1. Fetches emails from the last 24 hours
2. Collects important fields: sender, subject, and snippets
3. Feeds them into an AI-powered agent (OpenRouter + LangChain)
4. The AI:
    - Extracts key topics, tasks, deadlines, and issues
     - Formats the info clearly with a bullet-point summary
5. Sends the final summarized report to your inbox

## How to set up
1. Clone or import the workflow into your n8n instance
2. Replace &lt;Your Email ID&gt; in the Code node with your actual Gmail address (or remove if not needed)
3. Ensure your Gmail and OpenRouter credentials are set up in n8n
4. Update the recipient email in the Send Summary node if you want it sent to a fixed address
5. Activate the workflow once tested

## How to customize the workflow
- **Change Summary Style:** Edit the system message in the LangChain Agent to match your tone (e.g. casual, business, detailed)
- **Adjust Digest Time:** Change the Schedule Trigger to any preferred hour
- **Customize Recipients:** Change or add recipients dynamically or statically in the Gmail send node
- **Filter Email Type:** Modify the Gmail query in the Code node to include filters like from:, is:unread, subject:project

## 🔗 Nodes Used

Gmail, Schedule Trigger, AI Agent, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
