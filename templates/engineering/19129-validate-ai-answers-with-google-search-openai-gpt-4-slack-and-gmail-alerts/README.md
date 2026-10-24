# ⚒️ Validate AI answers with Google search, OpenAI GPT-4, Slack and Gmail alerts

> ⚡ **1 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow receives an AI-generated Q&A via webhook, searches the web for supporting sources, and uses OpenAI to score and classify the answer as SAFE, SUSPICIOUS, or HALLUCINATED, then alerts via Slack or Gmail and returns a response to the webhook caller.

## How it works
1. Receives a POST webhook request containing a `question` and `answer`.
2. Sends the question to a Google Search API endpoint and retrieves the top results.
3. Formats the top search snippets into a compact source list for validation.
4. Sends the question, answer, and sources to OpenAI (GPT-4 Turbo) to return a JSON verdict with a confidence score, reasoning, and classification.
5. Routes the result by classification, returning the result to the webhook caller for SAFE responses.
6. Sends a Slack message to a chosen channel when the response is classified as SUSPICIOUS.
7. Sends a critical Gmail alert email when the response is classified as HALLUCINATED.

## Setup
1. Configure the incoming system to POST `question` and `answer` to the workflow’s webhook URL at `/hallucination-check`.
2. Add OpenAI credentials in n8n and ensure the selected model (GPT-4 Turbo) is available for your account.
3. Replace the placeholder Search API URL and `X-API-KEY` header in the HTTP request node with your Google/Serp API provider endpoint and key.
4. Add Slack credentials, select the target channel, and confirm the workflow can post messages.
5. Add Gmail credentials and replace `your_email_here` with the recipient address for critical alerts.

## Additional info
## Need Help?

If you need help improving this workflow, scaling it or adding advanced features like multi-model validation or AI monitoring dashboards, our **n8n developers at WeblineIndia** are happy to help and enhance it into a production-grade AI safety system.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Gmail, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
