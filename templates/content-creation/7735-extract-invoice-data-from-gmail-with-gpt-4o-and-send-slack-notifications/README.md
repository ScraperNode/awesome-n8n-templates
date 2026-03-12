# 🎬 Extract invoice data from Gmail with GPT-4o and send Slack notifications

> ⚡ **287 views** · 🎬 [Content Creation & Video](../)

## Description

## Who is this for?

This workflow is ideal for freelancers, accountants, and finance teams who receive invoices in Gmail and want to automate their tracking process with AI.

If your inbox fills up with invoice-related messages and you want to automate how they’re handled, this AI-powered solution is for you.

## What does it solve?

- Automatically detects and processes invoices from your Gmail inbox.
- Uses OpenAI GPT-4o to extract payment amount, due date, subject line, and sender details.
- Sends real-time Slack notifications so you never miss a payment.
- Eliminates manual sorting of invoice-related emails.
- Great for improving productivity and ensuring timely payment tracking.

## How it works

- Every hour, the workflow checks for unread emails in your Gmail inbox.
- It sends the email content to OpenAI to determine if it's invoice-related email. 
- If it is:
  - It extracts key fields like due date, amount due, subject, and sender.
  - Then sends a Slack message with these details.
- If it's not invoice-related, it simply ignores the email.

## How to setup?

1. **Connect these accounts:**
   - Gmail using OAuth2
   - Slack using OAuth2
   - OpenAI (API Key under credentials)

2. **Customize the Slack message (optional):**
   - In the Slack node, you can modify the text to show more fields or personalize the formatting.

3. **Adjust the schedule:**
   - By default, the workflow runs hourly. You can change the frequency in the **Schedule Trigger** node.

4. **Modify the AI logic (optional):**
   - Update the AI Agent prompt to detect additional types like receipts or payment confirmations.


### How to customize this workflow to your needs

- **Notify a Slack channel instead of a user:** Just switch the recipient in the Slack node.
- **Add labels in Gmail:** Add nodes to label or archive invoice emails once detected.
- **Expand detection:** Modify the AI prompt to detect other financial or transactional emails.

## 🔗 Nodes Used

Slack, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
