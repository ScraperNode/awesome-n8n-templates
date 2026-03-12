# 💬 Automate lead response with GPT and human approval to Airtable CRM

> ⚡ **153 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## AI-Assisted Lead Follow-Up With Human Approval

This workflow automates your lead response process from end to end. When someone submits your n8n Form, the workflow generates an AI-written follow-up email, sends that draft to your sales team for approval, and then sends the approved email to the lead or marks it as needing revision. All lead details, drafts, approval decisions, and timestamps are stored in Airtable.

### Ideal For

- Teams that want AI to draft emails while keeping a human approval step

- Businesses receiving inbound inquiries that need fast, consistent responses

- Users building a simple form → email → CRM workflow

- Teams that want a record of all drafts and approval outcomes

### What This Template Provides

- AI-generated follow-up email drafts

- Human approval flow, using Approve and Reject links

- Automatic Airtable logging of leads, drafts, and statuses

- Fully automated pipeline triggered by a simple form submission

## Setup Steps (5–10 minutes)
### Connect Your Credentials

- Gmail

- Airtable

- OpenAI

### Create Your Airtable Table

Use the following fields:

- Name
- Email
- Phone
- Company Name
- Message
- Status
- Email Draft
- Created On

### Add Your Airtable Base ID and Table ID

Insert them into the Workflow Configuration node.

### Enter Your Company Details

Add your:

- Name
- Title
- Company name
- Email
- Phone number
- Website
- Etc.

These values will appear in the final approved email sent to the lead.
### Set the Sales Approval Email

Specify the email address where draft approval requests should be sent.

### Deploy the Approval Webhook

Switch the Webhook node to the Production URL, and confirm that the Approve and Reject links point to it.

### Publish Your n8n Form

Submit a test lead to verify:

- AI draft generation

- Approval email delivery

- Airtable logging

- Final email sending

## Why Use This Template?

This workflow creates a reliable, semi-automated follow-up process that blends AI speed with human judgment. It ensures consistent communication, maintains accurate CRM records, and reduces manual work without requiring a full CRM platform.

## 🔗 Nodes Used

Airtable, Gmail, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
