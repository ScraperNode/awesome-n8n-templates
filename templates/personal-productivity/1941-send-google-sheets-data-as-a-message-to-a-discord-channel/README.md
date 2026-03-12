# ⚡ Send Google Sheets data as a message to a Discord channel

> ⚡ **3,356 views** · ⚡ [Personal Productivity](../)

## Description

This workflow sends a message to a Discord channel when a new row is added or a row is updated in a Google Sheet. The message will send all data rows in the Google Sheet.

## Prerequisites
- Discord account and [Discord credentials](https://docs.n8n.io/integrations/builtin/credentials/discord/).
- Google account and [Google credentials](https://docs.n8n.io/integrations/builtin/credentials/google/).

## How it works
Using a code node, we can use the obtained Google Sheet data to create a custom message that will be sent to Discord. The message will be sent to the Discord channel specified in the Discord node.

### Setup
This workflow requires that you set up a Discord webhook and have an existing Google Sheet with data. See [how to set up a Discord webhook here](https://docs.n8n.io/integrations/builtin/credentials/discord/#creating-a-webhook-in-discord).

## 🔗 Nodes Used

Google Sheets, Discord

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
