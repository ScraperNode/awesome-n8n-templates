# 🔬 Save and categorize N26 transactions in Notion using Groq

> ⚡ **3 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow uses Enable Banking to sync N26 transactions into a Notion database, classifies each transaction with Groq (LangChain Text Classifier), and supports both an initial consent-based import via webhook and an automated weekly refresh using the saved connection state.

## How it works
1. Starts either when you manually generate an Enable Banking consent link for N26 or when Enable Banking redirects back to the webhook after approval, and it can also run on a weekly schedule.
2. For the initial connection, it creates a signed JWT, requests a read-only N26 authorization URL from Enable Banking, and you approve access in N26 to trigger the callback.
3. On the webhook callback, it exchanges the one-time code for an Enable Banking session, selects the enabled N26 account, and saves the account/session identifiers to an n8n Data Table for future scheduled syncs.
4. On scheduled runs, it loads the saved N26 account details from the n8n Data Table and creates a fresh JWT for the read-only transaction request.
5. It fetches the last 90 days of N26 transactions from Enable Banking, splits the response into individual transactions, and deduplicates items across workflow executions using the transaction ID.
6. It classifies each new transaction into one of your Notion categories using the Groq chat model and then creates a Notion database page with the mapped transaction fields and signed amount.
7. If the run came from the webhook callback, it returns a JSON success response to complete the Enable Banking redirect flow.

## Setup
1. Create an Enable Banking account, generate an RS256 JWT keypair, and add it to n8n as a JWT credential (using your PEM private key and the provided key ID).
2. Set the Enable Banking redirect URL to your n8n Webhook URL for the `N26-callback` path (and update the `redirect_url` value in the authorization request if your n8n domain differs).
3. Add a Notion connection in n8n and update the Notion data source (database) ID to the database where you want transactions written.
4. Add a Groq API credential in n8n for the transaction category classifier.
5. Ensure the n8n Data Table used to store the N26 connection state exists (or update the Data Table ID), and adjust the schedule trigger time/timezone if needed.

## 🔗 Nodes Used

HTTP Request, Webhook, Notion, Schedule Trigger, JWT, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
