# 🔒 Analyze vendor security risk from Jira tickets using Grok, Claude and Slack

> ⚡ **88 views** · 🔒 [SecOps & Security Automation](../)

## Description

## How it works

When a new vendor ticket is created in Jira, this workflow automatically performs a comprehensive security due-diligence investigation and posts the findings back as a Jira comment plus a Slack notification.

1. A Jira webhook fires when an issue is created. An AI agent (Grok) extracts the vendor company name, URL, and product from the issue fields.
2. A Seed Discovery agent (Claude + Perplexity) finds the vendor's official domains, trust center, privacy policy, and status page URLs — handling domain aliases automatically.
3. Seven specialized research agents run **in parallel**, each with a focused persona: Compliance, Data Handling, Privacy & Legal, Security Controls, Availability, Pricing, and Company Intel. All use Perplexity sonar-pro-search for live web research.
4. A Sanitizer code node strips unpredictable LLM formatting from all 7 outputs.
5. A Lead Security Analyst agent (Grok) synthesizes all findings into a risk-scored report, generating Jira Wiki Markup and Slack Block Kit JSON simultaneously.
6. The report is posted as a comment on the original Jira ticket, and a rich Slack notification with a "View Report in Jira" button is sent to your security channel.

## Set up steps

- **OpenRouter** — Create an OpenRouter account and add an API credential in n8n. The workflow uses three models: `x-ai/grok-4-fast`, `anthropic/claude-sonnet-4.5`, and `perplexity/sonar-pro-search` (~10 min)
- **Jira** — Add a Jira credential (API token) and configure a Jira webhook automation to POST to this workflow's webhook URL when an issue is created in your vendor-review project (~10 min)
- **Slack** — Add a Slack credential (OAuth) and set your target channel in the "Send a message" node (~5 min)
- **Jira URL** — In the "AI Agent" node, replace `YOUR-JIRA-DOMAIN` in the Jira Browser URL with your actual Atlassian domain (~1 min)

## 🔗 Nodes Used

Slack, Webhook, Jira Software, AI Agent, OpenRouter Chat Model, AI Agent Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
