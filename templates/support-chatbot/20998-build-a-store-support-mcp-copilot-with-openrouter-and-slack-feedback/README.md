# 💬 Build a store support MCP copilot with OpenRouter and Slack feedback

> ⚡ **1 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow creates a store-support MCP server backed by n8n Data Tables and a chat-based AI copilot using OpenRouter, letting support staff look up orders and create returns while capturing tool-gap feedback, storing it, and optionally posting it to Slack.

## How it works
1. An MCP Server Trigger exposes five tools on a bearer-protected endpoint: find_orders, get_order, get_returns, create_return, and send_feedback, which agents call to report a tool gap.
2. For order and return lookups, reads order and return records from n8n Data Tables based on the provided customer email or order number.
3. When create_return is called, validates the requested order line and enforces return rules (delivered status, 30-day window from delivery, not final sale, and remaining returnable quantity) before calculating the refund.
4. If eligible, generates an RMA-style return ID and stores the return request in the returns Data Table, otherwise returns a structured refusal with a policy code and detail.
5. When send_feedback is called, validates required fields, rate-limits to 30 reports per hour, scrubs secrets and email addresses, and stores the feedback in a feedback Data Table.
6. Posts the feedback to a configured Slack channel (and saves the Slack timestamp back to the feedback record) without failing the tool if Slack is unavailable.
7. Separately, a chat trigger runs an AI Agent (OpenRouter model) that uses the MCP endpoint as its only tool to answer support questions and files feedback when tool gaps block resolution.

## Setup
1. Run the manual “Set Up Demo Data” trigger once to create the Store Support Orders, Store Support Returns, and Store Support Feedback Data Tables and seed the sample orders.
2. Create an HTTP Bearer Auth credential and select it for both the MCP Server Trigger and the MCP Client, then update the MCP client endpoint URL if your n8n base URL is not http://localhost:5678.
3. Add an OpenRouter API credential and select it for the copilot model used by the AI Agent.
4. (Optional) Add a Slack OAuth2 credential and set the target channel in the Slack node to receive feedback reports.
5. Publish the workflow, copy the MCP endpoint URL for your MCP client if needed, and use the built-in chat to test order lookups, returns, and feedback logging.

## Customization
- Replace the Data Tables with your own order and returns system or API, and keep send_feedback as is.
- Swap the model in Copilot Model: each report records the model that filed it, so you can compare models.
- Close the loop: build the tool your reports ask for most (in testing, finding orders by status) and watch those reports stop.

## 🔗 Nodes Used

Slack, Execute Workflow Trigger, AI Agent, Simple Memory, Call n8n Workflow Tool, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
