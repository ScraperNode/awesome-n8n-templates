# 🎫 Triage Gmail inbox, label emails, and draft replies with OpenAI

> ⚡ **38 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow watches for new unread Gmail messages, uses OpenAI to classify each email and draft a reply, then either creates a Gmail draft in the original thread and labels the message for follow-up, or files it by applying FYI/Noise labels.

## How it works
1. Triggers every minute when a new unread email arrives in Gmail.
2. Sends the email subject and snippet to OpenAI to return a category, a draft reply, and a flag indicating whether the sender is waiting for an answer.
3. If an answer is needed, creates a Gmail draft reply in the same thread addressed to the original sender.
4. Labels the original Gmail message as YouDecide when OpenAI classifies it as “du”, otherwise labels it as Drafted.
5. If no answer is needed, labels the original Gmail message as Noise when OpenAI classifies it as “werbung”, otherwise labels it as FYI.

## Setup
1. Connect your Gmail OAuth2 account and select the same credential in the Gmail trigger and all Gmail action steps.
2. Add your OpenAI API credentials and pick a model that can return JSON. The system message is already written - adjust the four category definitions if your inbox needs different buckets.
3. Create the four Gmail labels used by the workflow (YouDecide, Drafted, FYI, Noise) and update the label IDs in the labeling steps if they differ in your account.

## 🔗 Nodes Used

Gmail, Gmail Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
