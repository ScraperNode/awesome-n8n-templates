# ⚡ Daily auto-archive for Gmail messages

> ⚡ **2,752 views** · ⚡ [Personal Productivity](../)

## Description

## Who is this for?

Professionals, solopreneurs, or productivity enthusiasts who want to keep their Gmail inbox clean and organized without manual effort.

## What problem does this solve?

Manually archiving emails clutters your time and slows you down. This workflow automates inbox cleanup by removing the **"INBOX"** label from messages received over 24 hours ago. A perfect companion to AI-based labeling workflows, this keeps your inbox light and relevant.

## What this workflow does

- Triggers every day at **4 AM**
- Fetches Gmail messages from the **INBOX** that are **older than 24 hours**
- Processes them one by one using the **Split Out** node
- Removes the **INBOX** label, effectively archiving the messages

## Setup

1. Connect your Gmail account using OAuth2 credentials.
2. Customize the **Schedule Trigger** node to adjust the run time.
3. Modify the Gmail filter if you want to archive unread or labeled emails instead.



## How to customize this workflow to your needs

- Schedule different frequencies (e.g. twice a day or weekly).

## 🔄 Pairs Well With

This complements the [Intelligent Email Organization with AI-Powered Content Classification](https://n8n.io/workflows/4557-intelligent-email-organization-with-ai-powered-content-classification-for-gmail/) workflow.

Use that to **label emails smartly using AI**, and this one to **auto-archive** them for a clean, clutter-free inbox.

## 🔗 Nodes Used

Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
