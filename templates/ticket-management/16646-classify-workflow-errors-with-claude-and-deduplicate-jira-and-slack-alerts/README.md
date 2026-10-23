# 🎫 Classify workflow errors with Claude and deduplicate Jira and Slack alerts

> ⚡ **29 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This global error-handling workflow classifies n8n execution failures with Anthropic Claude, deduplicates incidents in Jira using a hash label, and posts a detailed alert to Slack with links to the affected execution and Jira issue.

## How it works
1. Triggers whenever any n8n workflow execution or trigger fails (when set as the instance Error Workflow).
2. Normalizes the error event into a consistent payload that includes workflow details, error message, truncated stack trace, and an execution log URL.
3. Sends the normalized payload to Anthropic Claude to return a structured JSON classification (category, severity, root cause, recommended action, and transient flag).
4. Parses the classification, falls back to an UNKNOWN classification if the LLM response is invalid, and generates a deduplication hash used to group similar errors.
5. Searches Jira for an open issue in the configured project that already has the matching deduplication label.
6. If an open issue exists, appends a recurrence comment with the latest execution details; otherwise, creates a new Jira Bug with labels, priority, and a full incident description.
7. Builds a Slack Block Kit message summarizing the incident and sends it to the configured Slack channel with buttons to the n8n execution log and the Jira ticket.

## Setup
1. In n8n, set this workflow as the global Error Workflow (Settings → Error workflows) so it receives execution and trigger failures.
2. Add an Anthropic credential for the Claude chat model used by the workflow.
3. Add a Jira credential with permission to search issues, create bugs, and add issue comments in your target Jira project.
4. Add a Slack Bot token credential with the chat:write scope.
5. Set the environment variables N8N_BASE_URL, JIRA_PROJECT_KEY, JIRA_BASE_URL, and SLACK_CHANNEL_ID to match your instance and destinations.

## Requirements
- Anthropic API key (Claude Haiku)
- Jira Software Cloud account with API token
- Slack workspace with a bot token (chat:write scope) and an Incoming Webhook for the fallback URL

## Customization
- Swap Jira for Linear or GitHub Issues: replace the three Jira nodes with HTTP Request nodes pointing at the Linear or GitHub Issues API; keep the dedup hash logic in the Code node unchanged.
- Adjust error categories: edit the classification rules in the Claude prompt to add domain-specific categories (e.g. BUSINESS_RULE_VIOLATION for your own validation errors).
- Silence low-severity alerts: add an IF node after Parse Classification that filters severity = LOW to a no-op, preventing noise from dev/test workflows.
- Add PagerDuty escalation: insert an HTTP Request node after the Slack node that calls the PagerDuty Events API when severity = CRITICAL and is_transient = false.

## 🔗 Nodes Used

Slack, Jira Software, Basic LLM Chain, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
