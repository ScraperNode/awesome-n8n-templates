# 🤝 Expose CRM read/write tools to Claude and ChatGPT via a gated MCP server

> ⚡ **8 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow exposes an authenticated MCP server endpoint in n8n so MCP clients (like Claude Desktop or ChatGPT) can safely read and write business data using Google Sheets, Google Calendar, Gmail, and Slack tools.

## How it works
1. Exposes an MCP server endpoint protected by a header token and waits for tool calls from an MCP client.
2. Lets the client look up customer records and check order status, stock levels, and open invoices stored in Google Sheets.
3. Lets the client list upcoming meetings from Google Calendar within a provided time window and optional text query.
4. Lets the client append customer notes and follow-up tasks into dedicated Google Sheets tabs.
5. Lets the client draft customer emails in Gmail and post notifications to a Slack channel for the account team.

## Setup
1. Create a Header Auth credential with a long random token to secure the MCP server endpoint.
2. Connect Google Sheets OAuth2 and select the target spreadsheet and tabs (Customers, Orders, Inventory, Invoices, Notes, Tasks) used by the tools.
3. Connect Google Calendar OAuth2 and select the calendar to query for upcoming meetings.
4. Connect Gmail OAuth2 for creating email drafts and Slack OAuth2 for posting to your chosen channel.
5. Activate the workflow, copy the MCP server URL from the trigger, and configure it in your MCP client along with the same header token.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Execute Workflow Trigger, Call n8n Workflow Tool, MCP Server Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
