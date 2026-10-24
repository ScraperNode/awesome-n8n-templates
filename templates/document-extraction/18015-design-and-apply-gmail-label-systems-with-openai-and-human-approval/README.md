# 🔬 Design and apply Gmail label systems with OpenAI and human approval

> ⚡ **48 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow samples recent Gmail inbox emails, uses OpenAI to propose a tailored Gmail label system, and requires human approval before creating labels and classifying messages, then applies the chosen label to each email and marks it with an AI_Reviewed label to avoid reprocessing.

## How it works
1. Starts from an n8n Form where you choose a sample size and Gmail search window.
2. Fetches a sample of Gmail inbox messages matching the search window and compacts sender, subject, snippet, and existing labels for analysis.
3. Sends the inbox sample to OpenAI to generate a proposed set of Gmail labels with purposes and routing rules.
4. Displays the proposal in a review form where you approve or reject (and optionally edit) the list of label names to create.
5. If approved, creates the selected Gmail labels (ensuring a “Needs Review” label exists) and also creates an “AI_Reviewed” label for deduplication.
6. Retrieves inbox emails that are not yet marked AI_Reviewed, asks OpenAI to classify each email using only the approved labels, applies the selected label in Gmail, and then adds AI_Reviewed.
7. Shows a completion message with the number of emails labeled.

## Setup
1. Add a Gmail OAuth2 credential with permission to read messages and manage labels, and select it in all Gmail steps.
2. Add an OpenAI credential and select it in both OpenAI steps (label suggestion and per-email classification).
3. Enable n8n Forms, open the “Start setup form” URL, and use it to submit the sample size and search window.
4. (Optional) Adjust the Gmail search query and OpenAI prompts if you want different label naming conventions, fewer/more labels, or a different inbox scope.

## 🔗 Nodes Used

Gmail, n8n Form Trigger, OpenAI, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
