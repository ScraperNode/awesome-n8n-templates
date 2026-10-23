# 🔬 Generate RFP response documents with OpenAI Assistants, Google Docs, Gmail, and Slack

> ⚡ **11 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow accepts an RFP PDF via webhook, extracts supplier questions with OpenAI, answers each one using an OpenAI Assistant, writes the full Q&A into a Google Doc, and notifies the requester via Gmail and the team via Slack.

## How it works
1. Receives an HTTP POST webhook containing the RFP PDF plus a title and reply-to email address.
2. Extracts the raw text from the uploaded PDF and prepares a response document title, filename, and recipient email.
3. Creates a new Google Docs file in a specified Google Drive folder and inserts a metadata header block (title, timestamp, requester, and execution link).
4. Uses an OpenAI chat model to extract all supplier-directed questions from the RFP text and parses them into a structured list.
5. Iterates through each extracted question and sends it to a predefined OpenAI Assistant to generate an answer.
6. Appends each numbered question and its answer to the Google Doc, then continues until all questions are processed.
7. Emails the requester via Gmail and posts a completion message to a Slack channel when the document is finished.

## Setup
1. Configure the webhook URL from the trigger in your RFP intake system and ensure the request includes the PDF file, a title, and a reply_to email value.
2. Add Google Docs/Google Drive credentials and set the destination folder ID for the generated response document.
3. Add OpenAI credentials and select both an OpenAI chat model for question extraction and your OpenAI Assistant ID for answering.
4. Add Gmail credentials and confirm the workflow sends to the reply_to address from the webhook payload.
5. Add Slack credentials and set the target channel name/ID for the completion notification.

## 🔗 Nodes Used

Slack, Webhook, Gmail, Google Docs, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
