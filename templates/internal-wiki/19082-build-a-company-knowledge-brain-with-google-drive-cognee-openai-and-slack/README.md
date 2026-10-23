# 📖 Build a company knowledge brain with Google Drive, Cognee, OpenAI, and Slack

> ⚡ **58 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Quick overview
This workflow ingests PDFs from Google Drive into a Cognee `company_brain` dataset and exposes the knowledge graph through a GPT-4o-mini agent that answers questions from the n8n chat UI or Slack, replies in Slack when applicable, and posts workflow errors to a Slack alert channel.

## How it works
1. Manually starts an ingestion run to download a specified PDF from Google Drive, extract its text, and add it to Cognee as the `company_brain` dataset.
2. Triggers when a message is received in the n8n chat UI or when a new message appears in a configured Slack channel.
3. Sends the user’s question to an agent powered by OpenAI (gpt-4o-mini) that uses a Cognee search tool to retrieve relevant context from the `company_brain` knowledge graph and maintains short-term conversation memory.
4. Routes the agent’s answer back to Slack as a channel reply when the question originated from Slack.
5. Returns the agent’s answer to the n8n chat UI by setting the `output` field when the question originated from the chat trigger.
6. On any workflow or node failure, formats the error details and posts a structured alert to a designated Slack error channel.

## Setup
1. Create and connect credentials for Cognee API (ingestion and search), Google Drive OAuth2 (PDF download), OpenAI API (gpt-4o-mini), and Slack OAuth2 (Slack trigger, replies, and error notifications).
2. Replace `YOUR_DRIVE_FILE_ID` with the Google Drive file ID of the PDF you want to ingest (and update it each time you add a new document).
3. Set `YOUR_SLACK_CHANNEL_ID` for the Slack message trigger and reply target, and set `YOUR_SLACK_ERROR_CHANNEL_ID` for error alerts.
4. Run the manual ingestion trigger once to populate Cognee before relying on the agent for grounded answers.
5. Activate the workflow so the n8n chat trigger and Slack trigger can start receiving questions.

## 🔗 Nodes Used

Slack, Google Drive, AI Agent, OpenAI Chat Model, Simple Memory, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
