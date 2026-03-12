# 🎯 Prioritize Zendesk tickets with GPT-4 analysis and Slack alerts

> ⚡ **504 views** · 🎯 [AI Summarization & Classification](../)

## Description

## Who's it for

Customer support teams, SaaS companies, and service businesses that need to quickly identify and respond to urgent customer issues. Perfect for organizations handling high ticket volumes where manual prioritization creates delays and missed critical issues.

## How it works

This workflow automatically analyzes incoming Zendesk tickets using OpenAI's GPT-4 to determine urgency levels and routes high-priority issues to your team via Slack notifications.

The system monitors new Zendesk tickets via webhook, extracts key information (subject, description, customer details), and sends this data to OpenAI for intelligent analysis. The AI considers factors like emotional language, business impact keywords, technical severity indicators, and customer context to assign an urgency score from 1-5.

Based on the AI analysis, the workflow automatically updates the ticket priority in Zendesk, adds detailed reasoning as a private note, and sends formatted Slack notifications for high-priority issues (score 4+). The Slack alert includes ticket details, urgency reasoning, key indicators found, and direct links to the ticket for immediate action.

## How to set up

**Prerequisites:**
- Zendesk account with API access
- OpenAI API key (GPT-4 access recommended)
- Slack workspace with webhook permissions
- n8n instance (cloud or self-hosted)

**Setup steps:**

1. **Configure credentials** in n8n:
   - Add OpenAI API credential with your API key
   - Add Zendesk API credential (email + API token)
   - Add Slack API credential (bot token with chat:write permissions)

2. **Update Configuration Variables node:**
   - Set your Zendesk subdomain (e.g., "yourcompany" for yourcompany.zendesk.com)
   - Configure Slack channel for urgent alerts (e.g., "#support-urgent")
   - Adjust urgency threshold (1-5, default is 4)
   - Set default assignee email for fallback scenarios

3. **Set up Zendesk webhook:**
   - Copy the webhook URL from the trigger node
   - In Zendesk Admin, go to Settings &gt; Extensions &gt; Add target
   - Create HTTP target with the copied URL and POST method
   - Create a trigger for "Ticket is created" that sends to this target

4. **Test the workflow:**
   - Create a test ticket with urgent language ("system is down", "critical issue")
   - Verify the AI analysis runs and priority is updated
   - Check that Slack notifications appear for high-priority tickets
   - Confirm ticket updates include AI reasoning in private notes

## Requirements

- **Zendesk** account with API access and admin permissions for webhook setup
- **OpenAI API key** with GPT-4 access (estimated cost: $0.01-0.05 per ticket analysis)
- **Slack workspace** with bot creation permissions and access to notification channels
- **n8n instance** (cloud subscription or self-hosted installation)

## How to customize the workflow

**Adjust AI analysis parameters:**
- Modify the system prompt in the OpenAI node to focus on industry-specific urgency indicators
- Add custom keywords or phrases relevant to your business in the prompt
- Adjust the temperature setting (0.1-0.5) for more consistent vs creative analysis

**Configure priority mapping:**
- Edit the Code node to change how urgency scores map to Zendesk priorities
- Add custom business logic based on customer tiers or product types
- Implement time-based urgency (e.g., higher priority during business hours)

**Enhance Slack notifications:**
- Customize the Slack message blocks with additional fields (product, customer tier, SLA deadline)
- Add action buttons for common responses ("Acknowledge", "Escalate", "Assign to me")
- Route different urgency levels to different Slack channels

**Extend integrations:**
- Add email notifications using the Email node for critical issues
- Integrate with PagerDuty or Opsgenie for after-hours escalation
- Connect to your CRM to enrich customer context before AI analysis
- Add Teams or Discord notifications as alternatives to Slack

**Advanced customizations:**
- Implement machine learning feedback loops by tracking resolution times vs AI scores
- Add sentiment analysis as a separate factor in priority calculation
- Create daily/weekly summary reports of AI analysis accuracy
- Build approval workflows for certain priority changes before auto-updating

## 🔗 Nodes Used

Slack, Webhook, Zendesk, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
