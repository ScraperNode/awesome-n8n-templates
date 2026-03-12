# 📖 Control AI agent tool access with Port RBAC and Slack mentions

> ⚡ **39 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## RBAC for AI agents with n8n and Port

This workflow implements role-based access control for AI agent tools using Port as the single source of truth for permissions. Different users get access to different tools based on their roles, without needing a separate permission database.

For example, developers might have access to PagerDuty and AWS S3, while support staff only gets Wikipedia and a calculator. The workflow checks each user's permissions in Port before letting the agent use any tools.

For the full guide with blueprint setup and detailed configuration, see [RBAC for AI Agents with n8n and Port](https://docs.port.io/guides/all/implement-rbac-for-ai-agents-with-n8n-and-port/) in the Port documentation.

## How it works
The n8n workflow orchestrates the following steps:

- Slack trigger — Listens for @mentions and extracts the user ID from the message.
- Get user profile — Fetches the user's Slack profile to get their email address.
- Port authentication — Requests an access token from the Port API using client credentials.
- Permission lookup — Queries Port for the user entity (by email) and reads their allowed_tools array.
- Unknown user check — If the user doesn't exist in Port, sends an error message and stops.
- Permission filtering — The "Check permissions" node compares each connected tool against allowed_tools and replaces unauthorized ones with a stub that returns "You are not authorized to use this tool."
- AI agent — Runs with only permitted tools, using GPT-4 and chat memory.
- Response — Posts the agent output back to the Slack channel.

## Setup
- [ ] Connect your Slack account and set the channel ID in the trigger node
- [ ] Add your OpenAI API key
- [ ] Register for free on [Port.io](https://www.port.io)
- [ ] Create the rbacUser blueprint in Port (see [full guide](https://docs.port.io/guides/all/implement-rbac-for-ai-agents-with-n8n-and-port/) for blueprint setup)
- [ ] Add user entities using email as the identifier
- [ ] Replace YOUR_PORT_CLIENT_ID and YOUR_PORT_CLIENT_SECRET in the "Get Port access token" node
- [ ] Connect credentials for any tools you want to use (PagerDuty, AWS, etc.)
- [ ] Update the channel ID in the Slack nodes
- [ ] Invite the bot to your Slack channel
- [ ] You should be good to go!

## Prerequisites
- You have a Port account and have completed the onboarding process.
- You have a working n8n instance (self-hosted) with LangChain nodes available.
- Slack workspace with bot permissions to receive mentions and post messages.
- OpenAI API key for the LangChain agent.
- Port client ID and secret for API authentication.
- (Optional) PagerDuty, AWS, or other service credentials for tools you want to control.


⚠️ This template is intended for Self-Hosted instances only.

## 🔗 Nodes Used

HTTP Request, Slack, AI Agent, LangChain Code, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
