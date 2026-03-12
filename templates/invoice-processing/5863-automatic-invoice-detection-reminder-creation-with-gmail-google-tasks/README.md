# 🧾 Automatic invoice detection & reminder creation with Gmail & Google Tasks

> ⚡ **1,818 views** · 🧾 [Invoice Processing](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## Who is this for?

This workflow is for anyone who receives invoices by email and wants to stay on top of payment deadlines without manual tracking. 

## What problem is this workflow solving?

Invoices often get buried in your inbox. This workflow uses AI to find them, extracts key details, and adds a task to remind you to pay before it’s overdue.

No more missed payments. No more manual tracking.


## How it works?

1. This workflow is triggered on a schedule (By default, every hour).
2. It checks your Gmail inbox for unread messages.
3. Each email is passed to an AI agent (using OpenAI), which decides whether it’s an invoice.
4. If an invoice is found:
	- A task is created in your Google Tasks with the payment reminder and due date.
	- The email is labeled (for tracking) and marked as read.
5. If not an invoice:
	- The email is skipped (no action taken).

## How to set up?
1. **Connect these services** in your n8n credentials:
   - Gmail (OAuth2)
   - OpenAI
   - Google Tasks

2. **Create Gmail label**  
   Go to Gmail and create a label named `Invoice`. This label will be applied to processed invoice emails.

3. **Choose your Google Task list**  
   In the task creation node, select the correct task list for your reminders.

4. **Set the schedule**  
   In the Schedule Trigger node, choose how often it should check your inbox.

## How to customize this workflow to your needs?

- **Change the Gmail label**  
  Update the label applied to emails after they are processed.

- **Edit the AI prompt**  
  Adjust the system prompt in the OpenAI node if your invoices follow a unique format.

- **Update the task format**  
  Modify the task title and notes to suit how you like your reminders to look.

- **Adjust the schedule**  
  Run it more or less frequently based on how many invoices you receive.

## 🔗 Nodes Used

Google Tasks, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
