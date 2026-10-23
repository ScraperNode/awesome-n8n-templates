# ⚒️ Build and deploy tested workflows from chat with Claude Sonnet

> ⚡ **56 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
Describe an automation in one sentence in chat. Claude turns it into an n8n workflow. The workflow is checked against n8n's own node catalog, tested or reviewed, and saved to your instance. Monitors are tested against a built-in mock before they go live.

## How it works
1. You describe what you want in the chat, for example "Alert me when GitHub has an incident". You can add an endpoint URL and an alert webhook, Slack channel or email address.
2. Claude turns the request into a spec. A health check on a service becomes a monitor. Any other automation (forms, digests, AI steps, syncs between apps) becomes a blueprint. If you give an endpoint, it is called once first, so the checks fit what it really returns.
3. Claude builds the workflow JSON. For blueprints, the prompt includes the exact node types, versions and fields from n8n's official node catalog, pinned to one package version.
4. The draft is validated: node types, fields for each version, required values, wiring, expression syntax and node references. Safe mistakes are repaired automatically, and anything else goes back to Claude with clear feedback. There are up to 3 build rounds by default.
5. Monitors run through hidden test cases against a built-in mock (errors, timeouts, DNS failures, failed alerts and each spec check), plus one check of the real endpoint. Blueprints get a second Claude review against your request, with one repair round.
6. The workflow is created in your instance through the n8n API. A monitor with an alert webhook is activated. Blueprints are saved inactive, with a Setup note that lists the accounts to connect and the values to fill in.
7. The chat replies with the result, the test results or checks, a link to the workflow and the next steps.

## Setup
1. Connect Claude to the three model nodes: Anthropic Model (Spec), Anthropic Model (Build) and Anthropic Model (Review). Use your Anthropic API key, or the built-in AI credits on n8n Cloud.
2. Create an n8n API key (Settings > n8n API) and add it as a credential to Create Workflow and Activate Workflow. Base URL: your instance URL + /api/v1.
3. Open the Settings node. Leave PUBLIC_URL empty to detect your instance URL automatically, or set it when your instance runs behind a proxy. Adjust the daily build limits if you need to.
4. Save and publish the workflow. The sections call the published version, so publish again after every edit.
5. Open the Chat Trigger, copy the chat URL and try it: "Alert me when GitHub has any incident. Send alerts to https://webhook.site/your-id". To limit access, set the Chat Trigger's authentication to Basic Auth.

## Requirements
- An n8n instance (Cloud or self-hosted) with public webhook URLs
- An n8n API key
- An Anthropic API key, or AI credits on n8n Cloud
- Outbound access to cdn.jsdelivr.net, to load the node catalog and output schemas

## Customization
- MAX_ATTEMPTS and TIME_BUDGET_MINUTES in Settings: the number of build rounds and the time before the loop stops.
- DAILY_RUNS_PER_CHAT and DAILY_RUNS_TOTAL: limit usage when the chat is public.
- CORE_NODES_VERSION and AI_NODES_VERSION: pin the node catalog to the n8n version you run. Change both together.
- Swap the Claude model in the three model nodes, for example a smaller model for lower cost.

## Additional info
Safety by design: built workflows never contain credentials. Code, command, file and self-API nodes are blocked. Monitors cannot target private or local network addresses. Blueprints are always saved inactive, for you to review before you activate them. If no draft passes the checks, the last draft is still saved inactive, with its open problems listed in its Setup note.

## 🔗 Nodes Used

HTTP Request, Webhook, Execute Sub-workflow, n8n, Execute Workflow Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
