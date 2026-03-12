# 🎫 Classify and auto-reply to emails with Outlook and GPT-4

> ⚡ **908 views** · 🎫 [Ticket Management & Triage](../)

## Description

Who's it for
Professionals and teams managing high email volumes who need automatic email triage and responses.
What it does
This workflow monitors your Outlook inbox and uses AI to classify emails into three urgency levels: Urgent, Important, or Not Important. It automatically generates personalized replies and organizes emails into folders.
How it works
New emails trigger AI classification based on urgency and deadlines. The system then generates an appropriate reply using GPT-4 and moves the email to the corresponding folder.
Requirements

Microsoft Outlook account with API access
OpenAI API key (GPT-4 access)
Three Outlook folders: URGENT, Important, Not Important

Setup
Connect your Outlook credentials, add your OpenAI API key to all Chat Model nodes, update folder IDs in the Move nodes, and customize the AI prompts to match your tone.
Customization
Adjust classification criteria, modify reply tone and style, add more categories, or integrate with other tools like Slack or CRM systems.

## 🔗 Nodes Used

Microsoft Outlook, AI Agent, OpenAI Chat Model, Microsoft Outlook Trigger, Text Classifier

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
