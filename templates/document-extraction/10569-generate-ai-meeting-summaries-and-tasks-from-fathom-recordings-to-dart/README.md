# 🔬 Generate AI meeting summaries and tasks from Fathom recordings to Dart

> ⚡ **394 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Automatically generate a meeting summary from your meetings through Fathom, save it to a Dart document, and create a review task with the Fathom link attached.

## What it does
This workflow activates when a Fathom meeting ends (via a webhook). It uses an AI model to generate a structured summary of the meeting. The workflow then:

## Who’s it for

* Teams or individuals needing automatic meeting notes.
* Project managers tracking reviews and actions from meetings.
* Users of Fathom and Dart who want to streamline their documentation and follow-up process.

## How to set up
1.  Import the workflow into n8n.
2.  Connect your Dart account (it will need workspace and folder access).
3.  Add your PROD webhook link from the webhook node to your Fathom API settings.
4.  Replace the dummy Folder ID and Dartboard ID with your actual target IDs.
5.  Choose your preferred AI model for generating the summaries.

## Requirements
* n8n account
* Connected Dart account
* Connected Fathom account (with access to API webhooks)

## How to customize the workflow
* Edit the AI prompt to adjust the tone, style, or format of the meeting summaries.
* Add, remove, or change the summary sections to match your needs (e.g., Key Takeaways, Action Items, Next Items).

## 🔗 Nodes Used

Webhook, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
