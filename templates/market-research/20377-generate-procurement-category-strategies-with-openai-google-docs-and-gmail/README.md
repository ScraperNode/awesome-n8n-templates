# 📊 Generate procurement category strategies with OpenAI, Google Docs, and Gmail

> ⚡ **14 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow is triggered by a webhook, pulls category spend plus supplier and market data via HTTP requests, uses OpenAI to generate a procurement category strategy, writes it into a Google Docs document, and emails the Category Manager via Gmail.

## How it works
1. Receives a POST request on a webhook endpoint to start a category review.
2. Fetches category spend and related procurement data from an external API using HTTP requests.
3. Fetches supplier performance and market conditions from a second external API using HTTP requests.
4. Sends the combined data to OpenAI (gpt-4o-mini) to generate a structured JSON category strategy.
5. Parses the AI response into individual fields like opportunities, risks, action plan, timeline, and expected savings.
6. Creates a new Google Docs file named after the category and inserts the generated strategy content.
7. Sends an email via Gmail to the Category Manager with key highlights from the strategy.

## Setup
1. Add an OpenAI API credential and ensure the selected model (gpt-4o-mini) is available to your account.
2. Add Google Docs OAuth credentials and set the destination Google Drive folder ID for where strategy documents are created.
3. Add Gmail OAuth credentials and update the recipient email address and subject/message text as needed.
4. Replace the two dummyjson.com HTTP request URLs with your real category, supplier, and market data endpoints (and add any required authentication headers).
5. Copy the webhook URL and configure the source system to send a POST request to it when a category review is requested.

## 🔗 Nodes Used

HTTP Request, Webhook, Gmail, Google Docs, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
