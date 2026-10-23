# 🔬 Convert URLs from Google Sheets to Drive markdown files with Gaffa

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This chat workflow takes a URL, uses Gaffa to render the web page in a browser and convert it to clean markdown, then returns the markdown directly in the n8n chat response.

## How it works
1. Receives a chat message containing a URL via the n8n Chat trigger.
2. Uses Gaffa to load the URL, render the page, and convert its content to markdown.
3. Returns the generated markdown back to the chat as the workflow output.

## Setup
1. Install the Gaffa community node package (@gaffa-dev/n8n-nodes-gaffa).
2. Create a Gaffa API key at gaffa.dev and add it as a Gaffa API credential in n8n.
3. Activate the workflow and use the chat interface to send a URL to the trigger.

## 🔗 Nodes Used

Google Sheets, Google Drive, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
