# 💬 Send candidate outcome emails and SMS and notify referrers with Airtable

> ⚡ **5 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

**How it works**

This workflow automates post-event and post-course communications for candidates, while also notifying referring partners at the correct milestones.

The workflow is triggered when Airtable updates timestamp fields related to Info Event Outcome or Course Outcome. Airtable controls when the workflow runs, and n8n controls what happens next. This separation avoids race conditions and keeps the system reliable.

After triggering, the workflow normalizes record data and determines exactly one action path using a centralized Code node. Based on the outcome, it sends the correct candidate email and SMS, and optionally notifies the referring person. Each message is sent only once using checkbox “sent” flags stored in Airtable.

**Setup steps**

Connect Airtable and select the table containing candidate records.

Ensure Airtable includes timestamp fields for Info Event Outcome and Course Outcome updates.

Ensure checkbox fields exist to track which messages have already been sent.

Connect your email provider (Brevo) and SMS provider.

Customize message content inside the Email and SMS nodes if needed.

Initial setup typically takes 15–20 minutes.

**When to use this template**

You need reliable post-event and post-course messaging

You want to notify referring partners automatically

You must prevent duplicate emails or SMS

## 🔗 Nodes Used

Airtable, HTTP Request, Airtable Trigger, Brevo

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
