# 💬 Draft partner intro emails from Crossbeam deal signals with Claude and Slack approval

> ⚡ **11 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow pulls Crossbeam partner deal signals on a schedule or via webhook, matches them to relevant Salesforce accounts, uses Claude with the Crossbeam MCP to draft partner intro request emails, and routes them through Slack for approval before drafting or sending via Gmail and optionally logging a Salesforce task.

## How it works
1. Triggers every weekday at 08:45 or receives a Crossbeam webhook event and verifies the HMAC signature before proceeding.
2. Fetches partner deal signals from the Crossbeam Signals API (when scheduled), normalizes key fields, and filters to in-scope event types, partners, and recent signals tied to a Salesforce Account ID.
3. Removes duplicate events and skips signals that already have an outcome recorded in an n8n Data Table.
4. Queries Salesforce in batches to retrieve matching Account context (including latest closed-lost opportunity) and joins that data back to the Crossbeam signals.
5. Uses Anthropic Claude (via LangChain) plus Crossbeam MCP tools to find the partner’s account owner and shared contacts, then generates a short Slack brief and a draft intro email.
6. Posts the brief to Slack and opens an interactive approval form in a thread where a reviewer can approve, edit, or skip within a configured wait time.
7. If approved and not in dry-run mode, sends the email or saves a Gmail draft (based on configuration) and optionally creates a Salesforce Task, then records the final status in the Data Table and replies in the Slack thread with the outcome.

## Setup
1. Create and connect credentials for Crossbeam REST API (OAuth2), Crossbeam MCP (OAuth2), Salesforce (OAuth2), Anthropic (API key), Slack (OAuth2 with Interactivity enabled), and Gmail (OAuth2).
2. In the “Configure me” step, fill in your Crossbeam organization UUID, Salesforce base URL, company name, Slack channel ID, and choose settings like event types, lookback windows, confidence threshold, send mode, and dry_run.
3. Create an n8n Data Table with columns like event_key, status, partner_name, account_name, sfdc_account_id, partner_owner_email, and decided_at, then select it in the Data Table steps used to skip handled events and record outcomes.
4. Invite your Slack app to the target channel and ensure “send and wait” forms work in your workspace.
5. If using the webhook path, copy the n8n webhook URL from the Crossbeam webhook trigger and register it in Crossbeam, then set the webhook signing secret in “Configure me”.

## Requirements
- Crossbeam Supernode plan or above for the Signals API (webhooks require Enterprise). API reads may count toward your Record Export limits.
- Crossbeam MCP access (credit metered, about 3 calls per drafted intro request)
- Salesforce with read access to Account and Opportunity, and permission to create Tasks
- Anthropic API key (Claude Sonnet)
- Slack app with chat:write and interactivity turned on for the approval form
- Gmail account that sends or drafts the intro emails

## Customization
- Narrow the scope in Configure me with event_types, partner_filter, signal_lookback_days, closed_lost_lookback_months and loss_reason_field.
- Set match_mode to owned_accounts to cover every owned account, not only closed-lost ones.
- Control volume and quality with max_items_per_run and min_confidence (low, medium or high).
- Change the tone, length or language of the email in the system message of the Claude agent.
- Swap the Gmail nodes for Outlook, or post the brief to Microsoft Teams and keep the approval step in Slack.

## Additional info
Safe by default: dry_run is true on import, so the first runs only post to Slack. max_items_per_run (default 5) caps Slack posts and Crossbeam MCP credits per run, and the AI agent is limited to 3 read-only Crossbeam calls per account.

Data handling: partner contacts come from what the partner shares through Crossbeam. Check your data-sharing terms with each partner before adding them to outreach. Claude only receives the account, deal and partner context needed to draft the email.

Webhook path: the workflow verifies the HMAC signature and timestamp of each Crossbeam webhook and rejects unsigned or stale requests with a 401.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Salesforce, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
