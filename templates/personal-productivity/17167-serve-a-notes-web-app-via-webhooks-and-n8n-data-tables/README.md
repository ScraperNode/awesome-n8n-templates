# ⚡ Serve a notes web app via webhooks and n8n Data Tables

> ⚡ **13 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow hosts a simple notes web app in n8n, serving a static HTML UI via a webhook and providing CRUD API endpoints backed by an n8n Data Table.
No separate website, database, or hosting. Everything — the UI, logic and data — runs in the same workflow.

## How it works
1. A manual run creates the "n8n-notes" Data Table (if it does not already exist) with columns for note title, body, color, and position.
2. A GET request to the /notes webhook returns a static HTML page that acts as the notes UI.
3. The UI calls the GET /notes-list webhook to fetch all notes from the n8n Data Table and display them in the browser.
4. When a note is added from the UI, the POST /notes-create webhook inserts a new row into the Data Table and returns the result.
5. When a note is edited or reordered, the PUT /notes-update webhook updates the matching Data Table row by id and returns the updated record.
6. When a note is deleted, the DELETE /notes-delete webhook removes the matching Data Table row by id and returns the deletion result.

## Setup
1. Run the manual trigger once to create the "n8n-notes" Data Table with the required columns.
2. Activate the workflow and copy the production URL for the GET /notes webhook, then open it in a browser to load the UI.
3. If you serve the UI from a different origin, ensure your environment allows cross-origin requests (the API webhooks enable CORS with allowedOrigins set to *).

## 🔗 Nodes Used

Webhook, OpenAI, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
