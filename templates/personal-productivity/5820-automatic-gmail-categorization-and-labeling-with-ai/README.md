# ⚡ Automatic Gmail categorization and labeling with AI

> ⚡ **6,113 views** · ⚡ [Personal Productivity](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## Who is this for?

If your inbox is full of unread emails, this workflow is for you.  
Instead of reading through them one by one, let AI do the sorting.  
It reads your emails and flags only what needs action.

## What does it solve?

This workflow reads your unread Gmail emails and uses AI to decide what’s important — and what’s not.
It labels emails that need your attention, identifies receipts, and trashes everything else.
No more manual reading. Just an inbox that uses AI to take care of itself.

## How it works

1. Every hour, the workflow runs automatically.
2. It searches for unread emails in your Gmail inbox.
3. For each email:
   - It extracts the content and sends it to OpenAI.
4. The AI returns one of four labels: `Action`, `Receipt`, `Informational` or `Spam`.
5. Based on the label:
   - Emails are marked with the appropriate label.
   - Or moved to trash it is `spam`.
6. It marks the email as read once processed.

## How to set up?

1. Connect these services in your n8n credentials:
   - Gmail (OAuth2)
   - OpenAI (API key)
2. Create the Gmail labels:
   - In your Gmail account, create these labels exactly as written:  
     `Action`, `Receipt`, and `Informational`  
   - The workflow will apply these labels based on AI classification.

## How to customize this workflow to your needs

- Change the AI prompt to detect more types of emails like `Meeting` or `Newsletter`.
- Add more branches to the Switch node to apply custom logic.
- Change the schedule to fit your workflow.
By default, it runs every hour, but you can update this in the Schedule Trigger node.

## 🔗 Nodes Used

Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
