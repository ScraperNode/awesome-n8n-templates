# 🎫 Route multichannel support tickets with OpenAI, HubSpot, Jira, and Slack

> ⚡ **15 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
Analyze incoming support requests, classify intent and priority with AI, create Jira tickets, assign the correct team, send Slack notifications, and track SLA deadlines. Supports Gmail, WhatsApp, forms, HubSpot CRM, OpenAI, Jira, and Slack integrations.

## How it works
1. Triggers when a new Gmail email arrives, a WhatsApp message is received via a WAHA webhook, or a user submits the n8n contact form.
2. Normalizes each inbound request into a consistent ticket payload and captures any attachments (including downloading WhatsApp media when present).
3. Searches HubSpot CRM for a matching contact by email and/or phone and merges any found customer context into the ticket.
4. Sends the ticket text to OpenAI to classify category, intent, priority, sentiment, and generate a summary and suggested reply.
5. Calculates the SLA due time and maps the ticket category to the appropriate Jira assignee/component configuration.
6. Checks Jira Cloud for an existing issue labeled with the computed dedupe key and either posts a duplicate notice to Slack or creates a new Jira issue.
7. Stamps SLA and AI metadata onto the Jira issue, uploads any attachments, posts a new-ticket notification to Slack, and returns a completion message for form submissions.
8. Every 10 minutes, searches Jira for unresolved tickets past their SLA due time, posts breach alerts to Slack (and optionally a manager DM), escalates Jira priority when configured, and marks tickets as notified.

## Setup
1. Connect credentials for Gmail, Slack, OpenAI, Jira Cloud (HTTP Basic/API token), HubSpot (private app token via header auth), and WAHA (X-Api-Key header auth) and select them on the relevant nodes.
2. Configure the WAHA inbound webhook URL in your WAHA instance and publish the n8n form (or embed it) for web submissions.
3. Update the hardcoded configuration in the workflow (Jira base URL and project key, assignee account IDs, Slack channel names, manager Slack user ID, and Jira custom field IDs for SLA/AI/dedupe/channel).
4. Ensure your Jira project has the referenced custom fields and that your priority names match the workflow mapping (Highest/High/Medium/Low).
5. Verify Slack channels like #support-triage, #support-sla, and #support-ops-errors exist and adjust them in the config if needed.

## Requirements
- Gmail
- HubSpot or Any CRM Platform
- Jira Cloud
- Slack
- OpenAI
- WAHA or WhatsApp API

## Customization
- Add additional support channels
- Connect a different CRM
- Customize ticket categories
- Modify SLA policies
- Add customer tier-based prioritization
- Integrate with internal knowledge bases
- Add automated customer responses
- Add approval workflows before escalation

## Additional info
Connect with us:
Website: https://www.intuz.com/n8n-workflow-automation-templates/
Email: getstarted@intuz.com
LinkedIn: https://www.linkedin.com/company/intuz

## For Custom Workflow Automation
Get Started: https://n8n.partnerlinks.io/intuz

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Gmail Trigger, Schedule Trigger, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
