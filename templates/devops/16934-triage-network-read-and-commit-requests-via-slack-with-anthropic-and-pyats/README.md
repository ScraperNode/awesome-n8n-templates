# ⚙️ Triage network read and commit requests via Slack with Anthropic and pyATS

> ⚡ **46 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
AI-powered Slack ChatOps for data networks housekeeping. Uses AI agents, a ledger DB and Cisco pyATS MCP server to perform on-demand device checks and validations, generate config change proposals, require human approval before committing, and tracking authored changes. Full repository and more info here ➡️ https://cs.co/9004BEMGZm

## How it works
1. A network engineer mentions the Slack bot in a channel or thread. The workflow acknowledges the request and captures the full message
2. The request is sent to a Planning Agent connected to pyATS through read-only MCP tools. The agent determines whether the user wants operational data or a configuration change, gathers live device evidence if needed, and evaluates whether the request is safe.
3. If the request is operational only, or if the proposed change is unsafe, the workflow replies in the same Slack thread with a clear technical summary, including the relevant device findings or the reason why no change will be made.
4. If the request is a safe configuration change, the workflow creates one approval card per target device. Each card shows the proposed change, the pre-check evidence collected from the device, and the safety rationale so the engineer can review exactly what will happen. Also a record is done on a ledger database with a config ID and the owner of the change.
5. When an engineer clicks a button on a card, the workflow receives the approval or cancellation through a webhook. It then updates the thread accordingly, either closing the request or marking it as approved and ready for execution. The intent is validated against the ledger database for card expiration, and a different agent checks config integrity.
6. For approved changes, a Commit-And-Verify Agent uses pyATS MCP full-access tools to apply the configuration, run post-change validation checks, and send a verification summary back to Slack so the engineer can confirm the final device state. The ledger database record is updated as Applied.

## Setup
1. Create a Slack app and connect it to n8n using Slack Trigger and Slack API credentials. Enable app_mention events so engineers can call the workflow from Slack, and configure the interactive message request URL to point to the When a Card is Clicked webhook.
2. Add your LLM API credential in n8n and select the model used by both agents. By default, both are plugged to Anthropic nodes but you can switch to your favorite provider
3. Deploy a pyATS MCP server that n8n can reach over the network, then update the MCP node endpoints in the workflow. Make sure the server exposes the read-only tools needed for operational checks, and the write plus verification tools needed if you want to allow configuration changes.
4. Configure your pyATS testbed and device inventory on the MCP side so hostnames, credentials, platforms, and management addresses are correctly defined.
5. Review and customize the Slack block content, channels, and approval button behavior if you need different guardrails, formatting, or routing.

## Requirements
- Check the full documentation in this public repository ➡️ https://cs.co/9004BEMGZm

## 🔗 Nodes Used

HTTP Request, Postgres, Slack, Webhook, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
