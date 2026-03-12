# 🔬 Create AI meeting summaries with Fireflies transcripts & Dart tasks using Gemini

> ⚡ **129 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Automatically generate a meeting summary from your meetings through Fireflies.ai, save it to a Dart document, and create a review task with the meeting link attached.

## What it does

This workflow activates when a Fireflies.ai meeting is processed (via a webhook). It retrieves the meeting transcript via the FirefliesAI transcript node and uses an AI model to generate a structured summary.

## Who’s it for

* Teams or individuals needing automatic meeting notes.
* Project managers tracking reviews and actions from meetings.
* Users of Fireflies.ai and Dart who want to streamline their documentation and follow-up process.

## How to set up

* Import the workflow into n8n.
* Connect your Dart account (it will need workspace and folder access).
* Add your PROD webhook link from the webhook node to your Fireflies.ai API settings.
* Add your Fireflies.ai API key on the Fireflies Transcript node.
* Replace the dummy Folder ID and Dartboard ID with your actual target IDs.
* Choose your preferred AI model for generating the summaries.

## Requirements

* n8n account
* Connected Dart account
* Connected Fireflies.ai account (with access to API key and webhooks)

## How to customize the workflow

* Edit the AI prompt to adjust the tone, style, or format of the meeting summaries.
* Add, remove, or change the summary sections to match your needs (e.g., Key takeaways, Action Items, Summary).

## 🔗 Nodes Used

Webhook, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
