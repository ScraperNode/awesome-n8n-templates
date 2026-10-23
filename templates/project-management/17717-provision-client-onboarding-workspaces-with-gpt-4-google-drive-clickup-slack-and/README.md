# 📋 Provision client onboarding workspaces with GPT-4, Google Drive, ClickUp, Slack and Gmail

> ⚡ **1 views** · 📋 [Project Management](../)

## Description

## Quick overview
This workflow captures a new client onboarding form submission with a proposal PDF, extracts key text, creates a Google Drive folder and a ClickUp folder/list, uses OpenAI to generate onboarding tasks, creates those tasks in ClickUp, then creates a Slack channel, sends a Slack welcome message and Gmail welcome email.

## How it works
1. Receives a new submission from an n8n Form that includes client details and a proposal/scoping PDF.
2. Extracts text from the uploaded PDF and trims it to a fixed length for downstream processing.
3. Creates a new client folder in Google Drive and builds a shareable Drive folder URL.
4. Creates a new folder and onboarding list in ClickUp for the client.
5. Sends the extracted proposal text to OpenAI and parses the structured response into 10–30 task items with titles, descriptions, and due dates.
6. Loops through the generated tasks and creates each one as a task in the ClickUp onboarding list.
7. Creates a new public Slack channel for the client, posts a welcome message with the Drive link, and sends a welcome email via Gmail to the client.

## Setup
1. Configure the n8n Form trigger basic auth and publish the form URL for submissions.
2. Add Google Drive credentials and set the parent folder ID where new client folders should be created.
3. Add ClickUp access token credentials and set the target Workspace/Space values so the workflow can create folders, lists, and tasks.
4. Add an OpenAI credential and ensure the selected chat model (gpt-5-mini) is available in your account.
5. Add Slack OAuth2 credentials with permission to create channels and post messages in your workspace.
6. Add Gmail credentials for sending email and confirm the sender account is allowed to email your clients.

## 🔗 Nodes Used

Slack, Google Drive, ClickUp, Gmail, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
