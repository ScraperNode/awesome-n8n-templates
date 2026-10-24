# 📱 Send SMS campaigns from Google Sheets and track delivery with SMS Vert Pro MCP

> ⚡ **1 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick Overview
This workflow manually sends an SMS via the SMS Vert Pro MCP server, waits 30 seconds, and then retrieves a delivery report for the SMS campaign using the returned campaign ID.

## How it works
1. Runs when you start the workflow manually.
2. Sends an SMS through the SMS Vert Pro MCP server using the `send_sms` tool with the configured recipient, message, and sender name.
3. Waits 30 seconds to allow the SMS status to update.
4. Requests the campaign delivery report from SMS Vert Pro using the `get_delivery_report` tool and the campaign ID from the send response.

## Setup
1. Create an n8n Bearer Auth credential using your SMS Vert Pro API V2 token and select it in both SMS Vert Pro MCP client steps.
2. Update the recipient phone number (international format without +), message text, and sender name (11 characters max) in the send request payload.
3. Run the workflow manually, or replace the manual trigger with your preferred trigger and map the phone number/message fields accordingly.

## 🔗 Nodes Used

Google Sheets, Filter, MCP Client

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
